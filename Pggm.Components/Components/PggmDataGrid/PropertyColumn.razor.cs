using System;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using System.Linq.Expressions;

namespace Pggm.Components.Components.PggmDataGrid
{
    public partial class PropertyColumn<TGridItem, TProp> : ColumnBase<TGridItem>
    {
        [Parameter]
        public Func<TGridItem, TProp>? Value { get; set; }

        [Parameter]
        public Expression<Func<TGridItem, TProp>>? SortByExpression { get; set; }

        private GridSort<TGridItem>? _sortBy;

        public override IGridSort<TGridItem>? SortBy
        {
            get => _sortBy;
            set => _sortBy = value as GridSort<TGridItem>;
        }

        protected internal override void CellContent(RenderTreeBuilder builder, TGridItem item)
        {
            if (Value is not null)
            {
                var v = Value(item);
                builder.AddContent(0, v?.ToString());
            }
        }

        protected override void OnInitialized()
        {
            base.OnInitialized();
            if (SortByExpression is not null)
            {
                _sortBy = GridSort<TGridItem>.CreateFromExpression(SortByExpression);
            }
        }
    }
}
