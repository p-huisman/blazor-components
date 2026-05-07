using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmFieldsetDescription : ComponentBase
{
    [CascadingParameter] private object? FieldsetToken { get; set; }

    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter(CaptureUnmatchedValues = true)] public IDictionary<string, object>? AdditionalAttributes { get; set; }

    protected override void OnInitialized()
    {
        if (FieldsetToken is null)
        {
            throw new InvalidOperationException("PggmFieldsetDescription must be used as a child of PggmFieldset.");
        }
    }
}
