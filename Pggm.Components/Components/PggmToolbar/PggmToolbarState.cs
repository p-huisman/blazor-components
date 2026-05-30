using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pggm.Components.Components.PggmToolbar;

public class PggmToolbarState
{
    private readonly List<PggmToolbarButtonState> _buttons = new();
    private readonly List<PggmToolbarButtonGroupState> _groups = new();
    private readonly List<PggmToolbarSeparatorState> _separators = new();
    private readonly List<PggmToolbarDropdownState> _dropdowns = new();
    private readonly List<PggmToolbarCheckboxState> _checkboxes = new();
    private readonly List<PggmToolbarToggleButtonGroupState> _toggleGroups = new();

    /// <summary>
    /// Raised when any part of the toolbar state changes and the UI should re-render.
    /// </summary>
    public Action? OnChange { get; set; }

    /// <summary>Read-only view of buttons.</summary>
    public IReadOnlyList<PggmToolbarButtonState> Buttons => _buttons;

    /// <summary>Read-only view of groups.</summary>
    public IReadOnlyList<PggmToolbarButtonGroupState> Groups => _groups;

    /// <summary>Read-only view of separators.</summary>
    public IReadOnlyList<PggmToolbarSeparatorState> Separators => _separators;

    /// <summary>Read-only view of dropdowns.</summary>
    public IReadOnlyList<PggmToolbarDropdownState> Dropdowns => _dropdowns;

    /// <summary>Read-only view of checkboxes.</summary>
    public IReadOnlyList<PggmToolbarCheckboxState> Checkboxes => _checkboxes;

    /// <summary>Read-only view of toggle button groups.</summary>
    public IReadOnlyList<PggmToolbarToggleButtonGroupState> ToggleGroups => _toggleGroups;

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

    public void AddSeparator(PggmToolbarSeparatorState separator)
    {
        if (separator == null) throw new ArgumentNullException(nameof(separator));
        _separators.Add(separator);
        Notify();
    }

    public bool RemoveSeparator(string id)
    {
        var existing = _separators.FirstOrDefault(s => s.Id == id);
        if (existing is null) return false;
        var removed = _separators.Remove(existing);
        if (removed) Notify();
        return removed;
    }

    public void AddDropdown(PggmToolbarDropdownState dropdown)
    {
        if (dropdown == null) throw new ArgumentNullException(nameof(dropdown));
        _dropdowns.Add(dropdown);
        Notify();
    }

    public bool RemoveDropdown(string id)
    {
        var existing = _dropdowns.FirstOrDefault(d => d.Id == id);
        if (existing is null) return false;
        var removed = _dropdowns.Remove(existing);
        if (removed) Notify();
        return removed;
    }

    public void AddCheckbox(PggmToolbarCheckboxState checkbox)
    {
        if (checkbox == null) throw new ArgumentNullException(nameof(checkbox));
        _checkboxes.Add(checkbox);
        Notify();
    }

    public bool RemoveCheckbox(string id)
    {
        var existing = _checkboxes.FirstOrDefault(c => c.Id == id);
        if (existing is null) return false;
        var removed = _checkboxes.Remove(existing);
        if (removed) Notify();
        return removed;
    }

    public void AddToggleGroup(PggmToolbarToggleButtonGroupState toggleGroup)
    {
        if (toggleGroup == null) throw new ArgumentNullException(nameof(toggleGroup));
        _toggleGroups.Add(toggleGroup);
        Notify();
    }

    public bool RemoveToggleGroup(string id)
    {
        var existing = _toggleGroups.FirstOrDefault(t => t.Id == id);
        if (existing is null) return false;
        var removed = _toggleGroups.Remove(existing);
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
