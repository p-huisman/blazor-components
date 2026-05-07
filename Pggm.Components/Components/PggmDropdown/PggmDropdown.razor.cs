using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmDropdown : PggmEventComponentBase
{
    public override string TagName => "pggm-dropdown";

    [Parameter] public bool Open { get; set; }
    [Parameter] public int? Distance { get; set; }
    [Parameter] public int? Offset { get; set; }
    [Parameter] public string? Align { get; set; }

    [Parameter] public EventCallback<object?> OnSelect { get; set; }
    [Parameter] public EventCallback OnOpen { get; set; }
    [Parameter] public EventCallback OnClose { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        if (OnSelect.HasDelegate) yield return "dropdownSelect";
        if (OnOpen.HasDelegate) yield return "dropdownOpen";
        if (OnClose.HasDelegate) yield return "dropdownClose";
    }

    protected override Task OnParametersSetAsync()
    {
        if (OnSelect.HasDelegate)
            RegisterEventHandler("dropdownSelect", async (eventData) => { await OnSelect.InvokeAsync(eventData); });
        else
            UnregisterEventHandler("dropdownSelect");

        if (OnOpen.HasDelegate)
            RegisterEventHandler("dropdownOpen", async (_) => { await OnOpen.InvokeAsync(); });
        else
            UnregisterEventHandler("dropdownOpen");

        if (OnClose.HasDelegate)
            RegisterEventHandler("dropdownClose", async (_) => { await OnClose.InvokeAsync(); });
        else
            UnregisterEventHandler("dropdownClose");

        return base.OnParametersSetAsync();
    }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-dropdown");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (Open) attributes["open"] = true;
        if (Distance.HasValue) attributes["distance"] = Distance.Value;
        if (Offset.HasValue) attributes["offset"] = Offset.Value;
        if (!string.IsNullOrEmpty(Align)) attributes["align"] = Align!;
    }
}
