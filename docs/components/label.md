# PggmLabel

The PggmLabel component provides accessible label text for form controls that wraps the PGGM design system label web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `For` | string | null | The for attribute - associates the label with a form control by its ID |
| `ChildContent` | RenderFragment | null | The content to be displayed inside the label |

## Example Usage

### Basic Label

```razor
<PggmLabel For="username">Username:</PggmLabel>
<PggmInput Name="username" id="username" @bind-Value="username" />

@code {
    private string username = string.Empty;
}
```

### Label with Required Indicator

```razor
<PggmLabel For="email">
    Email Address <span class="required">*</span>
</PggmLabel>
<PggmInput Name="email" id="email" Type="email" Required="true" @bind-Value="email" />

@code {
    private string email = string.Empty;
}
```

### Label with Help Text

```razor
<PggmLabel For="password">
    Password
    <small>Must be at least 8 characters long</small>
</PggmLabel>
<PggmInput Name="password" id="password" Type="password" MinLength="8" @bind-Value="password" />

@code {
    private string password = string.Empty;
}
```

### Form with Multiple Labels

```razor
<form>
    <div class="form-group">
        <PggmLabel For="firstName">First Name:</PggmLabel>
        <PggmInput id="firstName" @bind-Value="firstName" Required="true" />
    </div>
    
    <div class="form-group">
        <PggmLabel For="lastName">Last Name:</PggmLabel>
        <PggmInput id="lastName" @bind-Value="lastName" Required="true" />
    </div>
    
    <div class="form-group">
        <PggmLabel For="country">Country:</PggmLabel>
        <PggmSelect id="country" @bind-Value="selectedCountry">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="NL">Netherlands</option>
        </PggmSelect>
    </div>
</form>

@code {
    private string firstName = string.Empty;
    private string lastName = string.Empty;
    private string selectedCountry = string.Empty;
}
```

## Accessibility

The label component is crucial for accessibility:

- **Screen Readers**: Properly associated labels are read by screen readers when form controls receive focus
- **Click Target**: Clicking the label focuses the associated form control
- **Form Validation**: Labels help identify which fields have validation errors

### Best Practices

1. **Always Use For Attribute**: Associate labels with form controls using the `For` attribute
2. **Meaningful Text**: Use clear, descriptive label text
3. **Required Indicators**: Mark required fields clearly
4. **Help Text**: Include helpful instructions when needed

### Example with Validation

```razor
<EditForm Model="model" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    
    <div class="form-group">
        <PggmLabel For="email">Email Address:</PggmLabel>
        <PggmInput id="email" @bind-Value="model.Email" Type="email" Required="true" />
        <ValidationMessage For="() => model.Email" />
    </div>
    
    <PggmButton Type="submit">Submit</PggmButton>
</EditForm>

@code {
    private UserModel model = new();

    public class UserModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}
```

## Styling

The label component inherits styling from the PGGM design system. Additional CSS classes can be applied:

```razor
<PggmLabel For="username" class="form-label required">
    Username:
</PggmLabel>
```

## Dependencies

- Inherits from `PggmComponentBase`
- Requires the PGGM design system web components JavaScript library