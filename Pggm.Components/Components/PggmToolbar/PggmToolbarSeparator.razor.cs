using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmToolbarSeparator : ComponentBase
{
    [Parameter, EditorRequired]
    public Pggm.Components.Components.PggmToolbar.PggmToolbarSeparatorState? State { get; set; }
}
