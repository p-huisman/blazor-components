using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmToggletip : PggmComponentBase
{
    public override string TagName => "pggm-toggletip";

    /// <summary>
    /// The ID of the element that triggers this toggletip
    /// </summary>
    [Parameter, EditorRequired] public string For { get; set; } = string.Empty;

    /// <summary>
    /// The unique identifier for this toggletip
    /// </summary>
    [Parameter] public string? Id { get; set; }

    /// <summary>
    /// The position where the toggletip should appear relative to the trigger element
    /// </summary>
    [Parameter] public string? Position { get; set; }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        // The 'for' attribute is required and links the toggletip to its trigger element
        if (!string.IsNullOrEmpty(For)) attributes["for"] = For;

        // Set the ID for the toggletip - this should match the aria-describedby of the trigger
        if (!string.IsNullOrEmpty(Id)) attributes["id"] = Id;

        // Optional position attribute
        if (!string.IsNullOrEmpty(Position)) attributes["position"] = Position;
    }
}
