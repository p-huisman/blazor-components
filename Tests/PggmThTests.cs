using Bunit;
using Xunit;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;

namespace Pggm.Components.Tests;

public class PggmThTests : TestContext
{
    public PggmThTests()
    {
        Services.AddSingleton<PggmDesignSystemService>();
    }

    [Fact]
    public void PggmTh_RendersWithAllAttributes()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTh>(parameters => parameters
            .Add(p => p.Sortable, true)
            .Add(p => p.Filterable, true)
            .Add(p => p.Field, "name")
            .Add(p => p.Width, "150")
            .Add(p => p.Type, "string")
            .Add(p => p.Format, "string")
            .Add(p => p.TextAlign, "center"));

        // Assert
        var element = component.Find("pggm-th");
        Assert.NotNull(element);
        Assert.True(element.HasAttribute("sortable"));
        Assert.True(element.HasAttribute("filterable"));
        Assert.Equal("name", element.GetAttribute("field"));
        Assert.Equal("150", element.GetAttribute("width"));
        Assert.Equal("string", element.GetAttribute("type"));
        Assert.Equal("string", element.GetAttribute("format"));
        Assert.Equal("center", element.GetAttribute("text-align"));
    }

    [Fact]
    public void PggmTh_RendersChildContent()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTh>(parameters => parameters
            .AddChildContent("Column Header"));

        // Assert
        var element = component.Find("pggm-th");
        Assert.Equal("Column Header", element.TextContent.Trim());
    }

    [Fact]
    public void PggmTh_DoesNotRenderOptionalAttributesWhenEmpty()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTh>();

        // Assert
        var element = component.Find("pggm-th");
        Assert.False(element.HasAttribute("sortable"));
        Assert.False(element.HasAttribute("filterable"));
        Assert.False(element.HasAttribute("field"));
        Assert.False(element.HasAttribute("width"));
        Assert.False(element.HasAttribute("type"));
        Assert.False(element.HasAttribute("format"));
        Assert.False(element.HasAttribute("text-align"));
    }

    [Fact]
    public void PggmTh_RendersWithCurrencyFormat()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTh>(parameters => parameters
            .Add(p => p.Field, "price")
            .Add(p => p.Type, "number")
            .Add(p => p.Format, "currency")
            .Add(p => p.TextAlign, "right"));

        // Assert
        var element = component.Find("pggm-th");
        Assert.Equal("price", element.GetAttribute("field"));
        Assert.Equal("number", element.GetAttribute("type"));
        Assert.Equal("currency", element.GetAttribute("format"));
        Assert.Equal("right", element.GetAttribute("text-align"));
    }

    [Fact]
    public void PggmTh_RendersWithDateFormat()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTh>(parameters => parameters
            .Add(p => p.Field, "dob")
            .Add(p => p.Type, "date")
            .Add(p => p.Format, "date")
            .Add(p => p.Sortable, true));

        // Assert
        var element = component.Find("pggm-th");
        Assert.Equal("dob", element.GetAttribute("field"));
        Assert.Equal("date", element.GetAttribute("type"));
        Assert.Equal("date", element.GetAttribute("format"));
        Assert.True(element.HasAttribute("sortable"));
    }
}
