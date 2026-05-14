using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.AspNetCore.Components.Web;

namespace Pggm.Components.Components.PggmDataGrid
{
    public partial class SelectColumn<TGridItem> : ColumnBase<TGridItem>
    {
        /// <summary>
        /// The currently-selected items. Supports two-way binding via <c>@bind-SelectedItems</c>.
        /// When set as a parameter the grid selection is updated; when the user changes the
        /// selection the updated list is pushed back to the parent via <see cref="SelectedItemsChanged"/>.
        /// </summary>
        [Parameter]
        public IEnumerable<TGridItem>? SelectedItems { get; set; }

        /// <summary>Raised whenever the selection changes. Paired with <see cref="SelectedItems"/>.</summary>
        [Parameter]
        public EventCallback<IEnumerable<TGridItem>> SelectedItemsChanged { get; set; }

        // Last reference pushed into the grid — lets OnParametersSet skip redundant SetSelectedItems calls.
        private IEnumerable<TGridItem>? _appliedSelectedItems;

        // Prevents SelectionChanged from echoing back to the parent when we ourselves caused the change.
        private bool _updatingFromParent;

        private async void OnInternalSelectionChanged()
        {
            if (_updatingFromParent) return;

            var snapshot = InternalGridContext.SelectedItems.ToList();

            // Pre-record the snapshot so OnParametersSet (triggered by the @bind callback re-render)
            // recognises the reference and skips a redundant SetSelectedItems call.
            _appliedSelectedItems = snapshot;

            if (SelectedItemsChanged.HasDelegate)
                await SelectedItemsChanged.InvokeAsync(snapshot);

            await InvokeAsync(StateHasChanged);
        }

        public override IGridSort<TGridItem>? SortBy { get; set; }

        /// <summary>
        /// When false, hides the "select all" checkbox in the column header.
        /// Useful for virtualized grids where the full data set is not loaded at once.
        /// Defaults to true.
        /// </summary>
        [Parameter]
        public bool ShowSelectAll { get; set; } = true;

        protected internal override void CellContent(RenderTreeBuilder builder, TGridItem item)
        {
            var seq = 0;
            var isSingle = InternalGridContext.SingleSelect;
            builder.OpenElement(seq++, "input");
            builder.AddAttribute(seq++, "type", isSingle ? "radio" : "checkbox");
            builder.AddAttribute(seq++, "class", "pggm-data-grid-table-" + (isSingle ? "radio" : "checkbox"));

            builder.AddAttribute(seq++, "checked", InternalGridContext.IsSelected(item));
            if (isSingle)
            {
                builder.AddAttribute(seq++, "name", "pggm-datagrid-single-select");
                builder.AddAttribute(seq++, "value", item?.GetHashCode().ToString() ?? string.Empty);
            }
            builder.AddAttribute(seq++, "onchange", EventCallback.Factory.Create<ChangeEventArgs>(this, (ChangeEventArgs __e) => InternalGridContext.ToggleItem(item)));
            builder.AddAttribute(seq++, "onclick", "event.stopPropagation();");
            builder.CloseElement();
        }

        protected internal override RenderFragment HeaderTitleContent => builder =>
        {
            if (!ShowSelectAll || InternalGridContext.SingleSelect) return;
            var seq = 0;
            builder.OpenElement(seq++, "input");
            builder.AddAttribute(seq++, "type", "checkbox");
            builder.AddAttribute(seq++, "class", "pggm-data-grid-table-checkbox");
            builder.AddAttribute(seq++, "checked", InternalGridContext.IsAllSelected());
            builder.AddAttribute(seq++, "onchange", EventCallback.Factory.Create<ChangeEventArgs>(this, (ChangeEventArgs __e) => ToggleSelectAll()));
            builder.AddAttribute(seq++, "onclick", "event.stopPropagation();");
            builder.CloseElement();
        };

        private void ToggleSelectAll()
        {
            if (InternalGridContext.IsAllSelected())
                InternalGridContext.ClearSelection();
            else
                InternalGridContext.SelectAll();
        }

        protected override void OnInitialized()
        {
            base.OnInitialized();
            if (InternalGridContext is not null)
            {
                InternalGridContext.SelectionChanged += OnInternalSelectionChanged;
                if (SelectedItems is not null)
                {
                    _appliedSelectedItems = SelectedItems;
                    _updatingFromParent = true;
                    try { InternalGridContext.SetSelectedItems(SelectedItems); }
                    finally { _updatingFromParent = false; }
                }
            }
        }

        protected override void OnParametersSet()
        {
            base.OnParametersSet();
            // Only sync from parent when in two-way binding mode (@bind-SelectedItems).
            // A one-way SelectedItems (e.g. a LINQ expression) creates a new object reference
            // on every render, so applying it unconditionally would cause an infinite render loop
            // via SetSelectedItems → SelectionChanged → StateHasChanged → re-render → repeat.
            // One-way callers get their initial value applied in OnInitialized; nothing more needed.
            if (SelectedItemsChanged.HasDelegate &&
                !ReferenceEquals(SelectedItems, _appliedSelectedItems) &&
                InternalGridContext is not null)
            {
                _appliedSelectedItems = SelectedItems;
                _updatingFromParent = true;
                try { InternalGridContext.SetSelectedItems(SelectedItems); }
                finally { _updatingFromParent = false; }
            }
        }

        protected override ValueTask DisposeAsyncCore()
        {
            if (InternalGridContext is not null)
                InternalGridContext.SelectionChanged -= OnInternalSelectionChanged;
            return base.DisposeAsyncCore();
        }
    }
}
