using Pggm.Components.Builders;
using Xunit;

namespace Pggm.Components.Tests;

public class AttributeBuilderTests
{
    #region Basic Functionality Tests

    [Fact]
    public void Create_ReturnsNewInstance()
    {
        // Act
        var builder = AttributeBuilder.Create();

        // Assert
        Assert.NotNull(builder);
    }

    [Fact]
    public void Build_WithNoAttributes_ReturnsEmptyDictionary()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.Build();

        // Assert
        Assert.NotNull(result);
        Assert.Empty(result);
    }

    #endregion

    #region CSS Class Tests

    [Fact]
    public void AddClass_WithValidClass_AddsToAttributes()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.AddClass("test-class").Build();

        // Assert
        Assert.Contains("class", result);
        Assert.Equal("test-class", result["class"]);
    }

    [Fact]
    public void AddClass_WithMultipleClasses_MergesCorrectly()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder
            .AddClass("first-class")
            .AddClass("second-class")
            .Build();

        // Assert
        Assert.Contains("class", result);
        Assert.Equal("first-class second-class", result["class"]);
    }

    [Fact]
    public void AddClass_WithNullClass_DoesNotAddAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.AddClass(null!).Build();

        // Assert
        Assert.DoesNotContain("class", result);
    }

    [Fact]
    public void AddClass_WithEmptyClass_DoesNotAddAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.AddClass("").Build();

        // Assert
        Assert.DoesNotContain("class", result);
    }

    [Fact]
    public void AddClass_WithWhitespaceClass_DoesNotAddAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.AddClass("   ").Build();

        // Assert
        Assert.DoesNotContain("class", result);
    }

    [Fact]
    public void AddClassIf_WithTrueCondition_AddsClass()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.AddClassIf(true, "conditional-class").Build();

        // Assert
        Assert.Contains("class", result);
        Assert.Equal("conditional-class", result["class"]);
    }

    [Fact]
    public void AddClassIf_WithFalseCondition_DoesNotAddClass()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.AddClassIf(false, "conditional-class").Build();

        // Assert
        Assert.DoesNotContain("class", result);
    }

    [Fact]
    public void AddClassIf_MixedConditions_AddsOnlyTrueConditions()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder
            .AddClassIf(true, "first-class")
            .AddClassIf(false, "second-class")
            .AddClassIf(true, "third-class")
            .Build();

        // Assert
        Assert.Contains("class", result);
        Assert.Equal("first-class third-class", result["class"]);
    }

    #endregion

    #region String Attribute Tests

    [Fact]
    public void SetAttribute_WithValidValue_AddsAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.SetAttribute("data-test", "test-value").Build();

        // Assert
        Assert.Contains("data-test", result);
        Assert.Equal("test-value", result["data-test"]);
    }

    [Fact]
    public void SetAttribute_WithNullValue_DoesNotAddAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.SetAttribute("data-test", null).Build();

        // Assert
        Assert.DoesNotContain("data-test", result);
    }

    [Fact]
    public void SetAttribute_WithEmptyValue_DoesNotAddAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.SetAttribute("data-test", "").Build();

        // Assert
        Assert.DoesNotContain("data-test", result);
    }

    [Fact]
    public void SetAttribute_OverwritesPreviousValue()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder
            .SetAttribute("data-test", "first-value")
            .SetAttribute("data-test", "second-value")
            .Build();

        // Assert
        Assert.Contains("data-test", result);
        Assert.Equal("second-value", result["data-test"]);
    }

    #endregion

    #region Boolean Attribute Tests

    [Fact]
    public void SetBooleanAttribute_WithTrue_AddsAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.SetBooleanAttribute("disabled", true).Build();

        // Assert
        Assert.Contains("disabled", result);
        Assert.Equal(true, result["disabled"]);
    }

    [Fact]
    public void SetBooleanAttribute_WithFalse_DoesNotAddAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.SetBooleanAttribute("disabled", false).Build();

        // Assert
        Assert.DoesNotContain("disabled", result);
    }

    [Fact]
    public void SetBooleanAttribute_MultipleBooleans_HandlesCorrectly()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder
            .SetBooleanAttribute("disabled", true)
            .SetBooleanAttribute("required", false)
            .SetBooleanAttribute("readonly", true)
            .Build();

        // Assert
        Assert.Contains("disabled", result);
        Assert.Contains("readonly", result);
        Assert.DoesNotContain("required", result);
        Assert.Equal(true, result["disabled"]);
        Assert.Equal(true, result["readonly"]);
    }

    #endregion

    #region Enum Attribute Tests

    public enum TestEnum
    {
        FirstValue,
        SecondValue,
        ThirdValue
    }

    [Fact]
    public void SetEnumAttribute_WithValidEnum_AddsKebabCaseAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.SetEnumAttribute<TestEnum>("appearance", TestEnum.FirstValue).Build();

        // Assert
        Assert.Contains("appearance", result);
        Assert.Equal("first-value", result["appearance"]);
    }

    [Fact]
    public void SetEnumAttribute_WithNullEnum_DoesNotAddAttribute()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.SetEnumAttribute<TestEnum>("appearance", null).Build();

        // Assert
        Assert.DoesNotContain("appearance", result);
    }

    [Fact]
    public void SetEnumAttribute_MultipleEnumValues_HandlesCorrectly()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder
            .SetEnumAttribute<TestEnum>("first", TestEnum.FirstValue)
            .SetEnumAttribute<TestEnum>("second", TestEnum.SecondValue)
            .Build();

        // Assert
        Assert.Contains("first", result);
        Assert.Contains("second", result);
        Assert.Equal("first-value", result["first"]);
        Assert.Equal("second-value", result["second"]);
    }

    #endregion

    #region FromObject Tests

    public class TestObject
    {
        public string? StringProperty { get; set; }
        public bool BoolProperty { get; set; }
        public TestEnum EnumProperty { get; set; }
        public int IntProperty { get; set; }
    }

    [Fact]
    public void FromObject_WithValidObject_AddsAllProperties()
    {
        // Arrange
        var builder = AttributeBuilder.Create();
        var testObj = new TestObject
        {
            StringProperty = "test-string",
            BoolProperty = true,
            EnumProperty = TestEnum.SecondValue,
            IntProperty = 42
        };

        // Act
        var result = builder.FromObject(testObj).Build();

        // Assert
        Assert.Contains("string-property", result);
        Assert.Contains("bool-property", result);
        Assert.Contains("enum-property", result);
        Assert.Contains("int-property", result);

        Assert.Equal("test-string", result["string-property"]);
        Assert.Equal(true, result["bool-property"]);
        Assert.Equal("second-value", result["enum-property"]);
        Assert.Equal(42, result["int-property"]);
    }

    [Fact]
    public void FromObject_WithNullObject_DoesNotAddAttributes()
    {
        // Arrange
        var builder = AttributeBuilder.Create();

        // Act
        var result = builder.FromObject(null!).Build();

        // Assert
        Assert.Empty(result);
    }

    #endregion

    #region Fluent API Tests

    [Fact]
    public void FluentAPI_ChainsMethods_ReturnsCorrectBuilder()
    {
        // Arrange & Act
        var builder = AttributeBuilder.Create()
            .AddClass("test-class")
            .SetAttribute("data-test", "test-value")
            .SetBooleanAttribute("disabled", true)
            .SetEnumAttribute<TestEnum>("appearance", TestEnum.FirstValue);

        // Assert
        Assert.NotNull(builder);

        var result = builder.Build();
        Assert.Equal(4, result.Count);
        Assert.Contains("class", result);
        Assert.Contains("data-test", result);
        Assert.Contains("disabled", result);
        Assert.Contains("appearance", result);
    }

    [Fact]
    public void FluentAPI_ComplexChaining_ProducesCorrectResult()
    {
        // Arrange & Act
        var result = AttributeBuilder.Create()
            .AddClass("base-class")
            .AddClassIf(true, "conditional-class")
            .AddClassIf(false, "hidden-class")
            .SetAttribute("id", "test-id")
            .SetAttribute("data-testid", "component-test")
            .SetBooleanAttribute("disabled", false)
            .SetBooleanAttribute("required", true)
            .SetEnumAttribute<TestEnum>("size", TestEnum.SecondValue)
            .Build();

        // Assert
        Assert.Equal(5, result.Count); // class, id, data-testid, required, size (disabled should be excluded)
        Assert.Equal("base-class conditional-class", result["class"]);
        Assert.Equal("test-id", result["id"]);
        Assert.Equal("component-test", result["data-testid"]);
        Assert.Equal(true, result["required"]);
        Assert.Equal("second-value", result["size"]);
        Assert.DoesNotContain("disabled", result);
        Assert.DoesNotContain("hidden-class", result["class"].ToString());
    }

    #endregion

    #region Immutability Tests

    [Fact]
    public void Build_ReturnsCopyOfAttributes_NotReference()
    {
        // Arrange
        var builder = AttributeBuilder.Create()
            .SetAttribute("test", "value");

        // Act
        var result1 = builder.Build();
        var result2 = builder.Build();

        // Assert
        Assert.NotSame(result1, result2);
        Assert.Equal(result1["test"], result2["test"]);

        // Modify one result - should not affect the other
        result1["test"] = "modified";
        Assert.NotEqual(result1["test"], result2["test"]);
    }

    #endregion
}