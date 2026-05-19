namespace Pggm.Components.Components.PggmApp.PggmAsideMenu.Models;

/// <summary>
/// Represents a titled section containing nav categories.
/// </summary>
public class NavSectionModel
{
    public required string Title { get; init; }
    public IList<NavCategoryModel> Categories { get; init; } = [];
}
