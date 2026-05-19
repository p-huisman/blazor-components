using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.JSInterop;

namespace Pggm.Components.Components.PggmApp.PggmAppLayout;

public partial class PggmAppLayout : IDisposable
{
    private bool _isSidebarOpen;

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
        NavigationManager.LocationChanged += OnLocationChanged;
    }

    private async void OnLocationChanged(object? sender, LocationChangedEventArgs e)
    {
        await JSRuntime.InvokeVoidAsync("PggmComponents.scrollToTop");
    }

    public void Dispose()
    {
        NavigationManager.LocationChanged -= OnLocationChanged;
    }
}
