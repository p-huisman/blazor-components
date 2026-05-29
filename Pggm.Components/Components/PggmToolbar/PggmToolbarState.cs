using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pggm.Components.Components.PggmToolbar;

public class PggmToolbarState
{
    private readonly List<PggmToolbarButtonState> _buttons = new();
    private readonly List<PggmToolbarButtonGroupState> _groups = new();

    /// <summary>
    /// Raised when any part of the toolbar state changes and the UI should re-render.
    /// </summary>
    public Action? OnChange { get; set; }

    /// <summary>Read-only view of buttons.</summary>
    public IReadOnlyList<PggmToolbarButtonState> Buttons => _buttons;

    /// <summary>Read-only view of groups.</summary>
    public IReadOnlyList<PggmToolbarButtonGroupState> Groups => _groups;

    public void Notify()
    {
        OnChange?.Invoke();
    }

    public void AddButton(PggmToolbarButtonState button)
    {
        if (button == null) throw new ArgumentNullException(nameof(button));
        _buttons.Add(button);
        Notify();
    }

    public bool RemoveButton(string id)
    {
        var existing = _buttons.FirstOrDefault(b => b.Id == id);
        if (existing is null) return false;
        var removed = _buttons.Remove(existing);
        if (removed) Notify();
        return removed;
    }

    public void AddGroup(PggmToolbarButtonGroupState group)
    {
        if (group == null) throw new ArgumentNullException(nameof(group));
        _groups.Add(group);
        Notify();
    }

    public bool RemoveGroup(string id)
    {
        var existing = _groups.FirstOrDefault(g => g.Id == id);
        if (existing is null) return false;
        var removed = _groups.Remove(existing);
        if (removed) Notify();
        return removed;
    }

    public bool SetButtonVisible(string id, bool visible)
    {
        var btn = _buttons.FirstOrDefault(b => b.Id == id);
        if (btn is null) return false;
        btn.Visible = visible;
        Notify();
        return true;
    }

    public bool SetButtonDisabled(string id, bool disabled)
    {
        var btn = _buttons.FirstOrDefault(b => b.Id == id);
        if (btn is null) return false;
        btn.Disabled = disabled;
        Notify();
        return true;
    }
}
