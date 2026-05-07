using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmSliderLabel : PggmComponentBase
{
    public override string TagName => "pggm-slider-label";

    /// <summary>
    /// The value position where this label should be positioned on the slider
    /// </summary>
    [Parameter] public double Value { get; set; }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-slider");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        attributes["value"] = Value.ToString(System.Globalization.CultureInfo.InvariantCulture);
    }
}
