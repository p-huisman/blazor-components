using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmAvatar : PggmComponentBase
{
    public override string TagName => "pggm-avatar";

    /// <summary>
    /// Accessible label for the avatar (maps to the aria-label via the web component)
    /// </summary>
    [Parameter] public string? Label { get; set; }

    /// <summary>
    /// Alternative text for the avatar image
    /// </summary>
    [Parameter] public string? Alt { get; set; }

    /// <summary>
    /// Up to five characters displayed inside the avatar when no image is shown
    /// </summary>
    [Parameter] public string? Characters { get; set; }

    /// <summary>
    /// URL of the image to display inside the avatar
    /// </summary>
    [Parameter] public string? Src { get; set; }

    /// <summary>
    /// CSS color value applied to the avatar foreground (overrides --pggm-avatar-color)
    /// </summary>
    [Parameter] public string? Color { get; set; }

    /// <summary>
    /// CSS color value applied to the avatar background (overrides --pggm-avatar-background-color)
    /// </summary>
    [Parameter] public string? Background { get; set; }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-avatar");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (!string.IsNullOrEmpty(Label)) attributes["label"] = Label;
        if (!string.IsNullOrEmpty(Alt)) attributes["alt"] = Alt;
        if (!string.IsNullOrEmpty(Characters)) attributes["characters"] = Characters;
        if (!string.IsNullOrEmpty(Src)) attributes["src"] = Src;
        if (!string.IsNullOrEmpty(Color)) attributes["color"] = Color;
        if (!string.IsNullOrEmpty(Background)) attributes["background"] = Background;
    }
}
