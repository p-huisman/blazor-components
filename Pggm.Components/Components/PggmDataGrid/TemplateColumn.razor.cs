using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Microsoft.AspNetCore.Components.Web;

namespace Pggm.Components.Components.PggmDataGrid
{
    public partial class TemplateColumn<TGridItem> : ColumnBase<TGridItem>
    {
        [Parameter]
        public RenderFragment<TGridItem>? Template { get; set; }

        /// <summary>
        /// When true, clicking the template cell will toggle the selection for the row.
        /// The click handler stops propagation so the grid's row-click handler does not run twice.
        /// </summary>
        [Parameter]
        public bool ToggleSelection { get; set; } = true;

        private TGridItem Context { get; set; } = default!;

        protected internal override void CellContent(RenderTreeBuilder builder, TGridItem item)
        {
            if (Template is null)
                return;

            Context = item;

            if (ToggleSelection && InternalGridContext is not null)
            {
                var seq = 0;
                builder.OpenElement(seq++, "div");
                builder.AddAttribute(seq++, "onclick", EventCallback.Factory.Create<MouseEventArgs>(this, (MouseEventArgs __e) => InternalGridContext.ToggleItem(item)));
                builder.AddAttribute(seq++, "onclick:stopPropagation", true);
                builder.AddContent(seq++, Template(item));
                builder.CloseElement();
                return;
            }

            builder.AddContent(0, Template(item));
        }
        public override IGridSort<TGridItem>? SortBy { get; set; }
    }
}
