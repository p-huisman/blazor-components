using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmToolbarCheckbox : ComponentBase
{
    [Parameter, EditorRequired]
    public Pggm.Components.Components.PggmToolbar.PggmToolbarCheckboxState? State { get; set; }

    private async Task HandleCheckedChanged(bool isChecked)
    {
        if (State is null) return;
        State.Checked = isChecked;
        if (State.OnCheckedChanged is not null)
            await State.OnCheckedChanged.Invoke(isChecked);
    }
}
