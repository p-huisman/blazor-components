# PggmToggletip Component

The `PggmToggletip` component provides click-activated tooltip functionality using dialog elements for more persistent interactive content.

## Key Differences from PggmTooltip

| Feature | PggmTooltip | PggmToggletip |
|---------|-------------|---------------|
| **Trigger** | Hover/Focus | Click only |
| **Dismissal** | Auto (mouse leave/focus lost) | Manual (click again or dismiss action) |
| **Element** | `<div popover="auto">` | `<dialog>` |
| **Use Case** | Quick help text | Interactive content that needs persistence |

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `For` | string | (required) | The ID of the element that triggers this toggletip |
| `Id` | string | null | The unique identifier for this toggletip |
| `Position` | string | null | The position where the toggletip appears relative to the trigger element |

## Basic Usage

```razor
<PggmButton Id="info-button">More Info</PggmButton>
<PggmToggletip For="info-button" Id="info-toggletip">
    <p>This content stays visible until you click the button again or dismiss it.</p>
    <p>Perfect for interactive content like links or buttons.</p>
</PggmToggletip>
```

## Trigger Elements

Any element with an `id` can trigger a toggletip by clicking on it. You can use any PGGM component or HTML element:

```razor
<!-- Using PggmButton -->
<PggmButton Id="help-trigger">Help</PggmButton>

<!-- Using regular button -->
<button id="info-trigger" type="button">Information</button>

<!-- Using PggmIcon -->
<PggmIcon Id="icon-trigger" Name="info" />

<PggmToggletip For="help-trigger" Id="help-content" Position="above">
    <div>
        <h4>Need Help?</h4>
        <p>Visit our <a href="/docs">documentation</a> or contact support.</p>
        <button onclick="this.closest('pggm-toggletip').hidePopover()">Close</button>
    </div>
</PggmToggletip>
```

## Position Options

The toggletip supports the same positioning as tooltips:

- `above` - Appears above the trigger element
- `below` - Appears below the trigger element  
- `before` - Appears to the left of the trigger element
- `after` - Appears to the right of the trigger element

## Form Integration

```razor
<EditForm Model="model">
    <div class="form-field">
        <PggmLabel For="complex-field">Complex Field</PggmLabel>
        <PggmInput Id="complex-field" @bind-Value="model.Value" />
        <PggmButton Id="field-help" Type="button">?</PggmButton>
        <PggmToggletip For="field-help" Position="after">
            <div class="help-content">
                <h5>Field Requirements:</h5>
                <ul>
                    <li>Must be unique</li>
                    <li>Between 3-50 characters</li>
                    <li>No special characters</li>
                </ul>
                <button type="button" onclick="this.closest('pggm-toggletip').hidePopover()">
                    Got it!
                </button>
            </div>
        </PggmToggletip>
    </div>
</EditForm>
```

## Accessibility

The `PggmToggletip` component includes:

- Proper ARIA attributes (`aria-describedby`)
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Role attributes for non-button triggers

## Events

The underlying `pggm-toggletip` web component supports:

- `toggle` - Fired when the toggletip is shown or hidden
- `beforetoggle` - Fired before the toggletip state changes

## Best Practices

### When to Use Toggletips

- **Interactive content**: When the popup contains buttons, links, or forms
- **Persistent help**: When users need time to read or interact with content
- **Complex information**: When content is too complex for a simple tooltip
- **User-controlled**: When users should control when the content appears/disappears

### When to Use Tooltips Instead

- **Quick help text**: Brief explanations or hints
- **Non-interactive content**: Simple text without buttons or links
- **Contextual information**: Information that appears automatically on hover

### Styling

```css
pggm-toggletip {
    /* Custom styling for the toggletip container */
}

pggm-toggletip dialog {
    /* Styling for the dialog element */
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Examples

### Simple Information Panel

```razor
<PggmButton Id="info-btn">Information</PggmButton>

<PggmToggletip For="info-btn" Id="info-panel">
    <div class="info-panel">
        <h4>Additional Information</h4>
        <p>This is detailed information that users can read at their own pace.</p>
    </div>
</PggmToggletip>
```

### Interactive Menu

```razor
<PggmButton Id="menu-btn">Actions ▼</PggmButton>

<PggmToggletip For="menu-btn" Id="action-menu" Position="below">
    <div class="action-menu">
        <button type="button">Edit</button>
        <button type="button">Delete</button>
        <button type="button">Share</button>
    </div>
</PggmToggletip>
```

## Technical Implementation

The `PggmToggletip` component wraps the `pggm-toggletip` web component, which:

1. Uses a `<dialog>` element for semantic correctness
2. Handles click events on the trigger element
3. Provides proper focus management
4. Supports keyboard navigation (Enter/Space to toggle)
5. Includes ARIA attributes for accessibility

## Migration from Tooltip

To convert a tooltip to a toggletip:

```razor
<!-- Before (Tooltip) -->
<PggmButton Id="help">Help</PggmButton>
<PggmTooltip For="help">Quick help text</PggmTooltip>

<!-- After (Toggletip) -->
<PggmButton Id="help">Help</PggmButton>
<PggmToggletip For="help">
    <div>
        <p>Detailed help content</p>
        <button onclick="this.closest('pggm-toggletip').hidePopover()">Close</button>
    </div>
</PggmToggletip>
```