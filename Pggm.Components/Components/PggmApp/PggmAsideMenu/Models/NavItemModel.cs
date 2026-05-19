using Microsoft.AspNetCore.Components.Routing;

namespace Pggm.Components.Components.PggmApp.PggmAsideMenu.Models;

/// <summary>
/// Represents a single navigation link in the aside menu.
/// </summary>
public class NavItemModel
{
    public required string Href { get; init; }
    public required string Label { get; init; }
    public NavLinkMatch Match { get; init; } = NavLinkMatch.All;
}
