using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmComboboxItem : PggmEventComponentBase
{
    public override string TagName => "pggm-combobox-item";

    /// <summary>The value submitted when this item is selected.</summary>
    [Parameter] public string? Value { get; set; }

    /// <summary>Whether the item is disabled.</summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>Whether the item is currently selected.</summary>
    [Parameter] public bool Selected { get; set; }

    /// <summary>Fired when this item is selected.</summary>
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
                    await OnSelect.InvokeAsync(eventData);
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
        await DesignSystemService.LoadScriptAsync("pggm-combobox");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (!string.IsNullOrEmpty(Value)) attributes["value"] = Value;
        if (Disabled) attributes["disabled"] = true; else attributes.Remove("disabled");
        if (Selected) attributes["selected"] = true; else attributes.Remove("selected");
    }
}
