# PggmAlert

The PggmAlert component provides contextual feedback messages that wrap the PGGM design system alert web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Type` | string | "info" | The alert type/variant (info, success, warning, error) |
| `Title` | string | null | Optional title for the alert |
| `Dismissible` | bool | false | Whether the alert can be dismissed by the user |
| `ChildContent` | RenderFragment | null | The main content of the alert |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnDismiss` | EventCallback | Fired when the alert is dismissed |

## Example Usage

### Basic Alert

```razor
<PggmAlert Type="info">
    This is an informational message.
</PggmAlert>
```

### Alert Types

```razor
<PggmAlert Type="success">
    Your form has been submitted successfully!
</PggmAlert>

<PggmAlert Type="warning">
    Please review your information before continuing.
</PggmAlert>

<PggmAlert Type="error">
    An error occurred while processing your request.
</PggmAlert>
```

### Dismissible Alert

```razor
<PggmAlert Type="info" Dismissible="true" OnDismiss="HandleAlertDismiss">
    This alert can be dismissed by clicking the close button.
</PggmAlert>

@code {
    private void HandleAlertDismiss()
    {
        Console.WriteLine("Alert was dismissed");
    }
}
```

### Alert with Title

```razor
<PggmAlert Type="warning" Title="Important Notice">
    Please save your work before proceeding. Any unsaved changes will be lost.
</PggmAlert>
```

## Dependencies

- Inherits from `PggmComponentBase`
- Requires the PGGM design system web components JavaScript library