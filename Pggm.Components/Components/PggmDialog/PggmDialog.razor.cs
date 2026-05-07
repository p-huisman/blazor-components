using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmDialog : PggmEventComponentBase
{
    public override string TagName => "pggm-dialog";

    /// <summary>
    /// Whether the dialog is open/visible
    /// </summary>
    [Parameter] public bool Open { get; set; }

    /// <summary>
    /// Whether the dialog should be modal (blocks interaction with background)
    /// </summary>
    [Parameter] public bool Modal { get; set; }

    /// <summary>
    /// The label text for the close button (for accessibility)
    /// </summary>
    [Parameter] public string? CloseLabel { get; set; } = "Close";

    /// <summary>
    /// Simple text content for the dialog header
    /// </summary>
    [Parameter] public string? HeaderContent { get; set; }

    /// <summary>
    /// Template for the dialog header content
    /// </summary>
    [Parameter] public RenderFragment? HeaderTemplate { get; set; }

    /// <summary>
    /// Collection of action buttons to display in the dialog
    /// </summary>
    [Parameter] public List<DialogAction>? Actions { get; set; }

    /// <summary>
    /// Event callback for when the dialog is opened
    /// </summary>
    [Parameter] public EventCallback OnOpen { get; set; }

    /// <summary>
    /// Event callback for when the dialog is closed
    /// </summary>
    [Parameter] public EventCallback OnClose { get; set; }

    /// <summary>
    /// Event callback for when the dialog is cancelled (usually ESC key or backdrop click)
    /// </summary>
    [Parameter] public EventCallback OnCancel { get; set; }

    /// <summary>
    /// Event callback for when the Open property changes (two-way binding)
    /// </summary>
    [Parameter] public EventCallback<bool> OpenChanged { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        var events = new List<string>();

        if (OnOpen.HasDelegate)
            events.Add("openDialog");

        if (OnClose.HasDelegate || OpenChanged.HasDelegate)
            events.Add("closeDialog");

        if (OnCancel.HasDelegate || OpenChanged.HasDelegate)
            events.Add("cancelDialog");

        return events;
    }

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler("openDialog", _ => InvokeAsync(HandleOpenDialog));
        RegisterEventHandler("closeDialog", _ => InvokeAsync(HandleCloseDialog));
        RegisterEventHandler("cancelDialog", _ => InvokeAsync(HandleCancelDialog));
        return base.OnParametersSetAsync();
    }

    private async Task HandleOpenDialog()
    {
        if (Open) return;
        Open = true;
        if (OpenChanged.HasDelegate) await OpenChanged.InvokeAsync(Open);
        if (OnOpen.HasDelegate) await OnOpen.InvokeAsync();
        StateHasChanged();
    }

    private async Task HandleCloseDialog()
    {
        if (!Open) return;
        Open = false;
        if (OpenChanged.HasDelegate) await OpenChanged.InvokeAsync(Open);
        if (OnClose.HasDelegate) await OnClose.InvokeAsync();
        StateHasChanged();
    }

    private async Task HandleCancelDialog()
    {
        Open = false;
        if (OpenChanged.HasDelegate) await OpenChanged.InvokeAsync(Open);
        if (OnCancel.HasDelegate) await OnCancel.InvokeAsync();
        StateHasChanged();
    }

    /// <summary>
    /// Programmatically open the dialog
    /// </summary>
    public async Task OpenDialog()
    {
        Open = true;
        await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "open", true);
    }

    /// <summary>
    /// Programmatically close the dialog
    /// </summary>
    public async Task CloseDialog()
    {
        Open = false;
        await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "open", false);
    }
}
