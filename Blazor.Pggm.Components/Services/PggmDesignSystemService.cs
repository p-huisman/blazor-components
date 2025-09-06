using Microsoft.JSInterop;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Components;

namespace Blazor.Pggm.Components.Services;

/// <summary>
/// Service for managing PGGM Design System initialization and interactions
/// </summary>
public class PggmDesignSystemService : IAsyncDisposable
{
    private readonly IJSRuntime _jsRuntime;
    private readonly ILogger<PggmDesignSystemService>? _logger;
    private IJSObjectReference? _module;
    private bool _isInitialized = false;
    private Task<bool>? _initializationTask;

    public PggmDesignSystemService(IJSRuntime jsRuntime, ILogger<PggmDesignSystemService>? logger = null)
    {
        _jsRuntime = jsRuntime;
        _logger = logger;
    }

    /// <summary>
    /// Initialize the PGGM design system
    /// </summary>
    public async Task<bool> InitializeAsync()
    {
        if (_isInitialized)
            return true;

        // Return existing initialization task if already in progress
        if (_initializationTask != null)
            return await _initializationTask;

        _initializationTask = PerformInitializationAsync();
        return await _initializationTask;
    }

    private async Task<bool> PerformInitializationAsync()
    {
        try
        {
            _logger?.LogInformation("Initializing PGGM Design System...");

            // Load the module
            _module = await _jsRuntime.InvokeAsync<IJSObjectReference>(
                "import", "./_content/Blazor.Pggm.Components/js/pggm-components.js");
            
            // Initialize the design system
            await _module.InvokeVoidAsync("initialize");
            
            _isInitialized = true;
            _logger?.LogInformation("PGGM Design System initialized successfully");
            return true;
        }
        catch (JSException ex)
        {
            // Log the error but continue - the JavaScript will handle CORS issues gracefully
            _logger?.LogWarning(ex, "PGGM Design System initialization warning: {Message}", ex.Message);
            _logger?.LogInformation("Components will use fallback styling if PGGM assets fail to load due to CORS");
            _isInitialized = true; // Mark as initialized to prevent retry loops
            return false;
        }
        catch (Exception ex)
        {
            _logger?.LogError(ex, "Failed to initialize PGGM Design System: {Message}", ex.Message);
            _isInitialized = true; // Mark as initialized to prevent retry loops
            return false;
        }
    }

    /// <summary>
    /// Set a property on a web component
    /// </summary>
    public async Task<bool> SetPropertyAsync(IJSObjectReference element, string property, object value)
    {
        if (_module == null) 
        {
            _logger?.LogWarning("Cannot set property {Property}: Module not initialized", property);
            return false;
        }

        try
        {
            await _module.InvokeVoidAsync("setProperty", element, property, value);
            return true;
        }
        catch (Exception ex)
        {
            _logger?.LogError(ex, "Failed to set property {Property} to {Value}", property, value);
            return false;
        }
    }

    /// <summary>
    /// Get a property from a web component
    /// </summary>
    public async Task<T?> GetPropertyAsync<T>(IJSObjectReference element, string property)
    {
        if (_module == null) 
        {
            _logger?.LogWarning("Cannot get property {Property}: Module not initialized", property);
            return default(T);
        }

        try
        {
            return await _module.InvokeAsync<T>("getProperty", element, property);
        }
        catch (Exception ex)
        {
            _logger?.LogError(ex, "Failed to get property {Property}", property);
            return default(T);
        }
    }

    /// <summary>
    /// Add an event listener to a web component
    /// </summary>
    public async Task<bool> AddEventListenerAsync(ElementReference element, string eventName, DotNetObjectReference<object> callback)
    {
        if (_module == null) 
        {
            _logger?.LogWarning("Cannot add event listener for {EventName}: Module not initialized", eventName);
            return false;
        }

        try
        {
            await _jsRuntime.InvokeVoidAsync("PggmComponents.addEventListener", element, eventName, callback, "HandleEvent");
            return true;
        }
        catch (Exception ex)
        {
            _logger?.LogError(ex, "Failed to add event listener for {EventName}", eventName);
            return false;
        }
    }

    /// <summary>
    /// Remove an event listener from a web component
    /// </summary>
    public async Task<bool> RemoveEventListenerAsync(ElementReference element, string eventName)
    {
        if (_module == null) 
        {
            _logger?.LogWarning("Cannot remove event listener for {EventName}: Module not initialized", eventName);
            return false;
        }

        try
        {
            await _jsRuntime.InvokeVoidAsync("PggmComponents.removeEventListener", element, eventName);
            return true;
        }
        catch (Exception ex)
        {
            _logger?.LogError(ex, "Failed to remove event listener for {EventName}", eventName);
            return false;
        }
    }

    /// <summary>
    /// Check if the design system is initialized
    /// </summary>
    public bool IsInitialized => _isInitialized;

    public async ValueTask DisposeAsync()
    {
        if (_module != null)
        {
            await _module.DisposeAsync();
        }
    }
}
