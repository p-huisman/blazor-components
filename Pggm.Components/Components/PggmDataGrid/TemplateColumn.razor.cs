using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace Pggm.Components.Components.PggmDataGrid
{
    public partial class TemplateColumn<TGridItem> : ColumnBase<TGridItem>
    {
        [Parameter]
        public RenderFragment<TGridItem>? Template { get; set; }

        private TGridItem Context { get; set; } = default!;

        protected internal override void CellContent(RenderTreeBuilder builder, TGridItem item)
        {
            if (Template is not null)
            {
                Context = item;
                builder.AddContent(0, Template(item));
            }
        }
        public override IGridSort<TGridItem>? SortBy { get; set; }
    }
}
