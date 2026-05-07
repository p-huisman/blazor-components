using System.Text.Json;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmSwitch : PggmEventComponentBase
{
    public override string TagName => "pggm-switch";

    private const string CheckedAttr = "checked";

    /// <summary>
    /// Whether the switch is checked/on
    /// </summary>
    [Parameter] public bool Checked { get; set; }

    /// <summary>
    /// Whether the switch is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// The value attribute for the switch input
    /// </summary>
    [Parameter] public string? Value { get; set; }

    /// <summary>
    /// Event callback for when the switch state changes
    /// </summary>
    [Parameter] public EventCallback<bool> CheckedChanged { get; set; }

    /// <summary>
    /// Event callback for when the switch is toggled with its value
    /// </summary>
    [Parameter] public EventCallback<string?> ValueChanged { get; set; }

    /// <summary>
    /// Event callback for the change event
    /// </summary>
    [Parameter] public EventCallback<ChangeEventArgs> OnChange { get; set; }

    /// <summary>
    /// Event callback for the focus event
    /// </summary>
    [Parameter] public EventCallback<FocusEventArgs> OnFocus { get; set; }

    /// <summary>
    /// Event callback for the blur event
    /// </summary>
    [Parameter] public EventCallback<FocusEventArgs> OnBlur { get; set; }

    private async Task HandleChangeEventAsync(object? eventData)
    {
        bool isChecked;

        if (eventData is JsonElement jsonElement && TryExtractChecked(jsonElement, out var extracted))
            isChecked = extracted;
        else if (eventData is bool boolValue)
            isChecked = boolValue;
        else
            isChecked = !Checked;

        await InvokeAsync(async () =>
        {
            if (CheckedChanged.HasDelegate)
                await CheckedChanged.InvokeAsync(isChecked);

            if (ValueChanged.HasDelegate)
                await ValueChanged.InvokeAsync(isChecked ? Value : null);

            if (OnChange.HasDelegate)
                await OnChange.InvokeAsync(new ChangeEventArgs { Value = isChecked });
        });
    }

    private static bool TryExtractChecked(JsonElement json, out bool result)
    {
        if (json.TryGetProperty(CheckedAttr, out var p)) { result = p.GetBoolean(); return true; }
        if (json.TryGetProperty("target", out var t) && t.TryGetProperty(CheckedAttr, out var tc)) { result = tc.GetBoolean(); return true; }
        if (json.TryGetProperty("detail", out var d) && d.TryGetProperty(CheckedAttr, out var dc)) { result = dc.GetBoolean(); return true; }
        if (json.TryGetProperty("value", out var v) && v.ValueKind is JsonValueKind.True or JsonValueKind.False) { result = v.GetBoolean(); return true; }
        if (json.ValueKind is JsonValueKind.True or JsonValueKind.False) { result = json.GetBoolean(); return true; }
        result = false;
        return false;
    }

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler("change", HandleChangeEventAsync);
        RegisterEventHandler("focus", HandleFocusEventAsync);
        RegisterEventHandler("blur", HandleBlurEventAsync);
        return base.OnParametersSetAsync();
    }

    protected override IEnumerable<string> GetEventNames()
    {
        return new[] { "change", "focus", "blur" };
    }

    private async Task HandleFocusEventAsync(object? eventData)
    {
        if (OnFocus.HasDelegate)
        {
            await InvokeAsync(async () =>
            {
                var focusArgs = new FocusEventArgs();
                await OnFocus.InvokeAsync(focusArgs);
            });
        }
    }

    private async Task HandleBlurEventAsync(object? eventData)
    {
        if (OnBlur.HasDelegate)
        {
            await InvokeAsync(async () =>
            {
                var focusArgs = new FocusEventArgs();
                await OnBlur.InvokeAsync(focusArgs);
            });
        }
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (Disabled) attributes["disabled"] = true; else attributes.Remove("disabled");
        if (Checked) attributes[CheckedAttr] = true; else attributes.Remove(CheckedAttr);
        if (!string.IsNullOrEmpty(Value)) attributes["value"] = Value;
    }
}
