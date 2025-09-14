using Bunit;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Constants;
using Pggm.Components.Services;
using Xunit;

namespace Pggm.Components.Tests;

public class PggmSliderTests : TestContext
{
    public PggmSliderTests()
    {
        Services.AddScoped<PggmDesignSystemService>();
    }

    [Fact]
    public void PggmSlider_RendersCorrectly()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>();

        // Assert
        Assert.NotNull(component.Find("pggm-slider"));
    }

    [Fact]
    public void PggmSlider_RendersWithDefaultValues()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>();
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.Equal("0", sliderElement.GetAttribute("value"));
        Assert.Equal("0", sliderElement.GetAttribute("min"));
        Assert.Equal("100", sliderElement.GetAttribute("max"));
    }

    [Fact]
    public void PggmSlider_RendersWithCustomValues()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.Value, 50)
            .Add(p => p.Min, 10)
            .Add(p => p.Max, 200));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.Equal("50", sliderElement.GetAttribute("value"));
        Assert.Equal("10", sliderElement.GetAttribute("min"));
        Assert.Equal("200", sliderElement.GetAttribute("max"));
    }

    [Fact]
    public void PggmSlider_RendersDisabledState()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.Disabled, true));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.True(sliderElement.HasAttribute(AttributeNames.Disabled));
    }

    [Fact]
    public void PggmSlider_RendersSnapValues()
    {
        // Arrange
        var snapValues = "0,25,50,75,100";

        // Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, snapValues));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.Equal(snapValues, sliderElement.GetAttribute(AttributeNames.SnapValues));
    }

    [Fact]
    public void PggmSlider_DoesNotRenderSnapValuesWhenNull()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, (string?)null));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.False(sliderElement.HasAttribute(AttributeNames.SnapValues));
    }

    [Fact]
    public void PggmSlider_DoesNotRenderSnapValuesWhenEmpty()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, string.Empty));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.False(sliderElement.HasAttribute(AttributeNames.SnapValues));
    }

    [Fact]
    public void PggmSlider_DoesNotRenderSnapValuesWhenWhitespace()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, "   "));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.False(sliderElement.HasAttribute(AttributeNames.SnapValues));
    }

    [Fact]
    public void PggmSlider_RendersSnapValuesWithSpaces()
    {
        // Arrange
        var snapValues = "0, 25, 50, 75, 100";

        // Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, snapValues));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.Equal(snapValues, sliderElement.GetAttribute(AttributeNames.SnapValues));
    }

    [Fact]
    public void PggmSlider_RendersWithChildContent()
    {
        // Arrange
        var childContent = "<span>Slider Label</span>";

        // Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .AddChildContent(childContent));

        // Assert
        var sliderElement = component.Find("pggm-slider");
        Assert.Contains("Slider Label", sliderElement.InnerHtml);
    }

    [Theory]
    [InlineData("0,10,20,30")]
    [InlineData("1.5,2.5,3.5")]
    [InlineData("-10,0,10")]
    [InlineData("100")]
    public void PggmSlider_RendersVariousSnapValueFormats(string snapValues)
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, snapValues));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.Equal(snapValues, sliderElement.GetAttribute(AttributeNames.SnapValues));
    }

    [Fact]
    public void PggmSlider_RendersFractionDigits()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.FractionDigits, 2));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.Equal("2", sliderElement.GetAttribute(AttributeNames.FractionDigits));
    }

    [Fact]
    public void PggmSlider_DoesNotRenderFractionDigitsWhenNull()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.FractionDigits, (int?)null));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.False(sliderElement.HasAttribute(AttributeNames.FractionDigits));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(1)]
    [InlineData(2)]
    [InlineData(3)]
    public void PggmSlider_RendersVariousFractionDigitValues(int fractionDigits)
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.FractionDigits, fractionDigits));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.Equal(fractionDigits.ToString(), sliderElement.GetAttribute(AttributeNames.FractionDigits));
    }

    [Fact]
    public void PggmSlider_RendersWithBothSnapValuesAndFractionDigits()
    {
        // Arrange
        var snapValues = "0,25,50,75,100";
        var fractionDigits = 1;

        // Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, snapValues)
            .Add(p => p.FractionDigits, fractionDigits));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.Equal(snapValues, sliderElement.GetAttribute(AttributeNames.SnapValues));
        Assert.Equal(fractionDigits.ToString(), sliderElement.GetAttribute(AttributeNames.FractionDigits));
    }

    [Fact]
    public void PggmSlider_RendersEnableSnapWhenSnapValuesProvided()
    {
        // Arrange
        var snapValues = "0,25,50,75,100";

        // Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, snapValues));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.True(sliderElement.HasAttribute(AttributeNames.EnableSnap));
        Assert.Equal(snapValues, sliderElement.GetAttribute(AttributeNames.SnapValues));
    }

    [Fact]
    public void PggmSlider_DoesNotRenderEnableSnapWhenNoSnapValues()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>();
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.False(sliderElement.HasAttribute(AttributeNames.EnableSnap));
        Assert.False(sliderElement.HasAttribute(AttributeNames.SnapValues));
    }

    [Fact]
    public void PggmSlider_DoesNotRenderEnableSnapWhenSnapValuesEmpty()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, string.Empty));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.False(sliderElement.HasAttribute(AttributeNames.EnableSnap));
        Assert.False(sliderElement.HasAttribute(AttributeNames.SnapValues));
    }

    [Fact]
    public void PggmSlider_DoesNotRenderEnableSnapWhenSnapValuesWhitespace()
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, "   "));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.False(sliderElement.HasAttribute(AttributeNames.EnableSnap));
        Assert.False(sliderElement.HasAttribute(AttributeNames.SnapValues));
    }

    [Theory]
    [InlineData("0,10,20,30")]
    [InlineData("1.5,2.5,3.5")]
    [InlineData("-10,0,10")]
    [InlineData("100")]
    public void PggmSlider_RendersEnableSnapForAllValidSnapValueFormats(string snapValues)
    {
        // Arrange & Act
        var component = RenderComponent<PggmSlider>(parameters => parameters
            .Add(p => p.SnapValues, snapValues));
        var sliderElement = component.Find("pggm-slider");

        // Assert
        Assert.True(sliderElement.HasAttribute(AttributeNames.EnableSnap));
        Assert.Equal(snapValues, sliderElement.GetAttribute(AttributeNames.SnapValues));
    }
}