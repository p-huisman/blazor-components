using System.Reflection;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using Pggm.Components.Base;
using Pggm.Components.Constants;

namespace Pggm.Components;

public partial class PggmInputBsn : PggmEventComponentInputBase<string>
{
    public override string TagName => "pggm-input-bsn";

    private string? _lastSyncedValue;
    private readonly string _dataId = $"pggm-input-bsn-{Guid.NewGuid()}";
    public string DataId => _dataId;

    private ValidationMessageStore? _messageStore;
    private string? _resolvedValidationMessage;

    /// <summary>
    /// Placeholder text for the BSN input
    /// </summary>
    [Parameter, EditorRequired] public string? Placeholder { get; set; }

    /// <summary>
    /// Optional child content to render inside the web component
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }

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
    /// Whether to show validation feedback
    /// </summary>
    [Parameter] public bool ShowValidation { get; set; } = true;

    /// <summary>
    /// The form attribute for the input
    /// </summary>
    [Parameter] public string? Form { get; set; }

    /// <summary>
    /// The autocomplete attribute for the input
    /// </summary>
    [Parameter] public string? AutoComplete { get; set; }

    /// <summary>
    /// Custom error message to display
    /// </summary>
    [Parameter] public string? ErrorMessage { get; set; }

    /// <summary>
    /// Whether to auto-format the BSN input
    /// </summary>
    [Parameter] public bool AutoFormat { get; set; } = true;

    /// <summary>
    /// Whether to validate on input (live validation)
    /// </summary>
    [Parameter] public bool ValidateOnInput { get; set; } = true;

    /// <summary>
    /// Event callback for invalid BSN input
    /// </summary>
    [Parameter] public EventCallback<EventArgs> OnInvalid { get; set; }

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
    /// Event callback for BSN validation result
    /// </summary>
    [Parameter] public EventCallback<bool> OnValidationChanged { get; set; }

    /// <summary>
    /// Error message added to the EditContext when the web component's 11-proof validation
    /// fails. Only used inside an EditForm. Defaults to "BSN is ongeldig".
    /// </summary>
    [Parameter] public string? BsnValidationMessage { get; set; }

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

        if (OnInvalid.HasDelegate)
        {
            yield return "invalid";
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
                await ValidateBsnIntoStore();
                EditContext.NotifyFieldChanged(FieldIdentifier);
            }
            if (OnBlur.HasDelegate)
            {
                var focusArgs = new FocusEventArgs { Type = "blur" };
                await OnBlur.InvokeAsync(focusArgs);
            }
        });

        RegisterEventHandler("invalid", async (eventData) =>
        {
            if (OnInvalid.HasDelegate)
            {
                await OnInvalid.InvokeAsync(EventArgs.Empty);
            }
        });

        return base.OnParametersSetAsync();
    }

    private static void SetBoolAttribute(Dictionary<string, object> attributes, string name, bool value)
    {
        if (value) attributes[name] = true; else attributes.Remove(name);
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

    private async Task ValidateBsnIntoStore()
    {
        if (_messageStore == null || EditContext == null) return;

        _messageStore.Clear(FieldIdentifier);

        var hasCustomError = await GetBsnCustomErrorAsync();

        if (hasCustomError)
        {
            var msg = _resolvedValidationMessage ?? BsnValidationMessage ?? "BSN is ongeldig";
            _messageStore.Add(FieldIdentifier, msg);
        }
    }

    private async Task<bool> GetBsnCustomErrorAsync()
    {
        try
        {
            return await JSRuntime.InvokeAsync<bool>("PggmComponents.getValidity", ElementRef, "customError");
        }
        catch (Exception ex)
        {
            Logger?.LogDebug(ex, "Non-fatal JS interop error getting BSN validity");
            return false;
        }
    }

    private async Task<string?> GetValueFromElementAsync()
    {
        try
        {
            return await JSRuntime.InvokeAsync<string>("PggmComponents.getProperty", ElementRef, "value");
        }
        catch (Exception ex)
        {
            Logger?.LogDebug(ex, "Non-fatal JS interop error reading BSN value");
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
            catch (Exception ex)
            {
                Logger?.LogDebug(ex, "Non-fatal JS interop error disabling native form validation in PggmInputBsn");
            }
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
            catch (Exception ex)
            {
                Logger?.LogDebug(ex, "Non-fatal JS interop error syncing BSN value");
            }
        }
    }

    protected override bool TryParseValueFromString(string? value, out string result, out string validationErrorMessage)
    {
        result = value ?? string.Empty;
        validationErrorMessage = string.Empty;
        return true;
    }
}
