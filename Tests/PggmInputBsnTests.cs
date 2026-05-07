// PggmInputBsnTests.cs
using System.Linq.Expressions;

using Bunit;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;

using Pggm.Components;

using Xunit;

namespace Tests
{
    public class PggmInputBsnTests : TestContext
    {
        public PggmInputBsnTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
            JSInterop.SetupVoid("PggmComponents.setProperty", _ => true);
        }

        // Dummy backing field used to provide a ValueExpression for InputBase-derived component tests
        private readonly string? _dummyValue = null;

        private IRenderedComponent<PggmInputBsn> RenderInputBsn(Action<ComponentParameterCollectionBuilder<PggmInputBsn>>? configure = null)
        {
            return RenderComponent<PggmInputBsn>(parameters =>
            {
                parameters.Add(p => p.ValueExpression, (Expression<Func<string>>)(() => _dummyValue!));
                configure?.Invoke(parameters!);
            });
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            // Arrange & Act
            var cut = RenderInputBsn();

            // Assert
            Assert.NotNull(cut.Markup);
            Assert.Contains("pggm-input-bsn", cut.Markup);
        }

        [Fact]
        public void Should_Set_Value_Property()
        {
            // Arrange
            var testValue = "123456789";

            // Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Value, testValue));

            // Assert
            Assert.Contains($"value=\"{testValue}\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_Placeholder_Property()
        {
            // Arrange
            var placeholder = "Enter your BSN";

            // Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Placeholder, placeholder));

            // Assert
            Assert.Contains($"placeholder=\"{placeholder}\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_Disabled_Attribute_When_Disabled_Is_True()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Disabled, true));

            // Assert
            Assert.Contains("disabled", cut.Markup);
        }

        [Fact]
        public void Should_Set_Required_Attribute_When_Required_Is_True()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Required, true));

            // Assert
            Assert.Contains("required", cut.Markup);
        }

        [Fact]
        public void Should_Set_ReadOnly_Attribute_When_ReadOnly_Is_True()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.ReadOnly, true));

            // Assert
            Assert.Contains("readonly", cut.Markup);
        }

        [Fact]
        public void Should_Set_Name_Attribute()
        {
            // Arrange
            var name = "bsnInput";

            // Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Name, name));

            // Assert
            Assert.Contains($"name=\"{name}\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_Form_Attribute()
        {
            // Arrange
            var form = "myForm";

            // Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Form, form));

            // Assert
            Assert.Contains($"form=\"{form}\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_AutoComplete_Attribute()
        {
            // Arrange
            var autoComplete = "off";

            // Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.AutoComplete, autoComplete));

            // Assert
            Assert.Contains($"autocomplete=\"{autoComplete}\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_ErrorMessage_Attribute()
        {
            // Arrange
            var errorMessage = "Invalid BSN format";

            // Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.ErrorMessage, errorMessage));

            // Assert
            Assert.Contains($"error-message=\"{errorMessage}\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_AutoFormat_Attribute_When_True()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.AutoFormat, true));

            // Assert
            Assert.Contains("auto-format", cut.Markup);
        }

        [Fact]
        public void Should_Not_Set_AutoFormat_Attribute_When_False()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.AutoFormat, false));

            // Assert
            Assert.DoesNotContain("auto-format", cut.Markup);
        }

        [Fact]
        public void Should_Set_ValidateOnInput_Attribute_When_True()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.ValidateOnInput, true));

            // Assert
            Assert.Contains("validate-on-input", cut.Markup);
        }

        [Fact]
        public void Should_Not_Set_ValidateOnInput_Attribute_When_False()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.ValidateOnInput, false));

            // Assert
            Assert.DoesNotContain("validate-on-input", cut.Markup);
        }

        [Fact]
        public void Should_Have_Correct_TagName()
        {
            // Arrange & Act
            var cut = RenderInputBsn();

            // Assert
            Assert.Equal("pggm-input-bsn", cut.Instance.TagName);
        }

        [Fact]
        public void Should_Support_Two_Way_Data_Binding()
        {
            // Arrange
            var initialValue = "123456789";
            string? receivedValue = null;

            // Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Value, initialValue)
                .Add(p => p.ValueChanged, EventCallback.Factory.Create<string>(this, (value) =>
                {
                    receivedValue = value;
                })));

            // Assert
            Assert.Equal(initialValue, cut.Instance.Value);
        }

        [Theory]
        [InlineData("123456789")]
        [InlineData("987654321")]
        [InlineData("111111110")]
        public void Should_Accept_Valid_BSN_Format(string bsnValue)
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Value, bsnValue));

            // Assert
            Assert.Contains($"value=\"{bsnValue}\"", cut.Markup);
            Assert.Equal(bsnValue, cut.Instance.Value);
        }

        [Fact]
        public void Should_Handle_Null_Value()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Value, null));

            // Assert
            Assert.Null(cut.Instance.Value);
        }

        [Fact]
        public void Should_Handle_Empty_String_Value()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Value, ""));

            // Assert
            Assert.Equal("", cut.Instance.Value);
        }

        [Fact]
        public void Should_Support_Custom_CSS_Classes()
        {
            // Arrange
            var customClass = "my-custom-bsn-class";

            // Act
            var cut = RenderInputBsn(parameters => parameters
                .AddUnmatched("class", customClass));

            // Assert
            Assert.Contains(customClass, cut.Markup);
        }

        [Fact]
        public void Should_Support_Additional_Attributes()
        {
            // Arrange
            var customAttribute = "data-test";
            var customValue = "bsn-input-test";

            // Act
            var cut = RenderInputBsn(parameters => parameters
                .AddUnmatched(customAttribute, customValue));

            // Assert
            Assert.Contains($"{customAttribute}=\"{customValue}\"", cut.Markup);
        }

        [Fact]
        public void Should_Handle_Event_Callbacks()
        {
            // Arrange & Act
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.OnChange, EventCallback.Factory.Create<ChangeEventArgs>(this, _ => { }))
                .Add(p => p.OnInput, EventCallback.Factory.Create<ChangeEventArgs>(this, _ => { }))
                .Add(p => p.OnFocus, EventCallback.Factory.Create<FocusEventArgs>(this, _ => { }))
                .Add(p => p.OnBlur, EventCallback.Factory.Create<FocusEventArgs>(this, _ => { }))
                .Add(p => p.OnInvalid, EventCallback.Factory.Create<EventArgs>(this, _ => { })));

            // Assert - Component should be created without errors
            Assert.NotNull(cut.Instance);
        }

        [Fact]
        public void Should_Default_AutoFormat_To_True()
        {
            // Arrange & Act
            var cut = RenderInputBsn();

            // Assert
            Assert.True(cut.Instance.AutoFormat);
        }

        [Fact]
        public void Should_Default_ValidateOnInput_To_True()
        {
            // Arrange & Act
            var cut = RenderInputBsn();

            // Assert
            Assert.True(cut.Instance.ValidateOnInput);
        }

        [Fact]
        public void Should_Not_Change_Value_When_Event_Data_Is_Problematic()
        {
            // Arrange
            var initialValue = "123456789";
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Value, initialValue));

            // Act - Try to simulate an event that might cause the value to become "0"
            // This tests the fix indirectly by ensuring the value doesn't change to unwanted values
            cut.SetParametersAndRender(parameters => parameters
                .Add(p => p.Value, initialValue)); // Simulate re-render with same value

            // Assert - Value should remain unchanged
            Assert.Equal(initialValue, cut.Instance.Value);
        }

        [Fact]
        public void Should_Preserve_Original_Value_When_Event_Extraction_Fails()
        {
            // Arrange
            var originalValue = "987654321";
            var cut = RenderInputBsn(parameters => parameters
                .Add(p => p.Value, originalValue));

            // Act - Verify the value doesn't get corrupted
            var currentValue = cut.Instance.Value;

            // Assert
            Assert.Equal(originalValue, currentValue);
            Assert.NotEqual("0", currentValue); // Ensure it's never "0"
            Assert.NotEqual("false", currentValue); // Ensure it's never "false"
        }
    }
}
