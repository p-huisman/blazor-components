using Pggm.Components.Components.PggmApp.PggmAsideMenu.Models;

namespace Pggm.Components.Components.PggmApp.PggmAsideMenu.Services;

/// <summary>
/// Scoped implementation of <see cref="IPggmAsideMenuService"/>.
/// </summary>
public class PggmAsideMenuService : IPggmAsideMenuService
{
    private readonly List<NavSectionModel> _sections = [];
    private readonly HashSet<string> _expandedCategories = new(StringComparer.OrdinalIgnoreCase);

    public event Action? OnChanged;

    public IReadOnlyList<NavSectionModel> Sections => _sections.AsReadOnly();

    public void SetSections(IEnumerable<NavSectionModel> sections)
    {
        _sections.Clear();
        _sections.AddRange(sections);
        NotifyChanged();
    }

    public void AddSection(NavSectionModel section)
    {
        _sections.Add(section);
        NotifyChanged();
    }

    public bool RemoveSection(string title)
    {
        var index = _sections.FindIndex(s => string.Equals(s.Title, title, StringComparison.OrdinalIgnoreCase));
        if (index < 0)
            return false;
        _sections.RemoveAt(index);
        NotifyChanged();
        return true;
    }

    public void AddCategory(string sectionTitle, NavCategoryModel category)
    {
        var section = FindSection(sectionTitle);
        section.Categories.Add(category);
        NotifyChanged();
    }

    public bool RemoveCategory(string sectionTitle, string categoryLabel)
    {
        var section = FindSection(sectionTitle);
        var cat = section.Categories.FirstOrDefault(c => string.Equals(c.Label, categoryLabel, StringComparison.OrdinalIgnoreCase));
        if (cat is null)
            return false;
        section.Categories.Remove(cat);
        NotifyChanged();
        return true;
    }

    public void AddItem(string sectionTitle, string categoryLabel, NavItemModel item)
    {
        var category = FindCategory(sectionTitle, categoryLabel);
        category.Items.Add(item);
        NotifyChanged();
    }

    public bool RemoveItem(string sectionTitle, string categoryLabel, string href)
    {
        var category = FindCategory(sectionTitle, categoryLabel);
        var item = category.Items.FirstOrDefault(i => string.Equals(i.Href, href, StringComparison.OrdinalIgnoreCase));
        if (item is null)
            return false;
        category.Items.Remove(item);
        NotifyChanged();
        return true;
    }

    public void Clear()
    {
        _sections.Clear();
        NotifyChanged();
    }

    public bool IsCategoryExpanded(string label) =>
        _expandedCategories.Contains(label);

    public void SetCategoryExpanded(string label, bool expanded)
    {
        if (expanded)
            _expandedCategories.Add(label);
        else
            _expandedCategories.Remove(label);
    }

    private void NotifyChanged() => OnChanged?.Invoke();

    private NavSectionModel FindSection(string title) =>
        _sections.FirstOrDefault(s => string.Equals(s.Title, title, StringComparison.OrdinalIgnoreCase))
        ?? throw new InvalidOperationException($"Section '{title}' not found.");

    private NavCategoryModel FindCategory(string sectionTitle, string categoryLabel)
    {
        var section = FindSection(sectionTitle);
        return section.Categories.FirstOrDefault(c => string.Equals(c.Label, categoryLabel, StringComparison.OrdinalIgnoreCase))
            ?? throw new InvalidOperationException($"Category '{categoryLabel}' not found in section '{sectionTitle}'.");
    }
}
