using Microsoft.AspNetCore.Components;

namespace Pggm.Components.Interfaces;

/// <summary>
/// Interface for all PGGM web components
/// </summary>
public interface IPggmComponent : IAsyncDisposable
{
    /// <summary>
    /// The HTML tag name for the web component
    /// </summary>
    string TagName { get; }
    
    /// <summary>
    /// Additional CSS classes to apply to the component
    /// </summary>
    string? CssClass { get; set; }
    
    /// <summary>
    /// Additional attributes to apply to the component
    /// </summary>
    Dictionary<string, object>? AdditionalAttributes { get; set; }
    
    /// <summary>
    /// Child content for the component
    /// </summary>
    RenderFragment? ChildContent { get; set; }
    
    /// <summary>
    /// Reference to the HTML element
    /// </summary>
    ElementReference ElementRef { get; }
}