using System;
using System.Collections.Generic;

namespace Pggm.Components.Components.PggmToolbar;

public class PggmToolbarButtonGroupState
{
    public PggmToolbarButtonGroupState()
    {
        Id = Guid.NewGuid().ToString("D");
        Buttons = new List<PggmToolbarButtonState>();
        Visible = true;
    }

    public string Id { get; }

    public string Label { get; set; } = string.Empty;

    public bool Visible { get; set; }

    public List<PggmToolbarButtonState> Buttons { get; }
}
