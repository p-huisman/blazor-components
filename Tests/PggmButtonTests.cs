using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;
using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmButtonTests : TestContext
    {
        public PggmButtonTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
        }

        [Fact]
        public void PggmButton_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmButton>(parameters => parameters
                .AddChildContent("Click me"));

            // Assert
            var button = component.Find("button");
            Assert.NotNull(button);
            Assert.Equal("pggm-button", button.GetAttribute("is"));
            Assert.Equal("button", button.GetAttribute("type"));
            Assert.Equal("Click me", button.TextContent);
        }

        [Fact]
        public void PggmButton_SetsAppearanceAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmButton>(parameters => parameters
                .Add(p => p.Appearance, "primary")
                .AddChildContent("Primary Button"));

            // Assert
            var button = component.Find("button");
            Assert.Equal("primary", button.GetAttribute("appearance"));
        }

        [Fact]
        public void PggmButton_HandlesDisabledState()
        {
            // Arrange & Act
            var component = RenderComponent<PggmButton>(parameters => parameters
                .Add(p => p.Disabled, true)
                .AddChildContent("Disabled Button"));

            // Assert
            var button = component.Find("button");
            Assert.True(button.HasAttribute("disabled"));
        }

        [Fact]
        public void PggmButton_SetsTypeAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmButton>(parameters => parameters
                .Add(p => p.Type, "submit")
                .AddChildContent("Submit Button"));

            // Assert
            var button = component.Find("button");
            Assert.Equal("submit", button.GetAttribute("type"));
        }

        [Fact]
        public void PggmButton_TriggersOnClick()
        {
            // Arrange
            bool clicked = false;
            var component = RenderComponent<PggmButton>(parameters => parameters
                .Add(p => p.OnClick, () => clicked = true)
                .AddChildContent("Click me"));

            // Act
            var button = component.Find("button");
            button.Click();

            // Assert
            Assert.True(clicked);
        }

        [Fact]
        public void PggmButton_DoesNotTriggerOnClickWhenDisabled()
        {
            // Arrange
            bool clicked = false;
            var component = RenderComponent<PggmButton>(parameters => parameters
                .Add(p => p.Disabled, true)
                .Add(p => p.OnClick, () => clicked = true)
                .AddChildContent("Disabled Button"));

            // Act
            var button = component.Find("button");
            button.Click();

            // Assert
            Assert.False(clicked);
        }

        [Fact]
        public void PggmButton_HandlesAdditionalAttributes()
        {
            // Arrange & Act
            var component = RenderComponent<PggmButton>(parameters => parameters
                .AddUnmatched("data-test", "button-test")
                .AddUnmatched("aria-label", "Test button")
                .AddChildContent("Test Button"));

            // Assert
            var button = component.Find("button");
            Assert.Equal("button-test", button.GetAttribute("data-test"));
            Assert.Equal("Test button", button.GetAttribute("aria-label"));
        }
    }
}
