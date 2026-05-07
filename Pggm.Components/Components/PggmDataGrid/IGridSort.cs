using System.Collections.Generic;
using System.Linq;

namespace Pggm.Components.Components.PggmDataGrid
{
    public interface IGridSort<TGridItem>
    {
        IReadOnlyCollection<SortedProperty> ToPropertyList(bool ascending);
        IOrderedQueryable<TGridItem> Apply(IQueryable<TGridItem> queryable, bool ascending);
    }
}
