using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;
using Xunit;
using Microsoft.AspNetCore.Components;
using System;
using System.Threading.Tasks;

namespace Pggm.Components.Tests
{
    public class PggmAccordionTests : TestContext
    {
        public PggmAccordionTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
            
            // Setup JS interop to handle calls from PggmDesignSystemService
            JSInterop.SetupVoid("PggmComponents.initialize");
            JSInterop.SetupVoid("PggmComponents.addEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.removeAllEventListeners", _ => true);
        }

        [Fact]
        public void PggmAccordion_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordion>(parameters => parameters
                .AddChildContent("<div>Test Content</div>"));

            // Assert
            var accordion = component.Find("pggm-accordion");
            Assert.NotNull(accordion);
            Assert.Contains("Test Content", component.Markup);
        }

        [Fact]
        public void PggmAccordion_SetsAllowMultipleAttribute_WhenTrue()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordion>(parameters => parameters
                .Add(p => p.AllowMultiple, true)
                .AddChildContent("<div>Test Content</div>"));

            // Assert
            var accordion = component.Find("pggm-accordion");
            Assert.True(accordion.HasAttribute("allow-multiple"));
        }

        [Fact]
        public void PggmAccordion_DoesNotSetAllowMultipleAttribute_WhenFalse()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordion>(parameters => parameters
                .Add(p => p.AllowMultiple, false)
                .AddChildContent("<div>Test Content</div>"));

            // Assert
            var accordion = component.Find("pggm-accordion");
            Assert.False(accordion.HasAttribute("allow-multiple"));
        }

        [Fact]
        public void PggmAccordion_HandlesAdditionalAttributes()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordion>(parameters => parameters
                .AddUnmatched("data-test", "accordion-test")
                .AddUnmatched("aria-label", "Test accordion")
                .AddChildContent("<div>Test Content</div>"));

            // Assert
            var accordion = component.Find("pggm-accordion");
            Assert.Equal("accordion-test", accordion.GetAttribute("data-test"));
            Assert.Equal("Test accordion", accordion.GetAttribute("aria-label"));
        }

        [Fact]
        public void PggmAccordion_AppliesCssClass()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordion>(parameters => parameters
                .Add(p => p.CssClass, "custom-accordion")
                .AddChildContent("<div>Test Content</div>"));

            // Assert
            var accordion = component.Find("pggm-accordion");
            Assert.Equal("custom-accordion", accordion.GetAttribute("class"));
        }

        [Fact]
        public void PggmAccordion_RendersNestedAccordionItems()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordion>(parameters => parameters
                .AddChildContent(builder =>
                {
                    builder.OpenComponent<PggmAccordionItem>(0);
                    builder.AddAttribute(1, "ChildContent", (RenderFragment)(childBuilder =>
                    {
                        childBuilder.OpenComponent<PggmAccordionItemTitle>(0);
                        childBuilder.AddAttribute(1, "ChildContent", (RenderFragment)(titleBuilder =>
                        {
                            titleBuilder.AddContent(0, "Item Title");
                        }));
                        childBuilder.CloseComponent();
                        childBuilder.AddMarkupContent(2, "<div>Item Content</div>");
                    }));
                    builder.CloseComponent();
                }));

            // Assert
            var accordion = component.Find("pggm-accordion");
            var accordionItem = component.Find("pggm-accordion-item");
            var titleSpan = component.Find("span[slot='header']");
            
            Assert.NotNull(accordion);
            Assert.NotNull(accordionItem);
            Assert.NotNull(titleSpan);
            Assert.Contains("Item Title", component.Markup);
            Assert.Contains("Item Content", component.Markup);
        }
    }

    public class PggmAccordionItemTests : TestContext
    {
        public PggmAccordionItemTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
            
            // Setup JS interop to handle calls from PggmDesignSystemService
            JSInterop.SetupVoid("PggmComponents.initialize");
            JSInterop.SetupVoid("PggmComponents.addEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.removeAllEventListeners", _ => true);
        }

        [Fact]
        public void PggmAccordionItem_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .AddChildContent("<div>Item Content</div>"));

            // Assert
            var accordionItem = component.Find("pggm-accordion-item");
            Assert.NotNull(accordionItem);
            Assert.Contains("Item Content", component.Markup);
        }

        [Fact]
        public void PggmAccordionItem_SetsOpenAttribute_WhenTrue()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .Add(p => p.Open, true)
                .AddChildContent("<div>Item Content</div>"));

            // Assert
            var accordionItem = component.Find("pggm-accordion-item");
            Assert.True(accordionItem.HasAttribute("open"));
        }

        [Fact]
        public void PggmAccordionItem_DoesNotSetOpenAttribute_WhenFalse()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .Add(p => p.Open, false)
                .AddChildContent("<div>Item Content</div>"));

            // Assert
            var accordionItem = component.Find("pggm-accordion-item");
            Assert.False(accordionItem.HasAttribute("open"));
        }

        [Fact]
        public void PggmAccordionItem_SetsDisabledAttribute_WhenTrue()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .Add(p => p.Disabled, true)
                .AddChildContent("<div>Item Content</div>"));

            // Assert
            var accordionItem = component.Find("pggm-accordion-item");
            Assert.True(accordionItem.HasAttribute("disabled"));
        }

        [Fact]
        public void PggmAccordionItem_DoesNotSetDisabledAttribute_WhenFalse()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .Add(p => p.Disabled, false)
                .AddChildContent("<div>Item Content</div>"));

            // Assert
            var accordionItem = component.Find("pggm-accordion-item");
            Assert.False(accordionItem.HasAttribute("disabled"));
        }

        [Fact]
        public void PggmAccordionItem_SetsBothOpenAndDisabledAttributes()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .Add(p => p.Open, true)
                .Add(p => p.Disabled, true)
                .AddChildContent("<div>Item Content</div>"));

            // Assert
            var accordionItem = component.Find("pggm-accordion-item");
            Assert.True(accordionItem.HasAttribute("open"));
            Assert.True(accordionItem.HasAttribute("disabled"));
        }

        [Fact]
        public void PggmAccordionItem_TriggersOnAccordionItemToggle()
        {
            // Arrange
            bool toggleTriggered = false;
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .Add(p => p.OnAccordionItemToggle, EventCallback.Factory.Create<EventArgs>(this, () => toggleTriggered = true))
                .AddChildContent("<div>Item Content</div>"));

            // Act
            var accordionItem = component.Find("pggm-accordion-item");
            // Simulate the accordion item toggle event
            component.InvokeAsync(() => component.Instance.HandleEvent("accordionItemToggle", EventArgs.Empty));

            // Assert
            Assert.True(toggleTriggered);
        }

        [Fact]
        public void PggmAccordionItem_HandlesAdditionalAttributes()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .AddUnmatched("data-test", "accordion-item-test")
                .AddUnmatched("aria-expanded", "true")
                .AddChildContent("<div>Item Content</div>"));

            // Assert
            var accordionItem = component.Find("pggm-accordion-item");
            Assert.Equal("accordion-item-test", accordionItem.GetAttribute("data-test"));
            Assert.Equal("true", accordionItem.GetAttribute("aria-expanded"));
        }

        [Fact]
        public void PggmAccordionItem_AppliesCssClass()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .Add(p => p.CssClass, "custom-item")
                .AddChildContent("<div>Item Content</div>"));

            // Assert
            var accordionItem = component.Find("pggm-accordion-item");
            Assert.Equal("custom-item", accordionItem.GetAttribute("class"));
        }

        [Fact]
        public void PggmAccordionItem_RendersWithTitle()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItem>(parameters => parameters
                .AddChildContent(builder =>
                {
                    builder.OpenComponent<PggmAccordionItemTitle>(0);
                    builder.AddAttribute(1, "ChildContent", (RenderFragment)(titleBuilder =>
                    {
                        titleBuilder.AddContent(0, "Test Title");
                    }));
                    builder.CloseComponent();
                    builder.AddMarkupContent(2, "<div>Test Content</div>");
                }));

            // Assert
            var accordionItem = component.Find("pggm-accordion-item");
            var titleSpan = component.Find("span[slot='header']");
            
            Assert.NotNull(accordionItem);
            Assert.NotNull(titleSpan);
            Assert.Contains("Test Title", component.Markup);
            Assert.Contains("Test Content", component.Markup);
        }
    }

    public class PggmAccordionItemTitleTests : TestContext
    {
        public PggmAccordionItemTitleTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
            
            // Setup JS interop to handle calls from PggmDesignSystemService
            JSInterop.SetupVoid("PggmComponents.initialize");
            JSInterop.SetupVoid("PggmComponents.addEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.removeAllEventListeners", _ => true);
        }

        [Fact]
        public void PggmAccordionItemTitle_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItemTitle>(parameters => parameters
                .AddChildContent("Accordion Title"));

            // Assert
            var titleSpan = component.Find("span[slot='header']");
            Assert.NotNull(titleSpan);
            Assert.Equal("header", titleSpan.GetAttribute("slot"));
            Assert.Equal("Accordion Title", titleSpan.TextContent);
        }

        [Fact]
        public void PggmAccordionItemTitle_RendersWithHtmlContent()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItemTitle>(parameters => parameters
                .AddChildContent("<strong>Bold Title</strong>"));

            // Assert
            var titleSpan = component.Find("span[slot='header']");
            var strongElement = titleSpan.QuerySelector("strong");
            
            Assert.NotNull(titleSpan);
            Assert.NotNull(strongElement);
            Assert.Equal("Bold Title", strongElement.TextContent);
        }

        [Fact]
        public void PggmAccordionItemTitle_HandlesAdditionalAttributes()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItemTitle>(parameters => parameters
                .AddUnmatched("data-test", "title-test")
                .AddUnmatched("aria-level", "2")
                .AddChildContent("Test Title"));

            // Assert
            var titleSpan = component.Find("span[slot='header']");
            Assert.Equal("title-test", titleSpan.GetAttribute("data-test"));
            Assert.Equal("2", titleSpan.GetAttribute("aria-level"));
        }

        [Fact]
        public void PggmAccordionItemTitle_AppliesCssClass()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItemTitle>(parameters => parameters
                .Add(p => p.CssClass, "custom-title")
                .AddChildContent("Styled Title"));

            // Assert
            var titleSpan = component.Find("span[slot='header']");
            Assert.Equal("custom-title", titleSpan.GetAttribute("class"));
        }

        [Fact]
        public void PggmAccordionItemTitle_RendersEmptyContent()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItemTitle>();

            // Assert
            var titleSpan = component.Find("span[slot='header']");
            Assert.NotNull(titleSpan);
            Assert.Equal("header", titleSpan.GetAttribute("slot"));
            Assert.Empty(titleSpan.TextContent.Trim());
        }

        [Fact]
        public void PggmAccordionItemTitle_RendersWithComplexContent()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordionItemTitle>(parameters => parameters
                .AddChildContent(builder =>
                {
                    builder.AddMarkupContent(0, "<i class=\"icon-test\"></i>");
                    builder.AddContent(1, "Title with Icon");
                    builder.AddMarkupContent(2, "<span class=\"badge\">New</span>");
                }));

            // Assert
            var titleSpan = component.Find("span[slot='header']");
            var icon = titleSpan.QuerySelector("i.icon-test");
            var badge = titleSpan.QuerySelector("span.badge");
            
            Assert.NotNull(titleSpan);
            Assert.NotNull(icon);
            Assert.NotNull(badge);
            Assert.Contains("Title with Icon", titleSpan.TextContent);
            Assert.Equal("New", badge.TextContent);
        }
    }

    public class PggmAccordionIntegrationTests : TestContext
    {
        public PggmAccordionIntegrationTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
            
            // Setup JS interop to handle calls from PggmDesignSystemService
            JSInterop.SetupVoid("PggmComponents.initialize");
            JSInterop.SetupVoid("PggmComponents.addEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.removeAllEventListeners", _ => true);
        }

        [Fact]
        public void PggmAccordion_RendersCompleteAccordionStructure()
        {
            // Arrange & Act
            var component = RenderComponent<PggmAccordion>(parameters => parameters
                .Add(p => p.AllowMultiple, true)
                .AddChildContent(builder =>
                {
                    // First accordion item
                    builder.OpenComponent<PggmAccordionItem>(0);
                    builder.AddAttribute(1, "Open", true);
                    builder.AddAttribute(2, "ChildContent", (RenderFragment)(itemBuilder =>
                    {
                        itemBuilder.OpenComponent<PggmAccordionItemTitle>(0);
                        itemBuilder.AddAttribute(1, "ChildContent", (RenderFragment)(titleBuilder =>
                        {
                            titleBuilder.AddContent(0, "First Item");
                        }));
                        itemBuilder.CloseComponent();
                        itemBuilder.AddMarkupContent(2, "<div>First item content</div>");
                    }));
                    builder.CloseComponent();

                    // Second accordion item
                    builder.OpenComponent<PggmAccordionItem>(10);
                    builder.AddAttribute(11, "Disabled", true);
                    builder.AddAttribute(12, "ChildContent", (RenderFragment)(itemBuilder =>
                    {
                        itemBuilder.OpenComponent<PggmAccordionItemTitle>(0);
                        itemBuilder.AddAttribute(1, "ChildContent", (RenderFragment)(titleBuilder =>
                        {
                            titleBuilder.AddContent(0, "Second Item (Disabled)");
                        }));
                        itemBuilder.CloseComponent();
                        itemBuilder.AddMarkupContent(2, "<div>Second item content</div>");
                    }));
                    builder.CloseComponent();
                }));

            // Assert
            var accordion = component.Find("pggm-accordion");
            var accordionItems = component.FindAll("pggm-accordion-item");
            var titleSpans = component.FindAll("span[slot='header']");

            // Verify accordion structure
            Assert.NotNull(accordion);
            Assert.True(accordion.HasAttribute("allow-multiple"));
            Assert.Equal(2, accordionItems.Count);
            Assert.Equal(2, titleSpans.Count);

            // Verify first item
            Assert.True(accordionItems[0].HasAttribute("open"));
            Assert.False(accordionItems[0].HasAttribute("disabled"));
            Assert.Equal("First Item", titleSpans[0].TextContent);

            // Verify second item
            Assert.False(accordionItems[1].HasAttribute("open"));
            Assert.True(accordionItems[1].HasAttribute("disabled"));
            Assert.Equal("Second Item (Disabled)", titleSpans[1].TextContent);

            // Verify content
            Assert.Contains("First item content", component.Markup);
            Assert.Contains("Second item content", component.Markup);
        }

        [Fact]
        public void PggmAccordion_HandlesMultipleEventCallbacks()
        {
            // Arrange
            int firstItemToggleCount = 0;
            int secondItemToggleCount = 0;

            var component = RenderComponent<PggmAccordion>(parameters => parameters
                .AddChildContent(builder =>
                {
                    // First accordion item
                    builder.OpenComponent<PggmAccordionItem>(0);
                    builder.AddAttribute(1, "OnAccordionItemToggle", 
                        EventCallback.Factory.Create<EventArgs>(this, () => firstItemToggleCount++));
                    builder.AddAttribute(2, "ChildContent", (RenderFragment)(itemBuilder =>
                    {
                        itemBuilder.OpenComponent<PggmAccordionItemTitle>(0);
                        itemBuilder.AddAttribute(1, "ChildContent", (RenderFragment)(titleBuilder =>
                        {
                            titleBuilder.AddContent(0, "First Item");
                        }));
                        itemBuilder.CloseComponent();
                    }));
                    builder.CloseComponent();

                    // Second accordion item
                    builder.OpenComponent<PggmAccordionItem>(10);
                    builder.AddAttribute(11, "OnAccordionItemToggle", 
                        EventCallback.Factory.Create<EventArgs>(this, () => secondItemToggleCount++));
                    builder.AddAttribute(12, "ChildContent", (RenderFragment)(itemBuilder =>
                    {
                        itemBuilder.OpenComponent<PggmAccordionItemTitle>(0);
                        itemBuilder.AddAttribute(1, "ChildContent", (RenderFragment)(titleBuilder =>
                        {
                            titleBuilder.AddContent(0, "Second Item");
                        }));
                        itemBuilder.CloseComponent();
                    }));
                    builder.CloseComponent();
                }));

            // Act
            var accordionItems = component.FindComponents<PggmAccordionItem>();
            component.InvokeAsync(() => accordionItems[0].Instance.HandleEvent("accordionItemToggle", EventArgs.Empty));
            component.InvokeAsync(() => accordionItems[1].Instance.HandleEvent("accordionItemToggle", EventArgs.Empty));

            // Assert
            Assert.Equal(1, firstItemToggleCount);
            Assert.Equal(1, secondItemToggleCount);
        }
    }
}
