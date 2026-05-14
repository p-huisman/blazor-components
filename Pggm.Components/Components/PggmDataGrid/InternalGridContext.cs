using System.Collections.Generic;

namespace Pggm.Components.Components.PggmDataGrid
{
    public class GridContext<TGridItem>
    {
        /// <summary>
        /// When set, selection comparisons use this key selector instead of object identity.
        /// Assigned from <see cref="PggmDataGrid{TGridItem}.ItemId"/>.
        /// </summary>
        internal System.Func<TGridItem, object>? ItemKeySelector { get; set; }

        internal List<ColumnBase<TGridItem>> Columns { get; } = new();

        // Active column filters keyed by field identifier
        internal Dictionary<string, FilterDescriptor> Filters { get; } = new();

        // Event raised when filters change (used to notify grid/remote provider)
        internal event Action? FiltersChanged;

        // Selection state for simple SelectColumn support
        internal HashSet<TGridItem> SelectedItems { get; } = new();
        internal bool SingleSelect { get; set; } = false;

        // Optional callback set by the grid to enumerate current visible items
        internal System.Func<IEnumerable<TGridItem>?>? GetCurrentItems { get; set; }

        // Notify grid when selection changes so it can re-render
        internal event System.Action? SelectionChanged;

        // (Removed SuppressNextRowClick) Row click suppression was handled via DOM stopPropagation.

        public void AddColumn(ColumnBase<TGridItem> column, int index, bool isDefaultSort)
        {
            // Do not set the component parameter `Index` here (Blazor warns when component parameters
            // are set outside of the component). Columns should set their own `Index` parameter.
            Columns.Add(column);
        }

        public void RemoveColumn(ColumnBase<TGridItem> column)
        {
            Columns.Remove(column);
        }

        /// <summary>
        /// Set or update a filter for the specified field.
        /// </summary>
        internal void SetFilter(string field, FilterDescriptor? descriptor)
        {
            if (string.IsNullOrWhiteSpace(field)) return;
            if (descriptor is null)
            {
                if (Filters.Remove(field))
                    FiltersChanged?.Invoke();
                return;
            }
            descriptor.Field = field;
            Filters[field] = descriptor;
            FiltersChanged?.Invoke();
        }

        /// <summary>
        /// Clear the filter for the specified field.
        /// </summary>
        internal void ClearFilter(string field)
        {
            if (string.IsNullOrWhiteSpace(field)) return;
            if (Filters.Remove(field))
                FiltersChanged?.Invoke();
        }

        /// <summary>
        /// Get active filters snapshot.
        /// </summary>
        internal IReadOnlyDictionary<string, FilterDescriptor> GetFilters() => Filters;

        public bool IsSelected(TGridItem item)
        {
            if (item is null) return false;
            if (ItemKeySelector is null) return SelectedItems.Contains(item);

            var key = ItemKeySelector(item);
            foreach (var it in SelectedItems)
                if (Equals(ItemKeySelector(it), key)) return true;
            return false;
        }

        public void ToggleItem(TGridItem item)
        {
            if (item is null) return;

            if (ItemKeySelector is null)
            {
                // No key selector: use reference/value equality directly.
                if (SingleSelect)
                {
                    SelectedItems.Clear();
                    SelectedItems.Add(item);
                }
                else
                {
                    if (!SelectedItems.Remove(item))
                        SelectedItems.Add(item);
                }
                SelectionChanged?.Invoke();
                return;
            }

            // Key-aware toggle: find existing entry with same key.
            var key = ItemKeySelector(item);
            TGridItem? existing = default;
            foreach (var it in SelectedItems)
            {
                if (Equals(ItemKeySelector(it), key))
                {
                    existing = it;
                    break;
                }
            }

            if (SingleSelect)
            {
                SelectedItems.Clear();
                SelectedItems.Add(item);
            }
            else
            {
                if (existing is not null)
                    SelectedItems.Remove(existing);
                else
                    SelectedItems.Add(item);
            }
            SelectionChanged?.Invoke();
        }

        internal void ClearSelection()
        {
            if (SelectedItems.Count > 0)
            {
                SelectedItems.Clear();
                SelectionChanged?.Invoke();
            }
        }

        internal void SelectAll()
        {
            var items = GetCurrentItems?.Invoke();
            if (items is null) return;
            SelectedItems.Clear();
            foreach (var it in items)
                SelectedItems.Add(it);
            SelectionChanged?.Invoke();
        }

        /// <summary>
        /// Replace the current selection with the provided items.
        /// </summary>
        internal void SetSelectedItems(IEnumerable<TGridItem>? items)
        {
            SelectedItems.Clear();
            if (items is null) { SelectionChanged?.Invoke(); return; }
            foreach (var it in items)
            {
                if (it is null) continue;
                SelectedItems.Add(it);
            }
            SelectionChanged?.Invoke();
        }

        internal bool IsAllSelected()
        {
            var items = GetCurrentItems?.Invoke();
            if (items is null) return false;
            var any = false;
            var all = true;
            foreach (var it in items)
            {
                any = true;
                if (!IsSelected(it)) { all = false; break; }
            }
            return any && all;
        }
    }
}
