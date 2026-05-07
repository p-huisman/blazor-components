using System.Collections.Generic;

namespace Pggm.Components.Components.PggmDataGrid
{
    /// <summary>
    /// Base class for grid items that support hierarchical display (tree grid).
    /// Wrap your data model in a class that inherits from this to enable tree-style rows.
    /// </summary>
    /// <typeparam name="TItem">The underlying business data type.</typeparam>
    /// <typeparam name="TGridItem">The concrete grid item type (the derived class itself).</typeparam>
    public class HierarchicalGridItem<TItem, TGridItem> : IHierarchicalGridItem
        where TItem : notnull
        where TGridItem : HierarchicalGridItem<TItem, TGridItem>
    {
        /// <summary>Gets or sets the underlying business data item for this row.</summary>
        public required TItem Item { get; init; }

        /// <summary>Gets the direct children of this item in the hierarchy.</summary>
        public List<TGridItem> Children { get; } = [];

        /// <inheritdoc/>
        public bool HasChildren => Children.Count > 0;

        /// <inheritdoc/>
        public int Depth { get; set; }

        /// <inheritdoc/>
        public bool IsHidden { get; set; }

        private bool _isCollapsed;

        /// <inheritdoc/>
        public bool IsCollapsed
        {
            get => _isCollapsed;
            set
            {
                _isCollapsed = value;
                UpdateHidden();
            }
        }

        /// <summary>
        /// Recursively updates <see cref="IsHidden"/> on all descendants
        /// whenever the collapsed state of this item changes.
        /// </summary>
        private void UpdateHidden()
        {
            var shouldHideChildren = IsHidden || IsCollapsed;
            foreach (var child in Children)
            {
                child.IsHidden = shouldHideChildren;
                child.UpdateHidden();
            }
        }
    }
}
