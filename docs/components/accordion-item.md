# PggmAccordionItem

The PggmAccordionItem component represents an individual collapsible section within a PggmAccordion component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Open` | bool | false | Whether this accordion item is open/expanded |
| `Disabled` | bool | false | Whether this accordion item is disabled |
| `ChildContent` | RenderFragment | null | The content of the accordion item (title and body content) |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnToggle` | EventCallback<bool> | Fired when the accordion item is toggled |
| `OnOpen` | EventCallback | Fired when the accordion item is opened |
| `OnClose` | EventCallback | Fired when the accordion item is closed |

## Example Usage

### Basic Accordion Item

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Section Title</PggmAccordionItemTitle>
        <p>This is the content that will be shown when the item is expanded.</p>
    </PggmAccordionItem>
</PggmAccordion>
```

### Accordion Item with Initial State

```razor
<PggmAccordion>
    <PggmAccordionItem Open="true">
        <PggmAccordionItemTitle>Initially Open Section</PggmAccordionItemTitle>
        <p>This section starts in an open state.</p>
    </PggmAccordionItem>
    
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Initially Closed Section</PggmAccordionItemTitle>
        <p>This section starts in a closed state.</p>
    </PggmAccordionItem>
</PggmAccordion>
```

### Disabled Accordion Item

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Available Section</PggmAccordionItemTitle>
        <p>This section can be toggled normally.</p>
    </PggmAccordionItem>
    
    <PggmAccordionItem Disabled="true">
        <PggmAccordionItemTitle>Disabled Section</PggmAccordionItemTitle>
        <p>This section cannot be toggled because it's disabled.</p>
    </PggmAccordionItem>
</PggmAccordion>
```

### Accordion Item with Event Handling

```razor
<PggmAccordion>
    <PggmAccordionItem OnToggle="HandleItemToggle" OnOpen="HandleItemOpen" OnClose="HandleItemClose">
        <PggmAccordionItemTitle>Interactive Section</PggmAccordionItemTitle>
        <div>
            <p>This section has event handlers for toggle, open, and close events.</p>
            <p>Check the console for event notifications.</p>
        </div>
    </PggmAccordionItem>
</PggmAccordion>

@code {
    private void HandleItemToggle(bool isOpen)
    {
        Console.WriteLine($"Accordion item toggled. Now {(isOpen ? "open" : "closed")}");
    }

    private void HandleItemOpen()
    {
        Console.WriteLine("Accordion item opened");
    }

    private void HandleItemClose()
    {
        Console.WriteLine("Accordion item closed");
    }
}
```

### Rich Content Accordion Item

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>User Profile Settings</PggmAccordionItemTitle>
        <div class="accordion-content">
            <form>
                <div class="form-group">
                    <PggmLabel For="displayName">Display Name</PggmLabel>
                    <PggmInput id="displayName" @bind-Value="displayName" />
                </div>
                
                <div class="form-group">
                    <PggmCheckbox @bind-Checked="emailNotifications">
                        Enable email notifications
                    </PggmCheckbox>
                </div>
                
                <div class="form-actions">
                    <PggmButton Appearance="primary" OnClick="SaveSettings">Save</PggmButton>
                    <PggmButton OnClick="CancelChanges">Cancel</PggmButton>
                </div>
            </form>
        </div>
    </PggmAccordionItem>
</PggmAccordion>

@code {
    private string displayName = "John Doe";
    private bool emailNotifications = true;

    private void SaveSettings()
    {
        // Handle save logic
        Console.WriteLine("Settings saved");
    }

    private void CancelChanges()
    {
        // Handle cancel logic
        Console.WriteLine("Changes cancelled");
    }
}
```

### Conditional Accordion Items

```razor
<PggmAccordion>
    @foreach (var section in sections)
    {
        <PggmAccordionItem Open="@section.IsOpen" Disabled="@section.IsDisabled">
            <PggmAccordionItemTitle>@section.Title</PggmAccordionItemTitle>
            <div>
                @if (section.HasContent)
                {
                    <p>@section.Content</p>
                }
                else
                {
                    <p><em>No content available for this section.</em></p>
                }
            </div>
        </PggmAccordionItem>
    }
</PggmAccordion>

@code {
    private List<AccordionSection> sections = new()
    {
        new AccordionSection { Title = "Introduction", Content = "Welcome to our service!", HasContent = true, IsOpen = true },
        new AccordionSection { Title = "Getting Started", Content = "Follow these steps...", HasContent = true },
        new AccordionSection { Title = "Advanced Features", Content = "", HasContent = false, IsDisabled = true },
        new AccordionSection { Title = "FAQ", Content = "Frequently asked questions...", HasContent = true }
    };

    public class AccordionSection
    {
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public bool HasContent { get; set; }
        public bool IsOpen { get; set; }
        public bool IsDisabled { get; set; }
    }
}
```

## Styling

Individual accordion items can be styled with custom CSS classes:

```razor
<PggmAccordionItem class="important-section" data-section="critical">
    <PggmAccordionItemTitle>Important Information</PggmAccordionItemTitle>
    <p>This section has custom styling applied.</p>
</PggmAccordionItem>
```

```css
.important-section {
    border: 2px solid var(--color-warning-500);
    background-color: var(--color-warning-50);
}

.important-section[data-section="critical"] {
    border-color: var(--color-error-500);
    background-color: var(--color-error-50);
}
```

## Best Practices

1. **Clear Titles**: Use descriptive titles in `PggmAccordionItemTitle`
2. **Logical Grouping**: Group related content in single accordion items
3. **Content Structure**: Use proper HTML structure within accordion content
4. **State Management**: Consider the initial open/closed state for user experience
5. **Accessibility**: Ensure content within accordion items is accessible

## Accessibility

- Provides proper ARIA attributes for expandable content
- Supports keyboard navigation (Enter/Space to toggle)
- Screen reader compatible with proper state announcements
- Focus management during expand/collapse operations

## Dependencies

- Must be used within a `PggmAccordion` component
- Works with `PggmAccordionItemTitle` for proper structure
- Inherits from `PggmEventComponentBase`
- Requires the PGGM design system web components JavaScript library