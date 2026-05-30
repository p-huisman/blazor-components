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
    /// The button size (small, medium, large) as a type-safe enum.
    /// </summary>
    [Parameter] public ButtonSize Size { get; set; } = ButtonSize.Medium;

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

    /// <summary>
    /// Whether the button shows a loading spinner
    /// </summary>
    [Parameter] public bool IsLoading { get; set; } = false;

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

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (IsLoading) attributes["is-loading"] = true; else attributes.Remove("is-loading");
    }
}
