using System.Text;

namespace Pggm.Components.Utilities;

/// <summary>
/// A utility class for building CSS style strings.
/// </summary>
public class StyleBuilder
{
    private readonly StringBuilder _builder = new StringBuilder();

    public StyleBuilder(string? initialStyle = null)
    {
        if (!string.IsNullOrWhiteSpace(initialStyle))
        {
            _builder.Append(initialStyle).Append(';');
        }
    }

    public StyleBuilder AddStyle(string property, string? value, bool condition = true)
    {
        if (condition && !string.IsNullOrWhiteSpace(value))
        {
            _builder.Append(property).Append(':').Append(value).Append(';');
        }
        return this;
    }

    public StyleBuilder AddStyle(string property, string? value, Func<bool> condition)
    {
        if (condition() && !string.IsNullOrWhiteSpace(value))
        {
            _builder.Append(property).Append(':').Append(value).Append(';');
        }
        return this;
    }

    public string? Build()
    {
        var result = _builder.ToString();
        return string.IsNullOrWhiteSpace(result) ? null : result;
    }
}
