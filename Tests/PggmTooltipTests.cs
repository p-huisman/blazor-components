using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;
using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmTooltipTests : TestContext
    {
        public PggmTooltipTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
        }

        [Fact]
        public void PggmTooltip_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "test-element")
                .Add(p => p.Id, "test-tooltip")
                .AddChildContent("Tooltip content"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.NotNull(tooltip);
            Assert.Equal("test-element", tooltip.GetAttribute("for"));
            Assert.Equal("test-tooltip", tooltip.GetAttribute("id"));
            Assert.Equal("Tooltip content", tooltip.TextContent);
        }

        [Theory]
        [InlineData("above")]
        [InlineData("below")]
        [InlineData("before")]
        [InlineData("after")]
        public void PggmTooltip_SetsPositionAttribute_WhenPositionProvided(string position)
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "test-element")
                .Add(p => p.Position, position)
                .AddChildContent("Tooltip content"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.Equal(position, tooltip.GetAttribute("position"));
        }

        [Fact]
        public void PggmTooltip_DoesNotSetPositionAttribute_WhenPositionNotProvided()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "test-element")
                .AddChildContent("Tooltip content"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.False(tooltip.HasAttribute("position"));
        }

        [Fact]
        public void PggmTooltip_DoesNotSetPositionAttribute_WhenPositionIsEmpty()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "test-element")
                .Add(p => p.Position, "")
                .AddChildContent("Tooltip content"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.False(tooltip.HasAttribute("position"));
        }

        [Fact]
        public void PggmTooltip_DoesNotSetPositionAttribute_WhenPositionIsNull()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "test-element")
                .Add(p => p.Position, (string?)null)
                .AddChildContent("Tooltip content"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.False(tooltip.HasAttribute("position"));
        }

        [Fact]
        public void PggmTooltip_RequiresForAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "required-element")
                .AddChildContent("Tooltip content"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.Equal("required-element", tooltip.GetAttribute("for"));
        }

        [Fact]
        public void PggmTooltip_RendersChildContent()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "test-element")
                .AddChildContent("<strong>Bold tooltip content</strong>"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.Contains("Bold tooltip content", tooltip.InnerHtml);
            Assert.Contains("<strong>", tooltip.InnerHtml);
        }

        [Fact]
        public void PggmTooltip_SetsIdAttribute_WhenIdProvided()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "test-element")
                .Add(p => p.Id, "custom-tooltip-id")
                .AddChildContent("Tooltip content"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.Equal("custom-tooltip-id", tooltip.GetAttribute("id"));
        }

        [Fact]
        public void PggmTooltip_DoesNotSetIdAttribute_WhenIdNotProvided()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "test-element")
                .AddChildContent("Tooltip content"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.False(tooltip.HasAttribute("id"));
        }

        [Fact]
        public void PggmTooltip_AcceptsCustomPosition()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "test-element")
                .Add(p => p.Position, "custom-position")
                .AddChildContent("Tooltip content"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.Equal("custom-position", tooltip.GetAttribute("position"));
        }

        [Fact]
        public void PggmTooltip_CombinesAllAttributes()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTooltip>(parameters => parameters
                .Add(p => p.For, "target-element")
                .Add(p => p.Id, "tooltip-id")
                .Add(p => p.Position, "above")
                .Add(p => p.CssClass, "custom-class")
                .AddChildContent("Complete tooltip"));

            // Assert
            var tooltip = component.Find("pggm-tooltip");
            Assert.Equal("target-element", tooltip.GetAttribute("for"));
            Assert.Equal("tooltip-id", tooltip.GetAttribute("id"));
            Assert.Equal("above", tooltip.GetAttribute("position"));
            Assert.Equal("custom-class", tooltip.GetAttribute("class"));
            Assert.Equal("Complete tooltip", tooltip.TextContent);
        }
    }
}