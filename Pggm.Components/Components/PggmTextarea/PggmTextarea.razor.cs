using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.Constants;

namespace Pggm.Components;

public partial class PggmTextarea : PggmEventComponentBase
{
    public override string TagName => "textarea";

    /// <summary>
    /// The current value of the textarea
    /// </summary>
    [Parameter] public string? Value { get; set; }

    /// <summary>
    /// Event callback for when the textarea value changes (two-way binding)
    /// </summary>
    [Parameter] public EventCallback<string?> ValueChanged { get; set; }

    /// <summary>
    /// Number of visible text lines for the control
    /// </summary>
    [Parameter] public int? Rows { get; set; }

    /// <summary>
    /// Visible width of the text control, in average character widths
    /// </summary>
    [Parameter] public int? Cols { get; set; }

    /// <summary>
    /// Placeholder text for the textarea
    /// </summary>
    [Parameter, EditorRequired] public string? Placeholder { get; set; }

    /// <summary>
    /// Whether the textarea is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// Whether the textarea is required
    /// </summary>
    [Parameter] public bool Required { get; set; }

    /// <summary>
    /// Whether the textarea is readonly
    /// </summary>
    [Parameter] public bool ReadOnly { get; set; }

    /// <summary>
    /// The name attribute for the textarea
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// Maximum length for the textarea value
    /// </summary>
    [Parameter] public int? MaxLength { get; set; }

    /// <summary>
    /// Minimum length for the textarea value
    /// </summary>
    [Parameter] public int? MinLength { get; set; }

    /// <summary>
    /// How the text in a text area is to be wrapped when submitted in a form
    /// </summary>
    [Parameter] public string? Wrap { get; set; }

    /// <summary>
    /// Specifies whether the textarea should automatically get focus when the page loads
    /// </summary>
    [Parameter] public bool AutoFocus { get; set; }

    /// <summary>
    /// Provides a hint to the user of what can be entered in the control
    /// </summary>
    [Parameter] public string? AutoComplete { get; set; }

    /// <summary>
    /// Indicates that the textarea should receive focus on page load
    /// </summary>
    [Parameter] public bool SpellCheck { get; set; } = true;

    /// <summary>
    /// Event callback for the change event (when textarea loses focus)
    /// </summary>
    [Parameter] public EventCallback<ChangeEventArgs> OnChange { get; set; }

    /// <summary>
    /// Event callback for the input event (on every keystroke)
    /// </summary>
    [Parameter] public EventCallback<ChangeEventArgs> OnInput { get; set; }

    /// <summary>
    /// Event callback for when the textarea gains focus
    /// </summary>
    [Parameter] public EventCallback<FocusEventArgs> OnFocus { get; set; }

    /// <summary>
    /// Event callback for when the textarea loses focus
    /// </summary>
    [Parameter] public EventCallback<FocusEventArgs> OnBlur { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        if (OnChange.HasDelegate || ValueChanged.HasDelegate)
        {
            yield return EventNames.Change;
        }

        if (OnInput.HasDelegate || ValueChanged.HasDelegate)
        {
            yield return EventNames.Input;
        }

        if (OnFocus.HasDelegate)
        {
            yield return EventNames.Focus;
        }

        if (OnBlur.HasDelegate)
        {
            yield return EventNames.Blur;
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

        RegisterEventHandler(EventNames.Input, async (eventData) =>
        {
            var value = ExtractValueFromEventData(eventData);
            await HandleValueChange(value);

            if (OnInput.HasDelegate)
            {
                var changeArgs = new ChangeEventArgs { Value = value };
                await OnInput.InvokeAsync(changeArgs);
            }
        });

        RegisterEventHandler(EventNames.Focus, async (_) =>
        {
            if (OnFocus.HasDelegate)
            {
                var focusArgs = new FocusEventArgs { Type = "focus" };
                await OnFocus.InvokeAsync(focusArgs);
            }
        });

        RegisterEventHandler(EventNames.Blur, async (_) =>
        {
            if (OnBlur.HasDelegate)
            {
                var focusArgs = new FocusEventArgs { Type = "blur" };
                await OnBlur.InvokeAsync(focusArgs);
            }
        });

        return base.OnParametersSetAsync();
    }

    protected async Task HandleDomChangeEvent(ChangeEventArgs args)
    {
        var value = args.Value?.ToString();
        await HandleValueChange(value);
        if (OnChange.HasDelegate)
            await OnChange.InvokeAsync(args);
    }

    private async Task HandleValueChange(string? newValue)
    {
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
            var eventDataString = eventData.ToString();
            if (eventDataString?.Contains("\"value\"") == true)
            {
                var valueStart = eventDataString.IndexOf("\"value\":");
                if (valueStart >= 0)
                {
                    var afterColon = eventDataString.Substring(valueStart + 8).Trim();
                    if (afterColon.StartsWith('"'))
                    {
                        var endQuote = afterColon.IndexOf('"', 1);
                        if (endQuote > 0)
                        {
                            return afterColon.Substring(1, endQuote - 1);
                        }
                    }
                }
            }
        }
        catch
        {
            // Fallback to string representation
        }

        var fallbackValue = eventData.ToString();
        if (fallbackValue == "0" || fallbackValue == "false" || fallbackValue == "true")
        {
            return null;
        }

        return fallbackValue;
    }

    /// <summary>
    /// Wrap attribute constants for better IntelliSense
    /// </summary>
    public static class WrapTypes
    {
        public const string Hard = "hard";
        public const string Soft = "soft";
        public const string Off = "off";
    }
}
