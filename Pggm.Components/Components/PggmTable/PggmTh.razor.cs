using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmTh : PggmComponentBase
{
    public override string TagName => "pggm-th";

    /// <summary>
    /// Whether this column is sortable
    /// </summary>
    [Parameter] public bool Sortable { get; set; }

    /// <summary>
    /// Whether this column is filterable
    /// </summary>
    [Parameter] public bool Filterable { get; set; }

    /// <summary>
    /// The field name in the data object that this column represents
    /// </summary>
    [Parameter] public string? Field { get; set; }

    /// <summary>
    /// Width of the column (e.g., "150", "auto")
    /// </summary>
    [Parameter] public string? Width { get; set; }

    /// <summary>
    /// Data type of the column (string, number, date, etc.)
    /// </summary>
    [Parameter] public string? Type { get; set; }

    /// <summary>
    /// Format for displaying the data (string, date, currency, etc.)
    /// </summary>
    [Parameter] public string? Format { get; set; }

    /// <summary>
    /// Text alignment for the column (left, center, right)
    /// </summary>
    [Parameter] public string? TextAlign { get; set; }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (Sortable) attributes["sortable"] = true; else attributes.Remove("sortable");
        if (Filterable) attributes["filterable"] = true; else attributes.Remove("filterable");
        if (!string.IsNullOrEmpty(Field)) attributes["field"] = Field;
        if (!string.IsNullOrEmpty(Width)) attributes["width"] = Width;
        if (!string.IsNullOrEmpty(Type)) attributes["type"] = Type;
        if (!string.IsNullOrEmpty(Format)) attributes["format"] = Format;
        if (!string.IsNullOrEmpty(TextAlign)) attributes["text-align"] = TextAlign;
    }
}
