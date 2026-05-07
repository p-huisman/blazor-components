using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmGridItem : ComponentBase
{
    /// <summary>
    /// Additional CSS classes to apply
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
    /// Number of columns to span (default, used if no breakpoint-specific value is set).
    /// </summary>
    [Parameter]
    public int? ColumnSpan { get; set; }

    /// <summary>
    /// Number of columns to span on extra small screens (<576px).
    /// </summary>
    [Parameter]
    public int? XsColumnSpan { get; set; }

    /// <summary>
    /// Number of columns to span on small screens (≥576px).
    /// </summary>
    [Parameter]
    public int? SmColumnSpan { get; set; }

    /// <summary>
    /// Number of columns to span on medium screens (≥768px).
    /// </summary>
    [Parameter]
    public int? MdColumnSpan { get; set; }

    /// <summary>
    /// Number of columns to span on large screens (≥992px).
    /// </summary>
    [Parameter]
    public int? LgColumnSpan { get; set; }

    /// <summary>
    /// Number of columns to span on extra large screens (≥1200px).
    /// </summary>
    [Parameter]
    public int? XlColumnSpan { get; set; }

    /// <summary>
    /// Number of columns to span on extra extra large screens (≥1400px).
    /// </summary>
    [Parameter]
    public int? XxlColumnSpan { get; set; }

    /// <summary>
    /// Number of rows to span.
    /// </summary>
    [Parameter]
    public int? RowSpan { get; set; }

    /// <summary>
    /// When to hide the item based on breakpoint.
    /// </summary>
    [Parameter]
    public GridItemHidden Hidden { get; set; } = GridItemHidden.None;

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    protected string? StyleValue
    {
        get
        {
            var styles = new List<string>();
            if (!string.IsNullOrEmpty(Style)) styles.Add(Style);
            // Only add grid-column inline style if no responsive classes are used
            if (!HasResponsiveColumnSpan && ColumnSpan.HasValue && ColumnSpan.Value > 1)
            {
                styles.Add($"grid-column: span {ColumnSpan.Value}");
            }
            if (RowSpan.HasValue && RowSpan.Value > 1)
            {
                styles.Add($"grid-row: span {RowSpan.Value}");
            }
            return string.Join(";", styles);
        }
    }

    private bool HasResponsiveColumnSpan =>
        XsColumnSpan.HasValue || SmColumnSpan.HasValue || MdColumnSpan.HasValue || LgColumnSpan.HasValue || XlColumnSpan.HasValue || XxlColumnSpan.HasValue;

    protected string ResponsiveColumnSpanClasses
    {
        get
        {
            var classes = new List<string>();
            if (XsColumnSpan.HasValue) classes.Add($"pggm-grid-item-col-xs-{XsColumnSpan.Value}");
            if (SmColumnSpan.HasValue) classes.Add($"pggm-grid-item-col-sm-{SmColumnSpan.Value}");
            if (MdColumnSpan.HasValue) classes.Add($"pggm-grid-item-col-md-{MdColumnSpan.Value}");
            if (LgColumnSpan.HasValue) classes.Add($"pggm-grid-item-col-lg-{LgColumnSpan.Value}");
            if (XlColumnSpan.HasValue) classes.Add($"pggm-grid-item-col-xl-{XlColumnSpan.Value}");
            if (XxlColumnSpan.HasValue) classes.Add($"pggm-grid-item-col-xxl-{XxlColumnSpan.Value}");
            return string.Join(" ", classes);
        }
    }

    protected string? HiddenClass
    {
        get
        {
            if (Hidden == GridItemHidden.None)
                return string.Empty;

            var classes = new List<string>();
            if (Hidden.HasFlag(GridItemHidden.Xs)) classes.Add("pggm-grid-item-hidden-xs");
            if (Hidden.HasFlag(GridItemHidden.Sm)) classes.Add("pggm-grid-item-hidden-sm");
            if (Hidden.HasFlag(GridItemHidden.Md)) classes.Add("pggm-grid-item-hidden-md");
            if (Hidden.HasFlag(GridItemHidden.Lg)) classes.Add("pggm-grid-item-hidden-lg");
            if (Hidden.HasFlag(GridItemHidden.Xl)) classes.Add("pggm-grid-item-hidden-xl");
            if (Hidden.HasFlag(GridItemHidden.Xxl)) classes.Add("pggm-grid-item-hidden-xxl");
            return string.Join(" ", classes);
        }
    }
}
