using System.Text.Json;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.Constants;

namespace Pggm.Components;

public partial class PggmAddressInput : PggmEventComponentBase
{
    public override string TagName => "pggm-address-input";

    private const string ValueProperty = "value";
    private string? _lastSyncedValue;

    /// <summary>
    /// The current address value as JSON string
    /// </summary>
    [Parameter] public string? Value { get; set; }

    /// <summary>
    /// Event callback for when the address value changes (two-way binding)
    /// </summary>
    [Parameter] public EventCallback<string?> ValueChanged { get; set; }

    /// <summary>
    /// The name attribute for the address input
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// The id attribute for the address input
    /// </summary>
    [Parameter] public string? Id { get; set; }

    /// <summary>
    /// Whether the input is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// Whether the input is required
    /// </summary>
    [Parameter] public bool Required { get; set; }

    /// <summary>
    /// Whether to allow foreign addresses
    /// </summary>
    [Parameter] public bool Foreign { get; set; }

    /// <summary>
    /// Whether to enable autocomplete functionality
    /// </summary>
    [Parameter] public bool Autocomplete { get; set; }

    /// <summary>
    /// Endpoint URL for countries data (landen)
    /// </summary>
    [Parameter] public string LandenEndpoint { get; set; } = "https://staticweb-cdn-o.azureedge.net/design-system/api/topography-landen.json";

    /// <summary>
    /// Endpoint URL for address data (adres)
    /// </summary>
    [Parameter] public string AdresEndpoint { get; set; } = "https://staticweb-cdn-o.azureedge.net/design-system/api/adres.json";

    /// <summary>
    /// Event callback for the change event (when input loses focus)
    /// </summary>
    [Parameter] public EventCallback<ChangeEventArgs> OnChange { get; set; }

    /// <summary>
    /// Event callback for the input event (on every change)
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
    /// Event callback for validation events
    /// </summary>
    [Parameter] public EventCallback<bool> OnValidationChanged { get; set; }

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

        if (OnValidationChanged.HasDelegate)
        {
            yield return "validationChange";
        }
    }

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler(EventNames.Change, async (eventData) =>
        {
            string? value = await GetValueFromElementAsync();

            if (value != null)
            {
                await HandleValueChange(value);
            }

            if (OnChange.HasDelegate)
            {
                var changeArgs = new ChangeEventArgs { Value = value };
                await OnChange.InvokeAsync(changeArgs);
            }
        });

        RegisterEventHandler(EventNames.Input, async (eventData) =>
        {
            string? value = await GetValueFromElementAsync();

            if (value != null)
            {
                await HandleValueChange(value);
            }

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

        RegisterEventHandler("validationChange", async (eventData) =>
        {
            if (OnValidationChanged.HasDelegate)
            {
                var isValid = eventData?.ToString()?.ToLowerInvariant() == "true";
                await OnValidationChanged.InvokeAsync(isValid);
            }
        });

        return base.OnParametersSetAsync();
    }

    private async Task HandleValueChange(string? newValue)
    {
        if (newValue != null && newValue != "0" && Value != newValue)
        {
            Value = newValue;
            _lastSyncedValue = newValue;

            if (ValueChanged.HasDelegate)
            {
                await ValueChanged.InvokeAsync(Value);
            }

            StateHasChanged();
        }
    }

    private async Task<string?> GetValueFromElementAsync()
    {
        try
        {
            var result = await JSRuntime.InvokeAsync<JsonElement>("PggmComponents.getProperty", ElementRef, ValueProperty);

            if (result.ValueKind == JsonValueKind.Object && result.TryGetProperty(ValueProperty, out var valueProperty))
            {
                return valueProperty.ValueKind == JsonValueKind.String
                    ? valueProperty.GetString()
                    : valueProperty.ToString();
            }
            else if (result.ValueKind == JsonValueKind.String)
            {
                return result.GetString();
            }
            else
            {
                return result.GetRawText();
            }
        }
        catch
        {
            return Value;
        }
    }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-address-input");
        await base.InitializeWebComponentAsync();
    }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        _lastSyncedValue = null;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        if (Value != _lastSyncedValue)
        {
            try
            {
                if (!string.IsNullOrEmpty(ElementRef.Id))
                {
                    await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, ValueProperty, Value ?? "");
                    _lastSyncedValue = Value;
                }
            }
            catch
            {
                // Ignore errors during sync
            }
        }
    }
}
