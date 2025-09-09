using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;
using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmTextareaTests : TestContext
    {
        public PggmTextareaTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
        }

        [Fact]
        public void PggmTextarea_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTextarea>(parameters => parameters
                .Add(p => p.Value, "Test value")
                .Add(p => p.Rows, 4)
                .Add(p => p.Cols, 30)
                .Add(p => p.Placeholder, "Enter text here"));

            // Assert
            var textarea = component.Find("textarea");
            Assert.NotNull(textarea);
            Assert.Equal("pggm-textarea", textarea.GetAttribute("is"));
            Assert.Equal("4", textarea.GetAttribute("rows"));
            Assert.Equal("30", textarea.GetAttribute("cols"));
            Assert.Equal("Enter text here", textarea.GetAttribute("placeholder"));
            Assert.Equal("Test value", textarea.TextContent);
        }

        [Fact]
        public void PggmTextarea_HandlesDisabledState()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTextarea>(parameters => parameters
                .Add(p => p.Disabled, true));

            // Assert
            var textarea = component.Find("textarea");
            Assert.True(textarea.HasAttribute("disabled"));
        }

        [Fact]
        public void PggmTextarea_HandlesRequiredState()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTextarea>(parameters => parameters
                .Add(p => p.Required, true));

            // Assert
            var textarea = component.Find("textarea");
            Assert.True(textarea.HasAttribute("required"));
        }

        [Fact]
        public void PggmTextarea_HandlesReadOnlyState()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTextarea>(parameters => parameters
                .Add(p => p.ReadOnly, true));

            // Assert
            var textarea = component.Find("textarea");
            Assert.True(textarea.HasAttribute("readonly"));
        }

        [Fact]
        public void PggmTextarea_SetsMaxLengthAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTextarea>(parameters => parameters
                .Add(p => p.MaxLength, 100));

            // Assert
            var textarea = component.Find("textarea");
            Assert.Equal("100", textarea.GetAttribute("maxlength"));
        }

        [Fact]
        public void PggmTextarea_SetsWrapAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTextarea>(parameters => parameters
                .Add(p => p.Wrap, PggmTextarea.WrapTypes.Hard));

            // Assert
            var textarea = component.Find("textarea");
            Assert.Equal("hard", textarea.GetAttribute("wrap"));
        }

        [Fact]
        public void PggmTextarea_TriggersValueChanged()
        {
            // Arrange
            string? newValue = "";
            var component = RenderComponent<PggmTextarea>(parameters => parameters
                .Add(p => p.Value, "Initial")
                .Add(p => p.ValueChanged, (string? value) => newValue = value));

            // Act
            var textarea = component.Find("textarea");
            textarea.Change("Updated value");

            // Assert
            Assert.Equal("Updated value", newValue);
        }
    }
}
