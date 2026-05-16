using Microsoft.AspNetCore.Components;

namespace Pggm.Components.Components.PggmApp.PggmAppLayout;

public partial class PggmAppLayout
{
    private bool _isSidebarOpen;

    public void ToggleSidebar()
    {
        _isSidebarOpen = !_isSidebarOpen;
    }

    public void CloseSidebar()
    {
        _isSidebarOpen = false;
    }
}
