using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pggm.Components.Components.PggmToolbar;

public class PggmToolbarToggleButtonGroupState
{
    public PggmToolbarToggleButtonGroupState()
    {
        Id = Guid.NewGuid().ToString("D");
        Visible = true;
        Buttons = new List<PggmToolbarToggleButtonState>();
    }

    public string Id { get; }

    public string Label { get; set; } = string.Empty;

    public bool Visible { get; set; }

    public bool AllowMultiple { get; set; }

    public List<PggmToolbarToggleButtonState> Buttons { get; }

    public Func<string, bool, Task>? OnToggle { get; set; }

    public void Toggle(string buttonId)
    {
        var btn = Buttons.FirstOrDefault(b => b.Id == buttonId);
        if (btn is null || btn.Disabled) return;

        if (!AllowMultiple)
        {
            foreach (var other in Buttons.Where(b => b.Id != buttonId))
            {
                other.Selected = false;
            }
        }

        btn.Selected = !btn.Selected;
    }
}

public class PggmToolbarToggleButtonState
{
    public PggmToolbarToggleButtonState()
    {
        Id = Guid.NewGuid().ToString("D");
        Visible = true;
    }

    public string Id { get; }

    public string Label { get; set; } = string.Empty;

    public string? Icon { get; set; }

    public bool IconOnly { get; set; }

    public bool Visible { get; set; }

    public bool Disabled { get; set; }

    public bool Selected { get; set; }
}
