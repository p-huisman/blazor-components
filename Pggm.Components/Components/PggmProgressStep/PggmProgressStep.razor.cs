using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmProgressStep : PggmComponentBase
{
    public override string TagName => "pggm-progress-step";

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-wizard");
        await base.InitializeWebComponentAsync();
    }

    /// <summary>
    /// Whether this is the last step in the progress indicator
    /// </summary>
    [Parameter] public bool Last { get; set; }

    /// <summary>
    /// Whether this step has been completed
    /// </summary>
    [Parameter] public bool Completed { get; set; }

    /// <summary>
    /// Whether this is the current step
    /// </summary>
    [Parameter] public bool Current { get; set; }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (Last) attributes["last"] = true; else attributes.Remove("last");
        if (Completed) attributes["completed"] = true; else attributes.Remove("completed");
        if (Current) attributes["current"] = true; else attributes.Remove("current");
    }
}
