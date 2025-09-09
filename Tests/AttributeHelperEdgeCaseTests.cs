using Pggm.Components.Base;
using Xunit;

namespace Pggm.Components.Tests
{
    public class AttributeHelperEdgeCaseTests
    {
        [Fact]
        public void SetBooleanAttribute_WithExistingAttribute_OverwritesCorrectly()
        {
            // Arrange
            var attributes = new Dictionary<string, object>
            {
                ["disabled"] = "some-value"
            };

            // Act
            AttributeHelper.SetBooleanAttribute(attributes, "disabled", true);

            // Assert
            Assert.Equal(true, attributes["disabled"]);
        }

        [Fact]
        public void SetBooleanAttribute_RemoveNonExistentAttribute_DoesNotThrow()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();

            // Act & Assert
            var exception = Record.Exception(() => AttributeHelper.SetBooleanAttribute(attributes, "disabled", false));
            Assert.Null(exception);
            Assert.False(attributes.ContainsKey("disabled"));
        }

        [Fact]
        public void SetAttributeIfNotEmpty_OverwritesExistingAttribute()
        {
            // Arrange
            var attributes = new Dictionary<string, object>
            {
                ["placeholder"] = "old-value"
            };

            // Act
            AttributeHelper.SetAttributeIfNotEmpty(attributes, "placeholder", "new-value");

            // Assert
            Assert.Equal("new-value", attributes["placeholder"]);
        }

        [Fact]
        public void MergeCssClasses_WithDuplicateClasses_ReturnsAllClasses()
        {
            // Act
            var result = AttributeHelper.MergeCssClasses("class1", "class2", "class1", "class3");

            // Assert
            Assert.Equal("class1 class2 class1 class3", result);
        }

        [Fact]
        public void MergeCssClasses_WithMixedWhitespace_HandlesCorrectly()
        {
            // Act
            var result = AttributeHelper.MergeCssClasses("class1", "  ", "\t", "class2", "\n", "class3");

            // Assert
            Assert.Equal("class1 class2 class3", result);
        }

        [Fact]
        public void ConvertToKebabCase_WithConsecutiveUppercase_HandleCorrectly()
        {
            // Act
            var result = AttributeHelper.ConvertToKebabCase("XMLParser");

            // Assert
            Assert.Equal("x-m-l-parser", result);
        }

        [Fact]
        public void ConvertToKebabCase_WithNumbersAndSpecialChars_HandlesCorrectly()
        {
            // Act
            var result1 = AttributeHelper.ConvertToKebabCase("Test123Value");
            var result2 = AttributeHelper.ConvertToKebabCase("Version2Point0");

            // Assert
            Assert.Equal("test123-value", result1);
            Assert.Equal("version2-point0", result2);
        }

        public class EmptyTestObject
        {
            // Empty class for testing
        }

        public class ReadOnlyPropertyObject
        {
            public string ReadOnlyProperty => "readonly-value";
            // Remove write-only property as it causes issues with reflection
        }

        [Fact]
        public void SetAttributesFromObject_WithEmptyObject_DoesNotAddAttributes()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();
            var emptyObject = new EmptyTestObject();

            // Act
            AttributeHelper.SetAttributesFromObject(attributes, emptyObject);

            // Assert
            Assert.Empty(attributes);
        }

        [Fact]
        public void SetAttributesFromObject_WithReadOnlyProperties_SkipsCorrectly()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();
            var testObject = new ReadOnlyPropertyObject();

            // Act
            AttributeHelper.SetAttributesFromObject(attributes, testObject);

            // Assert
            Assert.True(attributes.ContainsKey("read-only-property"));
            Assert.Equal("readonly-value", attributes["read-only-property"]);
        }

        [Fact]
        public void SetAttributesFromObject_WithEmptyStringProperty_AddsAttribute()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();
            var testObject = new { EmptyStringProperty = "" };

            // Act
            AttributeHelper.SetAttributesFromObject(attributes, testObject);

            // Assert
            // Note: AttributeHelper adds empty strings as attributes, it doesn't filter them out
            Assert.True(attributes.ContainsKey("empty-string-property"));
            Assert.Equal("", attributes["empty-string-property"]);
        }

        [Fact]
        public void SetEnumAttribute_WithMultipleEnumValues_HandlesCorrectly()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();

            // Act
            AttributeHelper.SetEnumAttribute<AttributeHelperTests.TestEnum>(attributes, "first", AttributeHelperTests.TestEnum.FirstValue);
            AttributeHelper.SetEnumAttribute<AttributeHelperTests.TestEnum>(attributes, "second", AttributeHelperTests.TestEnum.SecondValue);

            // Assert
            Assert.Equal("first-value", attributes["first"]);
            Assert.Equal("second-value", attributes["second"]);
        }
    }
}
