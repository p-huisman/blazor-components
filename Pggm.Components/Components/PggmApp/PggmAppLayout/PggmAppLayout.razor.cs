using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.JSInterop;

namespace Pggm.Components.Components.PggmApp.PggmAppLayout;

public partial class PggmAppLayout : IAsyncDisposable
{
    private bool _isSidebarOpen;
    private EventHandler<LocationChangedEventArgs>? _locationChangedHandler;

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = null!;

    [Inject]
    private NavigationManager NavigationManager { get; set; } = null!;

    public void ToggleSidebar()
    {
        _isSidebarOpen = !_isSidebarOpen;
    }

    public void CloseSidebar()
    {
        _isSidebarOpen = false;
    }

    protected override void OnInitialized()
    {
        _locationChangedHandler = (s, e) => _ = OnLocationChangedAsync(e);
        NavigationManager.LocationChanged += _locationChangedHandler;
    }

    private async Task OnLocationChangedAsync(LocationChangedEventArgs e)
    {
        await JSRuntime.InvokeVoidAsync("PggmComponents.scrollToTop");
    }

    public ValueTask DisposeAsync()
    {
        if (_locationChangedHandler is not null)
            NavigationManager.LocationChanged -= _locationChangedHandler;

        return ValueTask.CompletedTask;
    }
}
