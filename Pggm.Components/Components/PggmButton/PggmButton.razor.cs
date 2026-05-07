using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

using Pggm.Components.Base;
using Pggm.Components.Constants;
using Pggm.Components.Enums;

namespace Pggm.Components;

public partial class PggmButton : PggmEventComponentBase
{
    public override string TagName => "button";

    /// <summary>
    /// The button variant (primary, secondary, etc.) as a type-safe enum.
    /// </summary>
    [Parameter] public ButtonAppearance Appearance { get; set; } = ButtonAppearance.Primary;

    /// <summary>
    /// Whether the button is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// The button type (button, submit, reset) as a type-safe enum.
    /// </summary>
    [Parameter] public ButtonType Type { get; set; } = ButtonType.Button;

    /// <summary>
    /// Event callback for button click
    /// </summary>
    [Parameter] public EventCallback<MouseEventArgs> OnClick { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        if (OnClick.HasDelegate)
        {
            yield return EventNames.Click;
        }
    }
    protected override Task OnParametersSetAsync()
    {
        // Register or unregister click handler based on delegate presence
        if (OnClick.HasDelegate)
        {
            RegisterEventHandler(EventNames.Click, async (eventData) =>
            {
                if (!Disabled && OnClick.HasDelegate)
                {
                    var mouseEventArgs = new MouseEventArgs
                    {
                        Detail = 1,
                        Button = 0,
                        Buttons = 1,
                        ClientX = 0,
                        ClientY = 0,
                        ScreenX = 0,
                        ScreenY = 0,
                        Type = "click"
                    };

                    await OnClick.InvokeAsync(mouseEventArgs);
                }
            });
        }
        else
        {
            UnregisterEventHandler(EventNames.Click);
        }

        return base.OnParametersSetAsync();
    }
}
