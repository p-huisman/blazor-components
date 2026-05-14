using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components.Web;
using Pggm.Components.Base;
using System.Linq.Expressions;
using System.Reflection;
using System.Diagnostics;

namespace Pggm.Components.Components.PggmDataGrid
{
    [CascadingTypeParameter(nameof(TGridItem))]
    public partial class PggmDataGrid<TGridItem> : PggmComponentBase, IAsyncDisposable
    {
        private readonly Pggm.Components.Utilities.FocusManager _focusManager = new();
        /// <summary>
        /// Raised when the selected items change.
        /// </summary>
        public event Action? SelectedItemsChanged;

        /// <summary>
        /// Optional callback invoked when selected items change. Use this to notify parent components.
        /// </summary>
        [Parameter]
        public EventCallback SelectedItemsChangedCallback { get; set; }
        public override string TagName => "pggm-data-grid";
        private readonly GridContext<TGridItem> _defaultInternalContext = new();

        /// <summary>
        /// Optional externally-provided grid context. When set this instance will be
        /// cascaded to child components instead of the grid's internal context.
        /// Prefer the clearer `GridContext<TGridItem>` type for public usage.
        /// </summary>
        [Parameter]
        public GridContext<TGridItem>? GridContext { get; set; }

        internal GridContext<TGridItem> InternalContext => GridContext ?? _defaultInternalContext;

        /// <summary>
        /// Gets the currently selected items in the grid.
        /// </summary>
        public IReadOnlyCollection<TGridItem> SelectedItems => InternalContext.SelectedItems;

        [Parameter]
        public bool SingleSelect { get; set; } = false;

        /// <summary>
        /// Selection mode for the grid. Default is Multiple to preserve existing behavior.
        /// </summary>
        public enum SelectionMode
        {
            None,
            Single,
            Multiple,
            Range
        }

        [Parameter]
        public SelectionMode GridSelectionMode { get; set; } = SelectionMode.Multiple;

        /// <summary>
        /// Optional ARIA label for the grid container.
        /// </summary>
        [Parameter]
        public string? AriaLabel { get; set; }

        /// <summary>
        /// Raised when rows are selected. Provides the selected items.
        /// </summary>
        [Parameter]
        public EventCallback<IEnumerable<TGridItem>> OnRowSelected { get; set; }

        /// <summary>
        /// Raised when a sort change occurs. (Column title, direction)
        /// </summary>
        [Parameter]
        public EventCallback<(string Column, string Direction)> OnSortChanged { get; set; }

        /// <summary>
        /// Exposes cell keydown events for consumers/tests.
        /// </summary>
        [Parameter]
        public EventCallback<(int Row, int Col, KeyboardEventArgs Args)> OnCellKeyDown { get; set; }

        /// <summary>
        /// Read-only view of the registered columns in display order.
        /// </summary>
        public IReadOnlyList<ColumnBase<TGridItem>> Columns => InternalContext.Columns.OrderBy(c => c.Index).ToList().AsReadOnly();

        private IEnumerable<TGridItem>? _itemsToRender;
        private bool _columnsRendered;
        private readonly Action _selectionChangedHandler;
        private readonly Func<Task> _paginationCurrentPageHandler;
        private bool _selectionHandlerSubscribed;
        private PaginationState? _subscribedPagination;
        private ColumnBase<TGridItem>? _currentSortColumn;
        private bool _currentSortAscending = true;
        private bool _defaultSortApplied;
        private int _totalItemCount;
        private System.Threading.CancellationTokenSource? _loadCts;
        private bool _isLoading;
        private bool _hasLoadedData = false;
        private bool _isFirstVirtualizeProviderCall = true;
        private TableVirtualize<TGridItem>? _tableVirtualizeRef = null;
        private ElementReference _rootElement = default;
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Minor", "S2325", Justification = "Referenced by Razor markup; must be instance member.")]
        private RenderFragment _renderEmptyContent => RenderEmptyContent;

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Minor", "S2325", Justification = "Referenced by Razor markup; must be instance member.")]
        private RenderFragment _renderLoadingContent => RenderLoadingContent;
        private readonly string _gridId = $"pggm-grid-{Guid.NewGuid():N}";
        private DotNetObjectReference<PggmDataGrid<TGridItem>>? _autoItemsDotNetRef;
        private bool _autoItemsPerPageInitialized;
        private bool _hasSetInitialFocus = false;
        private bool _keyboardNavEnabled = false;
        private readonly Dictionary<int, TGridItem> _virtualizedItemsByRow = new();
        private bool _filterDialogOpen;
        private ColumnBase<TGridItem>? _activeFilterColumn;


        /// <summary>
        /// Optionally defines a selector that returns a stable identifier for a given item.
        /// Mirrors <c>ItemKey</c> in FluentDataGrid.
        /// When provided:
        /// <list type="bullet">
        ///   <item>Selection comparisons use the key instead of object reference equality,
        ///         so selection survives item-instance replacements (e.g. after re-querying).</item>
        ///   <item><see cref="SelectedIds"/> returns the selected keys without manual projection.</item>
        /// </list>
        /// If not set, item instances themselves are used as identity (existing behaviour).
        /// </summary>
        [Parameter]
        public Func<TGridItem, object> ItemId { get; set; } = x => x!;

        /// <summary>
        /// Returns the keys of the currently selected items as projected by <see cref="ItemId"/>.
        /// When <see cref="ItemId"/> is the default identity selector the values equal the items themselves.
        /// </summary>
        public IEnumerable<object> SelectedIds =>
            InternalContext.SelectedItems.Select(item => ItemId(item));

        [Parameter]
        public IQueryable<TGridItem>? Items { get; set; }

        [Parameter]
        public GridItemsProvider<TGridItem>? ItemsProvider { get; set; }

        // ChildContent is inherited from PggmComponentBase; do not redeclare.

        [Parameter]
        public Func<GridItemsProviderRequest<TGridItem>, Task>? RefreshItems { get; set; }

        [Parameter]
        public PaginationState? Pagination { get; set; }

        [Parameter]
        public bool EnableVirtualization { get; set; }

        /// <summary>
        /// Height of the grid when virtualization is enabled (e.g. "400px", "60vh").
        /// The grid becomes its own scroll container so the sticky header works correctly.
        /// Defaults to "400px" when not specified and EnableVirtualization is true.
        /// </summary>
        [Parameter]
        public string? Height { get; set; }

        [Parameter]
        public int VirtualizeItemSize { get; set; } = 40;

        [Parameter]
        public int VirtualizeOverscanCount { get; set; } = 3;

        /// <summary>
        /// Gets or sets the content to render when there are no items.
        /// If not set, a default "No data to show!" message is displayed.
        /// </summary>
        [Parameter]
        public RenderFragment? EmptyContent { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether the grid is loading data.
        /// If not set and an <see cref="ItemsProvider"/> is present, loading state is tracked automatically.
        /// </summary>
        [Parameter]
        public bool? Loading { get; set; }

        /// <summary>
        /// Gets or sets the content to render when <see cref="Loading"/> is true or the grid is fetching data.
        /// A default loading indicator is used if not specified.
        /// </summary>
        [Parameter]
        public RenderFragment? LoadingContent { get; set; }

        /// <summary>
        /// Optional callback invoked when a hierarchical row is expanded or collapsed.
        /// The item whose collapsed state changed is passed as the argument.
        /// </summary>
        [Parameter]
        public EventCallback<TGridItem> OnToggle { get; set; }

        /// <summary>
        /// Optional callback invoked whenever a data row is clicked, regardless of selection state.
        /// Use this for navigation or detail-panel patterns that should not depend on selection.
        /// </summary>
        [Parameter]
        public EventCallback<TGridItem> OnRowClick { get; set; }

        /// <summary>
        /// Optional callback that returns one or more CSS class names to apply to a data row.
        /// Receives the row item and should return a class string or <c>null</c>.
        /// Selection classes are applied independently of this callback.
        /// </summary>
        [Parameter]
        public Func<TGridItem, string?>? RowClass { get; set; }

        /// <summary>
        /// When <c>true</c>, draggable resize handles are rendered on each column header,
        /// allowing the user to resize columns by dragging. Size changes are not persisted.
        /// Per-column opt-in is also possible via <see cref="ColumnBase{TGridItem}.Resizable"/>.
        /// </summary>
        [Parameter]
        public bool ResizableColumns { get; set; }

        /// <summary>
        /// When <c>true</c>, columns that opt in with <see cref="ColumnBase{TGridItem}.Filterable"/>
        /// will render a small filter button and support column filtering.
        /// </summary>
        [Parameter]
        public bool EnableColumnFiltering { get; set; } = false;

        /// <summary>
        /// When <c>true</c>, the number of rows displayed per page adapts automatically to the
        /// available container height. Requires <see cref="Pagination"/> to be set.
        /// The container that wraps the grid must have a fixed or flex-constrained height.
        /// </summary>
        [Parameter]
        public bool AutoItemsPerPage { get; set; }

        /// <summary>
        /// The assumed height of a single data row in pixels used when <see cref="AutoItemsPerPage"/> is
        /// enabled. Defaults to 40, matching <see cref="VirtualizeItemSize"/>.
        /// </summary>
        [Parameter]
        public int AutoItemsPerPageRowHeight { get; set; } = 40;

        /// <summary>
        /// Raised when <see cref="AutoItemsPerPage"/> recalculates the page size due to a container
        /// resize. Use this to trigger a re-render in the parent component.
        /// </summary>
        [Parameter]
        public EventCallback<int> OnAutoItemsPerPageChanged { get; set; }

        internal bool EffectiveLoadingValue => Loading ?? _isLoading;

        public PggmDataGrid()
        {
            // Default empty/loading render fragments are provided by methods; explicit fields removed.

            _selectionChangedHandler = () =>
            {
                _ = InvokeAsync(StateHasChanged);
                SelectedItemsChanged?.Invoke();
                _ = SelectedItemsChangedCallback.InvokeAsync(null);
                if (OnRowSelected.HasDelegate)
                    _ = OnRowSelected.InvokeAsync(SelectedItems.ToList());
            };

            _paginationCurrentPageHandler = async () =>
            {
                await RefreshDataAsync(CancellationToken.None);
                await InvokeAsync(StateHasChanged);
            };
        }

        protected override async Task OnParametersSetAsync()
        {
            await base.OnParametersSetAsync();

            // Keep the internal context selector in sync when ItemId changes.
            InternalContext.ItemKeySelector = ItemId;

            // Re-subscribe to CurrentPageChanged when Pagination instance changes.
            if (!ReferenceEquals(_subscribedPagination, Pagination))
            {
                if (_subscribedPagination is not null)
                    _subscribedPagination.CurrentPageChanged -= _paginationCurrentPageHandler;

                _subscribedPagination = Pagination;
                if (Pagination is not null)
                {
                    Pagination.CurrentPageChanged += _paginationCurrentPageHandler;
                }
            }

            // For virtualized grids, Virtualize manages its own data fetching via RefreshDataAsync.
            // Calling RefreshDataAsync here would invoke ItemsProvider outside Virtualize's lifecycle,
            // producing results that Virtualize ignores and causing the initial empty-rows problem.
            if (!EnableVirtualization)
            {
                await RefreshDataAsync(CancellationToken.None);
            }
        }

        protected override void OnInitialized()
        {
            InternalContext.SingleSelect = SingleSelect;
            InternalContext.ItemKeySelector = ItemId;
            base.OnInitialized();
            // allow columns to enumerate current visible items for selection operations
            InternalContext.GetCurrentItems = () => _itemsToRender;
            // subscribe to selection changes to refresh UI and notify parent (subscribe once)
            if (!_selectionHandlerSubscribed)
            {
                InternalContext.SelectionChanged += _selectionChangedHandler;
                _selectionHandlerSubscribed = true;
            }
            // react to filter changes (local or remote) by refreshing data
            InternalContext.FiltersChanged += () =>
            {
                _ = InvokeAsync(async () =>
                {
                    _ = RefreshDataAsync(CancellationToken.None);
                    await InvokeAsync(StateHasChanged);
                });
            };
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await base.OnAfterRenderAsync(firstRender);

            if (!_columnsRendered && InternalContext.Columns.Count > 0)
            {
                _columnsRendered = true;

                // Apply default sort if any column requested it
                if (!_defaultSortApplied)
                {
                    var def = InternalContext.Columns.FirstOrDefault(c => c.IsDefaultSortColumn && c.SortBy is not null);
                    if (def is not null)
                    {
                        _currentSortColumn = def;
                        _currentSortAscending = true;
                        _defaultSortApplied = true;
                    }
                }

                if (EnableVirtualization)
                {
                    // Request a render to display the TableVirtualize component now that columns are collected
                    StateHasChanged();
                }
                else
                {
                    await RefreshDataAsync(CancellationToken.None);
                }

            }

            if (_columnsRendered && HasResizableColumns())
            {
                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.enableColumnResizing", _rootElement);
                }
                catch { /* suppress interop errors during pre-render */ }
            }

            if (_columnsRendered && AutoItemsPerPage && Pagination is not null && !_autoItemsPerPageInitialized)
            {
                _autoItemsPerPageInitialized = true;
                _autoItemsDotNetRef = DotNetObjectReference.Create(this);
                try
                {
                    await JSRuntime.InvokeVoidAsync(
                        "pggmDataGrid.enableAutoItemsPerPage",
                        _rootElement,
                        _autoItemsDotNetRef,
                        AutoItemsPerPageRowHeight);
                }
                catch { /* suppress interop errors during pre-render */ }
            }

            // Set virtualized height (via CSS variable) and apply per-row indents via JS
            if (_columnsRendered)
            {
                if (EnableVirtualization)
                {
                    try
                    {
                        await JSRuntime.InvokeVoidAsync("pggmDataGrid.setVirtualizedHeight", _rootElement, Height ?? "400px");
                    }
                    catch { /* Suppress interop errors; not critical for UX */ }
                }

                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.applyRowIndents", _rootElement);
                }
                catch { /* Suppress interop errors; not critical for UX */ }

                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.syncColumnWidths", _rootElement);
                }
                catch { /* Suppress interop errors; not critical for UX */ }
                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.syncStickyOffsets", _rootElement);
                }
                catch { /* Suppress interop errors; not critical for UX */ }
            }

            // Ensure the first cell has tabindex=0 (roving-tabindex pattern) so users can
            // Tab into the grid. We set the logical position here but do NOT call FocusCell
            // so the grid never steals focus from the browser's natural focus order.
            if (!_hasSetInitialFocus && !_isLoading
                && ((EnableVirtualization && GetCurrentRowCount() > 0)
                    || (!EnableVirtualization && _itemsToRender is not null && _itemsToRender.Any()))
                && _focusManager.Active.Row < 0)
            {
                var firstCol = InternalContext.Columns.OrderBy(c => c.Index).FirstOrDefault();
                if (firstCol is not null)
                {
                    _focusManager.SetActive(0, firstCol.Index);
                    _hasSetInitialFocus = true;
                }
            }

            // Register a JS listener that calls preventDefault for navigation + Space keys
            // so the browser doesn't scroll the page while the user navigates the grid.
            // For virtualized grids we intentionally do NOT attach the keyboard nav handler
            // because keyboard navigation is currently unstable with Virtualize rendering.
            if (_columnsRendered)
            {
                if (EnableVirtualization)
                {
                    _keyboardNavEnabled = false;
                    try
                    {
                        await JSRuntime.InvokeVoidAsync("pggmDataGrid.disableKeyboardNav", _rootElement);
                    }
                    catch { /* Suppress interop errors; not critical for UX */ }
                }
                else if (!_keyboardNavEnabled && !EnableVirtualization)
                {
                    _keyboardNavEnabled = true;
                    try
                    {
                        await JSRuntime.InvokeVoidAsync("pggmDataGrid.enableKeyboardNav", _rootElement);
                    }
                    catch { /* Suppress interop errors; not critical for UX */ }
                }
            }
        }

        // Sticky header behavior is now static (handled via CSS); parameter removed.

        /// <summary>
        /// When <c>true</c>, the first column (or the first two columns when the table has a
        /// <see cref="SelectColumn{TGridItem}"/>) will be horizontally sticky so they remain
        /// visible while the user scrolls the grid to the right.
        /// </summary>
        [Parameter]
        public bool StickyFirstColumn { get; set; }

        /// <summary>Returns <c>true</c> if column resizing should be active for this grid.</summary>
        internal bool HasResizableColumns() =>
            ResizableColumns || InternalContext.Columns.Any(c => c.Resizable);

        /// <summary>Returns <c>true</c> if the given column should render a resize handle.</summary>
        internal bool IsColumnResizable(ColumnBase<TGridItem> col) =>
            ResizableColumns || col.Resizable;

        /// <summary>Returns <c>true</c> if the column should be horizontally sticky.</summary>
        internal bool IsColumnSticky(ColumnBase<TGridItem> col)
        {
            if (!StickyFirstColumn) return false;
            var ordered = InternalContext.Columns.OrderBy(c => c.Index).ToList();
            if (ordered.Count == 0) return false;

            var first = ordered[0];
            if (col == first) return true;

            // When the first column is a SelectColumn the next data column is also sticky
            if (first is SelectColumn<TGridItem> && ordered.Count > 1 && col == ordered[1])
                return true;

            return false;
        }

        /// <summary>
        /// Returns the CSS <c>left</c> value for a sticky column.
        /// The first sticky column is always at <c>0</c>; the second (data) column is
        /// offset by the width of the preceding <see cref="SelectColumn{TGridItem}"/>.
        /// </summary>
        internal string GetStickyLeft(ColumnBase<TGridItem> col)
        {
            var ordered = InternalContext.Columns.OrderBy(c => c.Index).ToList();
            if (ordered.Count == 0 || col == ordered[0]) return "0";

            // Second sticky column — offset by the first column's width
            var first = ordered[0];
            var firstWidth = !string.IsNullOrWhiteSpace(first.Width) ? first.Width : "40px";
            return firstWidth;
        }

        /// <summary>Returns the extra CSS class for sticky column cells.</summary>
        internal string GetStickyClass(ColumnBase<TGridItem> col) =>
            IsColumnSticky(col) ? "pggm-sticky-col" : "";

        /// <summary>
        /// Builds the full CSS class string for a data row, combining the selection class with any
        /// value returned by the <see cref="RowClass"/> callback.
        /// </summary>
        internal string? BuildRowClass(TGridItem item)
        {
            var selected = InternalContext.IsSelected(item) ? "pggm-data-grid-row--selected" : null;
            var custom = RowClass?.Invoke(item);
            if (selected is null && custom is null) return null;
            if (selected is null) return custom;
            if (custom is null) return selected;
            return $"{selected} {custom}";
        }

        /// <summary>
        /// Builds the full CSS class string for a cell, combining alignment and sticky classes
        /// with any value returned by the column's <see cref="ColumnBase{TGridItem}.CellClass"/> callback.
        /// </summary>
        internal string BuildCellClass(ColumnBase<TGridItem> col, TGridItem item)
        {
            var sticky = GetStickyClass(col);
            var alignment = col.Alignment == ColumnAlignment.Center ? "pggm-align-center"
                          : col.Alignment == ColumnAlignment.Right  ? "pggm-align-right"
                          : "pggm-align-left";
            var nowrap = !string.IsNullOrWhiteSpace(col.Width) ? "nowrap" : null;
            var custom = col.CellClass?.Invoke(item);
            return string.Join(" ", new[] { sticky, col.Class, nowrap, alignment, custom }
                .Where(s => !string.IsNullOrWhiteSpace(s))!);
        }



        // Public API: programmatic sorting
            /// <summary>
            /// Returns the ARIA sort state for a given column.
            /// </summary>
            internal string GetAriaSort(ColumnBase<TGridItem>? col)
            {
                if (col is null) return "none";
                if (_currentSortColumn == col)
                {
                    return _currentSortAscending ? "ascending" : "descending";
                }
                return "none";
            }

            /// <summary>
            /// Programmatically focus a cell. This is a stub that invokes JS interop to focus by element id.
            /// </summary>
            public async Task FocusCell(int rowIndex, int colIndex)
            {
                try
                {
                    if (EnableVirtualization)
                    {
                        await JSRuntime.InvokeVoidAsync("pggmDataGrid.focusCellByLogical", _gridId, rowIndex, colIndex, VirtualizeItemSize);
                    }
                    else
                    {
                        var id = $"{_gridId}-r{rowIndex}-c{colIndex}";
                        await JSRuntime.InvokeVoidAsync("pggmDataGrid.focusCellById", id);
                    }
                }
                catch { /* Suppress interop errors; not critical for UX */ }
            }
        /// <summary>
        /// Programmatically set the current sort column by index and refresh the grid.
        /// When virtualization is enabled this triggers a virtualized refresh; otherwise data is reloaded.
        /// </summary>
        /// <param name="columnIndex">Zero-based index of the column to sort by.</param>
        /// <param name="ascending">True for ascending sort, false for descending.</param>
        public async Task SetSortAsync(int columnIndex, bool ascending)
        {
            var col = InternalContext.Columns.FirstOrDefault(c => c.Index == columnIndex);
            if (col is null) return;
            _currentSortColumn = col;
            _currentSortAscending = ascending;
            await CancelCtsAsync(_loadCts).ConfigureAwait(false);
            _isFirstVirtualizeProviderCall = true;

            if (EnableVirtualization)
            {
                await InvokeAsync(StateHasChanged);
                // ensure the scroll container resets to the top so the first visible item is the first sorted item
                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.scrollToTop", _rootElement);
                }
                catch { /* Suppress interop errors; not critical for UX */ }
                if (_tableVirtualizeRef is not null)
                {
                    await _tableVirtualizeRef.RefreshDataAsync();
                }
            }
            else
            {
                await RefreshDataAsync(CancellationToken.None);
                await InvokeAsync(StateHasChanged);
            }
        }

        /// <summary>
        /// Programmatically set the current sort column by column title and refresh the grid.
        /// </summary>
        /// <param name="columnTitle">The title of the column to sort by.</param>
        /// <param name="ascending">True for ascending sort, false for descending.</param>
        public async Task SetSortAsync(string columnTitle, bool ascending)
        {
            var col = InternalContext.Columns.FirstOrDefault(c => string.Equals(c.Title, columnTitle, StringComparison.Ordinal));
            if (col is null) return;
            _currentSortColumn = col;
            _currentSortAscending = ascending;
            await CancelCtsAsync(_loadCts).ConfigureAwait(false);
            _isFirstVirtualizeProviderCall = true;

            if (EnableVirtualization)
            {
                await InvokeAsync(StateHasChanged);
                if (_tableVirtualizeRef is not null)
                {
                    await _tableVirtualizeRef.RefreshDataAsync();
                }
            }
            else
            {
                await RefreshDataAsync(CancellationToken.None);
                await InvokeAsync(StateHasChanged);
            }
        }

        /// <summary>
        /// Programmatically set the current sort column by column reference and refresh the grid.
        /// </summary>
        /// <param name="column">The column to sort by. Must belong to this grid's column collection.</param>
        /// <param name="ascending">True for ascending sort, false for descending.</param>
        public async Task SetSortAsync(ColumnBase<TGridItem> column, bool ascending)
        {
            if (column is null) return;
            // ensure this column belongs to our context
            if (!InternalContext.Columns.Contains(column))
            {
                return;
            }
            _currentSortColumn = column;
            _currentSortAscending = ascending;
            await CancelCtsAsync(_loadCts).ConfigureAwait(false);
            _isFirstVirtualizeProviderCall = true;

            if (EnableVirtualization)
            {
                await InvokeAsync(StateHasChanged);
                if (_tableVirtualizeRef is not null)
                {
                    await _tableVirtualizeRef.RefreshDataAsync();
                }
            }
            else
            {
                await RefreshDataAsync(CancellationToken.None);
                await InvokeAsync(StateHasChanged);
            }
        }

        /// <summary>
        /// Programmatically set the currently selected items on the grid.
        /// The provided items should be instances that match those in the grid's item source.
        /// </summary>
        public async Task SetSelectedItemsAsync(IEnumerable<TGridItem>? items)
        {
            InternalContext.SetSelectedItems(items);
            await InvokeAsync(StateHasChanged);
        }

        /// <summary>
        /// Clear any active sort on the grid and refresh the items view.
        /// </summary>
        public async Task ClearSortAsync()
        {
            _currentSortColumn = null;
            _currentSortAscending = true;
            await CancelCtsAsync(_loadCts).ConfigureAwait(false);
            _isFirstVirtualizeProviderCall = true;

            if (EnableVirtualization)
            {
                await InvokeAsync(StateHasChanged);
                if (_tableVirtualizeRef is not null)
                {
                    await _tableVirtualizeRef.RefreshDataAsync();
                }
            }
            else
            {
                await RefreshDataAsync(CancellationToken.None);
                await InvokeAsync(StateHasChanged);
            }
        }

        /// <summary>
        /// Refresh grid items from the configured <c>ItemsProvider</c> or local <c>Items</c> collection.
        /// Cancels any in-flight load, applies sorting, filtering and pagination, and updates the UI state.
        /// </summary>
        /// <param name="cancellationToken">Token used to cancel the refresh operation.</param>
        public async Task RefreshDataAsync(CancellationToken cancellationToken)
        {
            // When virtualization is enabled, delegate to TableVirtualize so the
            // Virtualize component re-fetches from the correct scroll position.
            if (EnableVirtualization && _tableVirtualizeRef is not null)
            {
                _isFirstVirtualizeProviderCall = true;
                await _tableVirtualizeRef.RefreshDataAsync();
                return;
            }

            // cancel any previous load if we're initiating a new one
            await CancelCtsAsync(_loadCts).ConfigureAwait(false);
            _loadCts = new System.Threading.CancellationTokenSource();
            using var linked = System.Threading.CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, _loadCts.Token);

            _isLoading = true;
            await InvokeAsync(StateHasChanged);

            if (ItemsProvider is not null)
            {
                await LoadFromItemsProviderAsync(linked.Token);
            }
            else if (Items is not null)
            {
                await LoadFromItemsCollectionAsync();
            }
            else
            {
                _itemsToRender = Array.Empty<TGridItem>();
            }

            _isLoading = false;
            _hasLoadedData = true;

            if (Pagination is not null)
                await Pagination.SetTotalItemCountAsync(_totalItemCount);

            await InvokeAsync(StateHasChanged);
        }

        // Provider adapter for TableVirtualize: debounce, sort injection, pagination, cancel/retry
        /// <summary>
        /// TableVirtualize provider adapter: applies debounce, sort/pagination injection and retry logic,
        /// and returns the requested page of items for virtualization scenarios.
        /// </summary>
        /// <param name="request">The provider request from the virtualize component.</param>
        /// <returns>A <see cref="GridItemsProviderResult{TGridItem}"/> with items and the current total count.</returns>
        internal async ValueTask<GridItemsProviderResult<TGridItem>> ProvideGridItemsAsync(GridItemsProviderRequest<TGridItem> request)
        {
            _virtualizedItemsByRow.Clear();

            // Debounce: skip delay on first call
            if (_isFirstVirtualizeProviderCall)
            {
                _isFirstVirtualizeProviderCall = false;
            }
            else
            {
                await Task.Delay(100);
            }

            if (request.CancellationToken.IsCancellationRequested)
            {
                return GridItemsProviderResult.From(Array.Empty<TGridItem>(), _totalItemCount);
            }

            // Combine pagination if any
            var startIndex = request.StartIndex;
            var count = request.Count;
            if (Pagination is not null)
            {
                startIndex += Math.Max(0, Pagination.PageIndex * Pagination.PageSize);
                count = count.HasValue
                    ? Math.Min(count.Value, Math.Max(0, Pagination.PageSize - request.StartIndex))
                    : (int?)Pagination.PageSize;
            }

            var providerReq = new GridItemsProviderRequest<TGridItem>
            {
                StartIndex = startIndex,
                Count = (count.HasValue && count.Value > 0) ? count : Math.Max(1, VirtualizeOverscanCount * 5),
                SortByColumn = _currentSortColumn,
                SortByAscending = _currentSortAscending,
                CancellationToken = request.CancellationToken
            };

            try
            {
                var res = await ResolveItemsRequestAsync(providerReq);
                _totalItemCount = res.TotalItemCount;

                if ((res.Items == null || !res.Items.Any()) && res.TotalItemCount > 0 && !request.CancellationToken.IsCancellationRequested)
                {
                    // transient empty result — retry once after a short delay
                    try
                    {
                        await Task.Delay(40, request.CancellationToken);
                    }
                    catch (OperationCanceledException)
                    {
                        return GridItemsProviderResult.From(Array.Empty<TGridItem>(), _totalItemCount);
                    }

                    if (!request.CancellationToken.IsCancellationRequested)
                    {
                        var res2 = await ResolveItemsRequestAsync(providerReq);
                        _totalItemCount = res2.TotalItemCount;
                        return GridItemsProviderResult.From(res2.Items ?? Array.Empty<TGridItem>(), res2.TotalItemCount);
                    }
                }

                return GridItemsProviderResult.From(res.Items ?? Array.Empty<TGridItem>(), res.TotalItemCount);
            }
            catch (OperationCanceledException)
            {
                return GridItemsProviderResult.From(Array.Empty<TGridItem>(), _totalItemCount);
            }
            catch (Exception)
            {
                return GridItemsProviderResult.From(Array.Empty<TGridItem>(), _totalItemCount);
            }
        }

        private async Task LoadFromItemsProviderAsync(CancellationToken token)
        {
            if (ItemsProvider is null)
            {
                _itemsToRender = Array.Empty<TGridItem>();
                _totalItemCount = 0;
                return;
            }

            var start = 0;
            int? count = null;
            if (Pagination is not null)
            {
                start = Math.Max(0, Pagination.PageIndex * Pagination.PageSize);
                count = Pagination.PageSize;
            }

            var req = new GridItemsProviderRequest<TGridItem>
            {
                StartIndex = start,
                Count = count,
                SortByColumn = _currentSortColumn,
                SortByAscending = _currentSortAscending,
                CancellationToken = token
            };
            var res = await ItemsProvider(req);
            _itemsToRender = res.Items ?? Array.Empty<TGridItem>();
            _totalItemCount = res.TotalItemCount;
        }

        private async Task LoadFromItemsCollectionAsync()
        {
            if (Items is null)
            {
                _itemsToRender = Array.Empty<TGridItem>();
                _totalItemCount = 0;
                return;
            }

            var query = _currentSortColumn?.SortBy is not null
                ? _currentSortColumn.SortBy.Apply(Items!, _currentSortAscending)
                : Items!;

            query = ApplyFiltersToQuery(query);

            _totalItemCount = query.Count();

            if (Pagination is not null)
            {
                var start = Math.Max(0, Pagination.PageIndex * Pagination.PageSize);
                query = query.Skip(start).Take(Pagination.PageSize);
            }

            _itemsToRender = query.ToList();
        }

        private IQueryable<TGridItem> ApplyFiltersToQuery(IQueryable<TGridItem> query)
        {
            var filters = InternalContext.GetFilters();
            foreach (var fd in filters.Values)
            {
                if (string.IsNullOrWhiteSpace(fd.Field)) continue;
                var col = InternalContext.Columns.FirstOrDefault(c => string.Equals(c.Field ?? c.Title, fd.Field, StringComparison.Ordinal));
                if (col is null) continue;
                var selectorObj = col.GetType().GetProperty("FilterByExpression")?.GetValue(col) as LambdaExpression;
                if (selectorObj is null && !string.IsNullOrWhiteSpace(fd.Field))
                {
                    var itemType = typeof(TGridItem);
                    var prop = itemType.GetProperty(fd.Field);
                    if (prop is not null && prop.PropertyType == typeof(string))
                    {
                        var param = Expression.Parameter(itemType, "x");
                        var body = Expression.Property(param, prop);
                        selectorObj = Expression.Lambda(body, param);
                    }
                }

                var pred = BuildPredicateFromDescriptor(selectorObj, fd);
                if (pred is not null)
                    query = query.Where(pred);
            }

            return query;
        }

        // Normalize provider call handling (similar to Fluent's ResolveItemsRequestAsync)
        private async ValueTask<GridItemsProviderResult<TGridItem>> ResolveItemsRequestAsync(GridItemsProviderRequest<TGridItem> request)
        {
            try
            {
                if (ItemsProvider is not null)
                {
                    var gipr = await ItemsProvider(request);
                    if (gipr.Items is not null)
                    {
                        // mark loading complete when first result arrives
                        _isLoading = false;
                        _hasLoadedData = true;
                    }
                    return gipr;
                }
                else if (Items is not null)
                {
                    var query = request.ApplySorting(Items);
                    // Apply active filters to the query (local Items path)
                    var filters = InternalContext.GetFilters();
                    foreach (var fd in filters.Values)
                    {
                        if (string.IsNullOrWhiteSpace(fd.Field)) continue;
                        var col = InternalContext.Columns.FirstOrDefault(c => string.Equals(c.Field ?? c.Title, fd.Field, StringComparison.Ordinal));
                        if (col is null) continue;
                        var selectorObj = col.GetType().GetProperty("FilterByExpression")?.GetValue(col) as LambdaExpression;
                        var pred = BuildPredicateFromDescriptor(selectorObj, fd);
                        if (pred is not null)
                            query = query.Where(pred);
                    }

                    var result = query.Skip(request.StartIndex);
                    if (request.Count.HasValue)
                    {
                        result = result.Take(request.Count.Value);
                    }
                    var total = Items.Count();
                    return GridItemsProviderResult.From(result.ToList(), total);
                }
            }
            catch (OperationCanceledException) when (request.CancellationToken.IsCancellationRequested)
            {
                // suppressed
            }
            catch (Exception ex)
            {
                // Log unexpected provider-resolve errors in debug builds; callers receive an empty result.
                Debug.WriteLine($"PggmDataGrid.ResolveItemsRequestAsync: {ex}");
            }

            return GridItemsProviderResult.From(new List<TGridItem>(), 0);
        }

        /// <summary>
        /// Set the current page (zero-based) when using pagination.
        /// </summary>
        public async Task SetPageAsync(int pageIndex)
        {
            if (Pagination is null) return;
            Pagination.PageIndex = Math.Max(0, pageIndex);
            await RefreshDataAsync(CancellationToken.None);
            await InvokeAsync(StateHasChanged);
        }

        /// <summary>
        /// Set the page size when using pagination.
        /// </summary>
        public async Task SetPageSizeAsync(int pageSize)
        {
            if (Pagination is null) return;
            Pagination.PageSize = Math.Max(1, pageSize);
            Pagination.PageIndex = 0;
            await RefreshDataAsync(CancellationToken.None);
            await InvokeAsync(StateHasChanged);
        }

        /// <summary>
        /// Called from JavaScript when the available height changes and a new items-per-page count
        /// has been calculated. Only active when <see cref="AutoItemsPerPage"/> is <c>true</c>.
        /// </summary>
        [Microsoft.JSInterop.JSInvokable]
        public async Task UpdateItemsPerPageAsync(int newPageSize)
        {
            if (Pagination is null || newPageSize < 1) return;
            if (Pagination.PageSize == newPageSize) return;
            Pagination.PageSize = newPageSize;
            Pagination.PageIndex = 0;
            await RefreshDataAsync(CancellationToken.None);
            await InvokeAsync(StateHasChanged);
            if (OnAutoItemsPerPageChanged.HasDelegate)
                await OnAutoItemsPerPageChanged.InvokeAsync(newPageSize);
        }

        /// <summary>
        /// Read-only total item count reported by the last ItemsProvider result.
        /// </summary>
        public int TotalItemCount => _totalItemCount;

        /// <summary>
        /// True while the grid is loading items from an ItemsProvider.
        /// </summary>
        public bool IsLoading => _isLoading;

        internal async Task ToggleSort(ColumnBase<TGridItem> column)
        {
            if (column == _currentSortColumn)
            {
                _currentSortAscending = !_currentSortAscending;
            }
            else
            {
                _currentSortColumn = column;
                _currentSortAscending = true;
            }

            // Cancel any in-flight provider loads and reset virtualize first-call behavior so
            // the next Virtualize request immediately reflects the new sort.
            await CancelCtsAsync(_loadCts).ConfigureAwait(false);
            _isFirstVirtualizeProviderCall = true;

            if (EnableVirtualization)
            {
                await InvokeAsync(StateHasChanged);
                if (_tableVirtualizeRef is not null)
                {
                    await _tableVirtualizeRef.RefreshDataAsync();
                }
            }
            else
            {
                await RefreshDataAsync(CancellationToken.None);
                await InvokeAsync(StateHasChanged);
            }
        }

        /// <summary>
        /// Dispose the component, unsubscribing internal handlers and disposing any JS interop references.
        /// </summary>
        public override async ValueTask DisposeAsync()
        {
            // unsubscribe selection changes (if we subscribed)
            if (_selectionHandlerSubscribed)
                InternalContext.SelectionChanged -= _selectionChangedHandler;

            // unsubscribe pagination
            if (_subscribedPagination is not null)
                _subscribedPagination.CurrentPageChanged -= _paginationCurrentPageHandler;

            // clean up auto-items-per-page observer
            if (_autoItemsPerPageInitialized)
            {
                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.disableAutoItemsPerPage", _rootElement);
                }
                catch { /* Suppress interop errors; not critical for UX */ }
            }

            _autoItemsDotNetRef?.Dispose();

            // Ensure `_hasLoadedData` is referenced from C# so static analysis recognizes usage
            _ = _hasLoadedData; // referenced by Razor markup for empty/loading templates

            // Cancel and dispose any outstanding load cancellation token source
            if (_loadCts is not null)
            {
                try
                {
                    await CancelCtsAsync(_loadCts).ConfigureAwait(false);
                }
                catch (Exception ex)
                {
                    // Cancellation failed; log in debug to aid troubleshooting without throwing during dispose.
                    Debug.WriteLine($"PggmDataGrid.DisposeAsync: CancelCtsAsync failed: {ex}");
                }
                _loadCts.Dispose();
                _loadCts = null;
            }

            await base.DisposeAsync();
        }

        private async Task OnHeaderClicked(ColumnBase<TGridItem> col)
        {
            if (col is null) return;
            if (EnableColumnFiltering && col.Filterable && _filterDialogOpen && _activeFilterColumn == col)
                return;

            if (col.Sortable == true || col.IsDefaultSortColumn || col.SortBy is not null)
            {
                await ToggleSort(col);
            }
        }

        private async Task OnRowClicked(TGridItem item)
        {
            InternalContext.ToggleItem(item);
            if (OnRowClick.HasDelegate)
                await OnRowClick.InvokeAsync(item);
        }

        private void OpenFilterDialog(ColumnBase<TGridItem> col)
        {
            _activeFilterColumn = col;
            _filterDialogOpen = true;
            StateHasChanged();
        }

        private void CloseFilterDialog()
        {
            _filterDialogOpen = false;
            StateHasChanged();
        }

        private FilterDescriptor? GetFilterForColumn(ColumnBase<TGridItem> column)
        {
            var key = column.Field ?? column.Title;
            if (key is null) return null;
            if (InternalContext.Filters.TryGetValue(key, out var fd)) return fd;
            return null;
        }

        private bool IsColumnFiltered(ColumnBase<TGridItem> column)
        {
            var fd = GetFilterForColumn(column);
            return fd is not null && !string.IsNullOrEmpty(fd.Value);
        }

        private async Task ApplyFilter(ColumnBase<TGridItem> column, FilterDescriptor fd)
        {
            var key = column.Field ?? column.Title;
            if (key is null) return;
            InternalContext.SetFilter(key, fd);
            if (EnableVirtualization && _tableVirtualizeRef is not null)
            {
                await _tableVirtualizeRef.RefreshDataAsync();
            }
            else
            {
                await RefreshDataAsync(CancellationToken.None);
                await InvokeAsync(StateHasChanged);
            }
        }

        private async Task ClearFilter(ColumnBase<TGridItem> column)
        {
            var key = column.Field ?? column.Title;
            if (key is null) return;
            InternalContext.ClearFilter(key);
            if (EnableVirtualization && _tableVirtualizeRef is not null)
            {
                await _tableVirtualizeRef.RefreshDataAsync();
            }
            else
            {
                await RefreshDataAsync(CancellationToken.None);
                await InvokeAsync(StateHasChanged);
            }
        }

        private static Expression<Func<TGridItem, bool>>? BuildPredicateFromDescriptor(LambdaExpression? selector, FilterDescriptor fd)
        {
            if (selector is null || fd is null) return null;

            var param = selector.Parameters[0];
            Expression body = selector.Body;
            if (body.NodeType == ExpressionType.Convert && body is UnaryExpression ue)
                body = ue.Operand;

            var propType = Nullable.GetUnderlyingType(selector.ReturnType) ?? selector.ReturnType;

            // ── Number filtering ────────────────────────────────────────────────────
            if (fd.FilterType == FilterType.Number || (fd.FilterType == FilterType.String && (propType == typeof(int) || propType == typeof(long) || propType == typeof(double) || propType == typeof(float) || propType == typeof(decimal))))
            {
                if (string.IsNullOrEmpty(fd.Value) && fd.Operator != FilterOperators.Between) return null;
                if (!double.TryParse(fd.Value, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out var numVal)) return null;

                Expression memberAsDouble = Expression.Convert(body, typeof(double));

                if (fd.Operator == FilterOperators.Between)
                {
                    if (fd.Values is not { Length: >= 2 }) return null;
                    if (!double.TryParse(fd.Values[0], System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out var lo)) return null;
                    if (!double.TryParse(fd.Values[1], System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.InvariantCulture, out var hi)) return null;
                    var between = Expression.AndAlso(
                        Expression.GreaterThanOrEqual(memberAsDouble, Expression.Constant(lo)),
                        Expression.LessThanOrEqual(memberAsDouble, Expression.Constant(hi)));
                    return Expression.Lambda<Func<TGridItem, bool>>(between, param);
                }

                var constDouble = Expression.Constant(numVal);
                Expression numCmp = fd.Operator switch
                {
                    FilterOperators.NotEquals => Expression.NotEqual(memberAsDouble, constDouble),
                    FilterOperators.GreaterThan => Expression.GreaterThan(memberAsDouble, constDouble),
                    FilterOperators.GreaterThanOrEqual => Expression.GreaterThanOrEqual(memberAsDouble, constDouble),
                    FilterOperators.LessThan => Expression.LessThan(memberAsDouble, constDouble),
                    FilterOperators.LessThanOrEqual => Expression.LessThanOrEqual(memberAsDouble, constDouble),
                    _ => Expression.Equal(memberAsDouble, constDouble)
                };
                return Expression.Lambda<Func<TGridItem, bool>>(numCmp, param);
            }

            // ── Date filtering ──────────────────────────────────────────────────────
            if (fd.FilterType == FilterType.Date || (fd.FilterType == FilterType.String && (propType == typeof(DateTime) || propType == typeof(DateOnly) || propType == typeof(DateTimeOffset))))
            {
                if (string.IsNullOrEmpty(fd.Value) && fd.Operator != FilterOperators.Between) return null;

                if (propType == typeof(DateOnly))
                {
                    // Use invariant culture parsing and normalize via DateOnly
                    if (!System.DateTime.TryParse(fd.Value, System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out var parsedDate)) return null;
                    var dateVal = DateOnly.FromDateTime(parsedDate);
                    Expression memberAsDate = body;

                    if (fd.Operator == FilterOperators.Between)
                    {
                        if (fd.Values is not { Length: >= 2 }) return null;
                        if (!System.DateTime.TryParse(fd.Values[0], System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out var loDt)) return null;
                        if (!System.DateTime.TryParse(fd.Values[1], System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out var hiDt)) return null;
                        var lo = DateOnly.FromDateTime(loDt);
                        var hi = DateOnly.FromDateTime(hiDt);
                        var between = Expression.AndAlso(
                            Expression.GreaterThanOrEqual(memberAsDate, Expression.Constant(lo)),
                            Expression.LessThanOrEqual(memberAsDate, Expression.Constant(hi)));
                        return Expression.Lambda<Func<TGridItem, bool>>(between, param);
                    }

                    Expression dateCmp = fd.Operator switch
                    {
                        FilterOperators.Before => Expression.LessThan(memberAsDate, Expression.Constant(dateVal)),
                        FilterOperators.After => Expression.GreaterThan(memberAsDate, Expression.Constant(dateVal)),
                        _ => Expression.Equal(memberAsDate, Expression.Constant(dateVal))
                    };
                    return Expression.Lambda<Func<TGridItem, bool>>(dateCmp, param);
                }
                else
                {
                    if (!DateTime.TryParse(fd.Value, System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out var dtVal)) return null;
                    // Normalize to Date portion for date-only comparisons
                    Expression memberAsDate = Expression.Property(Expression.Convert(body, typeof(DateTime)), nameof(DateTime.Date));

                    if (fd.Operator == FilterOperators.Between)
                    {
                        if (fd.Values is not { Length: >= 2 }) return null;
                        if (!DateTime.TryParse(fd.Values[0], System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out var lo)) return null;
                        if (!DateTime.TryParse(fd.Values[1], System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out var hi)) return null;
                        var between = Expression.AndAlso(
                            Expression.GreaterThanOrEqual(memberAsDate, Expression.Constant(lo.Date)),
                            Expression.LessThanOrEqual(memberAsDate, Expression.Constant(hi.Date)));
                        return Expression.Lambda<Func<TGridItem, bool>>(between, param);
                    }

                    Expression dateCmp = fd.Operator switch
                    {
                        FilterOperators.Before => Expression.LessThan(memberAsDate, Expression.Constant(dtVal.Date)),
                        FilterOperators.After => Expression.GreaterThan(memberAsDate, Expression.Constant(dtVal.Date)),
                        _ => Expression.Equal(memberAsDate, Expression.Constant(dtVal.Date))
                    };
                    return Expression.Lambda<Func<TGridItem, bool>>(dateCmp, param);
                }
            }

            // ── String filtering ────────────────────────────────────────────────────
            if (string.IsNullOrEmpty(fd.Value)) return null;
            if (propType != typeof(string)) return null;

            var value = fd.Value ?? string.Empty;
            if (!fd.CaseSensitive)
                value = value.ToLowerInvariant();

            MethodInfo? toLowerMethod = typeof(string).GetMethod("ToLower", Type.EmptyTypes);
            MethodInfo? containsMethod = typeof(string).GetMethod("Contains", new[] { typeof(string) });
            MethodInfo? startsWithMethod = typeof(string).GetMethod("StartsWith", new[] { typeof(string) });
            MethodInfo? endsWithMethod = typeof(string).GetMethod("EndsWith", new[] { typeof(string) });

            Expression memberExpr = body;
            Expression memberForCompare = memberExpr;
            if (!fd.CaseSensitive)
                memberForCompare = Expression.Call(memberExpr, toLowerMethod!);

            var constExpr = Expression.Constant(value, typeof(string));

            Expression comparison;
            switch (fd.Operator)
            {
                case FilterOperators.EqualsOperator:
                    comparison = Expression.Equal(memberForCompare, constExpr);
                    break;
                case FilterOperators.StartsWith:
                    comparison = Expression.Call(memberForCompare, startsWithMethod!, constExpr);
                    break;
                case FilterOperators.EndsWith:
                    comparison = Expression.Call(memberForCompare, endsWithMethod!, constExpr);
                    break;
                default:
                    comparison = Expression.Call(memberForCompare, containsMethod!, constExpr);
                    break;
            }

            var notNull = Expression.NotEqual(memberExpr, Expression.Constant(null, typeof(string)));
            var combined = Expression.AndAlso(notNull, comparison);
            return Expression.Lambda<Func<TGridItem, bool>>(combined, param);
        }

        internal async Task ToggleExpandedAsync(TGridItem item)
        {
            if (item is IHierarchicalGridItem hierarchicalItem)
            {
                hierarchicalItem.IsCollapsed = !hierarchicalItem.IsCollapsed;
                if (OnToggle.HasDelegate)
                    await OnToggle.InvokeAsync(item);
                await InvokeAsync(StateHasChanged);
            }
        }

        internal int GetTabIndex(int row, int col)
        {
            return _focusManager.GetTabIndex(row, col);
        }

        // No longer used — navigation is handled entirely by HandleGridKeyDown.
        // Kept as a no-op stub so existing test references compile.
        private Task HandleCellKeyDown(KeyboardEventArgs e, int rowIndex, int colIndex) => Task.CompletedTask;

        private static readonly HashSet<string> _navigationKeys = new(StringComparer.Ordinal)
        {
            "ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End", "PageDown", "PageUp",
            " ", "Enter"
        };

        private void TrackVirtualizedItem(int rowIndex, TGridItem item)
        {
            _virtualizedItemsByRow[rowIndex] = item;
        }

        private int GetPageRowCount(int pageIndex)
        {
            if (Pagination is null)
            {
                return Math.Max(0, _totalItemCount);
            }

            var remaining = _totalItemCount - (pageIndex * Pagination.PageSize);
            return Math.Max(0, Math.Min(Pagination.PageSize, remaining));
        }

        private int GetCurrentRowCount()
        {
            if (!EnableVirtualization)
            {
                return _itemsToRender?.Count() ?? 0;
            }

            return GetPageRowCount(Pagination?.PageIndex ?? 0);
        }

        private bool TryGetRowItem(int rowIndex, out TGridItem? item)
        {
            if (EnableVirtualization)
            {
                return _virtualizedItemsByRow.TryGetValue(rowIndex, out item);
            }

            var items = _itemsToRender?.ToList();
            if (items is not null && rowIndex >= 0 && rowIndex < items.Count)
            {
                item = items[rowIndex];
                return true;
            }

            item = default;
            return false;
        }

        private async Task<bool> TryMoveToAdjacentPageAsync(int direction, int colIndex)
        {
            if (Pagination is null || !Pagination.LastPageIndex.HasValue)
            {
                return false;
            }

            var targetPage = Pagination.PageIndex + direction;
            if (targetPage < 0 || targetPage > Pagination.LastPageIndex.Value)
            {
                return false;
            }

            await Pagination.SetCurrentPageIndexAsync(targetPage);

            var totalRows = GetPageRowCount(targetPage);
            if (totalRows == 0)
            {
                return false;
            }

            var targetRow = direction > 0 ? 0 : totalRows - 1;
            _focusManager.SetActive(targetRow, colIndex);

            await InvokeAsync(StateHasChanged);
            await FocusCell(targetRow, colIndex);
            return true;
        }

        private static async ValueTask CancelCtsAsync(System.Threading.CancellationTokenSource? cts)
        {
            if (cts is null) return;
            try
            {
                var mi = typeof(System.Threading.CancellationTokenSource).GetMethod("CancelAsync", System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public, null, Type.EmptyTypes, null);
                if (mi is not null)
                {
                    var res = mi.Invoke(cts, null);
                    if (res is System.Threading.Tasks.Task t)
                        await t.ConfigureAwait(false);
                    else if (res is System.ValueType) { /* ignore other return types */ }
                }
                else
                {
                    await System.Threading.Tasks.Task.Run(() => cts.Cancel()).ConfigureAwait(false);
                }
            }
            catch (Exception ex)
            {
                // If invoking CancelAsync via reflection fails, fall back to synchronous Cancel on a background task.
                Debug.WriteLine($"PggmDataGrid.CancelCtsAsync: reflection CancelAsync failed: {ex}");
                try
                {
                    await System.Threading.Tasks.Task.Run(() => cts.Cancel()).ConfigureAwait(false);
                }
                catch (Exception ex2)
                {
                    Debug.WriteLine($"PggmDataGrid.CancelCtsAsync fallback cancel failed: {ex2}");
                }
            }
        }

        private async Task HandleGridKeyDown(KeyboardEventArgs e)
        {
            if (EnableVirtualization || _filterDialogOpen)
            {
                return;
            }

            // Only intercept navigation keys; forward others to consumer
            if (!_navigationKeys.Contains(e.Key))
            {
                if (OnCellKeyDown.HasDelegate)
                    await OnCellKeyDown.InvokeAsync((_focusManager.Active.Row, _focusManager.Active.Col, e));
                return;
            }

            var (rowIndex, colIndex) = _focusManager.Active;
            var hasActiveRow = rowIndex >= 0;

            if (colIndex < 0)
            {
                if (GetCurrentRowCount() == 0) return;
                var fc = InternalContext.Columns.OrderBy(c => c.Index).FirstOrDefault();
                if (fc is null) return;
                colIndex = fc.Index;
            }

            var orderedCols = InternalContext.Columns.OrderBy(c => c.Index).ToList();
            var colPos = orderedCols.FindIndex(c => c.Index == colIndex);
            if (colPos < 0) colPos = 0;

            var totalRows = GetCurrentRowCount();
            var newRow = rowIndex;
            var newCol = colIndex;

            // Delegate per-key logic to helpers to reduce method complexity
            switch (e.Key)
            {
                case "ArrowRight":
                    newCol = GetRightColumnIndex(orderedCols, colPos, colIndex);
                    break;
                case "ArrowLeft":
                    newCol = GetLeftColumnIndex(orderedCols, colPos, colIndex);
                    break;
                case "ArrowDown":
                {
                    var res = await HandleArrowDownAsync(rowIndex, totalRows, colIndex, hasActiveRow);
                    if (res.earlyReturn)
                        return;
                    newRow = res.newRow;
                    break;
                }
                case "ArrowUp":
                {
                    var res = await HandleArrowUpAsync(rowIndex, totalRows, colIndex, hasActiveRow);
                    if (res.earlyReturn)
                        return;
                    newRow = res.newRow;
                    break;
                }
                case "Home":
                    if (e.CtrlKey) newRow = 0;
                    newCol = orderedCols.First().Index;
                    break;
                case "End":
                    if (e.CtrlKey) newRow = totalRows - 1;
                    newCol = orderedCols.Last().Index;
                    break;
                case "PageDown":
                    newRow = Math.Min(totalRows - 1, rowIndex + 10);
                    break;
                case "PageUp":
                    newRow = Math.Max(0, rowIndex - 10);
                    break;
                case " ":
                case "Enter":
                {
                    if (await HandleSelectionKeyAsync(rowIndex, colIndex, e))
                        return;
                    break;
                }
            }

            _focusManager.SetActive(newRow, newCol);
            await InvokeAsync(StateHasChanged);
            await FocusCell(newRow, newCol);

            if (OnCellKeyDown.HasDelegate)
                await OnCellKeyDown.InvokeAsync((rowIndex, colIndex, e));
        }

        private int GetRightColumnIndex(List<ColumnBase<TGridItem>> orderedCols, int colPos, int currentCol)
        {
            if (colPos < orderedCols.Count - 1) return orderedCols[colPos + 1].Index;
            return currentCol;
        }

        private int GetLeftColumnIndex(List<ColumnBase<TGridItem>> orderedCols, int colPos, int currentCol)
        {
            if (colPos > 0) return orderedCols[colPos - 1].Index;
            return currentCol;
        }

        private async Task<(bool earlyReturn, int newRow)> HandleArrowDownAsync(int rowIndex, int totalRows, int colIndex, bool hasActiveRow)
        {
            if (!hasActiveRow)
            {
                return (false, 0);
            }

            if (rowIndex < totalRows - 1)
            {
                return (false, rowIndex + 1);
            }

            if (await TryMoveToAdjacentPageAsync(1, colIndex))
            {
                if (OnCellKeyDown.HasDelegate)
                    await OnCellKeyDown.InvokeAsync((rowIndex, colIndex, new KeyboardEventArgs()));
                return (true, rowIndex);
            }

            return (false, rowIndex);
        }

        private async Task<(bool earlyReturn, int newRow)> HandleArrowUpAsync(int rowIndex, int totalRows, int colIndex, bool hasActiveRow)
        {
            if (!hasActiveRow)
            {
                return (false, 0);
            }

            if (rowIndex > 0)
            {
                return (false, rowIndex - 1);
            }

            if (await TryMoveToAdjacentPageAsync(-1, colIndex))
            {
                if (OnCellKeyDown.HasDelegate)
                    await OnCellKeyDown.InvokeAsync((rowIndex, colIndex, new KeyboardEventArgs()));
                return (true, rowIndex);
            }

            return (false, rowIndex);
        }

        private async Task<bool> HandleSelectionKeyAsync(int rowIndex, int colIndex, KeyboardEventArgs e)
        {
            if (TryGetRowItem(rowIndex, out var item) && item is not null)
            {
                await OnRowClicked(item);
                await InvokeAsync(StateHasChanged);
            }
            if (OnCellKeyDown.HasDelegate)
                await OnCellKeyDown.InvokeAsync((rowIndex, colIndex, e));
            return true; // selection keys do not move focus
        }

        private void OnHeaderFocus(int colIndex)
        {
            // Keep header column context, but clear active row so ArrowDown starts from first body row.
            _focusManager.SetActive(-1, colIndex);
        }
    }
}
