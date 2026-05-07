using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmNotification : PggmEventComponentBase
{
    public override string TagName => "pggm-notification";

    /// <summary>
    /// The notification type (informative, warning, error, success)
    /// </summary>
    [Parameter] public string Type { get; set; } = "informative";

    /// <summary>
    /// Whether the notification is closeable
    /// </summary>
    [Parameter] public bool Closeable { get; set; }

    /// <summary>
    /// The close button label for accessibility
    /// </summary>
    [Parameter] public string CloseLabel { get; set; } = "";

    /// <summary>
    /// Whether the notification is open/visible
    /// </summary>
    [Parameter] public bool Open { get; set; } = true;

    /// <summary>
    /// Event callback for when the notification is dismissed
    /// </summary>
    [Parameter] public EventCallback OnDismiss { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        if (Closeable && OnDismiss.HasDelegate)
        {
            yield return "closeNotification";
        }
    }

    protected override Task OnParametersSetAsync()
    {
        if (Closeable && OnDismiss.HasDelegate)
        {
            RegisterEventHandler("closeNotification", async (_) =>
            {
                await OnDismiss.InvokeAsync();
            });
        }
        else
        {
            UnregisterEventHandler("closeNotification");
        }

        return base.OnParametersSetAsync();
    }

    /// <summary>
    /// Notification type constants for better IntelliSense
    /// </summary>
    public static class NotificationTypes
    {
        public const string Informative = "informative";
        public const string Warning = "warning";
        public const string Error = "error";
        public const string Success = "success";
    }
}
