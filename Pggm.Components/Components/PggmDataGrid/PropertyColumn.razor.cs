using System;
using System.Linq.Expressions;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;

namespace Pggm.Components.Components.PggmDataGrid
{
    public partial class PropertyColumn<TGridItem, TProp> : ColumnBase<TGridItem>
    {
        [Parameter, EditorRequired]
        public Expression<Func<TGridItem, TProp>> Property { get; set; } = default!;

        /// <summary>
        /// Legacy/value-style accessor (Func). When provided it is used as a fallback
        /// to obtain the property value if the <see cref="Property"/> expression is not set.
        /// This preserves compatibility with tests and callers that supply a Func instead
        /// of an Expression.
        /// </summary>
        [Parameter]
        public Func<TGridItem, TProp>? Value { get; set; }

        [Parameter]
        public string? Format { get; set; }

        [Parameter]
        public IComparer<TProp>? Comparer { get; set; } = null;

        [Parameter]
        public override IGridSort<TGridItem>? SortBy { get; set; }

        protected internal override void CellContent(RenderTreeBuilder builder, TGridItem item)
        {
            TProp? v = default;
            if (Property is not null)
            {
                try
                {
                    var compiledPropertyExpression = Property.Compile();
                    v = compiledPropertyExpression(item);
                }
                catch
                {
                    // swallow; fallback to Value if available
                }
            }
            else if (Value is not null)
            {
                try
                {
                    v = Value(item);
                }
                catch
                {
                    // swallow
                }
            }
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
                if (SortBy is null)
                {
                    SortBy = Comparer is not null ? GridSort<TGridItem>.ByAscending(Property, Comparer) : GridSort<TGridItem>.ByAscending(Property);
                }
            }
        }
    }
}
