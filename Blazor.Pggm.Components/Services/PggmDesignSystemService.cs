using Microsoft.JSInterop;

namespace Blazor.Pggm.Components.Services;

/// <summary>
/// Service for managing PGGM Design System initialization and interactions
/// </summary>
public class PggmDesignSystemService : IAsyncDisposable
{
    private readonly IJSRuntime _jsRuntime;
    private IJSObjectReference? _module;
    private bool _isInitialized = false;

    public PggmDesignSystemService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    /// <summary>
    /// Initialize the PGGM design system
    /// </summary>
    public async Task InitializeAsync()
    {
        if (_isInitialized)
            return;

        try
        {
            // Load the module
            _module = await _jsRuntime.InvokeAsync<IJSObjectReference>(
                "import", "./_content/Blazor.Pggm.Components/js/pggm-components.js");
            
            // Initialize the design system
            await _module.InvokeVoidAsync("initialize");
            _isInitialized = true;
        }
        catch (JSException ex)
        {
            // Log the error but continue - the JavaScript will handle CORS issues gracefully
            Console.WriteLine($"PGGM Design System initialization warning: {ex.Message}");
            Console.WriteLine("Components will use fallback styling if PGGM assets fail to load due to CORS.");
            _isInitialized = true; // Mark as initialized to prevent retry loops
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed to initialize PGGM Design System: {ex.Message}");
            _isInitialized = true; // Mark as initialized to prevent retry loops
        }
    }

    /// <summary>
    /// Set a property on a web component
    /// </summary>
    public async Task SetPropertyAsync(IJSObjectReference element, string property, object value)
    {
        if (_module == null) return;
        await _module.InvokeVoidAsync("setProperty", element, property, value);
    }

    /// <summary>
    /// Get a property from a web component
    /// </summary>
    public async Task<T> GetPropertyAsync<T>(IJSObjectReference element, string property)
    {
        if (_module == null) return default(T)!;
        return await _module.InvokeAsync<T>("getProperty", element, property);
    }

    /// <summary>
    /// Add an event listener to a web component
    /// </summary>
    public async Task AddEventListenerAsync(IJSObjectReference element, string eventName, DotNetObjectReference<object> callback)
    {
        if (_module == null) return;
        await _module.InvokeVoidAsync("addEventListener", element, eventName, callback);
    }

    public async ValueTask DisposeAsync()
    {
        if (_module != null)
        {
            await _module.DisposeAsync();
        }
    }
}
