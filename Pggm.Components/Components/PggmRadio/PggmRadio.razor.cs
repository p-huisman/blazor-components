using System.Linq.Expressions;

using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Pggm.Components;

public partial class PggmRadio : Microsoft.AspNetCore.Components.Forms.InputBase<string>, IAsyncDisposable
{
    private DotNetObjectReference<PggmRadio>? _dotNetRef;

    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    public ElementReference ElementRef { get; set; }

    [Parameter] public string? RadioValue { get; set; }
    [Parameter] public string? Name { get; set; }
    [Parameter] public bool Disabled { get; set; }
    [Parameter] public bool Required { get; set; }
    [Parameter] public string? Description { get; set; }
    [Parameter] public RenderFragment? ChildContent { get; set; }

    protected bool IsChecked => EqualityComparer<string?>.Default.Equals(CurrentValue, RadioValue);

    public override Task SetParametersAsync(ParameterView parameters)
    {
        if (!parameters.TryGetValue<Expression<Func<string>>>(nameof(ValueExpression), out var expr) || expr is null)
        {
            ValueExpression = () => CurrentValue!;
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
                Console.WriteLine($"Failed to add event listeners: {ex.Message}");
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
            Console.WriteLine($"Failed to read checked property: {ex.Message}");
            return;
        }
        if (isChecked)
        {
            CurrentValue = RadioValue ?? string.Empty;
            await ValueChanged.InvokeAsync(CurrentValue);
        }
        await InvokeAsync(StateHasChanged);
    }

    [JSInvokable]
    public Task HandleBlur()
    {
        EditContext?.NotifyFieldChanged(FieldIdentifier);
        return Task.CompletedTask;
    }

    public async ValueTask DisposeAsync()
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
    }

    protected override bool TryParseValueFromString(string? value, out string result, out string validationErrorMessage)
    {
        result = value ?? string.Empty;
        validationErrorMessage = null!;
        return true;
    }
}
