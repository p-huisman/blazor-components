using Pggm.Components.Components.PggmApp.PggmAsideMenu.Models;

namespace Pggm.Components.Components.PggmApp.PggmAsideMenu.Services;

/// <summary>
/// Manages the structure of the aside navigation menu.
/// </summary>
public interface IPggmAsideMenuService
{
    /// <summary>Fires whenever the menu structure changes.</summary>
    event Action? OnChanged;

    /// <summary>The current list of sections.</summary>
    IReadOnlyList<NavSectionModel> Sections { get; }

    void SetSections(IEnumerable<NavSectionModel> sections);
    void AddSection(NavSectionModel section);
    bool RemoveSection(string title);
    void AddCategory(string sectionTitle, NavCategoryModel category);
    bool RemoveCategory(string sectionTitle, string categoryLabel);
    void AddItem(string sectionTitle, string categoryLabel, NavItemModel item);
    bool RemoveItem(string sectionTitle, string categoryLabel, string href);
    void Clear();

    /// <summary>Returns whether the category with the given label is currently expanded.</summary>
    bool IsCategoryExpanded(string label);

    /// <summary>Sets the expanded state for the category with the given label.</summary>
    void SetCategoryExpanded(string label, bool expanded);
}
