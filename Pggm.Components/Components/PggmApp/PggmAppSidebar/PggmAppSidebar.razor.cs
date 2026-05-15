using Microsoft.AspNetCore.Components;

namespace Pggm.Components.Components.PggmApp.PggmAppSidebar;

public partial class PggmAppSidebar
{
    [Parameter]
    public bool Open { get; set; }

    [Parameter]
    public EventCallback OnClose { get; set; }

    public async Task OnCloseClicked()
    {
        if (OnClose.HasDelegate)
            await OnClose.InvokeAsync(null);
    }
}
