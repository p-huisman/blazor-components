using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

/// <summary>
/// Represents an action button for a PGGM dialog
/// </summary>
public class DialogAction
{
    /// <summary>
    /// The text to display on the button
    /// </summary>
    public string Text { get; set; } = string.Empty;

    /// <summary>
    /// The button appearance (primary, secondary, etc.)
    /// </summary>
    public string? Appearance { get; set; }

    /// <summary>
    /// Whether the button is disabled
    /// </summary>
    public bool Disabled { get; set; }

    /// <summary>
    /// The callback to execute when the button is clicked
    /// </summary>
    public EventCallback OnClick { get; set; }

    /// <summary>
    /// Additional CSS classes for the button
    /// </summary>
    public string? CssClass { get; set; }

    /// <summary>
    /// The button type (button, submit, reset)
    /// </summary>
    public string Type { get; set; } = "button";
}
