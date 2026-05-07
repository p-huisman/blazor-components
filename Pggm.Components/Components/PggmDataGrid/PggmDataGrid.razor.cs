using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components.Web;
using Pggm.Components.Base;

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
        internal InternalGridContext<TGridItem> InternalContext { get; } = new();

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
        private System.Action? _selectionChangedHandler;
        private Func<Task>? _paginationCurrentPageHandler;
        private PaginationState? _subscribedPagination;
        private ColumnBase<TGridItem>? _currentSortColumn;
        private bool _currentSortAscending = true;
        private bool _defaultSortApplied;
        private int _totalItemCount;
        private System.Threading.CancellationTokenSource? _loadCts;
        private bool _isLoading;
        private bool _hasLoadedData;
        private bool _isFirstVirtualizeProviderCall = true;
        private TableVirtualize<TGridItem>? _tableVirtualizeRef;
        private ElementReference _rootElement;
        private readonly RenderFragment _renderEmptyContent;
        private readonly RenderFragment _renderLoadingContent;
        private readonly string _gridId = $"pggm-grid-{Guid.NewGuid():N}";
        private DotNetObjectReference<PggmDataGrid<TGridItem>>? _autoItemsDotNetRef;
        private bool _autoItemsPerPageInitialized;
        private bool _hasSetInitialFocus = false;
        private bool _keyboardNavEnabled = false;
        private readonly Dictionary<int, TGridItem> _virtualizedItemsByRow = new();

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
        /// When <c>true</c>, draggable resize handles are rendered on each column header,
        /// allowing the user to resize columns by dragging. Size changes are not persisted.
        /// Per-column opt-in is also possible via <see cref="ColumnBase{TGridItem}.Resizable"/>.
        /// </summary>
        [Parameter]
        public bool ResizableColumns { get; set; }

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
            _renderEmptyContent = RenderEmptyContent;
            _renderLoadingContent = RenderLoadingContent;
        }

        protected override async Task OnParametersSetAsync()
        {
            await base.OnParametersSetAsync();

            // Re-subscribe to CurrentPageChanged when Pagination instance changes.
            if (!ReferenceEquals(_subscribedPagination, Pagination))
            {
                if (_subscribedPagination is not null && _paginationCurrentPageHandler is not null)
                    _subscribedPagination.CurrentPageChanged -= _paginationCurrentPageHandler;

                _subscribedPagination = Pagination;
                if (Pagination is not null)
                {
                    _paginationCurrentPageHandler = async () =>
                    {
                        await RefreshDataAsync(CancellationToken.None);
                        await InvokeAsync(StateHasChanged);
                    };
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
            base.OnInitialized();
            // allow columns to enumerate current visible items for selection operations
            InternalContext.GetCurrentItems = () => _itemsToRender;
            // subscribe to selection changes to refresh UI and notify parent
            _selectionChangedHandler = () =>
            {
                _ = InvokeAsync(StateHasChanged);
                SelectedItemsChanged?.Invoke();
                _ = SelectedItemsChangedCallback.InvokeAsync(null);
            };
            InternalContext.SelectionChanged += _selectionChangedHandler;
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
                    // Render the TableVirtualize component now that columns are collected
                    await InvokeAsync(StateHasChanged);
                    // Yield to allow _tableVirtualizeRef to be captured from the new render
                    await Task.Yield();
                    if (_tableVirtualizeRef is not null)
                    {
                        await _tableVirtualizeRef.RefreshDataAsync();
                    }
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
                    catch { }
                }

                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.applyRowIndents", _rootElement);
                }
                catch { }

                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.syncColumnWidths", _rootElement);
                }
                catch { }
                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.syncStickyOffsets", _rootElement);
                }
                catch { }
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
                    catch { }
                }
                else if (!_keyboardNavEnabled && !EnableVirtualization)
                {
                    _keyboardNavEnabled = true;
                    try
                    {
                        await JSRuntime.InvokeVoidAsync("pggmDataGrid.enableKeyboardNav", _rootElement);
                    }
                    catch { }
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
                catch { }
            }
        public async Task SetSortAsync(int columnIndex, bool ascending)
        {
            var col = InternalContext.Columns.FirstOrDefault(c => c.Index == columnIndex);
            if (col is null) return;
            _currentSortColumn = col;
            _currentSortAscending = ascending;
            _loadCts?.Cancel();
            _isFirstVirtualizeProviderCall = true;

            if (EnableVirtualization)
            {
                await InvokeAsync(StateHasChanged);
                // ensure the scroll container resets to the top so the first visible item is the first sorted item
                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.scrollToTop", _rootElement);
                }
                catch { }
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

        public async Task SetSortAsync(string columnTitle, bool ascending)
        {
            var col = InternalContext.Columns.FirstOrDefault(c => string.Equals(c.Title, columnTitle, StringComparison.Ordinal));
            if (col is null) return;
            _currentSortColumn = col;
            _currentSortAscending = ascending;
            _loadCts?.Cancel();
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
            _loadCts?.Cancel();
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

        public async Task ClearSortAsync()
        {
            _currentSortColumn = null;
            _currentSortAscending = true;
            _loadCts?.Cancel();
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
            _loadCts?.Cancel();
            _loadCts = new System.Threading.CancellationTokenSource();
            using var linked = System.Threading.CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, _loadCts.Token);

            _isLoading = true;
            await InvokeAsync(StateHasChanged);

            if (ItemsProvider is not null)
            {
                var start = 0;
                int? count = null;
                if (Pagination is not null)
                {
                    start = Math.Max(0, Pagination.PageIndex * Pagination.PageSize);
                    count = Pagination.PageSize;
                }

                var req = new GridItemsProviderRequest<TGridItem> { StartIndex = start, Count = count, SortByColumn = _currentSortColumn, SortByAscending = _currentSortAscending, CancellationToken = linked.Token };
                var res = await ItemsProvider(req);
                _itemsToRender = res.Items;
                _totalItemCount = res.TotalItemCount;
            }
            else if (Items is not null)
            {
                var query = _currentSortColumn?.SortBy is not null
                    ? _currentSortColumn.SortBy.Apply(Items, _currentSortAscending)
                    : Items;

                _totalItemCount = query.Count();

                if (Pagination is not null)
                {
                    var start = Math.Max(0, Pagination.PageIndex * Pagination.PageSize);
                    query = query.Skip(start).Take(Pagination.PageSize);
                }

                _itemsToRender = query.ToList();
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
            catch (Exception)
            {
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
            _loadCts?.Cancel();
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

        public override async ValueTask DisposeAsync()
        {
            // unsubscribe selection changes
            if (_selectionChangedHandler is not null)
                InternalContext.SelectionChanged -= _selectionChangedHandler;

            // unsubscribe pagination
            if (_subscribedPagination is not null && _paginationCurrentPageHandler is not null)
                _subscribedPagination.CurrentPageChanged -= _paginationCurrentPageHandler;

            // clean up auto-items-per-page observer
            if (_autoItemsPerPageInitialized)
            {
                try
                {
                    await JSRuntime.InvokeVoidAsync("pggmDataGrid.disableAutoItemsPerPage", _rootElement);
                }
                catch { }
            }

            _autoItemsDotNetRef?.Dispose();

            await base.DisposeAsync();
        }

        private async Task OnHeaderClicked(ColumnBase<TGridItem> col)
        {
            if (col is null) return;
            if (col.Sortable == true || col.IsDefaultSortColumn || col.SortBy is not null)
            {
                await ToggleSort(col);
            }
        }

        private void OnRowClicked(TGridItem item)
        {
            InternalContext.ToggleItem(item);
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

        private async Task HandleGridKeyDown(KeyboardEventArgs e)
        {
            // When virtualization is enabled, we disable keyboard navigation for now —
            // short-circuit so virtualized grids don't attempt server-side keyboard handling.
            if (EnableVirtualization)
            {
                return;
            }
            // Only intercept navigation keys; let Enter/Space/Tab etc. through naturally.
            if (!_navigationKeys.Contains(e.Key))
            {
                if (OnCellKeyDown.HasDelegate)
                    await OnCellKeyDown.InvokeAsync((_focusManager.Active.Row, _focusManager.Active.Col, e));
                return;
            }

            // Read active cell — @onfocusin on each <td> keeps this current.
            var (rowIndex, colIndex) = _focusManager.Active;
            var hasActiveRow = rowIndex >= 0;

            // Safety: if nothing is active yet (page loaded but user hasn't focused a cell),
            // pick a valid column and let key-specific logic decide target row.
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

            switch (e.Key)
            {
                case "ArrowRight":
                    if (colPos < orderedCols.Count - 1) newCol = orderedCols[colPos + 1].Index;
                    break;
                case "ArrowLeft":
                    if (colPos > 0) newCol = orderedCols[colPos - 1].Index;
                    break;
                case "ArrowDown":
                    if (!hasActiveRow)
                    {
                        newRow = 0;
                    }
                    else if (rowIndex < totalRows - 1)
                    {
                        newRow = rowIndex + 1;
                    }
                    else if (await TryMoveToAdjacentPageAsync(1, colIndex))
                    {
                        if (OnCellKeyDown.HasDelegate)
                            await OnCellKeyDown.InvokeAsync((rowIndex, colIndex, e));
                        return;
                    }
                    break;
                case "ArrowUp":
                    if (!hasActiveRow)
                    {
                        newRow = 0;
                    }
                    else if (rowIndex > 0)
                    {
                        newRow = rowIndex - 1;
                    }
                    else if (await TryMoveToAdjacentPageAsync(-1, colIndex))
                    {
                        if (OnCellKeyDown.HasDelegate)
                            await OnCellKeyDown.InvokeAsync((rowIndex, colIndex, e));
                        return;
                    }
                    break;
                case "Home":
                    // Ctrl+Home → first cell of first row; Home → first cell of current row.
                    if (e.CtrlKey) newRow = 0;
                    newCol = orderedCols.First().Index;
                    break;
                case "End":
                    // Ctrl+End → last cell of last row; End → last cell of current row.
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
                    // Toggle row selection for the focused row.
                    if (TryGetRowItem(rowIndex, out var item) && item is not null)
                    {
                        OnRowClicked(item);
                        await InvokeAsync(StateHasChanged);
                    }
                    if (OnCellKeyDown.HasDelegate)
                        await OnCellKeyDown.InvokeAsync((rowIndex, colIndex, e));
                    return; // Don't move focus for selection keys
                }
            }

            _focusManager.SetActive(newRow, newCol);
            // Re-render first so the new cell gets tabindex=0, then focus it via JS.
            await InvokeAsync(StateHasChanged);
            await FocusCell(newRow, newCol);

            if (OnCellKeyDown.HasDelegate)
                await OnCellKeyDown.InvokeAsync((rowIndex, colIndex, e));
        }

        private void OnHeaderFocus(int colIndex)
        {
            // Keep header column context, but clear active row so ArrowDown starts from first body row.
            _focusManager.SetActive(-1, colIndex);
        }
    }
}
