using Bunit;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;
using System.Text.Json;
using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmTabTests : TestContext
    {
        public PggmTabTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
        }

        [Fact]
        public void PggmTab_RendersBasicStructure()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTab>();

            // Assert
            var element = component.Find("pggm-tab");
            Assert.NotNull(element);
        }

        [Fact]
        public void PggmTab_RendersWithActiveTabIndex()
        {
            // Arrange
            var activeIndex = 2;

            // Act
            var component = RenderComponent<PggmTab>(parameters => parameters
                .Add(p => p.ActiveTabIndex, activeIndex));

            // Assert
            var element = component.Find("pggm-tab");
            Assert.Equal(activeIndex.ToString(), element.GetAttribute("active-tab-index"));
        }

        [Fact]
        public void PggmTab_DoesNotRenderActiveTabIndexWhenNull()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTab>(parameters => parameters
                .Add(p => p.ActiveTabIndex, (int?)null));

            // Assert
            var element = component.Find("pggm-tab");
            Assert.False(element.HasAttribute("active-tab-index"));
        }

        [Fact]
        public void PggmTab_RendersChildContent()
        {
            // Arrange
            var content = "<pggm-tab-panel>Tab content</pggm-tab-panel>";

            // Act
            var component = RenderComponent<PggmTab>(parameters => parameters
                .AddChildContent(content));

            // Assert
            var element = component.Find("pggm-tab");
            Assert.Contains("Tab content", element.InnerHtml);
        }

        [Fact]
        public void PggmTab_RendersWithActiveTabIndexAndContent()
        {
            // Arrange
            var activeIndex = 1;

            // Act
            var component = RenderComponent<PggmTab>(parameters => parameters
                .Add(p => p.ActiveTabIndex, activeIndex)
                .AddChildContent("<pggm-tab-panel>Content</pggm-tab-panel>"));

            // Assert
            var element = component.Find("pggm-tab");
            Assert.Equal(activeIndex.ToString(), element.GetAttribute("active-tab-index"));
        }

        [Fact]
        public void PggmTab_RendersWithCustomAttributes()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTab>(parameters => parameters
                .AddUnmatched("data-testid", "my-tab-container")
                .AddUnmatched("class", "custom-tab-class"));

            // Assert
            var element = component.Find("pggm-tab");
            Assert.Equal("my-tab-container", element.GetAttribute("data-testid"));
            Assert.Equal("custom-tab-class", element.GetAttribute("class"));
        }

        [Fact]
        public void PggmTab_HasCorrectTagName()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTab>();

            // Assert
            var instance = component.Instance;
            Assert.Equal("pggm-tab", instance.TagName);
        }

        [Fact]
        public void PggmTab_EventCallbacksAreAssigned()
        {
            // Arrange
            var receivedTabIndex = -1;

            EventCallback<int> onTabChange = EventCallback.Factory.Create<int>(this, (index) =>
            {
                receivedTabIndex = index;
            });

            EventCallback<int> onTabClick = EventCallback.Factory.Create<int>(this, (index) =>
            {
                // Click handled
            });

            // Act
            var component = RenderComponent<PggmTab>(parameters => parameters
                .Add(p => p.OnTabChange, onTabChange)
                .Add(p => p.OnTabClick, onTabClick));

            // Assert
            var instance = component.Instance;
            Assert.True(instance.OnTabChange.HasDelegate);
            Assert.True(instance.OnTabClick.HasDelegate);
        }

        [Fact]
        public void PggmTab_HasCorrectEventNames()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTab>();

            // Assert
            var instance = component.Instance;
            var eventNames = instance.GetType()
                .GetMethod("GetEventNames", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance)
                ?.Invoke(instance, null) as IEnumerable<string>;

            Assert.NotNull(eventNames);
            Assert.Contains("tabChange", eventNames);
            Assert.Contains("tabClick", eventNames);
        }

        [Fact]
        public void PggmTab_ActiveTabIndexProperty()
        {
            // Arrange
            var initialIndex = 0;
            var newIndex = 2;

            // Act
            var component = RenderComponent<PggmTab>(parameters => parameters
                .Add(p => p.ActiveTabIndex, initialIndex));

            var instance = component.Instance;
            Assert.Equal(initialIndex, instance.ActiveTabIndex);

            // Update property
            component.SetParametersAndRender(parameters => parameters
                .Add(p => p.ActiveTabIndex, newIndex));

            // Assert
            Assert.Equal(newIndex, instance.ActiveTabIndex);
        }

        [Fact]
        public void PggmTab_SupportsMultipleTabPanels()
        {
            // Arrange & Act
            var component = RenderComponent<PggmTab>(parameters => parameters
                .AddChildContent(builder =>
                {
                    builder.OpenComponent<PggmTabPanel>(0);
                    builder.AddAttribute(1, "Title", "Tab 1");
                    builder.AddAttribute(2, "Active", true);
                    builder.AddAttribute(3, "ChildContent", (RenderFragment)(content => content.AddContent(4, "Content 1")));
                    builder.CloseComponent();

                    builder.OpenComponent<PggmTabPanel>(5);
                    builder.AddAttribute(6, "Title", "Tab 2");
                    builder.AddAttribute(7, "ChildContent", (RenderFragment)(content => content.AddContent(8, "Content 2")));
                    builder.CloseComponent();
                }));

            // Assert
            var element = component.Find("pggm-tab");
            var tabPanels = component.FindAll("pggm-tab-panel");
            
            Assert.Equal(2, tabPanels.Count);
            Assert.Contains("Content 1", element.InnerHtml);
            Assert.Contains("Content 2", element.InnerHtml);
        }
    }
}