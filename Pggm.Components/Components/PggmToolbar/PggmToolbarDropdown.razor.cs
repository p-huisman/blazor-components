using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmToolbarDropdown : ComponentBase
{
    [Parameter, EditorRequired]
    public Pggm.Components.Components.PggmToolbar.PggmToolbarDropdownState? Dropdown { get; set; }

    private bool IsIconOnly => Dropdown?.IconOnly ?? false;
    private static readonly IReadOnlyDictionary<string, object> s_iconOnlyAttributes =
        new Dictionary<string, object> { ["icon-only"] = string.Empty };

    private IReadOnlyDictionary<string, object>? IconOnlyAttributes => IsIconOnly ? s_iconOnlyAttributes : null;

    private async Task HandleItemClick(Pggm.Components.Components.PggmToolbar.PggmToolbarDropdownItemState item)
    {
        if (Dropdown is null) return;
        if (item.Disabled) return;
        if (Dropdown.OnItemSelected is not null)
            await Dropdown.OnItemSelected.Invoke(item.Value ?? item.Id);
    }
}
