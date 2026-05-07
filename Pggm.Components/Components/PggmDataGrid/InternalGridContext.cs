using System.Collections.Generic;

namespace Pggm.Components.Components.PggmDataGrid
{
    public class InternalGridContext<TGridItem>
    {
        internal List<ColumnBase<TGridItem>> Columns { get; } = new();

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

        internal bool IsSelected(TGridItem item) => SelectedItems.Contains(item);

        internal void ToggleItem(TGridItem item)
        {
            if (SingleSelect)
            {
                SelectedItems.Clear();
                SelectedItems.Add(item);
            }
            else
            {
                if (!SelectedItems.Remove(item))
                {
                    SelectedItems.Add(item);
                }
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

        internal bool IsAllSelected()
        {
            var items = GetCurrentItems?.Invoke();
            if (items is null) return false;
            var any = false;
            var all = true;
            foreach (var it in items)
            {
                any = true;
                if (!SelectedItems.Contains(it)) { all = false; break; }
            }
            return any && all;
        }
    }
}
