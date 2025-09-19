using Bunit;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;
using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmTabPanelTests : TestContext
    {
        public PggmTabPanelTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
        }

        [Fact]
        public void PggmTabPanel_RendersBasicStructure()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTabPanel>();

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.NotNull(element);
        }

        [Fact]
        public void PggmTabPanel_RendersWithTitle()
        {
            // Arrange
            var title = "Test Tab Title";

            // Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.Title, title));

            // Assert
            var element = component.Find("pggm-tab-panel");
            var titleElement = component.Find("h3[slot='title']");

            Assert.NotNull(element);
            Assert.NotNull(titleElement);
            Assert.Equal(title, titleElement.TextContent);
        }

        [Fact]
        public void PggmTabPanel_DoesNotRenderTitleWhenEmpty()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.Title, string.Empty));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.NotNull(element);
            Assert.Empty(component.FindAll("h3[slot='title']"));
        }

        [Fact]
        public void PggmTabPanel_DoesNotRenderTitleWhenNull()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.Title, (string?)null));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.NotNull(element);
            Assert.Empty(component.FindAll("h3[slot='title']"));
        }

        [Fact]
        public void PggmTabPanel_RendersWithActiveAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.Active, true));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.True(element.HasAttribute("active"));
        }

        [Fact]
        public void PggmTabPanel_DoesNotRenderActiveWhenFalse()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.Active, false));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.False(element.HasAttribute("active"));
        }

        [Fact]
        public void PggmTabPanel_RendersWithIcon()
        {
            // Arrange
            var icon = "home";

            // Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.Icon, icon));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.Equal(icon, element.GetAttribute("icon"));
        }

        [Fact]
        public void PggmTabPanel_DoesNotRenderIconWhenEmpty()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.Icon, string.Empty));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.False(element.HasAttribute("icon"));
        }

        [Fact]
        public void PggmTabPanel_RendersWithTabIndex()
        {
            // Arrange
            var tabIndex = 5;

            // Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.TabIndex, tabIndex));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.Equal(tabIndex.ToString(), element.GetAttribute("tab-index"));
        }

        [Fact]
        public void PggmTabPanel_DoesNotRenderTabIndexWhenNull()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.TabIndex, (int?)null));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.False(element.HasAttribute("tab-index"));
        }

        [Fact]
        public void PggmTabPanel_RendersChildContent()
        {
            // Arrange
            var content = "This is tab content";

            // Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .AddChildContent(content));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.Contains(content, element.InnerHtml);
        }

        [Fact]
        public void PggmTabPanel_RendersWithAllAttributes()
        {
            // Arrange
            var title = "Complete Tab";
            var icon = "settings";
            var tabIndex = 3;

            // Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.Title, title)
                .Add(p => p.Active, true)
                .Add(p => p.Icon, icon)
                .Add(p => p.TabIndex, tabIndex)
                .AddChildContent("<p>Tab content here</p>"));

            // Assert
            var element = component.Find("pggm-tab-panel");
            var titleElement = component.Find("h3[slot='title']");

            Assert.NotNull(element);
            Assert.NotNull(titleElement);
            Assert.Equal(title, titleElement.TextContent);
            Assert.True(element.HasAttribute("active"));
            Assert.Equal(icon, element.GetAttribute("icon"));
            Assert.Equal(tabIndex.ToString(), element.GetAttribute("tab-index"));
            Assert.Contains("<p>Tab content here</p>", element.InnerHtml);
        }

        [Fact]
        public void PggmTabPanel_RendersWithCustomAttributes()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .AddUnmatched("data-testid", "my-tab-panel")
                .AddUnmatched("class", "custom-class"));

            // Assert
            var element = component.Find("pggm-tab-panel");
            Assert.Equal("my-tab-panel", element.GetAttribute("data-testid"));
            Assert.Equal("custom-class", element.GetAttribute("class"));
        }

        [Fact]
        public void PggmTabPanel_HasCorrectTagName()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTabPanel>();

            // Assert
            var instance = component.Instance;
            Assert.Equal("pggm-tab-panel", instance.TagName);
        }

        [Fact]
        public void PggmTabPanel_TitleSlotPositioning()
        {
            // Arrange
            var title = "First Element";
            var content = "<div>Content after title</div>";

            // Act
            var component = RenderComponent<PggmTabPanel>(parameters => parameters
                .Add(p => p.Title, title)
                .AddChildContent(content));

            // Assert
            var element = component.Find("pggm-tab-panel");
            var children = element.Children;

            // Title should be the first child
            Assert.True(children.Length >= 1);
            Assert.Equal("H3", children[0].TagName);
            Assert.Equal("title", children[0].GetAttribute("slot"));
            Assert.Equal(title, children[0].TextContent);
        }
    }
}