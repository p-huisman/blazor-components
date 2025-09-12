using Pggm.Components.Base;

namespace Pggm.Components.Builders;

/// <summary>
/// Fluent builder for component attributes
/// </summary>
public class AttributeBuilder
{
    private readonly Dictionary<string, object> _attributes = new();

    /// <summary>
    /// Add a CSS class to the component
    /// </summary>
    public AttributeBuilder AddClass(string cssClass)
    {
        if (!string.IsNullOrWhiteSpace(cssClass))
        {
            var existing = _attributes.TryGetValue("class", out var value) ? value?.ToString() : null;
            _attributes["class"] = AttributeHelper.MergeCssClasses(existing, cssClass)!;
        }
        return this;
    }

    /// <summary>
    /// Add a CSS class conditionally
    /// </summary>
    public AttributeBuilder AddClassIf(bool condition, string cssClass)
    {
        return condition ? AddClass(cssClass) : this;
    }

    /// <summary>
    /// Set a string attribute if not null or empty
    /// </summary>
    public AttributeBuilder SetAttribute(string name, string? value)
    {
        if (!string.IsNullOrEmpty(value))
        {
            _attributes[name] = value;
        }
        return this;
    }

    /// <summary>
    /// Set a boolean attribute
    /// </summary>
    public AttributeBuilder SetBooleanAttribute(string name, bool value)
    {
        AttributeHelper.SetBooleanAttribute(_attributes, name, value);
        return this;
    }

    /// <summary>
    /// Set an enum attribute with kebab-case conversion
    /// </summary>
    public AttributeBuilder SetEnumAttribute<T>(string name, T? value) where T : struct, Enum
    {
        AttributeHelper.SetEnumAttribute(_attributes, name, value);
        return this;
    }

    /// <summary>
    /// Set multiple attributes from an object
    /// </summary>
    public AttributeBuilder FromObject(object source)
    {
        AttributeHelper.SetAttributesFromObject(_attributes, source);
        return this;
    }

    /// <summary>
    /// Build the final attributes dictionary
    /// </summary>
    public Dictionary<string, object> Build() => new(_attributes);

    /// <summary>
    /// Create a new attribute builder
    /// </summary>
    public static AttributeBuilder Create() => new();
}