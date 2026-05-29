using System;
using System.Threading.Tasks;

namespace Pggm.Components.Components.PggmToolbar;

public class PggmToolbarButtonState
{
    public PggmToolbarButtonState()
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

    public Func<Task>? OnClick { get; set; }
}
