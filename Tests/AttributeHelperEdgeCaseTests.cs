using Pggm.Components.Base;

using Xunit;

namespace Pggm.Components.Tests
{
    public class AttributeHelperEdgeCaseTests
    {
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
    }
}
