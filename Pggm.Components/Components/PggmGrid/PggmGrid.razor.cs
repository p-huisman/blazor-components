using Microsoft.AspNetCore.Components;

using Pggm.Components.Utilities;

namespace Pggm.Components;

public partial class PggmGrid : ComponentBase
{
    protected string? StyleValue => new StyleBuilder(Style)
        .AddStyle("display", "grid")
        .AddStyle("grid-template-columns", GetGridTemplateColumns(), () => true)
        .AddStyle("column-gap", ColumnGap.HasValue ? $"{ColumnGap}px" : null, () => ColumnGap.HasValue)
        .AddStyle("row-gap", RowGap.HasValue ? $"{RowGap}px" : null, () => RowGap.HasValue)
        .Build();

    /// <summary>
    /// Additional CSS classes to apply to the component
    /// </summary>
    [Parameter]
    public string? Class { get; set; }

    /// <summary>
    /// Additional inline styles
    /// </summary>
    [Parameter]
    public string? Style { get; set; }

    /// <summary>
    /// Capture unmatched attributes.
    /// </summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object>? AdditionalAttributes { get; set; }

    /// <summary>
    /// Number of columns. If not set, the grid will auto-fit using minmax(0, 1fr).
    /// </summary>
    [Parameter]
    public int? Columns { get; set; } = 12;

    /// <summary>
    /// Column gap in pixels.
    /// </summary>
    [Parameter]
    public int? ColumnGap { get; set; } = 16;

    /// <summary>
    /// Row gap in pixels.
    /// </summary>
    [Parameter]
    public int? RowGap { get; set; } = 16;

    /// <summary>
    /// Child content to render inside the grid.
    /// </summary>
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Data items to render via <see cref="ItemTemplate"/>
    /// </summary>
    [Parameter]
    public IEnumerable<object>? Items { get; set; }

    /// <summary>
    /// Template to render each data item.
    /// </summary>
    [Parameter]
    public RenderFragment<object>? ItemTemplate { get; set; }

    private string GetGridTemplateColumns()
    {
        if (Columns.HasValue && Columns.Value > 0)
        {
            return $"repeat({Columns.Value}, 1fr)";
        }

        return "repeat(auto-fit, minmax(0, 1fr))";
    }
}
