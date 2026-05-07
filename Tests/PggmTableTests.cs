using System.Linq;

using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Pggm.Components;
using Pggm.Components.Services;

using Xunit;

namespace Pggm.Components.Tests;

public class PggmTableTests : PggmTestContext
{
    [Fact]
    public void PggmTable_RendersWithBasicAttributes()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTable>(parameters => parameters
            .Add(p => p.FilterLabel, "Filter instellen")
            .Add(p => p.ClearLabel, "Filter wissen")
            .Add(p => p.Lang, "nl")
            .Add(p => p.IdField, "id")
            .Add(p => p.Selectable, true)
            .Add(p => p.SelectType, "single"));

        // Assert
        var element = component.Find("pggm-table");
        Assert.NotNull(element);
        Assert.Equal("Filter instellen", element.GetAttribute("filter-label"));
        Assert.Equal("Filter wissen", element.GetAttribute("clear-label"));
        Assert.Equal("nl", element.GetAttribute("lang"));
        Assert.Equal("id", element.GetAttribute("id-field"));
        Assert.True(element.HasAttribute("selectable"));
        Assert.Equal("single", element.GetAttribute("select-type"));
    }

    [Fact]
    public void PggmTable_RendersWithRemoteUrl()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTable>(parameters => parameters
            .Add(p => p.RemoteUrl, "https://api.example.com/data"));

        // Assert
        var element = component.Find("pggm-table");
        Assert.Equal("https://api.example.com/data", element.GetAttribute("remote-url"));
    }

    [Fact]
    public void PggmTable_RendersWithRemoteMode()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTable>(parameters => parameters
            .Add(p => p.RemoteUrl, "https://api.example.com/data")
            .Add(p => p.Remote, "cursor"));

        // Assert
        var element = component.Find("pggm-table");
        Assert.Equal("https://api.example.com/data", element.GetAttribute("remote-url"));
        Assert.Equal("cursor", element.GetAttribute("remote"));
    }

    [Fact]
    public void PggmTable_RendersWithDifferentRemoteModes()
    {
        // Test simple mode
        var simpleElement = RenderComponent<PggmTable>(parameters => parameters
            .Add(p => p.Remote, "simple"))
            .Find("pggm-table");
        Assert.Equal("simple", simpleElement.GetAttribute("remote"));

        // Test offset mode
        var offsetElement = RenderComponent<PggmTable>(parameters => parameters
            .Add(p => p.Remote, "offset"))
            .Find("pggm-table");
        Assert.Equal("offset", offsetElement.GetAttribute("remote"));
    }

    [Fact]
    public void PggmTable_RendersWithDataAsJson()
    {
        // Arrange
        var testData = new[]
        {
            new { id = 1, name = "John", age = 30 },
            new { id = 2, name = "Jane", age = 25 }
        };

        // Act
        var component = RenderComponent<PggmTable>(parameters => parameters
            .Add(p => p.Data, (object)testData));

        // Assert: Data is NOT set as an HTML attribute – it is applied programmatically
        // via PggmComponents.setProperty JS interop in OnAfterRenderAsync.
        var element = component.Find("pggm-table");
        Assert.NotNull(element);
        Assert.Null(element.GetAttribute("data"));
    }

    [Fact]
    public void PggmTable_RendersChildContent()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTable>(parameters => parameters
            .AddChildContent("<pggm-th>Test Column</pggm-th>"));

        // Assert
        var element = component.Find("pggm-table");
        Assert.Contains("Test Column", element.InnerHtml);
    }

    [Fact]
    public void PggmTable_DoesNotRenderOptionalAttributesWhenEmpty()
    {
        // Arrange & Act
        var component = RenderComponent<PggmTable>();

        // Assert
        var element = component.Find("pggm-table");
        Assert.False(element.HasAttribute("filter-label"));
        Assert.False(element.HasAttribute("clear-label"));
        Assert.False(element.HasAttribute("lang"));
        Assert.False(element.HasAttribute("id-field"));
        Assert.False(element.HasAttribute("selectable"));
        Assert.False(element.HasAttribute("select-type"));
        Assert.False(element.HasAttribute("remote-url"));
        Assert.False(element.HasAttribute("remote"));
        Assert.False(element.HasAttribute("data"));
    }
}
