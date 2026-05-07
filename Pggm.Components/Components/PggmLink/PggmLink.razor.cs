using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmLink : PggmComponentBase
{
    public override string TagName => "a";

    /// <summary>
    /// The URL that the link points to
    /// </summary>
    [Parameter] public string? Href { get; set; }

    /// <summary>
    /// The target window or frame for the link
    /// </summary>
    [Parameter] public string? Target { get; set; }

    /// <summary>
    /// Whether the link is rendered as a standalone element with chevron icon
    /// If set, the link is rendered with a chevron icon
    /// If not set, the link is just an inline href element with styles applied
    /// </summary>
    [Parameter] public bool Standalone { get; set; }

    /// <summary>
    /// The relationship between the current document and the linked document
    /// </summary>
    [Parameter] public string? Rel { get; set; }

    /// <summary>
    /// Specifies what media/device the linked document is optimized for
    /// </summary>
    [Parameter] public string? Media { get; set; }

    /// <summary>
    /// Specifies the MIME type of the linked document
    /// </summary>
    [Parameter] public string? Type { get; set; }

    /// <summary>
    /// Provides a hint about the linked document's language
    /// </summary>
    [Parameter] public string? HrefLang { get; set; }
}
