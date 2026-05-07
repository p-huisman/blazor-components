using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.Constants;

namespace Pggm.Components;

public partial class PggmSignaturePad : PggmEventComponentBase
{
    public override string TagName => "pggm-signature-pad";

    /// <summary>
    /// The id attribute for the signature pad
    /// </summary>
    [Parameter] public string? Id { get; set; }

    /// <summary>
    /// The name attribute for the signature pad
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// Whether the signature pad is required
    /// </summary>
    [Parameter] public bool Required { get; set; } = false;

    /// <summary>
    /// The value of the signature pad (base64 string)
    /// </summary>
    [Parameter] public string? Value { get; set; }

    /// <summary>
    /// The buttons to display on the signature pad (comma-separated: erase,undo,redo)
    /// </summary>
    [Parameter] public string? Buttons { get; set; }

    /// <summary>
    /// Whether the signature pad is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; } = false;

    /// <summary>
    /// Event callback for when the signature changes
    /// </summary>
    [Parameter] public EventCallback<string?> ValueChanged { get; set; }

    /// <summary>
    /// Event callback for the change event
    /// </summary>
    [Parameter] public EventCallback<ChangeEventArgs> OnChange { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        if (OnChange.HasDelegate || ValueChanged.HasDelegate)
        {
            yield return EventNames.Change;
        }
    }

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler(EventNames.Change, async (eventData) =>
        {
            var value = ExtractValueFromEventData(eventData);
            await HandleValueChange(value);

            if (OnChange.HasDelegate)
            {
                var changeArgs = new ChangeEventArgs { Value = value };
                await OnChange.InvokeAsync(changeArgs);
            }
        });

        return base.OnParametersSetAsync();
    }

    private async Task HandleValueChange(string? newValue)
    {
        // Only update if we have a valid new value, or if it's explicitly set to empty string
        // This prevents overwriting with null when extraction fails
        if (newValue != null && Value != newValue)
        {
            Value = newValue;
            if (ValueChanged.HasDelegate)
            {
                await ValueChanged.InvokeAsync(Value);
            }
        }
    }

    private static string? ExtractValueFromEventData(object? eventData)
    {
        if (eventData == null) return null;

        if (eventData is string directValue)
        {
            return directValue;
        }

        try
        {
            var result = TryExtractValueFromJson(eventData.ToString());
            if (result != null) return result;
        }
        catch
        {
            // Fallback to string representation, but only if it's not a problematic value
        }

        var fallbackValue = eventData.ToString();
        // Avoid returning "0" as fallback for signature pad - return null instead to preserve the original value
        if (fallbackValue == "0" || fallbackValue == "false" || fallbackValue == "true")
        {
            return null;
        }

        return fallbackValue;
    }

    private static string? TryExtractValueFromJson(string? eventDataString)
    {
        if (eventDataString?.Contains("\"value\"") != true) return null;
        var valueStart = eventDataString.IndexOf("\"value\":");
        if (valueStart < 0) return null;
        var afterColon = eventDataString.Substring(valueStart + 8).Trim();
        if (!afterColon.StartsWith('"')) return null;
        var endQuote = afterColon.IndexOf('"', 1);
        return endQuote > 0 ? afterColon.Substring(1, endQuote - 1) : null;
    }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-signature-pad");
        await base.InitializeWebComponentAsync();
    }

    // Temporary handler for backwards compatibility with bUnit tests
    protected async Task OnChangeHandlerForTesting(ChangeEventArgs args)
    {
        await HandleValueChange(args.Value?.ToString());

        if (OnChange.HasDelegate)
        {
            await OnChange.InvokeAsync(args);
        }
    }
}
