using Bunit;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;
using Xunit;

namespace Pggm.Components.Tests;

public class PggmSliderLabelTests : TestContext
{
    public PggmSliderLabelTests()
    {
        Services.AddScoped<PggmDesignSystemService>();
    }

    [Fact]
    public void PggmSliderLabel_RendersCorrectly()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSliderLabel>();

        // Assert
        Assert.NotNull(component.Find("pggm-slider-label"));
    }

    [Fact]
    public void PggmSliderLabel_RendersWithDefaultValue()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSliderLabel>();
        var labelElement = component.Find("pggm-slider-label");

        // Assert
        Assert.Equal("0", labelElement.GetAttribute("value"));
    }

    [Fact]
    public void PggmSliderLabel_RendersWithCustomValue()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSliderLabel>(parameters => parameters
            .Add(p => p.Value, 75.5));
        var labelElement = component.Find("pggm-slider-label");

        // Assert
        var expectedValue = 75.5.ToString(System.Globalization.CultureInfo.InvariantCulture);
        Assert.Equal(expectedValue, labelElement.GetAttribute("value"));
    }

    [Fact]
    public void PggmSliderLabel_RendersWithChildContent()
    {
        // Arrange
        var childContent = "<span>Test Label</span>";

        // Act
        var component = RenderComponent<PggmSliderLabel>(parameters => parameters
            .AddChildContent(childContent));

        // Assert
        var labelElement = component.Find("pggm-slider-label");
        Assert.Contains("Test Label", labelElement.InnerHtml);
    }

    [Fact]
    public void PggmSliderLabel_RendersWithHtmlContent()
    {
        // Arrange
        var htmlContent = "<strong style=\"color: red;\">Important Label</strong>";

        // Act
        var component = RenderComponent<PggmSliderLabel>(parameters => parameters
            .AddChildContent(htmlContent));

        // Assert
        var labelElement = component.Find("pggm-slider-label");
        Assert.Contains("Important Label", labelElement.InnerHtml);
        Assert.Contains("color: red;", labelElement.InnerHtml);
        Assert.Contains("<strong", labelElement.InnerHtml);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(25)]
    [InlineData(50)]
    [InlineData(75)]
    [InlineData(100)]
    [InlineData(-10)]
    [InlineData(150)]
    public void PggmSliderLabel_RendersWithVariousValues(double value)
    {
        // Arrange & Act
        var component = RenderComponent<PggmSliderLabel>(parameters => parameters
            .Add(p => p.Value, value));
        var labelElement = component.Find("pggm-slider-label");

        // Assert
        Assert.Equal(value.ToString(), labelElement.GetAttribute("value"));
    }

    [Fact]
    public void PggmSliderLabel_RendersWithValueAndContent()
    {
        // Arrange
        var value = 42.5;
        var content = "42.5%";

        // Act
        var component = RenderComponent<PggmSliderLabel>(parameters => parameters
            .Add(p => p.Value, value)
            .AddChildContent(content));
        var labelElement = component.Find("pggm-slider-label");

        // Assert
        var expectedValue = value.ToString(System.Globalization.CultureInfo.InvariantCulture);
        Assert.Equal(expectedValue, labelElement.GetAttribute("value"));
        Assert.Contains(content, labelElement.InnerHtml);
    }

    [Fact]
    public void PggmSliderLabel_RendersWithAdditionalAttributes()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSliderLabel>(parameters => parameters
            .Add(p => p.Value, 50)
            .AddUnmatched("data-test", "label-test")
            .AddUnmatched("aria-label", "Test slider label")
            .AddChildContent("50%"));

        // Assert
        var labelElement = component.Find("pggm-slider-label");
        Assert.Equal("50", labelElement.GetAttribute("value"));
        Assert.Equal("label-test", labelElement.GetAttribute("data-test"));
        Assert.Equal("Test slider label", labelElement.GetAttribute("aria-label"));
    }

    [Fact]
    public void PggmSliderLabel_RendersWithCssClass()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSliderLabel>(parameters => parameters
            .Add(p => p.Value, 25)
            .Add(p => p.CssClass, "custom-label-class")
            .AddChildContent("25%"));

        // Assert
        var labelElement = component.Find("pggm-slider-label");
        Assert.Equal("custom-label-class", labelElement.GetAttribute("class"));
    }
}