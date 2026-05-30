using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pggm.Components.Components.PggmToolbar;

public class PggmToolbarDropdownState
{
    public PggmToolbarDropdownState()
    {
        Id = Guid.NewGuid().ToString("D");
        Visible = true;
        Items = new List<PggmToolbarDropdownItemState>();
    }

    public string Id { get; }

    public string Label { get; set; } = string.Empty;

    public string? Icon { get; set; }

    public bool IconOnly { get; set; }

    public bool Visible { get; set; }

    public bool Disabled { get; set; }

    public List<PggmToolbarDropdownItemState> Items { get; }

    public Func<string, Task>? OnItemSelected { get; set; }
}

public class PggmToolbarDropdownItemState
{
    public PggmToolbarDropdownItemState()
    {
        Id = Guid.NewGuid().ToString("D");
        Visible = true;
    }

    public string Id { get; }

    public string Label { get; set; } = string.Empty;

    public string? Value { get; set; }

    public bool Visible { get; set; }

    public bool Disabled { get; set; }

    public bool Checked { get; set; }
}
