using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using Blazor.Pggm.Components.Models.Wizard;

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
    protected virtual Dictionary<string, Func<object?, Task>> EventHandlers { get; } = new();

    /// <summary>
    /// Dictionary of cancelable event handlers for this component
    /// </summary>
    protected virtual Dictionary<string, Func<object?, Task<bool>>> CancelableEventHandlers { get; } = new();

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
    /// Generic cancelable event handler that dispatches to specific handlers
    /// Returns false if the event should be canceled
    /// </summary>
    [JSInvokable]
    public async Task<bool> HandleCancelableEvent(string eventName, object? eventData = null)
    {
        try
        {
            if (CancelableEventHandlers.TryGetValue(eventName, out var handler))
            {
                var result = await handler(eventData);
                return result;
            }
            else
            {
                await OnUnhandledEventAsync(eventName, eventData);
                return true; // Don't cancel if no handler
            }
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

    /// <summary>
    /// Register a cancelable event handler for the specified event name
    /// </summary>
    protected void RegisterCancelableEventHandler<T>(string eventName, Func<T?, Task<bool>> handler) where T : class, new()
    {
        CancelableEventHandlers[eventName] = async eventData => 
        {
            T? typedData = default(T);
            if (eventData != null)
            {
                try
                {
                    // Configure JSON options for case-insensitive property matching
                    var options = new System.Text.Json.JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true,
                        ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles,
                        DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull
                    };
                    
                    // Always create a new instance and populate it from the event data
                    typedData = new T();
                    
                    // Try to deserialize as JSON if it's a JsonElement
                    if (eventData is System.Text.Json.JsonElement jsonElement)
                    {
                        var tempData = System.Text.Json.JsonSerializer.Deserialize<T>(jsonElement.GetRawText(), options);
                        if (tempData != null)
                        {
                            // Copy properties from deserialized data to our instance
                            CopyProperties(tempData, typedData);
                        }
                    }
                    else if (eventData is T directCast)
                    {
                        typedData = directCast;
                    }
                    else
                    {
                        // Use safe property copying instead of JSON serialization
                        typedData = SafeConvertEventData<T>(eventData);
                    }
                }
                catch (Exception)
                {
                    // Silent fallback to empty instance on deserialization error
                    typedData = new T();
                }
            }
            else
            {
                typedData = new T(); // Create empty instance if no data
            }
            
            // Call the handler and get the result
            var result = await handler(typedData);
            
            // For CancelableEventArgs, check if Cancel property was modified
            if (typedData is CancelableEventArgs cancelableArgs)
            {
                // If Cancel was set to true, return false (cancel the event)
                // If Cancel was set to false, use the handler's return value
                if (cancelableArgs.Cancel)
                {
                    return false;
                }
                else
                {
                    return result;
                }
            }
            
            return result;
        };
    }

    /// <summary>
    /// Safely convert event data to the target type without JSON serialization
    /// </summary>
    private static T SafeConvertEventData<T>(object eventData) where T : class, new()
    {
        var result = new T();
        var sourceType = eventData.GetType();
        var targetType = typeof(T);

        foreach (var targetProp in targetType.GetProperties())
        {
            if (!targetProp.CanWrite) continue;

            var sourceProp = sourceType.GetProperty(targetProp.Name);
            if (sourceProp != null && sourceProp.CanRead)
            {
                try
                {
                    var value = sourceProp.GetValue(eventData);
                    
                    // Only copy primitive types and strings to avoid circular references
                    if (value == null || 
                        targetProp.PropertyType.IsPrimitive || 
                        targetProp.PropertyType == typeof(string) ||
                        targetProp.PropertyType == typeof(bool) ||
                        targetProp.PropertyType == typeof(DateTime) ||
                        targetProp.PropertyType.IsEnum)
                    {
                        if (value != null && targetProp.PropertyType.IsAssignableFrom(sourceProp.PropertyType))
                        {
                            targetProp.SetValue(result, value);
                        }
                        else if (value != null)
                        {
                            // Try to convert the value
                            var convertedValue = Convert.ChangeType(value, targetProp.PropertyType);
                            targetProp.SetValue(result, convertedValue);
                        }
                    }
                }
                catch (Exception)
                {
                    // Skip property on error
                    continue;
                }
            }
        }

        return result;
    }

    /// <summary>
    /// Copy properties between objects
    /// </summary>
    private static void CopyProperties<T>(T source, T target) where T : class
    {
        foreach (var prop in typeof(T).GetProperties())
        {
            if (prop.CanWrite && prop.CanRead)
            {
                try
                {
                    var value = prop.GetValue(source);
                    prop.SetValue(target, value);
                }
                catch (Exception)
                {
                    // Skip property on error
                    continue;
                }
            }
        }
    }

    /// <summary>
    /// Add an event listener for a cancelable event
    /// </summary>
    protected async Task AddCancelableEventListenerAsync(string eventName)
    {
        if (_objectReference == null) return;

        await JSRuntime.InvokeVoidAsync(
            "PggmComponents.addCancelableEventListener",
            ElementRef,
            eventName,
            _objectReference,
            nameof(HandleCancelableEvent)
        );
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
