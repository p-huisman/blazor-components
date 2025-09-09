using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;
using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmLabelTests : TestContext
    {
        public PggmLabelTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
        }

        [Fact]
        public void PggmLabel_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmLabel>(parameters => parameters
                .AddChildContent("Test Label"));

            // Assert
            var label = component.Find("label");
            Assert.NotNull(label);
            Assert.Equal("pggm-label", label.GetAttribute("is"));
            Assert.Equal("Test Label", label.TextContent);
        }

        [Fact]
        public void PggmLabel_SetsForAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmLabel>(parameters => parameters
                .Add(p => p.For, "username-input")
                .AddChildContent("Username"));

            // Assert
            var label = component.Find("label");
            Assert.Equal("username-input", label.GetAttribute("for"));
        }

        [Fact]
        public void PggmLabel_DoesNotSetForAttributeWhenEmpty()
        {
            // Arrange & Act
            var component = RenderComponent<PggmLabel>(parameters => parameters
                .AddChildContent("Label without for"));

            // Assert
            var label = component.Find("label");
            Assert.False(label.HasAttribute("for"));
        }

        [Fact]
        public void PggmLabel_HandlesAdditionalAttributes()
        {
            // Arrange & Act
            var component = RenderComponent<PggmLabel>(parameters => parameters
                .AddUnmatched("data-test", "label-test")
                .AddUnmatched("title", "Label tooltip")
                .AddChildContent("Test Label"));

            // Assert
            var label = component.Find("label");
            Assert.Equal("label-test", label.GetAttribute("data-test"));
            Assert.Equal("Label tooltip", label.GetAttribute("title"));
        }

        [Fact]
        public void PggmLabel_RendersChildContent()
        {
            // Arrange & Act
            var component = RenderComponent<PggmLabel>(parameters => parameters
                .AddChildContent("<strong>Bold Label</strong>"));

            // Assert
            var label = component.Find("label");
            var strong = label.QuerySelector("strong");
            Assert.NotNull(strong);
            Assert.Equal("Bold Label", strong.TextContent);
        }
    }
}
