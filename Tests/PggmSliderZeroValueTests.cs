using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmSliderZeroValueTests : TestContext
    {
        public PggmSliderZeroValueTests()
        {
            // Register the design system service for DI
            Services.AddScoped<Pggm.Components.Services.PggmDesignSystemService>();
        }
        // No need for JSRuntime registration for these tests (handled above)

        [Fact]
        public void PggmSlider_WithZeroValue_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmSlider>(parameters => parameters
                .Add(p => p.Value, 0)
                .Add(p => p.Min, 0)
                .Add(p => p.Max, 100));

            var sliderElement = component.Find("pggm-slider");

            // Assert
            Assert.Equal("0", sliderElement.GetAttribute("value"));
        }

        [Fact]
        public void PggmSliderLabel_WithZeroValue_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmSliderLabel>(parameters => parameters
                .Add(p => p.Value, 0)
                .AddChildContent("0%"));

            var labelElement = component.Find("pggm-slider-label");

            // Assert
            Assert.Equal("0", labelElement.GetAttribute("value"));
        }

        [Fact]
        public void PggmSlider_WithZeroValueLabel_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmSlider>(parameters => parameters
                .Add(p => p.Value, 50)
                .Add(p => p.Min, 0)
                .Add(p => p.Max, 100)
                .AddChildContent<PggmSliderLabel>(label => label
                    .Add(l => l.Value, 0)
                    .AddChildContent("0%")));

            var sliderElement = component.Find("pggm-slider");
            var labelElement = component.Find("pggm-slider-label");

            // Assert
            Assert.Equal("50", sliderElement.GetAttribute("value"));
            Assert.Equal("0", labelElement.GetAttribute("value"));
        }
    }
}