using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;
using Pggm.Components.Extensions;

namespace Pggm.Components;

public partial class PggmCard : PggmComponentBase
{
    public override string TagName => "pggm-card";

    /// <summary>
    /// Whether to display a border around the card.
    /// </summary>
    [Parameter] public bool Border { get; set; }

    /// <summary>
    /// The layout orientation of the card content (vertical or horizontal).
    /// Defaults to <see cref="Orientation.Vertical"/>.
    /// </summary>
    [Parameter] public Orientation Orientation { get; set; } = Orientation.Vertical;

    /// <summary>
    /// Content for the media slot (e.g. an image rendered at the top for vertical cards or the side for horizontal cards).
    /// </summary>
    [Parameter] public RenderFragment? MediaContent { get; set; }

    /// <summary>
    /// Content for the header slot (card title or heading).
    /// </summary>
    [Parameter] public RenderFragment? HeaderContent { get; set; }

    /// <summary>
    /// Content for the header-icon slot (icon displayed before the header text).
    /// </summary>
    [Parameter] public RenderFragment? HeaderIconContent { get; set; }

    /// <summary>
    /// Content for the header-action slot (action element displayed in the header row).
    /// </summary>
    [Parameter] public RenderFragment? HeaderActionContent { get; set; }

    /// <summary>
    /// Content for the footer slot (displayed at the bottom of the card).
    /// </summary>
    [Parameter] public RenderFragment? FooterContent { get; set; }

    /// <summary>
    /// Content for the action slot. Only rendered in horizontal orientation.
    /// </summary>
    [Parameter] public RenderFragment? ActionContent { get; set; }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-card");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        attributes["orientation"] = Orientation.ToAttributeValue()!;

        if (Border)
            attributes["border"] = "true";
    }
}
