using System.Runtime.CompilerServices;

namespace Pggm.Components.Utilities;

/// <summary>
/// Argument validation utilities for components
/// </summary>
public static class Guard
{
    /// <summary>
    /// Throws an ArgumentNullException if the value is null
    /// </summary>
    public static T NotNull<T>(T? value, [CallerArgumentExpression(nameof(value))] string? paramName = null)
        where T : class
    {
        if (value is null)
        {
            throw new ArgumentNullException(paramName);
        }
        return value;
    }

    /// <summary>
    /// Throws an ArgumentException if the string is null or empty
    /// </summary>
    public static string NotNullOrEmpty(string? value, [CallerArgumentExpression(nameof(value))] string? paramName = null)
    {
        if (string.IsNullOrEmpty(value))
        {
            throw new ArgumentException("Value cannot be null or empty.", paramName);
        }
        return value;
    }

    /// <summary>
    /// Throws an ArgumentException if the string is null, empty, or whitespace
    /// </summary>
    public static string NotNullOrWhiteSpace(string? value, [CallerArgumentExpression(nameof(value))] string? paramName = null)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            throw new ArgumentException("Value cannot be null, empty, or whitespace.", paramName);
        }
        return value;
    }

    /// <summary>
    /// Throws an ArgumentOutOfRangeException if the condition is false
    /// </summary>
    public static void InRange(bool condition, string message, [CallerArgumentExpression(nameof(condition))] string? paramName = null)
    {
        if (!condition)
        {
            throw new ArgumentOutOfRangeException(paramName, message);
        }
    }
}