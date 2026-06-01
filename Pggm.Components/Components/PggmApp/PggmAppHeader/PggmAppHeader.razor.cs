using Microsoft.AspNetCore.Components;

namespace Pggm.Components.Components.PggmApp.PggmAppHeader;

public partial class PggmAppHeader
{
    [Parameter]
    public EventCallback OnToggleSidebar { get; set; }

    public async Task HandleToggleClick()
    {
        if (OnToggleSidebar.HasDelegate)
            await OnToggleSidebar.InvokeAsync(null);
    }
}
