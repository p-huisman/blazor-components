# PggmCheckbox

The PggmCheckbox component provides a checkbox input control that wraps the PGGM design system checkbox web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Checked` | bool | false | Whether the checkbox is checked |
| `CheckedChanged` | EventCallback<bool> | - | Event callback for when the checked state changes (two-way binding) |
| `Disabled` | bool | false | Whether the checkbox is disabled |
| `Required` | bool | false | Whether the checkbox is required |
| `Indeterminate` | bool | false | Whether the checkbox is in an indeterminate state |
| `Name` | string | null | The name attribute for the checkbox input |
| `Value` | string | null | The value attribute for the checkbox input |
| `Description` | string | null | Description text to show below the checkbox label |
| `ChildContent` | RenderFragment | null | The content to be displayed as the checkbox label |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnChange` | EventCallback<ChangeEventArgs> | Fired when the checkbox state changes |
| `CheckedChanged` | EventCallback<bool> | Fired when the checked state changes (for two-way binding) |

## Example Usage

### Basic Checkbox

```razor
<PggmCheckbox @bind-Checked="isAgreed">
    I agree to the terms and conditions
</PggmCheckbox>

@code {
    private bool isAgreed = false;
}
```

### Checkbox with Description

```razor
<PggmCheckbox @bind-Checked="receiveNewsletter" 
              Description="You can unsubscribe at any time">
    Subscribe to our newsletter
</PggmCheckbox>

@code {
    private bool receiveNewsletter = false;
}
```

### Required Checkbox

```razor
<PggmCheckbox @bind-Checked="acceptTerms" 
              Required="true"
              OnChange="HandleTermsChange">
    I accept the privacy policy (Required)
</PggmCheckbox>

@code {
    private bool acceptTerms = false;

    private void HandleTermsChange(ChangeEventArgs e)
    {
        var isChecked = (bool)(e.Value ?? false);
        Console.WriteLine($"Terms accepted: {isChecked}");
    }
}
```

### Indeterminate Checkbox

```razor
<PggmCheckbox @bind-Checked="selectAll" 
              Indeterminate="isIndeterminate"
              OnChange="HandleSelectAllChange">
    Select All Items
</PggmCheckbox>

<div class="checkbox-group">
    @foreach (var item in items)
    {
        <PggmCheckbox @bind-Checked="item.Selected" 
                      OnChange="@(() => UpdateSelectAllState())">
            @item.Name
        </PggmCheckbox>
    }
</div>

@code {
    private bool selectAll = false;
    private bool isIndeterminate = false;
    private List<SelectableItem> items = new()
    {
        new SelectableItem { Name = "Item 1", Selected = false },
        new SelectableItem { Name = "Item 2", Selected = false },
        new SelectableItem { Name = "Item 3", Selected = false }
    };

    private void HandleSelectAllChange(ChangeEventArgs e)
    {
        var isChecked = (bool)(e.Value ?? false);
        foreach (var item in items)
        {
            item.Selected = isChecked;
        }
        isIndeterminate = false;
    }

    private void UpdateSelectAllState()
    {
        var selectedCount = items.Count(i => i.Selected);
        selectAll = selectedCount == items.Count;
        isIndeterminate = selectedCount > 0 && selectedCount < items.Count;
    }

    public class SelectableItem
    {
        public string Name { get; set; } = string.Empty;
        public bool Selected { get; set; }
    }
}
```

### Disabled Checkbox

```razor
<PggmCheckbox Checked="true" Disabled="true">
    This checkbox is disabled and checked
</PggmCheckbox>

<PggmCheckbox Checked="false" Disabled="true">
    This checkbox is disabled and unchecked
</PggmCheckbox>
```

### Form Integration

```razor
<EditForm Model="preferences" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    
    <div class="form-section">
        <h3>Notification Preferences</h3>
        
        <PggmCheckbox @bind-Checked="preferences.EmailNotifications"
                      Description="Receive updates via email">
            Email Notifications
        </PggmCheckbox>
        
        <PggmCheckbox @bind-Checked="preferences.SmsNotifications"
                      Description="Receive updates via SMS">
            SMS Notifications
        </PggmCheckbox>
        
        <PggmCheckbox @bind-Checked="preferences.PushNotifications"
                      Description="Receive push notifications on your device">
            Push Notifications
        </PggmCheckbox>
    </div>
    
    <div class="form-section">
        <PggmCheckbox @bind-Checked="preferences.AcceptTerms" 
                      Required="true">
            I accept the terms and conditions *
        </PggmCheckbox>
        <ValidationMessage For="() => preferences.AcceptTerms" />
    </div>
    
    <PggmButton Type="submit">Save Preferences</PggmButton>
</EditForm>

@code {
    private UserPreferences preferences = new();

    private void HandleSubmit()
    {
        Console.WriteLine("Preferences saved!");
    }

    public class UserPreferences
    {
        public bool EmailNotifications { get; set; }
        public bool SmsNotifications { get; set; }
        public bool PushNotifications { get; set; }
        
        [Range(typeof(bool), "true", "true", ErrorMessage = "You must accept the terms and conditions")]
        public bool AcceptTerms { get; set; }
    }
}
```

### Checkbox Groups

```razor
<fieldset>
    <legend>Select your interests:</legend>
    
    @foreach (var interest in interests)
    {
        <PggmCheckbox @bind-Checked="interest.Selected" 
                      Value="@interest.Id"
                      Name="interests">
            @interest.Name
        </PggmCheckbox>
    }
</fieldset>

@code {
    private List<Interest> interests = new()
    {
        new Interest { Id = "tech", Name = "Technology", Selected = false },
        new Interest { Id = "sports", Name = "Sports", Selected = false },
        new Interest { Id = "music", Name = "Music", Selected = true },
        new Interest { Id = "travel", Name = "Travel", Selected = false }
    };

    public class Interest
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public bool Selected { get; set; }
    }
}
```

## States

The checkbox component supports several visual states:

- **Unchecked**: Default state (`Checked="false"`)
- **Checked**: Selected state (`Checked="true"`)
- **Indeterminate**: Partially selected state (`Indeterminate="true"`)
- **Disabled**: Non-interactive state (`Disabled="true"`)

## Accessibility

The checkbox component provides:
- Proper ARIA attributes
- Keyboard navigation (Space to toggle)
- Screen reader support
- Focus management
- Label association

## Best Practices

1. **Clear Labels**: Use descriptive, concise checkbox labels
2. **Grouping**: Use fieldsets for related checkboxes
3. **Required Indicators**: Mark required checkboxes clearly
4. **Descriptions**: Provide additional context when helpful
5. **Validation**: Implement proper validation for required checkboxes

## Dependencies

- Inherits from `PggmEventComponentBase`
- Requires the PGGM design system web components JavaScript library