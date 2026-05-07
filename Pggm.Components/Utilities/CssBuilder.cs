using System.Text;

namespace Pggm.Components.Utilities;

/// <summary>
/// A utility class for building HTML class strings.
/// </summary>
public class CssBuilder
{
    private readonly StringBuilder _builder = new StringBuilder();

    public CssBuilder(string? initialClass = null)
    {
        if (!string.IsNullOrWhiteSpace(initialClass))
        {
            _builder.Append(initialClass).Append(' ');
        }
    }

    public CssBuilder AddClass(string className, bool condition = true)
    {
        if (condition && !string.IsNullOrWhiteSpace(className))
        {
            _builder.Append(className).Append(' ');
        }
        return this;
    }

    public CssBuilder AddClass(string className, Func<bool> condition)
    {
        if (condition() && !string.IsNullOrWhiteSpace(className))
        {
            _builder.Append(className).Append(' ');
        }
        return this;
    }

    public string? Build()
    {
        var result = _builder.ToString().TrimEnd();
        return string.IsNullOrWhiteSpace(result) ? null : result;
    }
}
