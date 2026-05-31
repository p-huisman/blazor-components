using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using Microsoft.Extensions.Logging;

using Pggm.Components.Base;
using Pggm.Components.Constants;

namespace Pggm.Components;

public partial class PggmSlider : PggmEventComponentBase
{
    public override string TagName => "pggm-slider";

    private double _value;

    /// <summary>
    /// The current value of the slider
    /// </summary>
    [Parameter]
#pragma warning disable BL0007 // Component parameter should be auto property
    public double Value
    {
        get => _value;
        set
        {
            if (Math.Abs(_value - value) > double.Epsilon)
            {
                _value = Math.Max(Min, Math.Min(Max, value)); // Clamp to bounds
                _ = UpdateElementValueAsync();
            }
        }
    }
#pragma warning restore BL0007

    /// <summary>
    /// The minimum value of the slider
    /// </summary>
    [Parameter] public double Min { get; set; } = 0;

    /// <summary>
    /// The maximum value of the slider
    /// </summary>
    [Parameter] public double Max { get; set; } = 100;

    /// <summary>
    /// The step size for keyboard navigation and value increments
    /// </summary>
    [Parameter] public double? Step { get; set; }

    /// <summary>
    /// Whether the slider is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// Comma-separated string of numbers that the slider should snap to
    /// </summary>
    [Parameter] public string? SnapValues { get; set; }

    /// <summary>
    /// Number of decimal places to display in the slider value (0 for integers)
    /// </summary>
    [Parameter] public int? FractionDigits { get; set; }

    /// <summary>
    /// Whether to hide the tooltip that shows the current value
    /// </summary>
    [Parameter] public bool HideTooltip { get; set; }

    /// <summary>
    /// Whether the tooltip value is editable by the user
    /// </summary>
    [Parameter] public bool TooltipEditable { get; set; } = false;

    /// <summary>
    /// Event callback for when the slider value changes
    /// </summary>
    [Parameter] public EventCallback<double> ValueChanged { get; set; }

    /// <summary>
    /// Event callback for the input event (continuous updates while dragging)
    /// </summary>
    [Parameter] public EventCallback<double> OnInput { get; set; }


    protected override IEnumerable<string> GetEventNames()
    {
        yield return EventNames.Change;
        yield return EventNames.Input;
    }

    private async Task HandleValueChangeAsync()
    {
        var elementValue = await GetElementValueAsync();

        if (Math.Abs(_value - elementValue) > double.Epsilon)
        {
            _value = elementValue; // Update backing field directly to avoid recursion

            if (ValueChanged.HasDelegate)
            {
                await ValueChanged.InvokeAsync(Value);
            }

            await InvokeAsync(StateHasChanged);
        }
    }

    private async Task HandleInputAsync()
    {
        var elementValue = await GetElementValueAsync();

        if (Math.Abs(_value - elementValue) > double.Epsilon)
        {
            _value = elementValue; // Update backing field directly

            if (OnInput.HasDelegate)
            {
                await OnInput.InvokeAsync(Value);
            }
        }
    }

    private async Task<double> GetElementValueAsync()
    {
        try
        {
            return await JSRuntime.InvokeAsync<double>("PggmComponents.getProperty", ElementRef, "value");
        }
        catch (Exception ex)
        {
            Logger?.LogError(ex, "Error getting slider value.");
            return Value;
        }
    }

    private async Task UpdateElementValueAsync()
    {
        if (ElementRef.Id != null)
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "value", Value);
            }
            catch
            {
                // Element might not be ready yet
            }
        }
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        attributes["value"] = Value;
        attributes["min"] = Min;
        attributes["max"] = Max;

        if (Step.HasValue)
        {
            attributes["step"] = Step.Value;
        }

        if (Disabled) attributes["disabled"] = true; else attributes.Remove("disabled");

        if (!string.IsNullOrWhiteSpace(SnapValues))
        {
            attributes["snap-values"] = SnapValues;
            attributes["enable-snap"] = true;
        }
        else
        {
            attributes.Remove("snap-values");
            attributes.Remove("enable-snap");
        }

        if (FractionDigits.HasValue)
        {
            attributes["fraction-digits"] = FractionDigits.Value;
        }

        if (HideTooltip) attributes["hide-tooltip"] = true; else attributes.Remove("hide-tooltip");
        if (TooltipEditable) attributes["tooltip-editable"] = true; else attributes.Remove("tooltip-editable");
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        if (firstRender)
        {
            // Ensure initial value is set correctly on first render
            await UpdateElementValueAsync();
        }
    }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-slider");
        await base.InitializeWebComponentAsync();
    }

    protected override async Task OnParametersSetAsync()
    {
        RegisterEventHandler(EventNames.Change, _ => HandleValueChangeAsync());
        RegisterEventHandler(EventNames.Input, _ => HandleInputAsync());

        await base.OnParametersSetAsync();
    }
}
