using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmCheckboxForList<TItem> : ComponentBase where TItem : class
{
    [Parameter] public IList<TItem>? SelectedItems { get; set; }
    [Parameter] public EventCallback<IList<TItem>?> SelectedItemsChanged { get; set; }
    [Parameter] public TItem? Item { get; set; }
    [Parameter] public string? Name { get; set; }
    [Parameter] public bool Disabled { get; set; }
    [Parameter] public RenderFragment? ChildContent { get; set; }
    [Parameter(CaptureUnmatchedValues = true)] public Dictionary<string, object>? AdditionalAttributes { get; set; }

    protected bool IsChecked => Item != null && SelectedItems?.Contains(Item) == true;

    protected async Task OnCheckedChanged(bool isChecked)
    {
        if (SelectedItems == null)
        {
            SelectedItems = new List<TItem?>() as IList<TItem>;
        }

        if (isChecked)
        {
            if (!SelectedItems.Contains(Item!))
            {
                SelectedItems.Add(Item!);
            }
        }
        else
        {
            if (SelectedItems.Contains(Item!))
            {
                SelectedItems.Remove(Item!);
            }
        }

        await SelectedItemsChanged.InvokeAsync(SelectedItems);
        if (!SelectedItemsChanged.HasDelegate)
            StateHasChanged();
    }
}
