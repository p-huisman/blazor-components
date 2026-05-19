using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Pggm.Components.Components.PggmApp.PggmTopMenu
{
    public partial class PggmTopMenu : ComponentBase
    {
        [Inject] private IJSRuntime JS { get; set; } = default!;

        private async Task OpenRepo()
        {
            await JS.InvokeVoidAsync("PggmComponents.openExternal", "https://dev.azure.com/PGGM/PGGM/_git/Lab.SwatTeam.BlazorPggmComponents", "_blank");
        }
    }
}
