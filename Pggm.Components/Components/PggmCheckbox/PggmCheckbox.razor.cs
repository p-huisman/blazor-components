using System.Linq.Expressions;

using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using Microsoft.Extensions.Logging;
using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmCheckbox : PggmEventComponentInputBase<bool>
{
    private DotNetObjectReference<PggmCheckbox>? _dotNetRef;
    // ElementRef, JSRuntime and Logger are provided by the base class.

    [Parameter] public string? Name { get; set; }
    [Parameter] public bool Disabled { get; set; }
    [Parameter] public bool Required { get; set; }
    [Parameter] public bool Indeterminate { get; set; }
    [Parameter] public string? Description { get; set; }
    [Parameter] public RenderFragment? ChildContent { get; set; }

    public override Task SetParametersAsync(ParameterView parameters)
    {
        if (!parameters.TryGetValue<Expression<Func<bool>>>(nameof(ValueExpression), out var expr) || expr is null)
        {
            ValueExpression = () => CurrentValue;
        }
        return base.SetParametersAsync(parameters);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            try
            {
                await JSRuntime.InvokeVoidAsync("PggmComponents.addEventListener", ElementRef, "change", _dotNetRef, nameof(HandleChange));
                await JSRuntime.InvokeVoidAsync("PggmComponents.addEventListener", ElementRef, "blur", _dotNetRef, nameof(HandleBlur));
            }
            catch (Exception ex)
            {
                Logger?.LogError(ex, "Failed to add event listeners.");
            }

            if (EditContext is not null)
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
        await base.OnAfterRenderAsync(firstRender);
    }

    [JSInvokable]
    public async Task HandleChange()
    {
        bool isChecked;
        try
        {
            isChecked = await JSRuntime.InvokeAsync<bool>("PggmComponents.getProperty", ElementRef, "checked");
        }
        catch (Exception ex)
        {
            Logger?.LogError(ex, "Failed to read checked property.");
            return;
        }
        CurrentValue = isChecked;
        await ValueChanged.InvokeAsync(CurrentValue);
        await InvokeAsync(StateHasChanged);
    }

    [JSInvokable]
    public Task HandleBlur()
    {
        EditContext?.NotifyFieldChanged(FieldIdentifier);
        return Task.CompletedTask;
    }

    public override async ValueTask DisposeAsync()
    {
        if (_dotNetRef is not null)
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("PggmComponents.removeEventListener", ElementRef, "change");
                await JSRuntime.InvokeVoidAsync("PggmComponents.removeEventListener", ElementRef, "blur");
            }
            catch (JSException)
            {
                // Ignore - runtime may be shutting down or JS runtime unavailable.
            }
            _dotNetRef.Dispose();
            _dotNetRef = null;
        }

        await base.DisposeAsync();
    }

    protected override bool TryParseValueFromString(string? value, out bool result, out string validationErrorMessage)
    {
        validationErrorMessage = null!;
        result = value is not null && bool.TryParse(value, out var b) && b;
        return true;
    }
}
