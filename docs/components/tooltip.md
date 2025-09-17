# PggmTooltip

The `PggmTooltip` component provides accessible tooltip functionality for form elements and interactive components. It wraps the PGGM Design System `pggm-tooltip` web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `For` | string | *Required* | The ID of the element that triggers this tooltip |
| `Id` | string? | null | The unique identifier for this tooltip |
| `Position` | string? | null | The position where the tooltip should appear relative to the trigger element |
| `ChildContent` | RenderFragment? | null | The content to display inside the tooltip |

## Position Values

The `Position` parameter accepts the following values:

- `"above"` - Display the tooltip above the trigger element
- `"below"` - Display the tooltip below the trigger element  
- `"before"` - Display the tooltip before (to the left of) the trigger element
- `"after"` - Display the tooltip after (to the right of) the trigger element

If not specified, the tooltip will use the default positioning logic of the underlying web component.

## Basic Usage

```razor
<PggmInput Id="email-input" Label="Email Address" @bind-Value="email" />
<PggmTooltip For="email-input" Position="above">
    Please enter a valid email address (e.g., user@example.com)
</PggmTooltip>
```

## Positioned Tooltips

```razor
<!-- Tooltip positioned below the input -->
<PggmInput Id="password-input" Type="password" Label="Password" @bind-Value="password" />
<PggmTooltip For="password-input" Position="below">
    Password must be at least 8 characters long and contain uppercase, lowercase, and numbers.
</PggmTooltip>

<!-- Tooltip positioned to the right -->
<PggmButton Id="submit-btn" OnClick="HandleSubmit">Submit</PggmButton>
<PggmTooltip For="submit-btn" Position="after">
    Click to submit your form data
</PggmTooltip>
```

## Form Integration

```razor
<EditForm Model="userModel" OnValidSubmit="HandleValidSubmit">
    <div class="form-field">
        <PggmLabel For="username">Username</PggmLabel>
        <PggmInput Id="username" @bind-Value="userModel.Username" />
        <PggmTooltip For="username" Position="above">
            Username must be 3-20 characters and contain only letters, numbers, and underscores.
        </PggmTooltip>
    </div>
    
    <div class="form-field">
        <PggmLabel For="age">Age</PggmLabel>
        <PggmInput Id="age" Type="number" @bind-Value="userModel.Age" />
        <PggmTooltip For="age" Position="after">
            Please enter your age in years
        </PggmTooltip>
    </div>
    
    <PggmButton Type="submit" Id="form-submit">Create Account</PggmButton>
    <PggmTooltip For="form-submit" Position="above">
        All fields must be completed before submission
    </PggmTooltip>
</EditForm>

@code {
    private UserModel userModel = new();
    
    private void HandleValidSubmit()
    {
        // Handle form submission
    }
    
    public class UserModel
    {
        public string Username { get; set; } = string.Empty;
        public int Age { get; set; }
    }
}
```

## Complex Content

```razor
<PggmInput Id="complex-input" Label="Data Input" @bind-Value="data" />
<PggmTooltip For="complex-input" Position="below">
    <div>
        <strong>Required Format:</strong>
        <ul>
            <li>Must start with a letter</li>
            <li>Can contain letters, numbers, and hyphens</li>
            <li>Maximum length: 50 characters</li>
        </ul>
    </div>
</PggmTooltip>
```

## Accessibility

The `PggmTooltip` component follows accessibility best practices:

- **ARIA Relationship**: The tooltip is properly linked to its trigger element via the `for` attribute
- **Keyboard Navigation**: Tooltips are accessible via keyboard focus and interaction
- **Screen Reader Support**: Content is announced appropriately to assistive technologies
- **Focus Management**: Tooltip visibility is managed based on focus and hover states

### ARIA Attributes

When using tooltips, ensure the trigger element has appropriate ARIA attributes:

```razor
<!-- The input should reference the tooltip for screen readers -->
<PggmInput Id="input-with-tooltip" 
           Label="Field with Help" 
           aria-describedby="help-tooltip"
           @bind-Value="value" />
           
<PggmTooltip Id="help-tooltip" 
             For="input-with-tooltip" 
             Position="above">
    Additional context for this field
</PggmTooltip>
```

## Best Practices

### Positioning
- **Above/Below**: Use for wide form fields where horizontal space is limited
- **Before/After**: Use for compact elements like buttons or icons where vertical space is constrained
- **Consider viewport**: The web component automatically adjusts position if there's insufficient space

### Content Guidelines
- Keep tooltip content concise and helpful
- Use tooltips for additional context, not critical information
- Ensure tooltips don't obscure important UI elements
- Test tooltip positioning across different screen sizes

### Performance
- Tooltips are lightweight and can be used extensively without performance concerns
- The underlying web component handles positioning calculations efficiently
- Multiple tooltips on the same page are supported

## Common Patterns

### Help Icons with Tooltips
```razor
<div class="field-with-help">
    <PggmLabel For="complex-field">Complex Field</PggmLabel>
    <div class="input-group">
        <PggmInput Id="complex-field" @bind-Value="complexValue" />
        <PggmIcon Id="help-icon" Name="help" />
    </div>
    <PggmTooltip For="help-icon" Position="after">
        This field accepts specific formatting. See documentation for details.
    </PggmTooltip>
</div>
```

### Button Groups with Contextual Help
```razor
<div class="button-group">
    <PggmButton Id="save-btn" OnClick="Save">Save</PggmButton>
    <PggmTooltip For="save-btn" Position="above">Save changes (Ctrl+S)</PggmTooltip>
    
    <PggmButton Id="cancel-btn" OnClick="Cancel">Cancel</PggmButton>
    <PggmTooltip For="cancel-btn" Position="above">Discard changes and return</PggmTooltip>
</div>
```

## Browser Support

The `PggmTooltip` component works in all modern browsers that support:
- Web Components (Custom Elements)
- CSS Popover API (with fallbacks for older browsers)
- ARIA attributes and accessibility features

## Related Components

- [`PggmInput`](input.md) - Often used with tooltips for field help
- [`PggmButton`](button.md) - Can be enhanced with contextual tooltips
- [`PggmIcon`](../api-reference.md#pggmicon) - Commonly paired with tooltips for help indicators
- [`PggmLabel`](label.md) - Works alongside tooltips for comprehensive field labeling