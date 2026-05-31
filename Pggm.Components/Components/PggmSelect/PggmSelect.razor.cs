using System.Linq.Expressions;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmSelect<TOption> : PggmEventComponentBase
{
    private FieldIdentifier? _fieldIdentifier;

    public override string TagName => "select";

    [CascadingParameter] private EditContext? EditContext { get; set; }

    // ── Value binding ────────────────────────────────────────────────────────

    /// <summary>The currently selected value.</summary>
    [Parameter] public string? Value { get; set; }

    /// <summary>Callback for two-way binding of <see cref="Value"/>.</summary>
    [Parameter] public EventCallback<string?> ValueChanged { get; set; }

    /// <summary>Expression identifying the bound value; enables EditForm validation.</summary>
    [Parameter] public Expression<Func<string?>>? ValueExpression { get; set; }

    // ── Single selection ──────────────────────────────────────────────────────

    /// <summary>The currently selected item. Only available when <see cref="Multiple"/> is false.</summary>
    [Parameter] public TOption? SelectedOption { get; set; }

    /// <summary>Callback for two-way binding of <see cref="SelectedOption"/>.</summary>
    [Parameter] public EventCallback<TOption?> SelectedOptionChanged { get; set; }

    /// <summary>Expression identifying the bound selected option; enables EditForm validation.</summary>
    [Parameter] public Expression<Func<TOption>>? SelectedOptionExpression { get; set; }

    // ── Multiple selection ────────────────────────────────────────────────────

    /// <summary>All selected items. Only available when <see cref="Multiple"/> is true.</summary>
    [Parameter] public IEnumerable<TOption>? SelectedOptions { get; set; }

    /// <summary>Callback for two-way binding of <see cref="SelectedOptions"/>.</summary>
    [Parameter] public EventCallback<IEnumerable<TOption>?> SelectedOptionsChanged { get; set; }

    /// <summary>Expression identifying the bound selected options; enables EditForm validation.</summary>
    [Parameter] public Expression<Func<IEnumerable<TOption>>>? SelectedOptionsExpression { get; set; }

    // ── Items & option selectors ──────────────────────────────────────────────

    /// <summary>The list of items to render as options.</summary>
    [Parameter] public IEnumerable<TOption>? Items { get; set; }

    /// <summary>Returns the display text for an item. Defaults to <c>ToString()</c>.</summary>
    [Parameter] public Func<TOption, string?> OptionText { get; set; } = item => item?.ToString();

    /// <summary>Returns the value string for an item.</summary>
    [Parameter] public Func<TOption, string?>? OptionValue { get; set; }

    /// <summary>Returns whether an item is disabled.</summary>
    [Parameter] public Func<TOption, bool>? OptionDisabled { get; set; }

    /// <summary>
    /// Returns whether an item is initially selected.
    /// Used when neither <see cref="SelectedOption"/> nor <see cref="Value"/> is set.
    /// </summary>
    [Parameter] public Func<TOption, bool>? OptionSelected { get; set; }

    /// <summary>Returns the tooltip title for an item.</summary>
    [Parameter] public Func<TOption, string?>? OptionTitle { get; set; }

    /// <summary>Equality comparer for items; used when <see cref="Multiple"/> is true.</summary>
    [Parameter] public IEqualityComparer<TOption>? OptionComparer { get; set; }

    /// <summary>Custom render fragment for each option row.</summary>
    [Parameter] public RenderFragment<TOption>? OptionTemplate { get; set; }

    // ── HTML attributes ───────────────────────────────────────────────────────

    /// <summary>Placeholder text shown as the first disabled hidden option.</summary>
    [Parameter, EditorRequired] public string? Placeholder { get; set; }

    /// <summary>aria-label attribute value.</summary>
    [Parameter, EditorRequired] public string? AriaLabel { get; set; }

    /// <summary>CSS min-width of the select element.</summary>
    [Parameter] public string? Width { get; set; }

    /// <summary>CSS height of the select element.</summary>
    [Parameter] public string? Height { get; set; }

    /// <summary>Whether the select is disabled.</summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>Whether the select is required.</summary>
    [Parameter] public bool Required { get; set; }

    /// <summary>Whether the select is read-only.</summary>
    [Parameter] public bool ReadOnly { get; set; }

    /// <summary>Whether multiple selections are allowed.</summary>
    [Parameter] public bool Multiple { get; set; }

    /// <summary>Auto-focus the select on page load.</summary>
    [Parameter] public bool AutoFocus { get; set; }

    /// <summary>The name attribute.</summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>Associates the select with a form by id.</summary>
    [Parameter] public string? Form { get; set; }

    /// <summary>Number of visible rows.</summary>
    [Parameter] public int? Size { get; set; }

    // ── Events ────────────────────────────────────────────────────────────────

    /// <summary>Change event. Provides the new string value(s) and the matched item object(s) when <see cref="Items"/> is set.</summary>
    [Parameter] public EventCallback<PggmSelectChangeEventArgs<TOption>> OnChange { get; set; }

    /// <summary>Focus event.</summary>
    [Parameter] public EventCallback<FocusEventArgs> OnFocus { get; set; }

    /// <summary>Blur event.</summary>
    [Parameter] public EventCallback<FocusEventArgs> OnBlur { get; set; }

    // ── Lifecycle ─────────────────────────────────────────────────────────────

    protected override void OnParametersSet()
    {
        base.OnParametersSet();
        InitializeFieldIdentifier();
        SyncSingleSelectionValue();
    }

    private void InitializeFieldIdentifier()
    {
        if (_fieldIdentifier is not null || EditContext is null)
            return;

        if (SelectedOptionExpression is not null)
            _fieldIdentifier = FieldIdentifier.Create(SelectedOptionExpression);
        else if (SelectedOptionsExpression is not null)
            _fieldIdentifier = FieldIdentifier.Create(SelectedOptionsExpression);
        else if (ValueExpression is not null)
            _fieldIdentifier = FieldIdentifier.Create(ValueExpression);
    }

    private void SyncSingleSelectionValue()
    {
        if (Multiple)
            return;

        if (SelectedOption is not null && OptionValue is not null)
        {
            var optionVal = OptionValue(SelectedOption);
            if (Value != optionVal)
                Value = optionVal;
        }
        else if (SelectedOption is null && Value is null && Items is not null && OptionSelected is not null)
        {
            var match = Items.FirstOrDefault(OptionSelected);
            if (match is not null)
                Value = OptionValue?.Invoke(match) ?? OptionText.Invoke(match);
        }
    }

    protected async Task HandleValueChanged(ChangeEventArgs args)
    {
        if (Multiple)
            await HandleMultipleChangedAsync(args);
        else
            await HandleSingleChangedAsync(args);
    }

    private async Task HandleMultipleChangedAsync(ChangeEventArgs args)
    {
        var selectedValues = args.Value as string[] ?? Array.Empty<string>();

        IEnumerable<TOption> matchedItems = [];
        if (Items is not null)
        {
            IEnumerable<TOption> matches = Items.Where(item =>
            {
                var val = OptionValue?.Invoke(item) ?? OptionText.Invoke(item) ?? item?.ToString();
                return selectedValues.Contains(val);
            });

            if (OptionComparer is not null)
                matches = matches.Distinct(OptionComparer);

            matchedItems = matches.ToList();

            if (SelectedOptionsChanged.HasDelegate)
                await SelectedOptionsChanged.InvokeAsync(matchedItems);
        }

        NotifyFieldChanged();

        if (OnChange.HasDelegate)
            await OnChange.InvokeAsync(new PggmSelectChangeEventArgs<TOption>
            {
                Values = selectedValues,
                Items = matchedItems,
            });
    }

    private async Task HandleSingleChangedAsync(ChangeEventArgs args)
    {
        var newValue = args.Value?.ToString();

        if (Value == newValue)
            return;

        Value = newValue;

        if (ValueChanged.HasDelegate)
            await ValueChanged.InvokeAsync(newValue);

        TOption? matchedItem = default;
        if (Items is not null && OptionValue is not null)
            matchedItem = Items.FirstOrDefault(item => OptionValue(item) == newValue);

        if (SelectedOptionChanged.HasDelegate)
            await SelectedOptionChanged.InvokeAsync(matchedItem);

        NotifyFieldChanged();

        if (OnChange.HasDelegate)
            await OnChange.InvokeAsync(new PggmSelectChangeEventArgs<TOption>
            {
                Value = newValue,
                Values = newValue is not null ? [newValue] : [],
                Item = matchedItem,
                Items = matchedItem is not null ? [matchedItem] : [],
            });
    }

    internal bool IsOptionSelected(TOption item)
    {
        if (Multiple)
            return IsOptionSelectedInMultiple(item);

        if (SelectedOption is not null)
        {
            return OptionValue is not null
                ? OptionValue(item) == OptionValue(SelectedOption)
                : Equals(item, SelectedOption);
        }

        if (!string.IsNullOrEmpty(Value) && OptionValue is not null)
            return OptionValue(item) == Value;

        return OptionSelected?.Invoke(item) ?? false;
    }

    private bool IsOptionSelectedInMultiple(TOption item)
    {
        if (SelectedOptions is null)
            return OptionSelected?.Invoke(item) ?? false;

        if (OptionComparer is not null)
            return SelectedOptions.Contains(item, OptionComparer);

        if (OptionValue is not null)
            return SelectedOptions.Any(s => OptionValue(s) == OptionValue(item));

        return SelectedOptions.Contains(item);
    }

    private void NotifyFieldChanged()
    {
        if (EditContext is not null && _fieldIdentifier.HasValue)
            EditContext.NotifyFieldChanged(_fieldIdentifier.Value);
    }

    // ── Event handling ────────────────────────────────────────────────────────

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler("focus", HandleFocusEventAsync);
        RegisterEventHandler("blur", HandleBlurEventAsync);
        return base.OnParametersSetAsync();
    }

    protected override IEnumerable<string> GetEventNames() => new[] { "focus", "blur" };

    private async Task HandleFocusEventAsync(object? eventData)
    {
        if (OnFocus.HasDelegate)
            await InvokeAsync(async () => await OnFocus.InvokeAsync(new FocusEventArgs()));
    }

    private async Task HandleBlurEventAsync(object? eventData)
    {
        if (OnBlur.HasDelegate)
            await InvokeAsync(async () => await OnBlur.InvokeAsync(new FocusEventArgs()));
    }

    // ── Attributes ────────────────────────────────────────────────────────────

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        SetBooleanAttributes(attributes);
        SetStringAttributes(attributes);
        SetStyleAttribute(attributes);
    }

    private void SetBooleanAttributes(Dictionary<string, object> attributes)
    {
        SetFlag(attributes, "disabled", Disabled);
        SetFlag(attributes, "required", Required);
        SetFlag(attributes, "readonly", ReadOnly);
        SetFlag(attributes, "multiple", Multiple);
        SetFlag(attributes, "autofocus", AutoFocus);
    }

    private static void SetFlag(Dictionary<string, object> attributes, string key, bool value)
    {
        if (value) attributes[key] = true;
        else attributes.Remove(key);
    }

    private void SetStringAttributes(Dictionary<string, object> attributes)
    {
        if (!string.IsNullOrEmpty(Name)) attributes["name"] = Name;
        if (!string.IsNullOrEmpty(Value)) attributes["value"] = Value;
        if (!string.IsNullOrEmpty(Form)) attributes["form"] = Form;
        if (!string.IsNullOrEmpty(AriaLabel)) attributes["aria-label"] = AriaLabel;
        if (Size.HasValue) attributes["size"] = Size.Value;
    }

    private void SetStyleAttribute(Dictionary<string, object> attributes)
    {
        var styleParts = new List<string>();
        if (!string.IsNullOrEmpty(Width)) styleParts.Add($"min-width: {Width}");
        if (!string.IsNullOrEmpty(Height)) styleParts.Add($"height: {Height}");

        if (styleParts.Count == 0)
            return;

        var existing = attributes.TryGetValue("style", out var s) ? s?.ToString() : null;
        attributes["style"] = string.IsNullOrEmpty(existing)
            ? string.Join("; ", styleParts)
            : existing.TrimEnd(';', ' ') + "; " + string.Join("; ", styleParts);
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
    }
}
