using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using Microsoft.Extensions.Logging;

using Pggm.Components.Base;
using Pggm.Components.Models.Wizard;

namespace Pggm.Components;

public partial class PggmWizard : PggmEventComponentBase
{
    public override string TagName => "pggm-wizard";

    /// <summary>
    /// The HTTP method to use for form submission (GET or POST)
    /// </summary>
    [Parameter] public string Method { get; set; } = "POST";

    /// <summary>
    /// The URL to submit the form to
    /// </summary>
    [Parameter] public string Action { get; set; } = "";

    /// <summary>
    /// Label for the next button
    /// </summary>
    [Parameter] public string NextLabel { get; set; } = "Volgende";

    /// <summary>
    /// Label for the back button
    /// </summary>
    [Parameter] public string BackLabel { get; set; } = "Vorige";

    /// <summary>
    /// Label for the submit button
    /// </summary>
    [Parameter] public string SubmitLabel { get; set; } = "Verzenden";

    /// <summary>
    /// Content to display in the finish slot
    /// </summary>
    [Parameter] public RenderFragment? FinishContent { get; set; }

    /// <summary>
    /// Content to display in the error slot
    /// </summary>
    [Parameter] public RenderFragment? ErrorContent { get; set; }

    /// <summary>
    /// Event callback fired before form submission
    /// Set Cancel = true in the event args to prevent submission
    /// </summary>
    [Parameter] public EventCallback<BeforeSubmitEventArgs> OnBeforeSubmit { get; set; }

    /// <summary>
    /// Event callback fired before navigation
    /// Set Cancel = true in the event args to prevent navigation
    /// </summary>
    [Parameter] public EventCallback<BeforeNavigateEventArgs> OnBeforeNavigate { get; set; }

    /// <summary>
    /// Event callback fired after navigation
    /// </summary>
    [Parameter] public EventCallback<AfterNavigateEventArgs> OnAfterNavigate { get; set; }

    /// <summary>
    /// Event callback fired when wizard is finished
    /// </summary>
    [Parameter] public EventCallback OnFinished { get; set; }

    /// <summary>
    /// Event callback fired when a wizard form is invalid
    /// </summary>
    [Parameter] public EventCallback<WizardFormInvalidEventArgs> OnFormInvalid { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        return new[] { "beforeSubmit", "beforeNavigate", "afterNavigate", "wizardFinished", "wizardFormInvalid" };
    }


    protected override async Task SetupEventListenersAsync()
    {
        RegisterCancelableEventHandler<BeforeSubmitEventArgs>("beforeSubmit", async (args) =>
        {
            if (OnBeforeSubmit.HasDelegate && args != null)
            {
                await OnBeforeSubmit.InvokeAsync(args);
                return true;
            }
            return true;
        });

        RegisterCancelableEventHandler<BeforeNavigateEventArgs>("beforeNavigate", async (args) =>
        {
            if (OnBeforeNavigate.HasDelegate && args != null)
            {
                await OnBeforeNavigate.InvokeAsync(args);
                return true;
            }
            return true;
        });

        RegisterEventHandler<AfterNavigateEventArgs>("afterNavigate", async (args) =>
        {
            if (OnAfterNavigate.HasDelegate)
            {
                await OnAfterNavigate.InvokeAsync(args);
            }
        });

        RegisterEventHandler("wizardFinished", async () =>
        {
            if (OnFinished.HasDelegate)
            {
                await OnFinished.InvokeAsync();
            }
        });

        RegisterEventHandler<WizardFormInvalidEventArgs>("wizardFormInvalid", async (args) =>
        {
            if (OnFormInvalid.HasDelegate)
            {
                await OnFormInvalid.InvokeAsync(args);
            }
        });

        await AddCancelableEventListenerAsync("beforeSubmit");
        await AddCancelableEventListenerAsync("beforeNavigate");

        await AddEventListenerAsync("afterNavigate");
        await AddEventListenerAsync("wizardFinished");
        await AddEventListenerAsync("wizardFormInvalid");
    }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-wizard");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (!string.IsNullOrEmpty(Method)) attributes["method"] = Method;
        if (!string.IsNullOrEmpty(Action)) attributes["action"] = Action;
        if (!string.IsNullOrEmpty(NextLabel)) attributes["next-label"] = NextLabel;
        if (!string.IsNullOrEmpty(BackLabel)) attributes["back-label"] = BackLabel;
        if (!string.IsNullOrEmpty(SubmitLabel)) attributes["submit-label"] = SubmitLabel;
    }

    /// <summary>
    /// Navigate to the next or previous step
    /// </summary>
    public async Task NavigateAsync(string direction)
    {
        try
        {
            await JSRuntime.InvokeVoidAsync("PggmComponents.callElementMethod", ElementRef, "navigate", direction);
        }
        catch (Exception)
        {
            await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "navigate", direction);
        }
    }

    /// <summary>
    /// Start the wizard
    /// </summary>
    public async Task StartAsync()
    {
        try
        {
            await JSRuntime.InvokeVoidAsync("PggmComponents.callElementMethod", ElementRef, "start");
        }
        catch (Exception)
        {
            await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "start", true);
        }
    }

    /// <summary>
    /// Finish the wizard with the specified result
    /// </summary>
    public async Task FinishAsync(bool success)
    {
        try
        {
            await JSRuntime.InvokeVoidAsync("PggmComponents.callElementMethod", ElementRef, "finish", success);
        }
        catch (Exception ex)
        {
            Logger?.LogError(ex, "Error calling finish on wizard.");
            try
            {
                await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "finished", success);
            }
            catch (Exception fallbackEx)
            {
                Logger?.LogError(fallbackEx, "Fallback error setting finished property on wizard.");
            }
        }
    }

    /// <summary>
    /// Get the current form data as a dictionary
    /// </summary>
    public async Task<Dictionary<string, object>> GetFormDataAsync()
    {
        if (ElementRef.Id != null)
        {
            return await JSRuntime.InvokeAsync<Dictionary<string, object>>("eval",
                $"Object.fromEntries(document.getElementById('{ElementRef.Id}').formData)");
        }
        return s_emptyDict;
    }

    private static readonly Dictionary<string, object> s_emptyDict = new();
}
