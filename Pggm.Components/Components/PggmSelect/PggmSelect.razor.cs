using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmSelect<TOption> : PggmEventComponentBase
{
    public override string TagName => "select";

    [CascadingParameter] private EditContext? EditContext { get; set; }

    /// <summary>
    /// The currently selected value
    /// </summary>
    [Parameter] public string? Value { get; set; }

    /// <summary>
    /// Event callback for when the selected value changes (two-way binding)
    /// </summary>
    [Parameter]
    public EventCallback<string?> ValueChanged { get; set; }

    /// <summary>
    /// The items to render as options
    /// </summary>
    [Parameter] public IEnumerable<TOption>? Items { get; set; }

    /// <summary>
    /// Selector for the option value string
    /// </summary>
    [Parameter] public Func<TOption, string?>? OptionValue { get; set; }

    /// <summary>
    /// Selector for the option display text
    /// </summary>
    [Parameter] public Func<TOption, string?>? OptionText { get; set; }

    /// <summary>
    /// Selector for whether an option is disabled
    /// </summary>
    [Parameter] public Func<TOption, bool>? OptionDisabled { get; set; }

    /// <summary>
    /// Custom render fragment for each option
    /// </summary>
    [Parameter] public RenderFragment<TOption>? OptionTemplate { get; set; }

    /// <summary>
    /// The currently selected item object (two-way binding)
    /// </summary>
    [Parameter] public TOption? SelectedOption { get; set; }

    /// <summary>
    /// Event callback for when the selected item changes
    /// </summary>
    [Parameter] public EventCallback<TOption?> SelectedOptionChanged { get; set; }

    protected override void OnParametersSet()
    {
        base.OnParametersSet();
        if (SelectedOption is not null && OptionValue is not null)
        {
            var optionVal = OptionValue(SelectedOption);
            if (Value != optionVal)
                Value = optionVal;
        }
    }

    /// <summary>
    /// Handle value changes and invoke callbacks
    /// </summary>
    protected async Task HandleValueChanged(ChangeEventArgs args)
    {
        var newValue = args.Value?.ToString();

        if (Value != newValue)
        {
            Value = newValue;

            if (ValueChanged.HasDelegate)
                await ValueChanged.InvokeAsync(newValue);

            if (SelectedOptionChanged.HasDelegate && Items is not null && OptionValue is not null)
            {
                var match = Items.FirstOrDefault(item => OptionValue(item) == newValue);
                await SelectedOptionChanged.InvokeAsync(match);
            }

            if (OnChange.HasDelegate)
                await OnChange.InvokeAsync(args);
        }
    }

    /// <summary>
    /// Whether the select is disabled
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// Whether the select is required
    /// </summary>
    [Parameter] public bool Required { get; set; }

    /// <summary>
    /// The name attribute for the select
    /// </summary>
    [Parameter] public string? Name { get; set; }

    /// <summary>
    /// Whether multiple selections are allowed
    /// </summary>
    [Parameter] public bool Multiple { get; set; }

    /// <summary>
    /// The size attribute (number of visible options)
    /// </summary>
    [Parameter] public int? Size { get; set; }

    /// <summary>
    /// Auto-focus the select when the page loads
    /// </summary>
    [Parameter] public bool AutoFocus { get; set; }

    /// <summary>
    /// The form attribute (associates with a form)
    /// </summary>
    [Parameter] public string? Form { get; set; }

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

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler("focus", HandleFocusEventAsync);
        RegisterEventHandler("blur", HandleBlurEventAsync);
        return base.OnParametersSetAsync();
    }

    protected override IEnumerable<string> GetEventNames()
    {
        return new[] { "focus", "blur" };
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
        if (Required) attributes["required"] = true; else attributes.Remove("required");
        if (Multiple) attributes["multiple"] = true; else attributes.Remove("multiple");
        if (AutoFocus) attributes["autofocus"] = true; else attributes.Remove("autofocus");
        if (!string.IsNullOrEmpty(Name)) attributes["name"] = Name;
        if (!string.IsNullOrEmpty(Value)) attributes["value"] = Value;
        if (!string.IsNullOrEmpty(Form)) attributes["form"] = Form;

        if (Size.HasValue)
        {
            attributes["size"] = Size.Value;
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
    }
}
