using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmDropdownItem : PggmEventComponentBase
{
    public override string TagName => "pggm-dropdown-item";

    [Parameter] public bool Disabled { get; set; }
    [Parameter] public bool Checked { get; set; }
    [Parameter] public string? Value { get; set; }

    [Parameter] public EventCallback<object?> OnSelect { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        if (OnSelect.HasDelegate) yield return "itemSelect";
    }

    protected override Task OnParametersSetAsync()
    {
        if (OnSelect.HasDelegate)
        {
            RegisterEventHandler("itemSelect", async (eventData) =>
            {
                if (OnSelect.HasDelegate)
                {
                    await OnSelect.InvokeAsync(eventData);
                }
            });
        }
        else
        {
            UnregisterEventHandler("itemSelect");
        }

        return base.OnParametersSetAsync();
    }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-dropdown");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (Disabled) attributes["disabled"] = true; else attributes.Remove("disabled");
        if (Checked) attributes["checked"] = true; else attributes.Remove("checked");
        if (!string.IsNullOrEmpty(Value)) attributes["value"] = Value!;
    }
}
