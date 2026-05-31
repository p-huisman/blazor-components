using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.Constants;
using Pggm.Components.Services;

namespace Pggm.Components;

public partial class PggmCombobox<TOption> : PggmEventComponentInputBase<string>
{
    public override string TagName => "pggm-combobox";

    [Inject] private PggmDesignSystemService DesignSystemService { get; set; } = default!;

    private readonly string _dataId = $"pggm-combobox-{Guid.NewGuid()}";
    private ValidationMessageStore? _messageStore;
    private string[]? _lastSyncedValues;

    /// <summary>The unique data-id for this instance.</summary>
    public string DataId => _dataId;

    /// <summary>Child items (pggm-combobox-item elements) rendered inside the combobox.</summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }

    /// <summary>Items to render as pggm-combobox-item elements.</summary>
    [Parameter] public IEnumerable<TOption>? Items { get; set; }

    /// <summary>Selector for the option value string.</summary>
    [Parameter] public Func<TOption, string?>? OptionValue { get; set; }

    /// <summary>Selector for the option display text.</summary>
    [Parameter] public Func<TOption, string?>? OptionText { get; set; }

    /// <summary>Selector for whether an option is disabled.</summary>
    [Parameter] public Func<TOption, bool>? OptionDisabled { get; set; }

    /// <summary>Custom render fragment for each item.</summary>
    [Parameter] public RenderFragment<TOption>? OptionTemplate { get; set; }

    /// <summary>The currently selected item object (two-way binding, single-select).</summary>
    [Parameter] public TOption? SelectedOption { get; set; }

    /// <summary>Fired when the selected item changes (single-select).</summary>
    [Parameter] public EventCallback<TOption?> SelectedOptionChanged { get; set; }

    /// <summary>Whether the combobox is disabled.</summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>Whether a value is required.</summary>
    [Parameter] public bool Required { get; set; }

    /// <summary>Whether the combobox is read-only.</summary>
    [Parameter] public bool ReadOnly { get; set; }

    /// <summary>The name attribute used when submitting a form.</summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>The id attribute for the combobox element.</summary>
    [Parameter] public string? Id { get; set; }

    /// <summary>Placeholder text shown when nothing is selected.</summary>
    [Parameter, EditorRequired] public string? Placeholder { get; set; }

    /// <summary>When true the dropdown panel is open.</summary>
    [Parameter] public bool Open { get; set; }

    /// <summary>When true multiple items may be selected.</summary>
    [Parameter] public bool Multiple { get; set; }

    /// <summary>When true a clear button is rendered inside the combobox.</summary>
    [Parameter] public bool WithClear { get; set; }

    /// <summary>
    /// Limits the number of items visible in the dropdown without scrolling.
    /// Maps to the <c>visible-items</c> HTML attribute / <c>visibleItems</c> JS property.
    /// </summary>
    [Parameter] public int? VisibleItems { get; set; }

    /// <summary>
    /// Minimum number of selected items required (multi-select only).
    /// A <see cref="ValidationMessageStore"/> entry is added when the selection
    /// count is below this value after the user leaves the field.
    /// </summary>
    [Parameter] public int? Min { get; set; }

    /// <summary>
    /// Maximum number of items that may be selected (multi-select only).
    /// A <see cref="ValidationMessageStore"/> entry is added when the selection
    /// count exceeds this value after the user leaves the field.
    /// </summary>
    [Parameter] public int? Max { get; set; }

    /// <summary>Error message used when the Min constraint is violated.</summary>
    [Parameter] public string? MinValidationMessage { get; set; }

    /// <summary>Error message used when the Max constraint is violated.</summary>
    [Parameter] public string? MaxValidationMessage { get; set; }

    /// <summary>
    /// Two-way binding for multi-select mode: the array of currently selected values.
    /// Use <c>@bind-Values</c> when <see cref="Multiple"/> is <c>true</c>.
    /// For single-select use the standard <c>@bind-Value</c> from <see cref="InputBase{T}"/>.
    /// </summary>
    [Parameter] public string[]? Values { get; set; }

    /// <summary>Fired when the selected values array changes (multi-select).</summary>
    [Parameter] public EventCallback<string[]?> ValuesChanged { get; set; }

    /// <summary>Fired when the selected value changes.</summary>
    [Parameter] public EventCallback<ChangeEventArgs> OnChange { get; set; }

    /// <summary>Fired when the combobox receives focus.</summary>
    [Parameter] public EventCallback<FocusEventArgs> OnFocus { get; set; }

    /// <summary>Fired when the combobox loses focus.</summary>
    [Parameter] public EventCallback<FocusEventArgs> OnBlur { get; set; }

    /// <summary>Fired when the dropdown panel opens.</summary>
    [Parameter] public EventCallback OnOpen { get; set; }

    /// <summary>Fired when the dropdown panel closes.</summary>
    [Parameter] public EventCallback OnClose { get; set; }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        if (EditContext != null)
        {
            _messageStore = new ValidationMessageStore(EditContext);
        }
    }

    protected override void OnParametersSet()
    {
        base.OnParametersSet();

        // Sync an incoming SelectedOption into CurrentValue.
        if (!Multiple && SelectedOption is not null && OptionValue is not null)
        {
            var optionVal = OptionValue(SelectedOption);
            if (CurrentValue != optionVal)
                CurrentValue = optionVal ?? string.Empty;
        }

        // Sync an incoming Values array into CurrentValue so EditForm validation
        // (e.g. [Required]) can see the selection even before a change event fires.
        if (Multiple && Values is not null)
        {
            var joined = string.Join(",", Values);
            if (CurrentValue != joined)
                CurrentValue = joined;
        }
    }

    protected override IEnumerable<string> GetEventNames()
    {
        yield return EventNames.Change;
        yield return EventNames.Blur;
        if (OnFocus.HasDelegate) yield return EventNames.Focus;
        if (OnOpen.HasDelegate) yield return "comboboxOpen";
        if (OnClose.HasDelegate) yield return "comboboxClose";
    }

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler(EventNames.Change, async (eventData) =>
        {
            if (Multiple)
            {
                var values = await GetValuesFromElementAsync();
                await HandleValuesChangeAsync(values);

                if (OnChange.HasDelegate)
                    await OnChange.InvokeAsync(new ChangeEventArgs { Value = values });
            }
            else
            {
                var value = await GetStringValueFromElementAsync();
                await HandleSingleValueChangeAsync(value);

                if (OnChange.HasDelegate)
                    await OnChange.InvokeAsync(new ChangeEventArgs { Value = value });
            }
        });

        RegisterEventHandler(EventNames.Blur, async (_) =>
        {
            if (EditContext != null)
            {
                ValidateMinMax();
                EditContext.NotifyFieldChanged(FieldIdentifier);
            }

            if (OnBlur.HasDelegate)
                await OnBlur.InvokeAsync(new FocusEventArgs { Type = EventNames.Blur });
        });

        RegisterEventHandler(EventNames.Focus, async (_) =>
        {
            if (OnFocus.HasDelegate)
                await OnFocus.InvokeAsync(new FocusEventArgs { Type = EventNames.Focus });
        });

        RegisterEventHandler("comboboxOpen", async (_) =>
        {
            if (OnOpen.HasDelegate)
                await OnOpen.InvokeAsync();
        });

        RegisterEventHandler("comboboxClose", async (_) =>
        {
            if (OnClose.HasDelegate)
                await OnClose.InvokeAsync();
        });

        return base.OnParametersSetAsync();
    }

    protected override Dictionary<string, object> GetAttributes()
    {
        var attributes = base.GetAttributes();

        if (Multiple && Values is { Length: > 0 })
        {
            // Do NOT put the array in an HTML attribute — HTML attributes are always strings
            // and the web component would receive the literal JSON text as a single chip.
            // The value is pushed as a real JS array via setProperty in OnAfterRenderAsync.
        }
        else if (!string.IsNullOrEmpty(CurrentValue))
        {
            attributes["value"] = CurrentValue;
        }

        return attributes;
    }

    private async Task HandleSingleValueChangeAsync(string? newValue)
    {
        var normalized = (newValue == "null" || newValue == "undefined") ? null : newValue;
        if (CurrentValue != normalized)
            CurrentValue = normalized ?? string.Empty;

        if (SelectedOptionChanged.HasDelegate && Items is not null && OptionValue is not null)
        {
            var match = Items.FirstOrDefault(item => OptionValue(item) == normalized);
            await SelectedOptionChanged.InvokeAsync(match);
        }
    }

    private async Task HandleValuesChangeAsync(string[]? newValues)
    {
        Values = newValues;
        _lastSyncedValues = newValues;

        // Invoke ValuesChanged BEFORE updating CurrentValue so the parent has the correct Values
        // by the time EditContext.NotifyFieldChanged triggers a re-render. If the order were
        // reversed, an intermediate render could overwrite Values with the stale parent value
        // (before ValuesChanged updates the bound field), causing SyncValuesToElementAsync to
        // push an empty array and deselect the just-chosen items.
        if (ValuesChanged.HasDelegate)
            await ValuesChanged.InvokeAsync(Values);

        // Keep CurrentValue in sync so [Required] and ValidationMessage work.
        var joined = newValues is { Length: > 0 } ? string.Join(",", newValues) : string.Empty;
        if (CurrentValue != joined)
            CurrentValue = joined;
    }

    private void ValidateMinMax()
    {
        if (_messageStore == null || EditContext == null) return;

        _messageStore.Clear(FieldIdentifier);

        if (!Multiple) return;

        // Prefer Values array length; fall back to comma-split CurrentValue.
        var count = Values is not null
            ? Values.Length
            : (string.IsNullOrEmpty(CurrentValue)
                ? 0
                : CurrentValue.Split(',', StringSplitOptions.RemoveEmptyEntries).Length);

        if (Min.HasValue && count < Min.Value)
        {
            _messageStore.Add(FieldIdentifier,
                MinValidationMessage ?? $"Selecteer minimaal {Min.Value} optie(s).");
        }

        if (Max.HasValue && count > Max.Value)
        {
            _messageStore.Add(FieldIdentifier,
                MaxValidationMessage ?? $"Selecteer maximaal {Max.Value} optie(s).");
        }
    }

    private async Task<string?> GetStringValueFromElementAsync()
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

    /// <summary>
    /// Reads the web component's <c>value</c> property as a string array.
    /// Used in multi-select mode where the web component returns a string[].
    /// </summary>
    private async Task<string[]?> GetValuesFromElementAsync()
    {
        if (string.IsNullOrEmpty(ElementRef.Id)) return Values;
        try
        {
            return await JSRuntime.InvokeAsync<string[]>("PggmComponents.getProperty", ElementRef, "value");
        }
        catch
        {
            return Values;
        }
    }

    /// <summary>
    /// Pushes the <see cref="Values"/> array to the web component as a real JS array
    /// via <c>PggmComponents.setProperty</c>. Called after every render when in multi-select
    /// mode so the element's <c>value</c> property is always a JS array, never a JSON string.
    /// </summary>
    private async Task SyncValuesToElementAsync()
    {
        if (!Multiple || string.IsNullOrEmpty(ElementRef.Id)) return;

        // Avoid redundant JS calls when Values hasn't changed.
        if (ReferenceEquals(_lastSyncedValues, Values)) return;

        try
        {
            // Pass the array directly — JSRuntime serializes string[] as a JS array.
            await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "value",
                Values ?? Array.Empty<string>());
            _lastSyncedValues = Values;
        }
        catch
        {
            // Element may not be ready on first render; the next render will retry.
        }
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
            await DesignSystemService.LoadScriptAsync("pggm-combobox");
        await base.OnAfterRenderAsync(firstRender);
        await SyncValuesToElementAsync();
    }
}
