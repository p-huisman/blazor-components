using Microsoft.AspNetCore.Components;

namespace Pggm.Components.Components.PggmApp.PggmAsideMenu.Models;

/// <summary>
/// Represents a collapsible category grouping nav items.
/// </summary>
public class NavCategoryModel
{
    public required string Label { get; init; }
    public RenderFragment? Icon { get; init; }
    public IList<NavItemModel> Items { get; init; } = [];
}
