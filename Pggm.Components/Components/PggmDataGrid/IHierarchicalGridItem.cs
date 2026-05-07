namespace Pggm.Components.Components.PggmDataGrid
{
    /// <summary>
    /// Defines the contract for grid items that participate in a hierarchy (tree grid).
    /// </summary>
    public interface IHierarchicalGridItem
    {
        /// <summary>Gets or sets the depth of this item in the hierarchy (0 = root level).</summary>
        int Depth { get; set; }

        /// <summary>Gets or sets a value indicating whether this item is hidden because an ancestor is collapsed.</summary>
        bool IsHidden { get; set; }

        /// <summary>Gets or sets a value indicating whether this item's children are collapsed.</summary>
        bool IsCollapsed { get; set; }

        /// <summary>Gets a value indicating whether this item has child items.</summary>
        bool HasChildren { get; }
    }
}
