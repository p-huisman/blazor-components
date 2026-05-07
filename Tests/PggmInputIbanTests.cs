// PggmInputIbanTests.cs
using Bunit;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;

using Pggm.Components;

using Xunit;

namespace Tests
{
    public class PggmInputIbanTests : TestContext
    {
        public PggmInputIbanTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
            JSInterop.SetupVoid("PggmComponents.setProperty", _ => true);
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<PggmInputIban>();
            Assert.NotNull(cut.Markup);
        }

        [Fact]
        public void Should_Not_Change_Value_When_Event_Data_Is_Problematic()
        {
            // Arrange
            var initialValue = "NL91 ABNA 0417 1643 00";
            var cut = RenderComponent<PggmInputIban>(parameters => parameters
                .Add(p => p.Value, initialValue));

            // Act - Try to simulate an event that might cause the value to become "0"
            cut.SetParametersAndRender(parameters => parameters
                .Add(p => p.Value, initialValue)); // Simulate re-render with same value

            // Assert - Value should remain unchanged
            Assert.Equal(initialValue, cut.Instance.Value);
        }

        [Fact]
        public void Should_Preserve_Original_Value_When_Event_Extraction_Fails()
        {
            // Arrange
            var originalValue = "DE89 3704 0044 0532 0130 00";
            var cut = RenderComponent<PggmInputIban>(parameters => parameters
                .Add(p => p.Value, originalValue));

            // Act - Verify the value doesn't get corrupted
            var currentValue = cut.Instance.Value;

            // Assert
            Assert.Equal(originalValue, currentValue);
            Assert.NotEqual("0", currentValue); // Ensure it's never "0"
            Assert.NotEqual("false", currentValue); // Ensure it's never "false"
        }

        [Fact]
        public void Should_Support_Two_Way_Data_Binding()
        {
            // Arrange
            var initialValue = "FR14 2004 1010 0505 0001 3M02 606";
            string? receivedValue = null;

            // Act
            var cut = RenderComponent<PggmInputIban>(parameters => parameters
                .Add(p => p.Value, initialValue)
                .Add(p => p.ValueChanged, EventCallback.Factory.Create<string>(this, (value) =>
                {
                    receivedValue = value;
                })));

            // Assert
            Assert.Equal(initialValue, cut.Instance.Value);
        }

        [Fact]
        public void Should_Set_Required_Properties()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmInputIban>(parameters => parameters
                .Add(p => p.Required, true)
                .Add(p => p.Disabled, false)
                .Add(p => p.ReadOnly, false)
                .Add(p => p.AutoFormat, true)
                .Add(p => p.ValidateOnInput, true));

            // Assert
            Assert.True(cut.Instance.Required);
            Assert.False(cut.Instance.Disabled);
            Assert.False(cut.Instance.ReadOnly);
            Assert.True(cut.Instance.AutoFormat);
            Assert.True(cut.Instance.ValidateOnInput);
        }
    }
}
