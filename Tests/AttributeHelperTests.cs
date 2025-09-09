using Pggm.Components.Base;
using Xunit;

namespace Pggm.Components.Tests
{
    public class AttributeHelperTests
    {
        [Fact]
        public void SetBooleanAttribute_WhenTrue_AddsAttribute()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();

            // Act
            AttributeHelper.SetBooleanAttribute(attributes, "disabled", true);

            // Assert
            Assert.True(attributes.ContainsKey("disabled"));
            Assert.Equal(true, attributes["disabled"]);
        }

        [Fact]
        public void SetBooleanAttribute_WhenFalse_RemovesAttribute()
        {
            // Arrange
            var attributes = new Dictionary<string, object>
            {
                ["disabled"] = true
            };

            // Act
            AttributeHelper.SetBooleanAttribute(attributes, "disabled", false);

            // Assert
            Assert.False(attributes.ContainsKey("disabled"));
        }

        [Fact]
        public void SetAttributeIfNotEmpty_WithValidValue_AddsAttribute()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();

            // Act
            AttributeHelper.SetAttributeIfNotEmpty(attributes, "placeholder", "Enter text");

            // Assert
            Assert.Equal("Enter text", attributes["placeholder"]);
        }

        [Theory]
        [InlineData(null)]
        [InlineData("")]
        public void SetAttributeIfNotEmpty_WithInvalidValue_DoesNotAddAttribute(string? value)
        {
            // Arrange
            var attributes = new Dictionary<string, object>();

            // Act
            AttributeHelper.SetAttributeIfNotEmpty(attributes, "placeholder", value);

            // Assert
            Assert.False(attributes.ContainsKey("placeholder"));
        }

        [Fact]
        public void SetAttributeIfNotEmpty_WithWhitespaceValue_AddsAttribute()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();

            // Act
            AttributeHelper.SetAttributeIfNotEmpty(attributes, "placeholder", "   ");

            // Assert
            // Note: AttributeHelper.SetAttributeIfNotEmpty only checks for null or empty, not whitespace
            Assert.True(attributes.ContainsKey("placeholder"));
            Assert.Equal("   ", attributes["placeholder"]);
        }

        [Fact]
        public void MergeCssClasses_WithValidClasses_ReturnsJoinedString()
        {
            // Act
            var result = AttributeHelper.MergeCssClasses("class1", "class2", "class3");

            // Assert
            Assert.Equal("class1 class2 class3", result);
        }

        [Fact]
        public void MergeCssClasses_WithNullAndEmptyClasses_ReturnsOnlyValidClasses()
        {
            // Act
            var result = AttributeHelper.MergeCssClasses("class1", null, "", "class2", "   ", "class3");

            // Assert
            Assert.Equal("class1 class2 class3", result);
        }

        [Fact]
        public void MergeCssClasses_WithNoValidClasses_ReturnsNull()
        {
            // Act
            var result = AttributeHelper.MergeCssClasses(null, "", "   ");

            // Assert
            Assert.Null(result);
        }

        [Theory]
        [InlineData("PascalCase", "pascal-case")]
        [InlineData("XMLHttpRequest", "x-m-l-http-request")]
        [InlineData("camelCase", "camel-case")]
        [InlineData("lowercase", "lowercase")]
        [InlineData("UPPERCASE", "u-p-p-e-r-c-a-s-e")]
        [InlineData("HTML", "h-t-m-l")]
        [InlineData("", "")]
        public void ConvertToKebabCase_WithVariousInputs_ReturnsExpectedOutput(string input, string expected)
        {
            // Act
            var result = AttributeHelper.ConvertToKebabCase(input);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void ConvertToKebabCase_WithNullInput_ReturnsNull()
        {
            // Act
            var result = AttributeHelper.ConvertToKebabCase(null!);

            // Assert
            Assert.Null(result);
        }

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
            var attributes = new Dictionary<string, object>();

            // Act
            AttributeHelper.SetEnumAttribute<TestEnum>(attributes, "appearance", TestEnum.FirstValue);

            // Assert
            Assert.Equal("first-value", attributes["appearance"]);
        }

        [Fact]
        public void SetEnumAttribute_WithNullEnum_DoesNotAddAttribute()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();

            // Act
            AttributeHelper.SetEnumAttribute<TestEnum>(attributes, "appearance", null);

            // Assert
            Assert.False(attributes.ContainsKey("appearance"));
        }

        public class TestObject
        {
            public string? StringProperty { get; set; }
            public bool BoolProperty { get; set; }
            public TestEnum EnumProperty { get; set; }
            public int IntProperty { get; set; }
            public string? NullProperty { get; set; }
        }

        [Fact]
        public void SetAttributesFromObject_WithValidObject_SetsAllNonNullProperties()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();
            var testObject = new TestObject
            {
                StringProperty = "test-value",
                BoolProperty = true,
                EnumProperty = TestEnum.SecondValue,
                IntProperty = 42,
                NullProperty = null
            };

            // Act
            AttributeHelper.SetAttributesFromObject(attributes, testObject);

            // Assert
            Assert.Equal("test-value", attributes["string-property"]);
            Assert.Equal(true, attributes["bool-property"]);
            Assert.Equal("second-value", attributes["enum-property"]);
            Assert.Equal(42, attributes["int-property"]);
            Assert.False(attributes.ContainsKey("null-property"));
        }

        [Fact]
        public void SetAttributesFromObject_WithFalseBooleanProperty_RemovesAttribute()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();
            var testObject = new TestObject
            {
                BoolProperty = false
            };

            // Act
            AttributeHelper.SetAttributesFromObject(attributes, testObject);

            // Assert
            Assert.False(attributes.ContainsKey("bool-property"));
        }

        [Fact]
        public void SetAttributesFromObject_WithNullObject_DoesNotThrow()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();

            // Act & Assert
            var exception = Record.Exception(() => AttributeHelper.SetAttributesFromObject(attributes, null!));
            Assert.Null(exception);
            Assert.Empty(attributes);
        }
    }
}
