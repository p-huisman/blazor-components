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
        public string? DisplayFormat { get; set; }

        [Parameter]
        public Expression<Func<TGridItem, TProp>>? SortByExpression { get; set; }

        [Parameter]
        public Expression<Func<TGridItem, TProp>>? FilterByExpression { get; set; }

        private GridSort<TGridItem>? _sortBy;

        public override IGridSort<TGridItem>? SortBy
        {
            get => _sortBy;
            set => _sortBy = value as GridSort<TGridItem>;
        }

        protected internal override void CellContent(RenderTreeBuilder builder, TGridItem item)
        {
            if (Value is null)
            {
                return;
            }

            var v = Value(item);
            if (v is null)
            {
                return;
            }

            if (!string.IsNullOrEmpty(DisplayFormat))
            {
                switch (v)
                {
                    case DateTime dt:
                        builder.AddContent(0, dt.ToString(DisplayFormat, System.Globalization.CultureInfo.CurrentCulture));
                        return;
                    case DateTimeOffset dto:
                        builder.AddContent(0, dto.ToString(DisplayFormat, System.Globalization.CultureInfo.CurrentCulture));
                        return;
                    case System.DateOnly d:
                        builder.AddContent(0, d.ToString(DisplayFormat, System.Globalization.CultureInfo.CurrentCulture));
                        return;
                    case IFormattable f:
                        builder.AddContent(0, f.ToString(DisplayFormat, System.Globalization.CultureInfo.CurrentCulture));
                        return;
                }
            }

            builder.AddContent(0, v?.ToString());
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
