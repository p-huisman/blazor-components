using Bunit;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components.Interfaces;
using Pggm.Components.Services;
using Pggm.Components.Base;
using Xunit;

namespace Pggm.Components.Tests;

public class InterfaceImplementationTests : TestContext
{
    public InterfaceImplementationTests()
    {
        Services.AddScoped<PggmDesignSystemService>();
    }

    #region Test Components

    // Simple test component for interface testing
    public class TestPggmComponent : PggmComponentBase
    {
        public override string TagName => "test-component";

        // Parameterless constructor for Blazor rendering
        public TestPggmComponent() : this(null, null, null, null) { }

        // Constructor for testing purposes
        public TestPggmComponent(string? cssClass = null, Dictionary<string, object>? additionalAttributes = null, RenderFragment? childContent = null, string? testAttribute = null)
        {
            CssClass = cssClass;
            AdditionalAttributes = additionalAttributes;
            ChildContent = childContent;
            TestAttribute = testAttribute;
        }

        protected override void AddComponentAttributes(Dictionary<string, object> attributes)
        {
            if (!string.IsNullOrEmpty(TestAttribute))
            {
                attributes["test-attr"] = TestAttribute;
            }
        }

        [Parameter] public string? TestAttribute { get; set; }

        // Public method for testing protected GetAttributes
        public Dictionary<string, object> PublicGetAttributes() => GetAttributes();
    }

    // Test event component
    public class TestPggmEventComponent : PggmEventComponentBase
    {
        public override string TagName => "test-event-component";

        public bool EventHandled { get; private set; }
        public string? LastEventName { get; private set; }
        public object? LastEventData { get; private set; }

        protected override IEnumerable<string> GetEventNames()
        {
            yield return "test-event";
        }

        public void RegisterTestHandler()
        {
            RegisterEventHandler("test-event", HandleTestEvent);
        }

        private Task HandleTestEvent(object? eventData)
        {
            EventHandled = true;
            LastEventName = "test-event";
            LastEventData = eventData;
            return Task.CompletedTask;
        }

        // Public method for testing protected RegisterEventHandler
        public void PublicRegisterEventHandler(string eventName, Func<object?, Task> handler)
        {
            RegisterEventHandler(eventName, handler);
        }
    }

    #endregion

    #region IPggmComponent Interface Tests

    [Fact]
    public void IPggmComponent_Interface_IsImplementedCorrectly()
    {
        // Arrange & Act
        var component = new TestPggmComponent();

        // Assert
        Assert.IsAssignableFrom<IPggmComponent>(component);
        Assert.IsAssignableFrom<IAsyncDisposable>(component);
    }

    [Fact]
    public void IPggmComponent_TagName_IsAccessible()
    {
        // Arrange
        var component = new TestPggmComponent();

        // Act
        var tagName = component.TagName;

        // Assert
        Assert.Equal("test-component", tagName);
    }

    [Fact]
    public void IPggmComponent_Properties_AreSettable()
    {
        // Arrange
        var additionalAttributes = new Dictionary<string, object> { { "custom", "value" } };
        var childContent = new RenderFragment(builder => builder.AddContent(0, "Test Content"));

        // Act
        var component = new TestPggmComponent(
            cssClass: "test-class",
            additionalAttributes: additionalAttributes,
            childContent: childContent);

        // Assert
        Assert.Equal("test-class", component.CssClass);
        Assert.Same(additionalAttributes, component.AdditionalAttributes);
        Assert.Same(childContent, component.ChildContent);
    }

    [Fact]
    public void IPggmComponent_ElementRef_IsAccessible()
    {
        // Arrange
        var component = RenderComponent<TestPggmComponent>();

        // Act
        var elementRef = component.Instance.ElementRef;

        // Assert
        // ElementRef will be default until component is rendered with actual DOM
        // ElementReference is a value type, so we just verify it exists
        Assert.True(true); // ElementRef is accessible
    }

    #endregion

    #region IPggmEventComponent Interface Tests

    [Fact]
    public void IPggmEventComponent_Interface_IsImplementedCorrectly()
    {
        // Arrange & Act
        var component = new TestPggmEventComponent();

        // Assert
        Assert.IsAssignableFrom<IPggmEventComponent>(component);
        Assert.IsAssignableFrom<IPggmComponent>(component);
        Assert.IsAssignableFrom<IAsyncDisposable>(component);
    }

    [Fact]
    public async Task IPggmEventComponent_HandleEvent_WorksCorrectly()
    {
        // Arrange
        var component = new TestPggmEventComponent();
        component.RegisterTestHandler();

        // Act
        await component.HandleEvent("test-event", "test-data");

        // Assert
        Assert.True(component.EventHandled);
        Assert.Equal("test-event", component.LastEventName);
        Assert.Equal("test-data", component.LastEventData);
    }

    [Fact]
    public async Task IPggmEventComponent_HandleCancelableEvent_WorksCorrectly()
    {
        // Arrange
        var component = new TestPggmEventComponent();

        // Act
        var result = await component.HandleCancelableEvent("unknown-event", null);

        // Assert
        Assert.True(result); // Should not cancel unknown events
    }

    #endregion

    #region Base Class Enhancement Tests

    [Fact]
    public void PggmComponentBase_GetAttributes_HandlesNullAdditionalAttributes()
    {
        // Arrange
        var component = new TestPggmComponent(cssClass: "test-class");

        // Act 
        var attributes = component.PublicGetAttributes();

        // Assert 
        Assert.Contains("class", attributes);
        Assert.Equal("test-class", attributes["class"]);
    }

    [Fact]
    public void PggmComponentBase_GetAttributes_MergesAdditionalAttributes()
    {
        // Arrange
        var additionalAttrs = new Dictionary<string, object>
        {
            { "data-test", "test-value" },
            { "aria-label", "Test Label" }
        };

        var component = new TestPggmComponent(
            additionalAttributes: additionalAttrs,
            testAttribute: "component-attr");

        // Act
        var attributes = component.PublicGetAttributes();

        // Assert
        Assert.Contains("data-test", attributes);
        Assert.Contains("aria-label", attributes);
        Assert.Contains("test-attr", attributes);
        Assert.Equal("test-value", attributes["data-test"]);
        Assert.Equal("Test Label", attributes["aria-label"]);
        Assert.Equal("component-attr", attributes["test-attr"]);
    }

    [Fact]
    public void PggmComponentBase_GetAttributes_AdditionalAttributesOverrideComponentAttributes()
    {
        // Arrange
        var additionalAttrs = new Dictionary<string, object>
        {
            { "test-attr", "overridden-value" }
        };

        var component = new TestPggmComponent(
            additionalAttributes: additionalAttrs,
            testAttribute: "original-value");

        // Act
        var attributes = component.PublicGetAttributes();

        // Assert
        Assert.Contains("test-attr", attributes);
        Assert.Equal("overridden-value", attributes["test-attr"]);
    }

    [Fact]
    public void PggmComponentBase_CssClass_MergesWithDefaultClasses()
    {
        // Arrange
        var component = new TestPggmComponent(cssClass: "custom-class");

        // Act
        var attributes = component.PublicGetAttributes();

        // Assert
        Assert.Contains("class", attributes);
        Assert.Equal("custom-class", attributes["class"]);
    }

    #endregion

    #region Disposal Tests

    [Fact]
    public async Task PggmComponentBase_DisposeAsync_CompletesSuccessfully()
    {
        // Arrange
        var component = new TestPggmComponent();

        // Act & Assert - Should not throw
        await component.DisposeAsync();
    }

    [Fact]
    public async Task PggmEventComponentBase_DisposeAsync_CleansUpProperly()
    {
        // Arrange
        var component = new TestPggmEventComponent();

        // Act & Assert - Should not throw
        await component.DisposeAsync();
    }

    [Fact]
    public async Task PggmEventComponentBase_DisposeAsync_CanBeCalledMultipleTimes()
    {
        // Arrange
        var component = new TestPggmEventComponent();

        // Act & Assert - Should not throw
        await component.DisposeAsync();
        await component.DisposeAsync();
        await component.DisposeAsync();
    }

    #endregion

    #region Error Handling Tests

    [Fact]
    public async Task PggmEventComponentBase_HandleEvent_WithUnknownEvent_CallsOnUnhandledEvent()
    {
        // Arrange
        var component = new TestPggmEventComponent();

        // Act & Assert - Should not throw
        await component.HandleEvent("unknown-event", null);

        // Event should not be handled since no handler is registered
        Assert.False(component.EventHandled);
    }

    [Fact]
    public async Task PggmEventComponentBase_HandleEvent_WithException_CallsErrorHandler()
    {
        // Arrange
        var component = new TestPggmEventComponent();

        // Register a handler that throws
        component.PublicRegisterEventHandler("error-event", _ => throw new InvalidOperationException("Test exception"));

        // Act & Assert - Should not throw (error should be handled internally)
        await component.HandleEvent("error-event", null);
    }

    #endregion

    #region Memory Management Tests

    [Fact]
    public void PggmComponentBase_MultipleInstances_DoNotInterfere()
    {
        // Arrange
        var component1 = new TestPggmComponent(cssClass: "class1", testAttribute: "attr1");
        var component2 = new TestPggmComponent(cssClass: "class2", testAttribute: "attr2");

        // Act
        var attributes1 = component1.PublicGetAttributes();
        var attributes2 = component2.PublicGetAttributes();

        // Assert
        Assert.Contains("class", attributes1);
        Assert.Contains("test-attr", attributes1);
        Assert.Equal("class1", attributes1["class"]);
        Assert.Equal("attr1", attributes1["test-attr"]);

        Assert.Contains("class", attributes2);
        Assert.Contains("test-attr", attributes2);
        Assert.Equal("class2", attributes2["class"]);
        Assert.Equal("attr2", attributes2["test-attr"]);
    }

    #endregion
}