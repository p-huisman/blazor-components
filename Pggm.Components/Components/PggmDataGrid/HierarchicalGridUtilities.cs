using System;
using System.Collections.Generic;
using System.Linq;

namespace Pggm.Components.Components.PggmDataGrid
{
    /// <summary>
    /// Utility methods for building hierarchical data grids from flat lists.
    /// </summary>
    public static class HierarchicalGridUtilities
    {
        /// <summary>
        /// Converts a flat list of grid items into a hierarchically ordered list suitable
        /// for rendering in a <see cref="PggmDataGrid{TGridItem}"/>.
        /// Items are ordered depth-first (parent immediately followed by its children).
        /// Each item's <see cref="IHierarchicalGridItem.Depth"/>,
        /// <see cref="IHierarchicalGridItem.IsHidden"/>, and
        /// <see cref="IHierarchicalGridItem.IsCollapsed"/> are set by this method.
        /// </summary>
        /// <typeparam name="TGridItem">The concrete grid item type.</typeparam>
        /// <typeparam name="TItem">The underlying business data type.</typeparam>
        /// <param name="initialItems">The flat list of all grid items to order.</param>
        /// <param name="getId">Selector returning a unique string ID for an item.</param>
        /// <param name="getParentId">Selector returning the parent item ID, or <c>null</c>/<c>""</c> for root items.</param>
        /// <param name="isCollapsed">Selector returning the initial collapsed state for an item.</param>
        /// <returns>A new list ordered depth-first with hierarchy metadata set on each item.</returns>
        public static List<TGridItem> OrderHierarchically<TGridItem, TItem>(
            List<TGridItem> initialItems,
            Func<TItem, string> getId,
            Func<TItem, string?> getParentId,
            Func<TItem, bool> isCollapsed)
            where TGridItem : HierarchicalGridItem<TItem, TGridItem>
            where TItem : notnull
        {
            var result = new List<TGridItem>();

            foreach (var item in initialItems.Where(it => !HasVisibleParent(it)))
            {
                item.Depth = 0;
                item.IsCollapsed = isCollapsed(item.Item);
                item.IsHidden = false;

                result.Add(item);

                AddChildrenRecursive(item.Item, item, depth: 1, hidden: item.IsCollapsed);
            }

            return result;

            void AddChildrenRecursive(TItem parentItem, TGridItem parentWrapper, int depth, bool hidden)
            {
                var parentId = getId(parentItem);
                foreach (var child in initialItems.Where(it => getParentId(it.Item) == parentId))
                {
                    child.Depth = depth;
                    child.IsCollapsed = isCollapsed(child.Item);
                    child.IsHidden = hidden;

                    parentWrapper.Children.Add(child);
                    result.Add(child);

                    AddChildrenRecursive(child.Item, child, depth + 1, hidden: child.IsHidden || child.IsCollapsed);
                }
            }

            bool HasVisibleParent(TGridItem wrapper)
            {
                var parentId = getParentId(wrapper.Item);
                if (string.IsNullOrEmpty(parentId))
                    return false;

                return initialItems.Any(other => getId(other.Item) == parentId);
            }
        }
    }
}
