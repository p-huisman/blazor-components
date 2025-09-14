# PggmButton

The PggmButton component provides an interactive button that wraps the PGGM design system button web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Appearance` | string | null | The button variant/appearance (primary, secondary, etc.) |
| `Disabled` | bool | false | Whether the button is disabled |
| `Type` | string | "button" | The button type (button, submit, reset) |
| `OnClick` | EventCallback<MouseEventArgs> | - | Event callback for button click |
| `ChildContent` | RenderFragment | null | The content to be displayed inside the button |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnClick` | EventCallback<MouseEventArgs> | Fired when the button is clicked |

## Example Usage

### Basic Button

```razor
<PggmButton OnClick="HandleClick">
    Click Me
</PggmButton>
```

### Submit Button

```razor
<PggmButton Type="submit" Appearance="primary" OnClick="HandleSubmit">
    Submit Form
</PggmButton>
```

### Disabled Button

```razor
<PggmButton Disabled="true">
    Disabled Button
</PggmButton>
```

### Button with Event Handling

```razor
<PggmButton Appearance="secondary" OnClick="@(async () => await ProcessAction())">
    Process Action
</PggmButton>

@code {
    private async Task HandleClick(MouseEventArgs e)
    {
        Console.WriteLine("Button was clicked!");
        // Add your click handling logic here
    }

    private async Task HandleSubmit(MouseEventArgs e)
    {
        // Handle form submission
        await SubmitForm();
    }

    private async Task ProcessAction()
    {
        // Process the action
        await SomeAsyncOperation();
    }
}
```

## Appearance Variants

The button supports different appearance variants (specific values depend on the PGGM design system):

- `primary` - Primary action button
- `secondary` - Secondary action button
- `tertiary` - Tertiary action button
- Custom variants as defined in the PGGM design system

## Accessibility

The button component provides:
- Proper focus management
- Keyboard navigation support (Enter and Space keys)
- Screen reader support
- Disabled state handling

## Best Practices

1. Use meaningful button text that describes the action
2. Use appropriate button types (`submit`, `button`, `reset`)
3. Provide visual feedback for disabled states
4. Use proper appearance variants for visual hierarchy

## Dependencies

- Inherits from `PggmComponentBase`
- Requires the PGGM design system web components JavaScript library