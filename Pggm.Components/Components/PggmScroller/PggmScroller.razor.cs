using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;
using Pggm.Components.Extensions;

namespace Pggm.Components;

public partial class PggmScroller : PggmComponentBase
{
    public override string TagName => "pggm-scroller";

    /// <summary>
    /// The scroll orientation of the scroller.
    /// Defaults to <see cref="Orientation.Vertical"/>.
    /// </summary>
    [Parameter] public Orientation Orientation { get; set; } = Orientation.Vertical;

    /// <summary>
    /// When <c>true</c>, hides the scrollbar.
    /// </summary>
    [Parameter] public bool WithoutScrollbar { get; set; }

    /// <summary>
    /// When <c>true</c>, hides the overflow shadow indicators.
    /// </summary>
    [Parameter] public bool WithoutShadow { get; set; }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-scroller");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        attributes["orientation"] = Orientation.ToAttributeValue()!;

        if (WithoutScrollbar)
            attributes["without-scrollbar"] = "true";

        if (WithoutShadow)
            attributes["without-shadow"] = "true";
    }
}
