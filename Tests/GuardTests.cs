using Pggm.Components.Utilities;
using Xunit;

namespace Pggm.Components.Tests;

public class GuardTests
{
    #region NotNull Tests

    [Fact]
    public void NotNull_WithValidObject_ReturnsObject()
    {
        // Arrange
        var testObject = new object();

        // Act
        var result = Guard.NotNull(testObject);

        // Assert
        Assert.Same(testObject, result);
    }

    [Fact]
    public void NotNull_WithNullObject_ThrowsArgumentNullException()
    {
        // Arrange
        object? testObject = null;

        // Act & Assert
        var exception = Assert.Throws<ArgumentNullException>(() => Guard.NotNull(testObject));
        Assert.Equal("testObject", exception.ParamName);
    }

    [Fact]
    public void NotNull_WithNullString_ThrowsArgumentNullException()
    {
        // Arrange
        string? testString = null;

        // Act & Assert
        var exception = Assert.Throws<ArgumentNullException>(() => Guard.NotNull(testString));
        Assert.Equal("testString", exception.ParamName);
    }

    [Fact]
    public void NotNull_WithValidString_ReturnsString()
    {
        // Arrange
        var testString = "valid string";

        // Act
        var result = Guard.NotNull(testString);

        // Assert
        Assert.Equal(testString, result);
    }

    #endregion

    #region NotNullOrEmpty Tests

    [Fact]
    public void NotNullOrEmpty_WithValidString_ReturnsString()
    {
        // Arrange
        var testString = "valid string";

        // Act
        var result = Guard.NotNullOrEmpty(testString);

        // Assert
        Assert.Equal(testString, result);
    }

    [Fact]
    public void NotNullOrEmpty_WithNullString_ThrowsArgumentException()
    {
        // Arrange
        string? testString = null;

        // Act & Assert
        var exception = Assert.Throws<ArgumentException>(() => Guard.NotNullOrEmpty(testString));
        Assert.Equal("testString", exception.ParamName);
        Assert.Contains("Value cannot be null or empty", exception.Message);
    }

    [Fact]
    public void NotNullOrEmpty_WithEmptyString_ThrowsArgumentException()
    {
        // Arrange
        var testString = "";

        // Act & Assert
        var exception = Assert.Throws<ArgumentException>(() => Guard.NotNullOrEmpty(testString));
        Assert.Equal("testString", exception.ParamName);
        Assert.Contains("Value cannot be null or empty", exception.Message);
    }

    [Fact]
    public void NotNullOrEmpty_WithWhitespaceString_ReturnsString()
    {
        // Arrange
        var testString = "   ";

        // Act
        var result = Guard.NotNullOrEmpty(testString);

        // Assert
        Assert.Equal(testString, result);
    }

    #endregion

    #region NotNullOrWhiteSpace Tests

    [Fact]
    public void NotNullOrWhiteSpace_WithValidString_ReturnsString()
    {
        // Arrange
        var testString = "valid string";

        // Act
        var result = Guard.NotNullOrWhiteSpace(testString);

        // Assert
        Assert.Equal(testString, result);
    }

    [Fact]
    public void NotNullOrWhiteSpace_WithNullString_ThrowsArgumentException()
    {
        // Arrange
        string? testString = null;

        // Act & Assert
        var exception = Assert.Throws<ArgumentException>(() => Guard.NotNullOrWhiteSpace(testString));
        Assert.Equal("testString", exception.ParamName);
        Assert.Contains("Value cannot be null, empty, or whitespace", exception.Message);
    }

    [Fact]
    public void NotNullOrWhiteSpace_WithEmptyString_ThrowsArgumentException()
    {
        // Arrange
        var testString = "";

        // Act & Assert
        var exception = Assert.Throws<ArgumentException>(() => Guard.NotNullOrWhiteSpace(testString));
        Assert.Equal("testString", exception.ParamName);
        Assert.Contains("Value cannot be null, empty, or whitespace", exception.Message);
    }

    [Fact]
    public void NotNullOrWhiteSpace_WithWhitespaceString_ThrowsArgumentException()
    {
        // Arrange
        var testString = "   ";

        // Act & Assert
        var exception = Assert.Throws<ArgumentException>(() => Guard.NotNullOrWhiteSpace(testString));
        Assert.Equal("testString", exception.ParamName);
        Assert.Contains("Value cannot be null, empty, or whitespace", exception.Message);
    }

    [Fact]
    public void NotNullOrWhiteSpace_WithStringContainingWhitespace_ReturnsString()
    {
        // Arrange
        var testString = "valid string with spaces";

        // Act
        var result = Guard.NotNullOrWhiteSpace(testString);

        // Assert
        Assert.Equal(testString, result);
    }

    #endregion

    #region InRange Tests

    [Fact]
    public void InRange_WithTrueCondition_DoesNotThrow()
    {
        // Arrange
        var condition = true;
        var message = "Test message";

        // Act & Assert
        Guard.InRange(condition, message); // Should not throw
    }

    [Fact]
    public void InRange_WithFalseCondition_ThrowsArgumentOutOfRangeException()
    {
        // Arrange
        var condition = false;
        var message = "Test message";

        // Act & Assert
        var exception = Assert.Throws<ArgumentOutOfRangeException>(() => Guard.InRange(condition, message));
        Assert.Equal("condition", exception.ParamName);
        Assert.Contains(message, exception.Message);
    }

    [Fact]
    public void InRange_WithNumericCondition_WorksCorrectly()
    {
        // Arrange
        var value = 5;
        var min = 1;
        var max = 10;

        // Act & Assert - Should not throw
        Guard.InRange(value >= min && value <= max, $"Value {value} must be between {min} and {max}");
    }

    [Fact]
    public void InRange_WithNumericConditionOutOfRange_ThrowsException()
    {
        // Arrange
        var value = 15;
        var min = 1;
        var max = 10;

        // Act & Assert
        var exception = Assert.Throws<ArgumentOutOfRangeException>(() =>
            Guard.InRange(value >= min && value <= max, $"Value {value} must be between {min} and {max}"));
        Assert.Contains("Value 15 must be between 1 and 10", exception.Message);
    }

    #endregion

    #region Parameter Name Tests

    [Fact]
    public void Guard_Methods_CaptureCorrectParameterNames()
    {
        // This test verifies that CallerArgumentExpression works correctly

        // Arrange
        string? nullString = null;
        object? nullObject = null;

        // Act & Assert
        var nullStringException = Assert.Throws<ArgumentException>(() => Guard.NotNullOrEmpty(nullString));
        Assert.Equal(nameof(nullString), nullStringException.ParamName);

        var nullObjectException = Assert.Throws<ArgumentNullException>(() => Guard.NotNull(nullObject));
        Assert.Equal(nameof(nullObject), nullObjectException.ParamName);
    }

    #endregion
}