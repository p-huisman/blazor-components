using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using Blazor.Pggm.Components.Services;

namespace Blazor.Pggm.Components.Base;

/// <summary>
/// Base class for all PGGM web component wrappers
/// </summary>
public abstract class PggmComponentBase : ComponentBase, IAsyncDisposable
{
    [Inject] protected IJSRuntime JSRuntime { get; set; } = default!;
    [Inject] protected PggmDesignSystemService DesignSystemService { get; set; } = default!;
    
    /// <summary>
    /// The HTML tag name for the web component
    /// </summary>
    protected abstract string TagName { get; }
    
    /// <summary>
    /// Additional CSS classes to apply to the component
    /// </summary>
    [Parameter] public string? CssClass { get; set; }
    
    /// <summary>
    /// Additional attributes to apply to the component
    /// </summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object>? AdditionalAttributes { get; set; }
    
    /// <summary>
    /// Child content for the component
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }
    
    /// <summary>
    /// Reference to the HTML element
    /// </summary>
    protected ElementReference ElementRef { get; set; }
    
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await DesignSystemService.InitializeAsync();
            await InitializeWebComponentAsync();
        }
        await base.OnAfterRenderAsync(firstRender);
    }
    
    /// <summary>
    /// Initialize the web component with any required JavaScript
    /// </summary>
    protected virtual async Task InitializeWebComponentAsync()
    {
        // Override in derived classes if needed
        await Task.CompletedTask;
    }
    
    /// <summary>
    /// Gets all attributes to be applied to the component
    /// </summary>
    protected virtual Dictionary<string, object> GetAttributes()
    {
        var attributes = new Dictionary<string, object>();
        
        if (!string.IsNullOrEmpty(CssClass))
        {
            attributes["class"] = CssClass;
        }
        
        if (AdditionalAttributes != null)
        {
            foreach (var attr in AdditionalAttributes)
            {
                attributes[attr.Key] = attr.Value;
            }
        }
        
        return attributes;
    }
    
    public virtual ValueTask DisposeAsync()
    {
        return ValueTask.CompletedTask;
    }
}
