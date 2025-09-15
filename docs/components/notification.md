# PggmNotification

The PggmNotification component provides contextual feedback messages that wrap the PGGM design system notification web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Type` | string | "informative" | The notification type/variant (informative, success, warning, error) |
| `Closeable` | bool | false | Whether the notification can be dismissed by the user |
| `CloseLabel` | string | "" | The close button label for accessibility |
| `Open` | bool | true | Whether the notification is open/visible |
| `ChildContent` | RenderFragment | null | The main content of the notification |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnDismiss` | EventCallback | Fired when the notification is dismissed |

## Example Usage

### Basic Notification

```razor
<PggmNotification Type="informative">
    This is an informational message.
</PggmNotification>
```

### Notification Types

```razor
<PggmNotification Type="success">
    Your form has been submitted successfully!
</PggmNotification>

<PggmNotification Type="warning">
    Please review your information before continuing.
</PggmNotification>

<PggmNotification Type="error">
    An error occurred while processing your request.
</PggmNotification>
```

### Closeable Notification

```razor
<PggmNotification Type="informative" Closeable="true" OnDismiss="HandleNotificationDismiss">
    This notification can be dismissed by clicking the close button.
</PggmNotification>

@code {
    private void HandleNotificationDismiss()
    {
        Console.WriteLine("Notification was dismissed");
    }
}
```

### Notification with Title

```razor
<PggmNotification Type="warning">
    <PggmNotificationTitle>Important Notice</PggmNotificationTitle>
    Please save your work before proceeding. Any unsaved changes will be lost.
</PggmNotification>
```

## Dependencies

- Inherits from `PggmEventComponentBase`
- Requires the PGGM design system web components JavaScript library