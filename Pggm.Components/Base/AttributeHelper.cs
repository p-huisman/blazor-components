using System.Collections.Concurrent;
using System.Text;

namespace Pggm.Components.Base;

/// <summary>
/// Utility class for handling web component attributes with performance optimizations
/// </summary>
public static class AttributeHelper
{
    private static readonly ConcurrentDictionary<string, string> _kebabCaseCache = new();
    private static readonly StringBuilder _stringBuilder = new();

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
}
