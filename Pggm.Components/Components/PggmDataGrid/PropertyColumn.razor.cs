using System;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using System.Linq.Expressions;

namespace Pggm.Components.Components.PggmDataGrid
{
    public partial class PropertyColumn<TGridItem, TProp> : ColumnBase<TGridItem>
    {
        [Parameter, EditorRequired]
        public Expression<Func<TGridItem, TProp>> Property { get; set; } = default!;

        [Parameter]
        public string? Format { get; set; }

        [Parameter]
        public IComparer<TProp>? Comparer { get; set; } = null;

        private GridSort<TGridItem>? _sortBy;
        private IGridSort<TGridItem>? _customSortBy;

        [Parameter]
        public override IGridSort<TGridItem>? SortBy
        {
            get => _customSortBy ?? _sortBy;
            set => _customSortBy = value;
        }

        protected internal override void CellContent(RenderTreeBuilder builder, TGridItem item)
        {
            if (Property is null)
            {
                return;
            }

            var compiledPropertyExpression = Property.Compile();
            var v = compiledPropertyExpression(item);
            if (v is null)
            {
                return;
            }

            if (!string.IsNullOrEmpty(Format))
            {
                switch (v)
                {
                    case DateTime dt:
                        builder.AddContent(0, dt.ToString(Format, System.Globalization.CultureInfo.CurrentCulture));
                        return;
                    case DateTimeOffset dto:
                        builder.AddContent(0, dto.ToString(Format, System.Globalization.CultureInfo.CurrentCulture));
                        return;
                    case System.DateOnly d:
                        builder.AddContent(0, d.ToString(Format, System.Globalization.CultureInfo.CurrentCulture));
                        return;
                    case IFormattable f:
                        builder.AddContent(0, f.ToString(Format, System.Globalization.CultureInfo.CurrentCulture));
                        return;
                }
            }

            builder.AddContent(0, v?.ToString());
        }

        protected override void OnInitialized()
        {
            base.OnInitialized();
            if (Sortable == true && Property is not null)
            {
                _sortBy = Comparer is not null ? GridSort<TGridItem>.ByAscending(Property, Comparer) : GridSort<TGridItem>.ByAscending(Property);
            }
        }
    }
}
