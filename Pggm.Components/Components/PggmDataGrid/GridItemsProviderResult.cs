using System.Collections.Generic;

namespace Pggm.Components.Components.PggmDataGrid
{
    public readonly struct GridItemsProviderResult<TGridItem>
    {
        public ICollection<TGridItem> Items { get; init; }
        public int TotalItemCount { get; init; }
    }

    public static class GridItemsProviderResult
    {
        public static GridItemsProviderResult<TGridItem> From<TGridItem>(ICollection<TGridItem> items, int totalItemCount)
            => new() { Items = items, TotalItemCount = totalItemCount };
    }
}
