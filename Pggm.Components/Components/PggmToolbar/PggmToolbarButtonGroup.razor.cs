using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmToolbarButtonGroup : ComponentBase
{
    [Parameter, EditorRequired]
    public Pggm.Components.Components.PggmToolbar.PggmToolbarButtonGroupState? Group { get; set; }
}
