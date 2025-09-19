using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using Moq;
using Pggm.Components.Base;
using Pggm.Components.Interfaces;
using Pggm.Components.Services;
using Xunit;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pggm.Components.Tests
{
    public class EventHandlingTests
    {
        [Fact]
        public void EventHandlers_Dictionary_InitializesEmpty()
        {
            // Arrange & Act
            var testComponent = new TestableEventComponent();

            // Assert
            Assert.NotNull(testComponent.GetEventHandlers());
            Assert.Empty(testComponent.GetEventHandlers());
        }

        [Fact]
        public void CancelableEventHandlers_Dictionary_InitializesEmpty()
        {
            // Arrange & Act
            var testComponent = new TestableEventComponent();

            // Assert
            Assert.NotNull(testComponent.GetCancelableEventHandlers());
            Assert.Empty(testComponent.GetCancelableEventHandlers());
        }

        [Fact]
        public void RegisterEventHandler_WithStringEvent_AddsHandler()
        {
            // Arrange
            var testComponent = new TestableEventComponent();

            // Act
            testComponent.RegisterTestEventHandler("test-event", async _ =>
            {
                await Task.CompletedTask;
            });

            // Assert
            Assert.Single(testComponent.GetEventHandlers());
            Assert.True(testComponent.GetEventHandlers().ContainsKey("test-event"));
        }

        [Fact]
        public void RegisterEventHandler_WithoutParameters_AddsHandler()
        {
            // Arrange
            var testComponent = new TestableEventComponent();

            // Act
            testComponent.RegisterTestEventHandler("test-event", async () =>
            {
                await Task.CompletedTask;
            });

            // Assert
            Assert.Single(testComponent.GetEventHandlers());
            Assert.True(testComponent.GetEventHandlers().ContainsKey("test-event"));
        }

        [Fact]
        public async Task HandleEvent_WithRegisteredHandler_CallsHandler()
        {
            // Arrange
            var testComponent = new TestableEventComponent();
            var handlerCalled = false;

            testComponent.RegisterTestEventHandler("test-event", async _ =>
            {
                handlerCalled = true;
                await Task.CompletedTask;
            });

            // Act
            await testComponent.HandleEvent("test-event", "test-data");

            // Assert
            Assert.True(handlerCalled);
        }

        [Fact]
        public async Task HandleEvent_WithUnregisteredEvent_CallsOnUnhandledEvent()
        {
            // Arrange
            var testComponent = new TestableEventComponent();

            // Act & Assert - Should not throw
            await testComponent.HandleEvent("unknown-event", "test-data");

            // Verify unhandled event was called
            Assert.True(testComponent.UnhandledEventCalled);
            Assert.Equal("unknown-event", testComponent.LastUnhandledEventName);
        }

        [Fact]
        public async Task HandleEvent_WithException_CallsOnEventError()
        {
            // Arrange
            var testComponent = new TestableEventComponent();
            var expectedException = new InvalidOperationException("Test exception");

            testComponent.RegisterTestEventHandler("test-event", _ =>
            {
                throw expectedException;
            });

            // Act & Assert - Should not throw
            await testComponent.HandleEvent("test-event", "test-data");

            // Verify error handling was called
            Assert.True(testComponent.EventErrorCalled);
            Assert.Equal("test-event", testComponent.LastErrorEventName);
            Assert.Same(expectedException, testComponent.LastException);
        }

        [Fact]
        public async Task HandleCancelableEvent_WithRegisteredHandler_CallsHandler()
        {
            // Arrange
            var testComponent = new TestableEventComponent();
            var handlerCalled = false;

            testComponent.RegisterTestCancelableEventHandler<TestEventData>("test-event", async _ =>
            {
                handlerCalled = true;
                await Task.CompletedTask;
                return true;
            });

            // Act
            var result = await testComponent.HandleCancelableEvent("test-event", "test-data");

            // Assert
            Assert.True(handlerCalled);
            Assert.True(result);
        }

        [Fact]
        public async Task HandleCancelableEvent_WithUnregisteredEvent_ReturnsTrue()
        {
            // Arrange
            var testComponent = new TestableEventComponent();

            // Act
            var result = await testComponent.HandleCancelableEvent("unknown-event", "test-data");

            // Assert
            Assert.True(result); // Should not cancel by default
            Assert.True(testComponent.UnhandledEventCalled);
        }

        [Fact]
        public async Task HandleCancelableEvent_WithException_ReturnsTrue()
        {
            // Arrange
            var testComponent = new TestableEventComponent();
            var expectedException = new InvalidOperationException("Test exception");

            testComponent.RegisterTestCancelableEventHandler<TestEventData>("test-event", _ =>
            {
                throw expectedException;
            });

            // Act
            var result = await testComponent.HandleCancelableEvent("test-event", "test-data");

            // Assert
            Assert.True(result); // Should not cancel on error
            Assert.True(testComponent.EventErrorCalled);
        }

        [Theory]
        [InlineData("click")]
        [InlineData("change")]
        [InlineData("input")]
        public void GetEventNames_WithSpecificEvents_ReturnsExpectedEvents(string eventName)
        {
            // Arrange
            var testComponent = new TestableEventComponent();
            testComponent.SetTestEventNames(new[] { eventName });

            // Act
            var eventNames = testComponent.GetTestEventNames();

            // Assert
            Assert.Contains(eventName, eventNames);
        }

        [Fact]
        public void SafeConvertEventData_WithMatchingProperties_CopiesValues()
        {
            // Arrange
            var testComponent = new TestableEventComponent();
            var sourceData = new { Name = "Test", Value = 42 };

            // Act
            var result = testComponent.TestSafeConvertEventData<TestEventData>(sourceData);

            // Assert
            Assert.NotNull(result);
            Assert.Equal("Test", result.Name);
            Assert.Equal(42, result.Value);
        }

        [Fact]
        public void SafeConvertEventData_WithMismatchedProperties_CreatesEmptyInstance()
        {
            // Arrange
            var testComponent = new TestableEventComponent();
            var sourceData = new { DifferentProperty = "Test" };

            // Act
            var result = testComponent.TestSafeConvertEventData<TestEventData>(sourceData);

            // Assert
            Assert.NotNull(result);
            Assert.Null(result.Name);
            Assert.Equal(0, result.Value);
        }
    }

    // Test component that exposes protected methods for testing
    public class TestableEventComponent : PggmEventComponentBase
    {
        public override string TagName => "test-component";

        // Track unhandled events
        public bool UnhandledEventCalled { get; private set; }
        public string? LastUnhandledEventName { get; private set; }

        // Track error events
        public bool EventErrorCalled { get; private set; }
        public string? LastErrorEventName { get; private set; }
        public Exception? LastException { get; private set; }

        private string[] _testEventNames = Array.Empty<string>();

        protected override void AddComponentAttributes(Dictionary<string, object> attributes)
        {
            // Test implementation
        }

        // Expose protected methods for testing
        public Dictionary<string, Func<object?, Task>> GetEventHandlers() => EventHandlers;
        public Dictionary<string, Func<object?, Task<bool>>> GetCancelableEventHandlers() => CancelableEventHandlers;

        public void RegisterTestEventHandler(string eventName, Func<object?, Task> handler)
        {
            RegisterEventHandler(eventName, handler);
        }

        public void RegisterTestEventHandler(string eventName, Func<Task> handler)
        {
            RegisterEventHandler(eventName, handler);
        }

        public void RegisterTestCancelableEventHandler<T>(string eventName, Func<T?, Task<bool>> handler) where T : class, new()
        {
            RegisterCancelableEventHandler(eventName, handler);
        }

        public IEnumerable<string> GetTestEventNames()
        {
            return _testEventNames;
        }

        public void SetTestEventNames(string[] eventNames)
        {
            _testEventNames = eventNames;
        }

        protected override IEnumerable<string> GetEventNames()
        {
            return _testEventNames;
        }

        protected override Task OnUnhandledEventAsync(string eventName, object? eventData)
        {
            UnhandledEventCalled = true;
            LastUnhandledEventName = eventName;
            return Task.CompletedTask;
        }

        protected override Task OnEventErrorAsync(string eventName, object? eventData, Exception exception)
        {
            EventErrorCalled = true;
            LastErrorEventName = eventName;
            LastException = exception;
            return Task.CompletedTask;
        }

        // Expose SafeConvertEventData for testing
        public T TestSafeConvertEventData<T>(object eventData) where T : class, new()
        {
            // Use reflection to call the private static method
            var method = typeof(PggmEventComponentBase).GetMethod("SafeConvertEventData",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);
            var genericMethod = method!.MakeGenericMethod(typeof(T));
            return (T)genericMethod.Invoke(null, new[] { eventData })!;
        }
    }

    // Test event data class
    public class TestEventData
    {
        public string? Name { get; set; }
        public int Value { get; set; }
        public bool IsActive { get; set; }
        public DateTime Timestamp { get; set; }
    }
}