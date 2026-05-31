using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.Models;

namespace Pggm.Components;

public partial class PggmDrawer : PggmEventComponentBase
{
    public override string TagName => "pggm-drawer";

    /// <summary>
    /// Whether the drawer is open/visible.
    /// </summary>
    [Parameter] public bool Open { get; set; }

    /// <summary>
    /// Event callback for two-way binding of Open.
    /// </summary>
    [Parameter] public EventCallback<bool> OpenChanged { get; set; }

    /// <summary>
    /// The label shown in the drawer header.
    /// </summary>
    [Parameter, EditorRequired] public string? Label { get; set; }

    /// <summary>
    /// The placement of the drawer panel.
    /// Accepted values: "end" (default), "start", "top", "bottom".
    /// </summary>
    [Parameter] public string Placement { get; set; } = "end";

    /// <summary>
    /// Whether the drawer is contained within its nearest positioned ancestor
    /// instead of the viewport.
    /// </summary>
    [Parameter] public bool Contained { get; set; }

    /// <summary>
    /// Whether to hide the drawer header (title and close button).
    /// </summary>
    [Parameter] public bool NoHeader { get; set; }

    /// <summary>
    /// Custom width or height for the drawer panel (CSS length value, e.g. "50vw").
    /// Maps to the --size CSS custom property.
    /// </summary>
    [Parameter] public string? Size { get; set; }

    /// <summary>
    /// Custom content for the drawer header slot.
    /// </summary>
    [Parameter] public RenderFragment? HeaderContent { get; set; }

    /// <summary>
    /// Custom actions rendered in the header-actions slot.
    /// </summary>
    [Parameter] public RenderFragment? HeaderActions { get; set; }

    /// <summary>
    /// Content rendered in the footer slot.
    /// </summary>
    [Parameter] public RenderFragment? Footer { get; set; }

    /// <summary>
    /// Fired when the drawer begins to open.
    /// </summary>
    [Parameter] public EventCallback OnShow { get; set; }

    /// <summary>
    /// Fired after the drawer has fully opened (transition complete).
    /// </summary>
    [Parameter] public EventCallback OnAfterShow { get; set; }

    /// <summary>
    /// Fired when the drawer begins to close.
    /// </summary>
    [Parameter] public EventCallback OnHide { get; set; }

    /// <summary>
    /// Fired after the drawer has fully closed (transition complete).
    /// </summary>
    [Parameter] public EventCallback OnAfterHide { get; set; }

    /// <summary>
    /// Fired when the user requests to close the drawer (close button, overlay click, Escape key).
    /// Set <see cref="DrawerRequestCloseEventArgs.Cancel"/> to true to prevent closing.
    /// </summary>
    [Parameter] public EventCallback<DrawerRequestCloseEventArgs> OnRequestClose { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        return Array.Empty<string>();
    }

    protected override async Task SetupEventListenersAsync()
    {
        RegisterEventHandler("show", async (_) =>
        {
            if (!Open)
            {
                Open = true;
                if (OpenChanged.HasDelegate) await OpenChanged.InvokeAsync(true);
                StateHasChanged();
            }
            if (OnShow.HasDelegate) await OnShow.InvokeAsync();
        });

        RegisterEventHandler("afterShow", async (_) =>
        {
            if (OnAfterShow.HasDelegate) await OnAfterShow.InvokeAsync();
        });

        RegisterEventHandler("hide", async (_) =>
        {
            if (Open)
            {
                Open = false;
                if (OpenChanged.HasDelegate) await OpenChanged.InvokeAsync(false);
                StateHasChanged();
            }
            if (OnHide.HasDelegate) await OnHide.InvokeAsync();
        });

        RegisterEventHandler("afterHide", async (_) =>
        {
            if (OnAfterHide.HasDelegate) await OnAfterHide.InvokeAsync();
        });

        RegisterCancelableEventHandler<DrawerRequestCloseEventArgs>("requestClose", async (args) =>
        {
            if (OnRequestClose.HasDelegate && args != null)
            {
                await OnRequestClose.InvokeAsync(args);
                return !args.Cancel;
            }
            return true;
        });

        await AddEventListenerAsync("show");
        await AddEventListenerAsync("afterShow");
        await AddEventListenerAsync("hide");
        await AddEventListenerAsync("afterHide");

        if (OnRequestClose.HasDelegate)
        {
            await AddCancelableEventListenerAsync("requestClose");
        }
    }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-drawer");
        await base.InitializeWebComponentAsync();
    }

    /// <summary>
    /// Programmatically open the drawer.
    /// </summary>
    public async Task ShowAsync()
    {
        Open = true;
        await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "open", true);
    }

    /// <summary>
    /// Programmatically close the drawer.
    /// </summary>
    public async Task HideAsync()
    {
        Open = false;
        await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "open", false);
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (Open) attributes["open"] = "true";
        if (!string.IsNullOrEmpty(Label)) attributes["label"] = Label!;
        if (!string.IsNullOrEmpty(Placement) && Placement != "end") attributes["placement"] = Placement;
        if (Contained) attributes["contained"] = "true";
        if (NoHeader) attributes["no-header"] = "true";
        if (!string.IsNullOrEmpty(Size)) attributes["style"] = $"--size: {Size};";
    }
}
