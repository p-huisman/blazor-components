namespace Blazor.Pggm.Components.Base;

/// <summary>
/// Utility class for handling web component attributes
/// </summary>
public static class AttributeHelper
{
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
    /// Convert PascalCase to kebab-case for web component attributes
    /// </summary>
    public static string ConvertToKebabCase(string input)
    {
        if (string.IsNullOrEmpty(input))
            return input;

        var result = new System.Text.StringBuilder();
        
        for (int i = 0; i < input.Length; i++)
        {
            char c = input[i];
            
            if (i > 0 && char.IsUpper(c))
            {
                result.Append('-');
            }
            
            result.Append(char.ToLowerInvariant(c));
        }
        
        return result.ToString();
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
