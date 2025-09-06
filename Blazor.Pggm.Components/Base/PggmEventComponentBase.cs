using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Blazor.Pggm.Components.Base;

/// <summary>
/// Base class for PGGM components that need event handling
/// </summary>
public abstract class PggmEventComponentBase : PggmComponentBase
{
    private DotNetObjectReference<PggmEventComponentBase>? _objectReference;
    
    /// <summary>
    /// Dictionary of event handlers for this component
    /// </summary>
    protected virtual Dictionary<string, Func<object?, Task>> EventHandlers => new();

    protected override async Task InitializeWebComponentAsync()
    {
        await base.InitializeWebComponentAsync();
        
        // Create object reference for JS interop
        _objectReference = DotNetObjectReference.Create(this);
        
        // Set up event listeners
        await SetupEventListenersAsync();
    }

    /// <summary>
    /// Set up event listeners for the component
    /// Override in derived classes to add specific event listeners
    /// </summary>
    protected virtual async Task SetupEventListenersAsync()
    {
        foreach (var eventName in GetEventNames())
        {
            await AddEventListenerAsync(eventName);
        }
    }

    /// <summary>
    /// Get the list of event names this component should listen for
    /// Override in derived classes to specify events
    /// </summary>
    protected virtual IEnumerable<string> GetEventNames()
    {
        return Array.Empty<string>();
    }

    /// <summary>
    /// Add an event listener for the specified event
    /// </summary>
    protected async Task AddEventListenerAsync(string eventName)
    {
        if (_objectReference == null) return;

        await JSRuntime.InvokeVoidAsync(
            "PggmComponents.addEventListener",
            ElementRef,
            eventName,
            _objectReference,
            nameof(HandleEvent)
        );
    }

    /// <summary>
    /// Generic event handler that dispatches to specific handlers
    /// </summary>
    [JSInvokable]
    public async Task HandleEvent(string eventName, object? eventData = null)
    {
        try
        {
            if (EventHandlers.TryGetValue(eventName, out var handler))
            {
                await handler(eventData);
            }
            else
            {
                await OnUnhandledEventAsync(eventName, eventData);
            }
        }
        catch (Exception ex)
        {
            await OnEventErrorAsync(eventName, eventData, ex);
        }
    }

    /// <summary>
    /// Alternative event handler for cases where only event data is passed
    /// This provides backward compatibility
    /// </summary>
    [JSInvokable]
    public async Task HandleEventData(object? eventData = null)
    {
        try
        {
            // Try to determine event type from the event data or context
            var eventName = DetermineEventNameFromData(eventData);
            if (!string.IsNullOrEmpty(eventName) && EventHandlers.TryGetValue(eventName, out var handler))
            {
                await handler(eventData);
            }
            else
            {
                await OnUnhandledEventAsync(eventName ?? "unknown", eventData);
            }
        }
        catch (Exception ex)
        {
            await OnEventErrorAsync("unknown", eventData, ex);
        }
    }

    /// <summary>
    /// Try to determine the event name from event data
    /// Override in derived classes for custom logic
    /// </summary>
    protected virtual string? DetermineEventNameFromData(object? eventData)
    {
        // Default implementation returns null
        // Derived classes can override to provide specific logic
        return null;
    }

    /// <summary>
    /// Called when an event is received but no handler is registered
    /// Override in derived classes to handle unregistered events
    /// </summary>
    protected virtual Task OnUnhandledEventAsync(string eventName, object? eventData)
    {
        // Default implementation does nothing
        return Task.CompletedTask;
    }

    /// <summary>
    /// Called when an error occurs during event handling
    /// Override in derived classes to provide custom error handling
    /// </summary>
    protected virtual Task OnEventErrorAsync(string eventName, object? eventData, Exception exception)
    {
        // Default implementation logs the error
        Console.WriteLine($"Error handling event '{eventName}' in component '{GetType().Name}': {exception.Message}");
        return Task.CompletedTask;
    }

    /// <summary>
    /// Register an event handler for the specified event name
    /// </summary>
    protected void RegisterEventHandler(string eventName, Func<object?, Task> handler)
    {
        EventHandlers[eventName] = handler;
    }

    /// <summary>
    /// Register an event handler for the specified event name with no parameters
    /// </summary>
    protected void RegisterEventHandler(string eventName, Func<Task> handler)
    {
        EventHandlers[eventName] = _ => handler();
    }

    /// <summary>
    /// Register an event handler for the specified event name with typed event data
    /// </summary>
    protected void RegisterEventHandler<T>(string eventName, Func<T?, Task> handler)
    {
        EventHandlers[eventName] = eventData => 
        {
            var typedData = eventData is T data ? data : default(T);
            return handler(typedData);
        };
    }

    public override async ValueTask DisposeAsync()
    {
        if (_objectReference != null)
        {
            // Clean up event listeners
            await JSRuntime.InvokeVoidAsync("PggmComponents.removeAllEventListeners", ElementRef);
            
            // Dispose object reference
            _objectReference.Dispose();
            _objectReference = null;
        }

        await base.DisposeAsync();
    }
}
