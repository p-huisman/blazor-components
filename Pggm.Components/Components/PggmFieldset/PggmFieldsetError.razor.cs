using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmFieldsetError : ComponentBase
{
    [CascadingParameter] private object? FieldsetToken { get; set; }

    [Parameter] public RenderFragment? ChildContent { get; set; }

    protected override void OnInitialized()
    {
        if (FieldsetToken is null)
        {
            throw new InvalidOperationException("PggmFieldsetError must be used as a child of PggmFieldset.");
        }
    }
}
