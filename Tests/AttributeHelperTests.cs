using Pggm.Components.Base;

using Xunit;

namespace Pggm.Components.Tests
{
    public class AttributeHelperTests
    {
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
    }
}
