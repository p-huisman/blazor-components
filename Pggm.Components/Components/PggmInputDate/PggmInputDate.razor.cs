using System.Reflection;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.Constants;

namespace Pggm.Components;

public partial class PggmInputDate : PggmEventComponentInputBase<string>
{
    public override string TagName => "pggm-input-date";

    private string? _lastSyncedValue;
    private bool _hasUserInteracted;
    private string? _lastUserSetValue = "__unset__";
    private ValidationMessageStore? _messageStore;
    private string? _resolvedValidationMessage;

    /// <summary>
    /// Optional child content for the input component.
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// The name attribute for the input
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// Whether the input is required
    /// </summary>
    [Parameter] public bool Required { get; set; }

    /// <summary>
    /// Whether the input is readonly
    /// </summary>
    [Parameter] public bool ReadOnly { get; set; }

    /// <summary>
    /// Whether the input is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// The date format the user must use to input a date (e.g., dd-mm-yyyy)
    /// </summary>
    [Parameter] public string? Format { get; set; }

    /// <summary>
    /// If true, a second input is visible so the user can input or select a begin and end date
    /// </summary>
    [Parameter] public bool Period { get; set; }

    /// <summary>
    /// Minimum allowed date value
    /// </summary>
    [Parameter] public string? Min { get; set; }

    /// <summary>
    /// Maximum allowed date value
    /// </summary>
    [Parameter] public string? Max { get; set; }

    /// <summary>
    /// Language for the date input
    /// </summary>
    [Parameter] public string? Lang { get; set; }

    /// <summary>
    /// Error message added to the EditContext when the web component reports a date validity error.
    /// Only used inside an EditForm. Defaults to "Vul een geldige datum in".
    /// </summary>
    [Parameter] public string? DateValidationMessage { get; set; }

    /// <summary>
    /// Event callback for the change event (when input loses focus)
    /// </summary>
    [Parameter] public EventCallback<ChangeEventArgs> OnChange { get; set; }

    /// <summary>
    /// Event callback for the input event (on every keystroke)
    /// </summary>
    [Parameter] public EventCallback<ChangeEventArgs> OnInput { get; set; }

    /// <summary>
    /// Event callback for when the input gains focus
    /// </summary>
    [Parameter] public EventCallback<FocusEventArgs> OnFocus { get; set; }

    /// <summary>
    /// Event callback for when the input loses focus
    /// </summary>
    [Parameter] public EventCallback<FocusEventArgs> OnBlur { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        if (OnChange.HasDelegate || ValueChanged.HasDelegate)
        {
            yield return EventNames.Change;
        }

        if (OnInput.HasDelegate)
        {
            yield return EventNames.Input;
        }

        if (OnFocus.HasDelegate)
        {
            yield return EventNames.Focus;
        }

        if (EditContext is not null || OnBlur.HasDelegate)
        {
            yield return EventNames.Blur;
        }
    }

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler(EventNames.Change, async (eventData) =>
        {
            var value = await GetValueFromElementAsync();
            await HandleValueChange(value, allowClear: true);

            if (OnChange.HasDelegate)
            {
                var changeArgs = new ChangeEventArgs { Value = value };
                await OnChange.InvokeAsync(changeArgs);
            }
        });

        RegisterEventHandler(EventNames.Input, async (eventData) =>
        {
            var value = await GetValueFromElementAsync();
            await HandleValueChange(value, allowClear: false);

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
            if (EditContext != null)
            {
                await ValidateDateIntoStore();
                EditContext.NotifyFieldChanged(FieldIdentifier);
            }
            if (OnBlur.HasDelegate)
            {
                var focusArgs = new FocusEventArgs { Type = "blur" };
                await OnBlur.InvokeAsync(focusArgs);
            }
        });

        return base.OnParametersSetAsync();
    }

    protected override Dictionary<string, object> GetAttributes()
    {
        var attributes = base.GetAttributes();

        if (!_hasUserInteracted)
        {
            var safeValue = (Value == "null" || Value == "undefined") ? null : Value;
            if (!string.IsNullOrEmpty(safeValue)) attributes["value"] = safeValue;
        }

        if (EditContext != null)
        {
            attributes["show-validation"] = "false";
        }

        return attributes;
    }

    private Task HandleValueChange(string? newValue, bool allowClear = true)
    {
        _hasUserInteracted = true;

        if (!allowClear && string.IsNullOrEmpty(newValue) && !string.IsNullOrEmpty(Value))
            return Task.CompletedTask;

        _lastUserSetValue = newValue;

        if (Value != newValue)
        {
            _lastSyncedValue = newValue;
            CurrentValue = newValue;
        }
        return Task.CompletedTask;
    }

    private async Task ValidateDateIntoStore()
    {
        if (_messageStore == null || EditContext == null) return;

        _messageStore.Clear(FieldIdentifier);

        var hasError = await GetDateValidityErrorAsync();

        if (hasError)
        {
            var msg = _resolvedValidationMessage ?? DateValidationMessage ?? "Vul een geldige datum in";
            _messageStore.Add(FieldIdentifier, msg);
        }
    }

    private async Task<bool> GetDateValidityErrorAsync()
    {
        try
        {
            var rangeOverflow = await JSRuntime.InvokeAsync<bool>("PggmComponents.getValidity", ElementRef, "rangeOverflow");
            if (rangeOverflow) return true;
            var rangeUnderflow = await JSRuntime.InvokeAsync<bool>("PggmComponents.getValidity", ElementRef, "rangeUnderflow");
            if (rangeUnderflow) return true;
            var typeMismatch = await JSRuntime.InvokeAsync<bool>("PggmComponents.getValidity", ElementRef, "typeMismatch");
            return typeMismatch;
        }
        catch
        {
            return false;
        }
    }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        _lastSyncedValue = null;

        if (EditContext != null)
        {
            _messageStore = new ValidationMessageStore(EditContext);

            if (FieldIdentifier.Model != null)
            {
                var modelType = FieldIdentifier.Model.GetType();
                var fieldName = FieldIdentifier.FieldName ?? string.Empty;
                var prop = modelType.GetProperty(fieldName, BindingFlags.Public | BindingFlags.Instance);
                if (prop != null)
                {
                    var attr = prop.GetCustomAttribute<PggmValidationAttribute>();
                    if (attr != null)
                    {
                        _resolvedValidationMessage = attr.ErrorMessage ?? _resolvedValidationMessage;
                    }
                }
            }
        }
    }

    public override async ValueTask DisposeAsync()
    {
        if (_messageStore != null && EditContext != null)
        {
            _messageStore.Clear();
            EditContext.NotifyValidationStateChanged();
        }
        await base.DisposeAsync();
    }

    protected override void OnParametersSet()
    {
        base.OnParametersSet();

        if (_hasUserInteracted && Value != _lastUserSetValue)
        {
            _hasUserInteracted = false;
            _lastSyncedValue = null;
            _lastUserSetValue = "__unset__";
        }
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        if (firstRender && EditContext is not null)
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("PggmComponents.disableNativeFormValidation", ElementRef);
            }
            catch
            {
                // non-fatal if JS is not ready
            }
        }

        if (!_hasUserInteracted && Value != _lastSyncedValue)
        {
            try
            {
                if (!string.IsNullOrEmpty(ElementRef.Id))
                {
                    var safeValue = string.IsNullOrEmpty(Value) || Value == "null" || Value == "undefined" ? "" : Value;
                    await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "value", safeValue);
                    _lastSyncedValue = Value;
                }
            }
            catch
            {
                // Silently handle errors during sync
            }
        }
    }

    private async Task<string?> GetValueFromElementAsync()
    {
        if (string.IsNullOrEmpty(ElementRef.Id)) return Value;
        try
        {
            var raw = await JSRuntime.InvokeAsync<string>("PggmComponents.getProperty", ElementRef, "value");
            var normalized = (raw == "null" || raw == "undefined") ? null : raw;
            return normalized;
        }
        catch
        {
            return Value;
        }
    }

    protected override bool TryParseValueFromString(string? value, out string result, out string validationErrorMessage)
    {
        result = value ?? string.Empty;
        validationErrorMessage = string.Empty;
        return true;
    }

    /// <summary>
    /// Common date format constants for better IntelliSense
    /// </summary>
    public static class DateFormats
    {
        public const string DayMonthYear = "dd-mm-yyyy";
        public const string MonthDayYear = "mm-dd-yyyy";
        public const string YearMonthDay = "yyyy-mm-dd";
        public const string DayMonthYearSlashes = "dd/mm/yyyy";
        public const string MonthDayYearSlashes = "mm/dd/yyyy";
        public const string YearMonthDaySlashes = "yyyy/mm/dd";
    }
}
