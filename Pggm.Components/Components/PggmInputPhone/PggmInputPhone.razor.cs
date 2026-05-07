using System.Reflection;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.Constants;

namespace Pggm.Components;

public partial class PggmInputPhone : PggmEventComponentInputBase<string>
{
    public override string TagName => "pggm-input-phone";

    private string? _lastSyncedValue;
    private readonly string _dataId = $"pggm-input-phone-{Guid.NewGuid()}";
    public string DataId => _dataId;

    private ValidationMessageStore? _messageStore;
    private string? _resolvedValidationMessage;

    /// <summary>
    /// Whether the input is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// Whether the input is required
    /// </summary>
    [Parameter] public bool Required { get; set; }

    /// <summary>
    /// Whether the input is readonly
    /// </summary>
    [Parameter] public bool ReadOnly { get; set; }

    /// <summary>
    /// The id attribute for the input element
    /// </summary>
    [Parameter] public string? Id { get; set; }

    /// <summary>
    /// The name attribute for the input
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// The phone number type for validation (fixed-line, mobile, fixed-line-or-mobile)
    /// </summary>
    [Parameter] public string? PhoneNumberType { get; set; }

    /// <summary>
    /// Comma-separated list of country codes to show at the top of the country selector (e.g., "NL,BE,DE")
    /// </summary>
    [Parameter] public string? TopCountries { get; set; }

    /// <summary>
    /// Placeholder text for the country select dropdown
    /// </summary>
    [Parameter] public string? CountryLabel { get; set; }

    /// <summary>
    /// The initial country code to select (e.g., "NL", "BE", "DE")
    /// </summary>
    [Parameter] public string? InitialCountry { get; set; }

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

    /// <summary>
    /// Event callback for when the country selection changes
    /// </summary>
    [Parameter] public EventCallback<string> OnCountryChanged { get; set; }

    /// <summary>
    /// Event callback for phone number validation result
    /// </summary>
    [Parameter] public EventCallback<bool> OnValidationChanged { get; set; }

    /// <summary>
    /// Error message added to the EditContext when the web component's phone validation
    /// fails. Only used inside an EditForm. Defaults to "Telefoon nummer is ongeldig".
    /// </summary>
    [Parameter] public string? PhoneValidationMessage { get; set; }

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

        if (EditContext is not null || OnBlur.HasDelegate)
        {
            yield return EventNames.Blur;
        }

        if (OnCountryChanged.HasDelegate)
        {
            yield return "countryChange";
        }
    }

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler(EventNames.Change, async (eventData) =>
        {
            var value = await GetValueFromElementAsync();
            await HandleValueChange(value);

            if (OnChange.HasDelegate)
            {
                var changeArgs = new ChangeEventArgs { Value = value };
                await OnChange.InvokeAsync(changeArgs);
            }
        });

        RegisterEventHandler(EventNames.Input, async (eventData) =>
        {
            var value = await GetValueFromElementAsync();
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
            if (EditContext != null)
            {
                await ValidatePhoneIntoStore();
                EditContext.NotifyFieldChanged(FieldIdentifier);
            }
            if (OnBlur.HasDelegate)
            {
                var focusArgs = new FocusEventArgs { Type = "blur" };
                await OnBlur.InvokeAsync(focusArgs);
            }
        });

        RegisterEventHandler("countryChange", async (eventData) =>
        {
            if (OnCountryChanged.HasDelegate)
            {
                var country = eventData?.ToString() ?? string.Empty;
                await OnCountryChanged.InvokeAsync(country);
            }
        });

        return base.OnParametersSetAsync();
    }

    private async Task HandleValueChange(string? newValue)
    {
        if (newValue != null && CurrentValue != newValue)
        {
            CurrentValue = (string?)newValue;
            _lastSyncedValue = newValue;
        }
        await Task.CompletedTask;
    }

    private async Task ValidatePhoneIntoStore()
    {
        if (_messageStore == null || EditContext == null) return;

        _messageStore.Clear(FieldIdentifier);

        var hasTypeMismatch = await GetPhoneTypeMismatchAsync();

        if (hasTypeMismatch)
        {
            var msg = _resolvedValidationMessage ?? PhoneValidationMessage ?? "Telefoon nummer is ongeldig";
            _messageStore.Add(FieldIdentifier, msg);
        }
    }

    private async Task<bool> GetPhoneTypeMismatchAsync()
    {
        try
        {
            return await JSRuntime.InvokeAsync<bool>("PggmComponents.getValidity", ElementRef, "typeMismatch");
        }
        catch
        {
            return false;
        }
    }

    private async Task<string?> GetValueFromElementAsync()
    {
        if (string.IsNullOrEmpty(ElementRef.Id)) return CurrentValue;
        try
        {
            return await JSRuntime.InvokeAsync<string>("PggmComponents.getProperty", ElementRef, "value");
        }
        catch
        {
            return CurrentValue;
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

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        if (firstRender && EditContext != null)
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("PggmComponents.disableNativeFormValidation", ElementRef);
            }
            catch { /* JS not ready — non-fatal */ }
        }

        if (CurrentValue != _lastSyncedValue)
        {
            try
            {
                if (!string.IsNullOrEmpty(ElementRef.Id))
                {
                    await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "value", CurrentValue ?? "");
                    _lastSyncedValue = CurrentValue;
                }
            }
            catch
            {
                // Ignore errors during sync
            }
        }
    }

    protected override bool TryParseValueFromString(string? value, out string result, out string validationErrorMessage)
    {
        result = value ?? string.Empty;
        validationErrorMessage = string.Empty;
        return true;
    }

    /// <summary>
    /// Phone number type constants for validation
    /// </summary>
    public static class PhoneNumberTypes
    {
        public const string FixedLine = "fixed-line";
        public const string FixedLineOrMobile = "fixed-line-or-mobile";
        public const string Mobile = "mobile";
    }
}
