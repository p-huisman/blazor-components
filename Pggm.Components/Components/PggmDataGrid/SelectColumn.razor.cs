using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.AspNetCore.Components.Web;

namespace Pggm.Components.Components.PggmDataGrid
{
    public partial class SelectColumn<TGridItem> : ColumnBase<TGridItem>
    {
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
    }
}
