using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;

using Pggm.Components.Interfaces;
using Pggm.Components.Models.Wizard;

namespace Pggm.Components.Base;

/// <summary>
/// Base class for PGGM components that need event handling
/// </summary>
public abstract class PggmEventComponentBase : PggmComponentBase, IPggmEventComponent
{
    private PggmEventListenerManager<PggmEventComponentBase>? _eventManager;
    private bool _eventsInitialized;
    private bool _disposed;

    [Inject] protected ILogger<PggmEventComponentBase>? Logger { get; set; }

    private readonly PggmEventHandlerRegistry _handlerRegistry = new();

    protected override async Task InitializeWebComponentAsync()
    {
        await base.InitializeWebComponentAsync();

        if (!_eventsInitialized)
        {
            // Create helper to manage event listeners and object reference
            _eventManager = new PggmEventListenerManager<PggmEventComponentBase>(JSRuntime, Logger, ElementRef, this);
            await SetupEventListenersAsync();
            _eventsInitialized = true;
        }
    }

    /// <summary>
    /// Set up event listeners for the component
    /// Override in derived classes to add specific event listeners
    /// </summary>
    protected virtual async Task SetupEventListenersAsync()
    {
        var nonCancelable = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        var cancelable = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        foreach (var e in GetEventNames() ?? Array.Empty<string>()) nonCancelable.Add(e);

        foreach (var e in _handlerRegistry.GetHandlersSnapshot().Keys) nonCancelable.Add(e);
        foreach (var e in _handlerRegistry.GetCancelableHandlersSnapshot().Keys) cancelable.Add(e);

        // If an event is in both sets, prefer cancelable handling
        nonCancelable.RemoveWhere(n => cancelable.Contains(n));

        // Register non-cancelable events in batch
        if (nonCancelable.Count > 0)
        {
            try
            {
                if (_eventManager != null)
                    await _eventManager.AddEventListenersAsync(nonCancelable, nameof(HandleEvent));
            }
            catch (Exception ex)
            {
                Logger?.LogWarning(ex, "Failed to register event listeners in component {ComponentType}", GetType().Name);
            }
        }

        // Register cancelable events in batch
        if (cancelable.Count > 0)
        {
            try
            {
                if (_eventManager != null)
                    await _eventManager.AddCancelableEventListenersAsync(cancelable, nameof(HandleCancelableEvent));
            }
            catch (Exception ex)
            {
                Logger?.LogWarning(ex, "Failed to register cancelable event listeners in component {ComponentType}", GetType().Name);
            }
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
        if (_eventManager == null) return;
        await _eventManager.AddEventListenerAsync(eventName, nameof(HandleEvent));
    }

    /// <summary>
    /// Generic event handler that dispatches to specific handlers
    /// </summary>
    [JSInvokable]
    public async Task HandleEvent(string eventName, object? eventData = null)
    {
        // Check if component is disposed
        if (_disposed)
        {
            return; // Silently ignore events after disposal
        }
        try
        {
            // Dispatch via central registry (overridden virtual dictionaries are migrated into registry at init)
            if (_handlerRegistry.TryGetHandler(eventName, out var handler))
            {
                await handler!(eventData);
                return;
            }

            // No handler found
            await OnUnhandledEventAsync(eventName, eventData);
        }
        catch (Exception ex)
        {
            await OnEventErrorAsync(eventName, eventData, ex);
        }
    }

    /// <summary>
    /// Generic cancelable event handler that dispatches to specific handlers
    /// Returns false if the event should be canceled
    /// </summary>
    [JSInvokable]
    public async Task<bool> HandleCancelableEvent(string eventName, object? eventData = null)
    {
        // Check if component is disposed
        if (_disposed)
        {
            return true; // Allow event to proceed if component is disposed
        }
        try
        {
            // Dispatch via central registry for cancelable handlers
            if (_handlerRegistry.TryGetCancelableHandler(eventName, out var handler))
            {
                return await handler!(eventData);
            }

            await OnUnhandledEventAsync(eventName, eventData);
            return true; // Don't cancel if no handler
        }
        catch (Exception ex)
        {
            await OnEventErrorAsync(eventName, eventData, ex);
            return true; // Don't cancel on error
        }
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
        // Log the error using proper logging instead of Console.WriteLine
        Logger?.LogError(exception, "Error handling event '{EventName}' in component '{ComponentType}' with data: {EventData}",
            eventName, GetType().Name, eventData);
        return Task.CompletedTask;
    }

    /// <summary>
    /// Register an event handler for the specified event name
    /// </summary>
    protected void RegisterEventHandler(string eventName, Func<object?, Task> handler)
    {
        _handlerRegistry.Register(eventName, handler);
    }

    /// <summary>
    /// Register an event handler for the specified event name with no parameters
    /// </summary>
    protected void RegisterEventHandler(string eventName, Func<Task> handler)
    {
        _handlerRegistry.Register(eventName, handler);
    }

    /// <summary>
    /// Register an event handler for the specified event name with typed event data
    /// </summary>
    protected void RegisterEventHandler<T>(string eventName, Func<T?, Task> handler)
    {
        _handlerRegistry.RegisterTyped(eventName, handler);
    }

    /// <summary>
    /// Register a cancelable event handler for the specified event name
    /// </summary>
    protected void RegisterCancelableEventHandler<T>(string eventName, Func<T?, Task<bool>> handler) where T : class, new()
    {
        _handlerRegistry.RegisterCancelableTyped<T>(eventName, handler);
    }

    /// <summary>
    /// Unregister an event handler from the registry
    /// </summary>
    protected void UnregisterEventHandler(string eventName)
    {
        _handlerRegistry.Unregister(eventName);
    }

    /// <summary>
    /// Unregister a cancelable event handler from the registry
    /// </summary>
    protected void UnregisterCancelableEventHandler(string eventName)
    {
        _handlerRegistry.UnregisterCancelable(eventName);
    }

    private static T DeserializeEventData<T>(object? eventData) where T : class, new()
    {
        return PggmEventDataConverter.DeserializeEventData<T>(eventData);
    }

    // Backwards-compatible helper used by tests and some callers that expect
    // a non-JSON 'safe convert' method available on the type. For simplicity
    // forward to the shared converter which includes the same safe-convert
    // behavior as the original implementation.
    private static T SafeConvertEventData<T>(object eventData) where T : class, new()
    {
        return PggmEventDataConverter.DeserializeEventData<T>(eventData);
    }

    /// <summary>
    /// Add an event listener for a cancelable event
    /// </summary>
    protected async Task AddCancelableEventListenerAsync(string eventName)
    {
        if (_eventManager == null) return;
        try
        {
            await _eventManager.AddCancelableEventListenerAsync(eventName, nameof(HandleCancelableEvent));
        }
        catch (Exception ex)
        {
            Logger?.LogWarning(ex, "Failed to add cancelable event listener for {EventName}", eventName);
        }
    }

    protected override async ValueTask DisposeAsyncCore()
    {
        // Mark as disposed first to prevent further event handling
        _disposed = true;

        await base.DisposeAsyncCore();

        // Clean up event listeners only if the element reference is valid
        if (!string.IsNullOrEmpty(ElementRef.Id))
        {
            // Delegate removal to the event manager
            try
            {
                if (_eventManager != null)
                {
                    await _eventManager.DisposeAsync();
                }
            }
            catch
            {
                // Silent fail for cleanup
            }
        }

        _eventsInitialized = false;

        // Dispose object reference
        _eventManager = null;
    }
}
