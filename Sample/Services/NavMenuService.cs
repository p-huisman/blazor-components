using System;
using System.Collections.Generic;

using Pggm.Components.Models;

namespace Pggm.Components.Sample.Services
{
    public class NavMenuService : IDisposable
    {
        private readonly List<NavMenuItem> _items = new List<NavMenuItem>();
        public IReadOnlyList<NavMenuItem> Items => _items.AsReadOnly();

        public event Action? OnChange;

        public void Add(NavMenuItem item)
        {
            if (item == null) throw new ArgumentNullException(nameof(item));
            _items.Add(item);
            NotifyStateChanged();
        }

        public void Remove(NavMenuItem item)
        {
            if (item == null) throw new ArgumentNullException(nameof(item));
            _items.Remove(item);
            NotifyStateChanged();
        }

        public void Clear()
        {
            _items.Clear();
            NotifyStateChanged();
        }

        public void Toggle(NavMenuItem item)
        {
            if (item == null) throw new ArgumentNullException(nameof(item));
            item.IsOpen = !item.IsOpen;
            NotifyStateChanged();
        }

        public void Open(NavMenuItem item)
        {
            if (item == null) throw new ArgumentNullException(nameof(item));
            if (!item.IsOpen) { item.IsOpen = true; NotifyStateChanged(); }
        }

        public void Close(NavMenuItem item)
        {
            if (item == null) throw new ArgumentNullException(nameof(item));
            if (item.IsOpen) { item.IsOpen = false; NotifyStateChanged(); }
        }

        public NavMenuItem? FindByTitle(string title)
        {
            if (title == null) return null;
            foreach (var i in _items)
            {
                var found = FindRecursive(i, title);
                if (found != null) return found;
            }
            return null;
        }

        private NavMenuItem? FindRecursive(NavMenuItem node, string title)
        {
            if (string.Equals(node.Title, title, StringComparison.Ordinal)) return node;
            foreach (var c in node.Children)
            {
                var found = FindRecursive(c, title);
                if (found != null) return found;
            }
            return null;
        }

        private void NotifyStateChanged() => OnChange?.Invoke();

        // Allow external callers to request a notification when they update items
        public void Notify() => NotifyStateChanged();

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                OnChange = null;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
