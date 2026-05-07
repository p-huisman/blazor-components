using Microsoft.AspNetCore.Components;

using Pggm.Components.Utilities;

namespace Pggm.Components;

public partial class PggmStack : ComponentBase
{
    private const string AlignStart = "start";
    protected string? ClassValue => new CssBuilder(Class)
        .AddClass("pggm-stack-horizontal", () => Orientation == Orientation.Horizontal)
        .AddClass("pggm-stack-vertical", () => Orientation == Orientation.Vertical)
        .Build();

    protected string? StyleValue => new StyleBuilder(Style)
        .AddStyle("align-items", GetHorizontalAlignment(), () => Orientation == Orientation.Vertical)
        .AddStyle("justify-content", GetVerticalAlignment(), () => Orientation == Orientation.Vertical)

        .AddStyle("justify-content", GetHorizontalAlignment(), () => Orientation == Orientation.Horizontal)
        .AddStyle("align-items", GetVerticalAlignment(), () => Orientation == Orientation.Horizontal)

        .AddStyle("column-gap", $"{HorizontalGap}px", () => HorizontalGap.HasValue)
        .AddStyle("row-gap", $"{VerticalGap}px", () => VerticalGap.HasValue)
        .AddStyle("width", Width, () => !string.IsNullOrEmpty(Width))
        .AddStyle("flex-wrap", "wrap", () => Wrap)
        .Build();

    /// <summary>
    /// Gets or sets the base CSS class.
    /// </summary>
    [Parameter]
    public string? Class { get; set; }

    /// <summary>
    /// Gets or sets the base inline styling.
    /// </summary>
    [Parameter]
    public string? Style { get; set; }

    /// <summary>
    /// Gets or sets the element ID.
    /// </summary>
    [Parameter]
    public string? Id { get; set; }

    /// <summary>
    /// Capture unmatched attributes.
    /// </summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object>? AdditionalAttributes { get; set; }

    /// <summary>
    /// Gets or sets the horizontal alignment of the components in the stack.
    /// Default is <see cref="HorizontalAlignment.Left"/>
    /// </summary>
    [Parameter]
    public HorizontalAlignment HorizontalAlignment { get; set; } = HorizontalAlignment.Left;

    /// <summary>
    /// Gets or sets the vertical alignment of the components in the stack.
    /// Default is <see cref="VerticalAlignment.Top"/>
    /// </summary>
    [Parameter]
    public VerticalAlignment VerticalAlignment { get; set; } = VerticalAlignment.Top;

    /// <summary>
    /// Gets or sets the orientation of the stacked components.
    /// Default is <see cref="Orientation.Vertical"/>.
    /// </summary>
    [Parameter]
    public Orientation Orientation { get; set; } = Orientation.Vertical;

    /// <summary>
    /// Gets or sets a value indicating whether the stack is reversed.
    /// </summary>
    [Parameter]
    public bool? Reversed { get; set; }

    /// <summary>
    /// Gets or sets the width of the stack as a percentage string (default = 100%).
    /// </summary>
    [Parameter]
    public string? Width { get; set; } = "100%";

    /// <summary>
    /// Gets or sets a value indicating whether the stack wraps.
    /// </summary>
    [Parameter]
    public bool Wrap { get; set; } = false;

    /// <summary>
    /// Gets or sets the gap between horizontally stacked components (in pixels).
    /// Default is 10 pixels.
    /// </summary>
    [Parameter]
    public int? HorizontalGap { get; set; } = 10;

    /// <summary>
    /// Gets or sets the gap between vertically stacked components (in pixels).
    /// Default is 10 pixels.
    /// </summary>
    [Parameter]
    public int? VerticalGap { get; set; } = 10;

    /// <summary>
    /// Gets or sets the content to be rendered inside the component.
    /// </summary>
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    private string GetHorizontalAlignment()
    {
        return HorizontalAlignment switch
        {
            HorizontalAlignment.Left => AlignStart,
            HorizontalAlignment.Start => AlignStart,
            HorizontalAlignment.Center => "center",
            HorizontalAlignment.Right => "end",
            HorizontalAlignment.End => "end",
            HorizontalAlignment.Stretch => "stretch",
            HorizontalAlignment.SpaceBetween => Orientation == Orientation.Vertical ? AlignStart : "space-between",
            _ => AlignStart,
        };
    }

    private string GetVerticalAlignment()
    {
        return VerticalAlignment switch
        {
            VerticalAlignment.Top => AlignStart,
            VerticalAlignment.Center => "center",
            VerticalAlignment.Bottom => "end",
            VerticalAlignment.Stretch => "stretch",
            VerticalAlignment.SpaceBetween => Orientation == Orientation.Horizontal ? AlignStart : "space-between",
            _ => AlignStart,
        };
    }
}
