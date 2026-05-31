using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmAvatarGroup : PggmComponentBase
{
    public override string TagName => "pggm-avatar-group";

    /// <summary>
    /// Maximum number of avatars to show before displaying an overflow indicator
    /// </summary>
    [Parameter] public int? MaxAvatars { get; set; }

    /// <summary>
    /// Accessible label for the avatar group
    /// </summary>
    [Parameter, EditorRequired] public string? Label { get; set; }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-avatar");
        await base.InitializeWebComponentAsync();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (MaxAvatars.HasValue) attributes["max-avatars"] = MaxAvatars.Value;
        if (!string.IsNullOrEmpty(Label)) attributes["label"] = Label;
    }
}
