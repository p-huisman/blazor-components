using System;
using System.Threading.Tasks;

namespace Pggm.Components.Components.PggmToolbar;

public class PggmToolbarCheckboxState
{
    public PggmToolbarCheckboxState()
    {
        Id = Guid.NewGuid().ToString("D");
        Visible = true;
    }

    public string Id { get; }

    public string Label { get; set; } = string.Empty;

    public bool Checked { get; set; }

    public bool Visible { get; set; }

    public bool Disabled { get; set; }

    public Func<bool, Task>? OnCheckedChanged { get; set; }
}
