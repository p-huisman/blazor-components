using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Rendering;
using Pggm.Components.Base;

namespace Pggm.Components.Components.PggmDataGrid
{
    public abstract partial class ColumnBase<TGridItem> : PggmComponentBase
    {
        public override string TagName => "pggm-column";
        [CascadingParameter]
        internal InternalGridContext<TGridItem> InternalGridContext { get; set; } = default!;

        [Parameter]
        public string? Title { get; set; }

        [Parameter]
        public int Index { get; set; }

        [Parameter]
        public string? Class { get; set; }

        [Parameter]
        public string? Style { get; set; }

        [Parameter]
        public bool Resizable { get; set; }

        [Parameter]
        public string? Width { get; set; }

        [Parameter]
        public ColumnAlignment Alignment { get; set; } = ColumnAlignment.Left;

        [Parameter]
        public bool? Sortable { get; set; }

        [Parameter]
        public bool IsDefaultSortColumn { get; set; }

        [Parameter]
        public bool ShowSortButton { get; set; } = true;

        /// <summary>
        /// When <c>true</c>, the column exposes a filter UI and participates in grid filtering.
        /// </summary>
        [Parameter]
        public bool Filterable { get; set; }

        /// <summary>
        /// Optional field identifier used for filter keys. If not set the column Title may be used.
        /// </summary>
        [Parameter]
        public string? Field { get; set; }

        /// <summary>
        /// The type of filter to show for this column. Defaults to String.
        /// </summary>
        [Parameter]
        public FilterType FilterType { get; set; } = FilterType.String;

        /// <summary>
        /// When <c>true</c>, this column renders the expand/collapse toggle for hierarchical (tree) rows.
        /// Only one column per grid should have this set to <c>true</c>, and it should be the first column.
        /// </summary>
        [Parameter]
        public bool HierarchicalToggle { get; set; }

        /// <summary>
        /// Gets or sets the minimum width this column can be resized to.
        /// Defaults to <c>"50px"</c>. Used by the column resize handle to prevent the column from
        /// becoming too narrow. Ignored when <c>ResizableColumns</c> is <c>false</c> on the parent grid.
        /// </summary>
        [Parameter]
        public string MinWidth { get; set; } = "50px";

        public abstract IGridSort<TGridItem>? SortBy { get; set; }

        protected internal virtual RenderFragment HeaderTitleContent => builder => builder.AddContent(0, Title);

        protected internal RenderFragment<TGridItem> CellContentFragment => item => builder =>
        {
            // default: call CellContent to allow derived classes to render
            CellContent(builder, item);
        };

        protected internal abstract void CellContent(RenderTreeBuilder builder, TGridItem item);

        protected override void OnInitialized()
        {
            InternalGridContext.AddColumn(this, Index, IsDefaultSortColumn);
            base.OnInitialized();
        }

        protected override ValueTask DisposeAsyncCore()
        {
            InternalGridContext.RemoveColumn(this);
            return base.DisposeAsyncCore();
        }
    }
}
