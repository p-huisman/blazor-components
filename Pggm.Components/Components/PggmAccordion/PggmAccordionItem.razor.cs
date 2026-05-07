using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmAccordionItem : PggmEventComponentBase
{
    public override string TagName => "pggm-accordion-item";

    /// <summary>
    /// Whether the accordion item is open/expanded
    /// </summary>
    [Parameter] public bool Open { get; set; }

    /// <summary>
    /// Whether the accordion item is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// Event callback fired when the accordion item is toggled (opened or closed)
    /// </summary>
    [Parameter] public EventCallback<EventArgs> OnAccordionItemToggle { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        if (OnAccordionItemToggle.HasDelegate)
        {
            yield return "accordionItemToggle";
        }
    }

    protected override Task OnParametersSetAsync()
    {
        if (OnAccordionItemToggle.HasDelegate)
        {
            RegisterEventHandler("accordionItemToggle", async (_) =>
            {
                if (OnAccordionItemToggle.HasDelegate)
                {
                    await OnAccordionItemToggle.InvokeAsync(EventArgs.Empty);
                }
            });
        }
        else
        {
            UnregisterEventHandler("accordionItemToggle");
        }

        return base.OnParametersSetAsync();
    }
}
