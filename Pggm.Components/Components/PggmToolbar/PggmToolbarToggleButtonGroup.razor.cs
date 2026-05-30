using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmToolbarToggleButtonGroup : ComponentBase
{
    [Parameter, EditorRequired]
    public Pggm.Components.Components.PggmToolbar.PggmToolbarToggleButtonGroupState? Group { get; set; }

    private async Task HandleToggle(Pggm.Components.Components.PggmToolbar.PggmToolbarToggleButtonState btn)
    {
        if (Group is null) return;
        if (btn.Disabled) return;

        var wasSelected = btn.Selected;
        Group.Toggle(btn.Id);

        if (Group.OnToggle is not null)
            await Group.OnToggle.Invoke(btn.Id, !wasSelected);

        StateHasChanged();
    }
}
