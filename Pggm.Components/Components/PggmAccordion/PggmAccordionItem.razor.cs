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
    [Parameter] public EventCallback<EventArgs> OnToggle { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        if (OnToggle.HasDelegate)
        {
            yield return "accordionItemToggle";
        }
    }

    protected override Task OnParametersSetAsync()
    {
        if (OnToggle.HasDelegate)
        {
            RegisterEventHandler("accordionItemToggle", async (_) =>
            {
                if (OnToggle.HasDelegate)
                {
                    await OnToggle.InvokeAsync(EventArgs.Empty);
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
