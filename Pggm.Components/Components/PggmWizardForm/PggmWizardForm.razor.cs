using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.Models.Wizard;

namespace Pggm.Components;

public partial class PggmWizardForm : PggmEventComponentBase
{
    public override string TagName => "pggm-wizard-form";

    /// <summary>
    /// The label for this wizard form step
    /// </summary>
    [Parameter, EditorRequired] public string Label { get; set; } = "";

    /// <summary>
    /// Whether this form is the currently active step
    /// </summary>
    [Parameter] public bool Active { get; set; }

    /// <summary>
    /// Whether this form step is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// Whether the next button should be disabled for this step
    /// </summary>
    [Parameter] public bool NextDisabled { get; set; }

    /// <summary>
    /// Event callback fired when the form changes (active, disabled, etc.)
    /// </summary>
    [Parameter] public EventCallback OnWizardFormChanged { get; set; }

    /// <summary>
    /// Event callback fired after navigation to this form
    /// </summary>
    [Parameter] public EventCallback<AfterNavigateEventArgs> OnAfterNavigate { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        return new[] { "wizardFormChanged", "afterNavigate" };
    }

    protected override void OnInitialized()
    {
        base.OnInitialized();

        RegisterEventHandler("wizardFormChanged", async () =>
        {
            if (OnWizardFormChanged.HasDelegate)
            {
                await OnWizardFormChanged.InvokeAsync();
            }
        });

        RegisterEventHandler<AfterNavigateEventArgs>("afterNavigate", async (args) =>
        {
            if (OnAfterNavigate.HasDelegate)
            {
                await OnAfterNavigate.InvokeAsync(args);
            }
        });
    }

    private const string DisabledValue = "disabled";

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-wizard");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (!string.IsNullOrEmpty(Label)) attributes["label"] = Label;
        if (Active) attributes["active"] = true; else attributes.Remove("active");

        // Special handling: web component expects "disabled" string value
        if (Disabled)
            attributes[DisabledValue] = DisabledValue;
        else
            attributes.Remove(DisabledValue);

        // Special handling: web component expects "disabled" string value
        if (NextDisabled)
            attributes["next-disabled"] = DisabledValue;
        else
            attributes.Remove("next-disabled");
    }
}
