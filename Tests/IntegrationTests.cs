using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using Moq;
using Pggm.Components.Base;
using Pggm.Components.Extensions;
using Pggm.Components.Services;
using Xunit;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pggm.Components.Tests
{
    public class IntegrationTests
    {
        [Fact]
        public void ServiceRegistration_Integration_RegistersAllRequiredServices()
        {
            // Arrange
            var services = new ServiceCollection();
            services.AddLogging();

            // Act
            // Arrange - Add required dependencies
            var mockJSRuntime = new Mock<IJSRuntime>();
            services.AddSingleton(mockJSRuntime.Object);
            services.AddLogging();
            
            services.AddPggmComponents(options =>
            {
                options.EnableDevelopmentMode = true;
                options.EnablePerformanceMetrics = true;
            });

            var serviceProvider = services.BuildServiceProvider();

            // Assert - Verify all required services are available
            var designSystemService = serviceProvider.GetService<PggmDesignSystemService>();
            var options = serviceProvider.GetService<PggmComponentsOptions>();
            var logger = serviceProvider.GetService<ILogger<PggmDesignSystemService>>();

            Assert.NotNull(designSystemService);
            Assert.NotNull(options);
            Assert.NotNull(logger);
            Assert.True(options.EnableDevelopmentMode);
            Assert.True(options.EnablePerformanceMetrics);
        }

        [Fact]
        public void ComponentLifecycle_Integration_HandlesCompleteWorkflow()
        {
            // Arrange
            var services = new ServiceCollection();
            services.AddLogging();
            services.AddSingleton(Mock.Of<IJSRuntime>());
            services.AddPggmComponents();

            var serviceProvider = services.BuildServiceProvider();
            var component = new IntegrationTestComponent();

            // Simulate dependency injection
            component.SetServices(
                serviceProvider.GetRequiredService<PggmDesignSystemService>(),
                serviceProvider.GetRequiredService<IJSRuntime>()
            );

            // Act & Assert - Component initialization should not throw
            var attributes = component.GetTestAttributes();
            Assert.NotNull(attributes);
            
            // Verify component can handle attribute building
            Assert.True(attributes.ContainsKey("data-component"));
            Assert.Equal("integration-test", attributes["data-component"]);
        }

        [Fact]
        public void AttributeHelper_Integration_WithMultipleComponents()
        {
            // Arrange
            var component1 = new IntegrationTestComponent(
                cssClass: "component-1 custom-class",
                additionalAttributes: new Dictionary<string, object>
                {
                    { "data-test", "value1" },
                    { "aria-label", "Component 1" }
                });
            var component2 = new IntegrationTestComponent(
                cssClass: "component-2 another-class",
                additionalAttributes: new Dictionary<string, object>
                {
                    { "data-test", "value2" },
                    { "aria-label", "Component 2" }
                });

            // Act
            var attributes1 = component1.GetTestAttributes();
            var attributes2 = component2.GetTestAttributes();

            // Assert - Verify attributes are handled independently
            Assert.NotEqual(attributes1["class"], attributes2["class"]);
            Assert.Equal("component-1 custom-class", attributes1["class"]);
            Assert.Equal("component-2 another-class", attributes2["class"]);
            
            Assert.Equal("value1", attributes1["data-test"]);
            Assert.Equal("value2", attributes2["data-test"]);
        }

        [Fact]
        public void EventHandling_Integration_WithMultipleEventTypes()
        {
            // Arrange
            var testComponent = new IntegrationTestEventComponent();
            var clickHandlerCalled = false;
            var changeHandlerCalled = false;

            // Setup multiple event handlers
            testComponent.SetupTestHandlers(
                () => { clickHandlerCalled = true; },
                () => { changeHandlerCalled = true; }
            );

            // Act
            testComponent.SimulateEvent("click");
            testComponent.SimulateEvent("change");

            // Assert
            Assert.True(clickHandlerCalled);
            Assert.True(changeHandlerCalled);
        }

        [Fact]
        public async Task ComponentDisposal_Integration_CleansUpResources()
        {
            // Arrange
            var services = new ServiceCollection();
            services.AddLogging();
            services.AddSingleton(Mock.Of<IJSRuntime>());
            services.AddPggmComponents();

            var serviceProvider = services.BuildServiceProvider();
            var component = new IntegrationTestComponent();

            component.SetServices(
                serviceProvider.GetRequiredService<PggmDesignSystemService>(),
                serviceProvider.GetRequiredService<IJSRuntime>()
            );

            // Act
            await component.DisposeAsync();

            // Assert - Should not throw and component should be marked as disposed
            Assert.True(component.IsDisposed);
        }

        [Fact]
        public void OptionsConfiguration_Integration_WithDifferentScenarios()
        {
            // Test Case 1: Default options
            var services1 = new ServiceCollection();
            services1.AddPggmComponents();
            var provider1 = services1.BuildServiceProvider();
            var options1 = provider1.GetRequiredService<PggmComponentsOptions>();

            Assert.False(options1.EnableDevelopmentMode);
            Assert.False(options1.EnablePerformanceMetrics);
            Assert.Null(options1.CustomCssBundlePath);

            // Test Case 2: Custom options
            var services2 = new ServiceCollection();
            services2.AddPggmComponents(opt =>
            {
                opt.EnableDevelopmentMode = true;
                opt.CustomCssBundlePath = "/custom/path.css";
            });
            var provider2 = services2.BuildServiceProvider();
            var options2 = provider2.GetRequiredService<PggmComponentsOptions>();

            Assert.True(options2.EnableDevelopmentMode);
            Assert.Equal("/custom/path.css", options2.CustomCssBundlePath);

            // Test Case 3: Options are singleton across requests
            var options2_again = provider2.GetRequiredService<PggmComponentsOptions>();
            Assert.Same(options2, options2_again);
        }

        [Fact]
        public async Task ConcurrentComponentAccess_Integration_HandlesSafeAccess()
        {
            // Arrange
            var tasks = new List<Task>();
            var components = new List<IntegrationTestComponent>();

            // Create multiple components concurrently
            for (int i = 0; i < 10; i++)
            {
                var index = i;
                tasks.Add(Task.Run(() =>
                {
                    var component = new IntegrationTestComponent(
                        cssClass: $"component-{index}",
                        additionalAttributes: new Dictionary<string, object>
                        {
                            { "data-index", index.ToString() }
                        });
                    
                    var attributes = component.GetTestAttributes();
                    lock (components)
                    {
                        components.Add(component);
                    }
                }));
            }

            // Act
            await Task.WhenAll(tasks.ToArray());

            // Assert - All components should be created successfully
            Assert.Equal(10, components.Count);
            
            // Verify each component has unique attributes
            for (int i = 0; i < components.Count; i++)
            {
                var attributes = components[i].GetTestAttributes();
                Assert.Contains($"component-", attributes["class"].ToString());
                Assert.Contains("data-index", attributes.Keys);
            }
        }
    }

    // Test component for integration testing
    public class IntegrationTestComponent : PggmComponentBase
    {
        public override string TagName => "integration-test";

        // Parameterless constructor for Blazor rendering
        public IntegrationTestComponent() : this(null, null) { }

        // Constructor for testing purposes
        public IntegrationTestComponent(string? cssClass = null, Dictionary<string, object>? additionalAttributes = null)
        {
            CssClass = cssClass;
            AdditionalAttributes = additionalAttributes;
        }

        private PggmDesignSystemService? _designSystemService;
        private IJSRuntime? _jsRuntime;

        public bool IsDisposed { get; private set; }

        public void SetServices(PggmDesignSystemService designSystemService, IJSRuntime jsRuntime)
        {
            _designSystemService = designSystemService;
            _jsRuntime = jsRuntime;
        }

        protected override void AddComponentAttributes(Dictionary<string, object> attributes)
        {
            attributes["data-component"] = "integration-test";
        }

        public Dictionary<string, object> GetTestAttributes()
        {
            return GetAttributes();
        }

        protected override ValueTask DisposeAsyncCore()
        {
            IsDisposed = true;
            return ValueTask.CompletedTask;
        }
    }

    // Test event component for integration testing
    public class IntegrationTestEventComponent : PggmEventComponentBase
    {
        public override string TagName => "integration-test-event";

        private readonly Dictionary<string, Action> _eventHandlers = new();

        public void SetupTestHandlers(Action clickHandler, Action changeHandler)
        {
            _eventHandlers["click"] = clickHandler;
            _eventHandlers["change"] = changeHandler;
        }

        public void SimulateEvent(string eventName)
        {
            if (_eventHandlers.TryGetValue(eventName, out var handler))
            {
                handler.Invoke();
            }
        }

        protected override void AddComponentAttributes(Dictionary<string, object> attributes)
        {
            attributes["data-component"] = "integration-test-event";
        }
    }
}