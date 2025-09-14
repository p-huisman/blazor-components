# PggmAccordionItemTitle

The PggmAccordionItemTitle component provides the clickable title/header for an accordion item within a PggmAccordionItem component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `ChildContent` | RenderFragment | null | The title content to be displayed |

## Example Usage

### Basic Accordion Item Title

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Simple Title</PggmAccordionItemTitle>
        <p>Content goes here...</p>
    </PggmAccordionItem>
</PggmAccordion>
```

### Title with Rich Content

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>
            <div class="title-with-icon">
                <PggmIcon Name="settings" />
                <span>Configuration Settings</span>
            </div>
        </PggmAccordionItemTitle>
        <p>Various configuration options...</p>
    </PggmAccordionItem>
</PggmAccordion>
```

### Title with Badge or Status

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>
            <div class="title-with-badge">
                <span>User Notifications</span>
                <span class="badge badge-primary">3 new</span>
            </div>
        </PggmAccordionItemTitle>
        <div>
            <p>You have 3 new notifications...</p>
        </div>
    </PggmAccordionItem>
</PggmAccordion>
```

### Multiple Titles with Different Styling

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>
            <h3 class="section-title">Personal Information</h3>
        </PggmAccordionItemTitle>
        <form>
            <!-- Personal info form fields -->
        </form>
    </PggmAccordionItem>
    
    <PggmAccordionItem>
        <PggmAccordionItemTitle>
            <h3 class="section-title">Contact Details</h3>
        </PggmAccordionItemTitle>
        <form>
            <!-- Contact form fields -->
        </form>
    </PggmAccordionItem>
    
    <PggmAccordionItem>
        <PggmAccordionItemTitle>
            <h3 class="section-title warning">Security Settings</h3>
        </PggmAccordionItemTitle>
        <form>
            <!-- Security form fields -->
        </form>
    </PggmAccordionItem>
</PggmAccordion>
```

### Dynamic Titles

```razor
<PggmAccordion>
    @foreach (var category in categories)
    {
        <PggmAccordionItem>
            <PggmAccordionItemTitle>
                <div class="dynamic-title">
                    <span>@category.Name</span>
                    @if (category.ItemCount > 0)
                    {
                        <small class="item-count">(@category.ItemCount items)</small>
                    }
                    @if (category.HasUpdates)
                    {
                        <span class="update-indicator">•</span>
                    }
                </div>
            </PggmAccordionItemTitle>
            <div>
                @if (category.Items.Any())
                {
                    <ul>
                        @foreach (var item in category.Items)
                        {
                            <li>@item.Name</li>
                        }
                    </ul>
                }
                else
                {
                    <p>No items in this category.</p>
                }
            </div>
        </PggmAccordionItem>
    }
</PggmAccordion>

@code {
    private List<Category> categories = new()
    {
        new Category 
        { 
            Name = "Documents", 
            ItemCount = 5, 
            HasUpdates = true,
            Items = new List<Item> 
            { 
                new Item { Name = "Report.pdf" },
                new Item { Name = "Invoice.xlsx" }
            }
        },
        new Category 
        { 
            Name = "Images", 
            ItemCount = 12,
            Items = new List<Item>
            {
                new Item { Name = "Photo1.jpg" },
                new Item { Name = "Screenshot.png" }
            }
        }
    };

    public class Category
    {
        public string Name { get; set; } = string.Empty;
        public int ItemCount { get; set; }
        public bool HasUpdates { get; set; }
        public List<Item> Items { get; set; } = new();
    }

    public class Item
    {
        public string Name { get; set; } = string.Empty;
    }
}
```

### Title with Interactive Elements

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>
            <div class="title-with-actions">
                <span class="title-text">Project Settings</span>
                <div class="title-actions" @onclick:stopPropagation="true">
                    <PggmButton Size="small" OnClick="EditProject">
                        <PggmIcon Name="edit" />
                    </PggmButton>
                    <PggmButton Size="small" OnClick="DeleteProject">
                        <PggmIcon Name="delete" />
                    </PggmButton>
                </div>
            </div>
        </PggmAccordionItemTitle>
        <p>Project configuration options...</p>
    </PggmAccordionItem>
</PggmAccordion>

@code {
    private void EditProject()
    {
        Console.WriteLine("Edit project clicked");
        // Prevent accordion toggle when edit button is clicked
    }

    private void DeleteProject()
    {
        Console.WriteLine("Delete project clicked");
        // Prevent accordion toggle when delete button is clicked
    }
}
```

### Conditional Title Content

```razor
<PggmAccordion>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>
            @if (user.IsAdmin)
            {
                <div class="admin-title">
                    <PggmIcon Name="shield" />
                    <span>Administrative Settings</span>
                    <span class="admin-badge">Admin</span>
                </div>
            }
            else
            {
                <div class="user-title">
                    <PggmIcon Name="user" />
                    <span>User Settings</span>
                </div>
            }
        </PggmAccordionItemTitle>
        <div>
            @if (user.IsAdmin)
            {
                <p>Administrative controls and settings...</p>
            }
            else
            {
                <p>Basic user settings...</p>
            }
        </div>
    </PggmAccordionItem>
</PggmAccordion>

@code {
    private User user = new() { IsAdmin = true };

    public class User
    {
        public bool IsAdmin { get; set; }
    }
}
```

## Styling

The accordion item title can be styled with CSS:

```css
.title-with-icon {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.title-with-badge {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.badge {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
}

.badge-primary {
    background-color: var(--color-primary-100);
    color: var(--color-primary-800);
}

.section-title {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
}

.section-title.warning {
    color: var(--color-warning-700);
}

.title-with-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.title-actions {
    display: flex;
    gap: 0.25rem;
}
```

## Best Practices

1. **Descriptive Text**: Use clear, concise titles that describe the accordion content
2. **Consistent Styling**: Maintain consistent title formatting across accordion items
3. **Icon Usage**: Use icons sparingly and meaningfully to enhance understanding
4. **Interactive Elements**: When adding buttons or links, use `@onclick:stopPropagation` to prevent accordion toggle
5. **Semantic HTML**: Use appropriate heading levels when needed for document structure

## Accessibility

- The title content is automatically made accessible as the accordion trigger
- Screen readers announce the title content when focusing the accordion item
- Supports keyboard navigation (Enter/Space to expand/collapse)
- Maintains proper focus management

## Dependencies

- Must be used within a `PggmAccordionItem` component
- Part of the accordion component family (`PggmAccordion` → `PggmAccordionItem` → `PggmAccordionItemTitle`)
- Inherits from `PggmComponentBase`
- Requires the PGGM design system web components JavaScript library