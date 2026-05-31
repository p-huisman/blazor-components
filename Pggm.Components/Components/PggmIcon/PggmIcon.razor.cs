using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;
using Pggm.Components.Constants;

namespace Pggm.Components;

public partial class PggmIcon : PggmComponentBase
{
    public override string TagName => "pggm-icon";

    /// <summary>
    /// The icon name to display
    /// </summary>
    [Parameter, EditorRequired] public string Icon { get; set; } = string.Empty;

    /// <summary>
    /// Optional URL to an external SVG file to render inside the web component
    /// </summary>
    [Parameter] public string? Src { get; set; }

    /// <summary>
    /// Optional width for the icon. If the value is a plain number it is treated as pixels,
    /// otherwise the provided value is used as-is (e.g. "1.2em", "50%", "2rem").
    /// </summary>
    [Parameter] public string? Width { get; set; }

    /// <summary>
    /// Optional height for the icon. If the value is a plain number it is treated as pixels,
    /// otherwise the provided value is used as-is (e.g. "1.2em", "50%", "2rem").
    /// </summary>
    [Parameter] public string? Height { get; set; }

    /// <summary>
    /// The size of the icon (small, medium, large)
    /// </summary>
    [Parameter] public string Size { get; set; } = ComponentValues.IconSize.Medium;

    /// <summary>
    /// Whether the icon should be outlined
    /// </summary>
    [Parameter] public bool Outline { get; set; }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (!string.IsNullOrEmpty(Icon)) attributes["icon"] = Icon;
        if (!string.IsNullOrEmpty(Src)) attributes["src"] = Src;
        if (!string.IsNullOrEmpty(Size)) attributes["size"] = Size;
        if (!string.IsNullOrEmpty(Width)) attributes["width"] = NormalizeDimension(Width);
        if (!string.IsNullOrEmpty(Height)) attributes["height"] = NormalizeDimension(Height);
        if (Outline) attributes["outline"] = true; else attributes.Remove("outline");
    }

    private static string NormalizeDimension(string value)
    {
        if (string.IsNullOrWhiteSpace(value)) return value;

        // Trim whitespace
        var v = value.Trim();

        // If value contains any letter or % then assume user specified a unit and return as-is
        foreach (var ch in v)
        {
            if (char.IsLetter(ch) || ch == '%') return v;
        }

        // Value contains only numbers (possibly with a decimal point). Append px.
        return v + "px";
    }
}
