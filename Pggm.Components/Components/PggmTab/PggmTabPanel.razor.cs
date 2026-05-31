using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmTabPanel : PggmComponentBase
{
    public override string TagName => "pggm-tab-panel";

    /// <summary>
    /// The tab title/header text
    /// </summary>
    [Parameter, EditorRequired] public string? Title { get; set; }

    /// <summary>
    /// Whether this tab panel is active/selected
    /// </summary>
    [Parameter] public bool Active { get; set; }

    /// <summary>
    /// The tab index for this panel
    /// </summary>
    [Parameter] public int? TabIndex { get; set; }

    /// <summary>
    /// Icon to display in the tab header (optional)
    /// </summary>
    [Parameter] public string? Icon { get; set; }

    /// <summary>
    /// Custom content for the tab header (alternative to Label)
    /// </summary>
    [Parameter] public RenderFragment? HeaderContent { get; set; }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (Active) attributes["active"] = true; else attributes.Remove("active");
        if (!string.IsNullOrEmpty(Icon)) attributes["icon"] = Icon;

        if (TabIndex.HasValue)
        {
            attributes["tab-index"] = TabIndex.Value.ToString();
        }
    }
}
