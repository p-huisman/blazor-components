using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmToolbarButton : ComponentBase
{
    [Parameter, EditorRequired]
    public Pggm.Components.Components.PggmToolbar.PggmToolbarButtonState? Button { get; set; }

    [Parameter]
    public bool IconOnly { get; set; }

    private IReadOnlyDictionary<string, object>? IconOnlyAttributes
    {
        get
        {
            var isIconOnly = IconOnly || (Button?.IconOnly ?? false);
            return isIconOnly ? s_iconOnlyAttributes : null;
        }
    }

    private static readonly IReadOnlyDictionary<string, object> s_iconOnlyAttributes =
        new Dictionary<string, object> { ["icon-only"] = string.Empty };

    private async Task HandleClick()
    {
        if (Button is null) return;
        if (Button.Disabled) return;
        if (Button.OnClick is not null)
            await Button.OnClick.Invoke();
    }
}
