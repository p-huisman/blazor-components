using System;

namespace Pggm.Components.Components.PggmToolbar;

public class PggmToolbarSeparatorState
{
    public PggmToolbarSeparatorState()
    {
        Id = Guid.NewGuid().ToString("D");
        Visible = true;
    }

    public string Id { get; }

    public bool Visible { get; set; }
}
