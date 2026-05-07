using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace Pggm.Components.Components.PggmDataGrid
{
    public readonly struct GridItemsProviderRequest<TGridItem>
    {
        public int StartIndex { get; init; }
        public int? Count { get; init; }
        public ColumnBase<TGridItem>? SortByColumn { get; init; }
        public bool SortByAscending { get; init; }
        public CancellationToken CancellationToken { get; init; }

        internal GridItemsProviderRequest(int startIndex, int? count, ColumnBase<TGridItem>? sortByColumn, bool sortByAscending, CancellationToken cancellationToken)
        {
            StartIndex = startIndex;
            Count = count;
            SortByColumn = sortByColumn;
            SortByAscending = sortByAscending;
            CancellationToken = cancellationToken;
        }

        public IQueryable<TGridItem> ApplySorting(IQueryable<TGridItem> source) =>
            SortByColumn?.SortBy?.Apply(source, SortByAscending) ?? source;

        public IReadOnlyCollection<SortedProperty> GetSortByProperties() =>
            SortByColumn?.SortBy?.ToPropertyList(SortByAscending) ?? Array.Empty<SortedProperty>();

        public bool IsSameRequest(GridItemsProviderRequest<TGridItem> req)
        {
            if (StartIndex != req.StartIndex) return false;
            if (Count != req.Count) return false;
            if (SortByColumn?.Index != req.SortByColumn?.Index) return false;
            if (SortByAscending != req.SortByAscending) return false;
            return true;
        }
    }
}
