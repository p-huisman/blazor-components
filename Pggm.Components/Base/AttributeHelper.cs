using System.Text;
using System.Collections.Concurrent;

namespace Pggm.Components.Base;

/// <summary>
/// Utility class for handling web component attributes with performance optimizations
/// </summary>
public static class AttributeHelper
{
    private static readonly ConcurrentDictionary<string, string> _kebabCaseCache = new();
    private static readonly StringBuilder _stringBuilder = new();
    /// <summary>
    /// Convert a boolean parameter to a web component attribute
    /// Web components typically use presence/absence for boolean attributes
    /// </summary>
    public static void SetBooleanAttribute(Dictionary<string, object> attributes, string attributeName, bool value)
    {
        if (value)
        {
            attributes[attributeName] = true;
        }
        else
        {
            attributes.Remove(attributeName);
        }
    }

    /// <summary>
    /// Set an attribute only if the value is not null or empty
    /// </summary>
    public static void SetAttributeIfNotEmpty(Dictionary<string, object> attributes, string attributeName, string? value)
    {
        if (!string.IsNullOrEmpty(value))
        {
            attributes[attributeName] = value;
        }
    }

    /// <summary>
    /// Set an enum attribute with kebab-case conversion
    /// </summary>
    public static void SetEnumAttribute<T>(Dictionary<string, object> attributes, string attributeName, T? value) 
        where T : struct, Enum
    {
        if (value.HasValue)
        {
            attributes[attributeName] = ConvertToKebabCase(value.Value.ToString());
        }
    }

    /// <summary>
    /// Merge CSS classes, handling null and empty values
    /// </summary>
    public static string? MergeCssClasses(params string?[] classes)
    {
        var validClasses = classes.Where(c => !string.IsNullOrWhiteSpace(c));
        return validClasses.Any() ? string.Join(" ", validClasses) : null;
    }

    /// <summary>
    /// Convert PascalCase to kebab-case for web component attributes with caching
    /// </summary>
    public static string ConvertToKebabCase(string input)
    {
        if (string.IsNullOrEmpty(input))
            return input;

        return _kebabCaseCache.GetOrAdd(input, static key =>
        {
            lock (_stringBuilder)
            {
                _stringBuilder.Clear();
                
                for (int i = 0; i < key.Length; i++)
                {
                    char c = key[i];
                    
                    if (i > 0 && char.IsUpper(c))
                    {
                        _stringBuilder.Append('-');
                    }
                    
                    _stringBuilder.Append(char.ToLowerInvariant(c));
                }
                
                return _stringBuilder.ToString();
            }
        });
    }

    /// <summary>
    /// Batch set multiple boolean attributes efficiently
    /// </summary>
    public static void SetBooleanAttributes(Dictionary<string, object> attributes, params (string name, bool value)[] booleanAttributes)
    {
        foreach (var (name, value) in booleanAttributes)
        {
            SetBooleanAttribute(attributes, name, value);
        }
    }

    /// <summary>
    /// Set multiple string attributes efficiently, skipping null/empty values
    /// </summary>
    public static void SetStringAttributes(Dictionary<string, object> attributes, params (string name, string? value)[] stringAttributes)
    {
        foreach (var (name, value) in stringAttributes)
        {
            SetAttributeIfNotEmpty(attributes, name, value);
        }
    }

    /// <summary>
    /// Set multiple attributes from an object using reflection
    /// Properties will be converted to kebab-case attribute names
    /// </summary>
    public static void SetAttributesFromObject(Dictionary<string, object> attributes, object source)
    {
        if (source == null) return;

        var properties = source.GetType().GetProperties();
        
        foreach (var property in properties)
        {
            var value = property.GetValue(source);
            if (value != null)
            {
                var attributeName = ConvertToKebabCase(property.Name);
                
                // Handle different value types appropriately
                switch (value)
                {
                    case bool boolValue:
                        SetBooleanAttribute(attributes, attributeName, boolValue);
                        break;
                    case string stringValue when !string.IsNullOrEmpty(stringValue):
                        attributes[attributeName] = stringValue;
                        break;
                    case Enum enumValue:
                        attributes[attributeName] = ConvertToKebabCase(enumValue.ToString());
                        break;
                    default:
                        attributes[attributeName] = value;
                        break;
                }
            }
        }
    }
}
