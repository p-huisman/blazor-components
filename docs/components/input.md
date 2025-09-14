# PggmInput

The PggmInput component provides a text input field that wraps the PGGM design system input web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Value` | string | null | The current value of the input |
| `ValueChanged` | EventCallback<string> | - | Event callback for when the input value changes (two-way binding) |
| `Type` | string | "text" | The input type (text, email, password, number, etc.) |
| `Placeholder` | string | null | Placeholder text for the input |
| `Disabled` | bool | false | Whether the input is disabled |
| `Required` | bool | false | Whether the input is required |
| `ReadOnly` | bool | false | Whether the input is readonly |
| `Name` | string | null | The name attribute for the input |
| `MaxLength` | int | null | Maximum length for the input value |
| `MinLength` | int | null | Minimum length for the input value |
| `Pattern` | string | null | Pattern for input validation (regex) |
| `Min` | string | null | Minimum value for number inputs |
| `Max` | string | null | Maximum value for number inputs |
| `Step` | string | null | Step value for number inputs |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnChange` | EventCallback<ChangeEventArgs> | Fired when the input loses focus and value has changed |
| `OnInput` | EventCallback<ChangeEventArgs> | Fired on every keystroke |
| `OnFocus` | EventCallback<FocusEventArgs> | Fired when the input gains focus |
| `OnBlur` | EventCallback<FocusEventArgs> | Fired when the input loses focus |
| `ValueChanged` | EventCallback<string> | Fired when the value changes (for two-way binding) |

## Example Usage

### Basic Input

```razor
<PggmInput @bind-Value="userName" Placeholder="Enter your name" />

@code {
    private string userName = string.Empty;
}
```

### Required Input with Validation

```razor
<PggmInput 
    @bind-Value="email" 
    Type="email" 
    Placeholder="Enter your email"
    Required="true"
    OnChange="HandleEmailChange" />

@code {
    private string email = string.Empty;

    private void HandleEmailChange(ChangeEventArgs e)
    {
        Console.WriteLine($"Email changed to: {e.Value}");
    }
}
```

### Number Input with Range

```razor
<PggmInput 
    @bind-Value="age" 
    Type="number"
    Min="18"
    Max="100"
    Placeholder="Enter your age" />

@code {
    private string age = string.Empty;
}
```

### Password Input

```razor
<PggmInput 
    @bind-Value="password" 
    Type="password"
    Required="true"
    MinLength="8"
    Placeholder="Enter password" />

@code {
    private string password = string.Empty;
}
```

### Input with Pattern Validation

```razor
<PggmInput 
    @bind-Value="phoneNumber" 
    Type="tel"
    Pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    Placeholder="123-456-7890"
    title="Phone number format: 123-456-7890" />

@code {
    private string phoneNumber = string.Empty;
}
```

### Disabled and ReadOnly States

```razor
<PggmInput Value="Disabled input" Disabled="true" />
<PggmInput Value="ReadOnly input" ReadOnly="true" />
```

## Input Types

The component supports all standard HTML input types:

- `text` - Default text input
- `email` - Email input with validation
- `password` - Password input (masked)
- `number` - Numeric input
- `tel` - Telephone number input
- `url` - URL input
- `search` - Search input
- `date` - Date picker
- `time` - Time picker
- `datetime-local` - Date and time picker

## Form Integration

The input integrates seamlessly with HTML forms and Blazor's form validation:

```razor
<EditForm Model="model" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    
    <div>
        <PggmLabel For="name">Name:</PggmLabel>
        <PggmInput @bind-Value="model.Name" Name="name" Required="true" />
        <ValidationMessage For="() => model.Name" />
    </div>
    
    <PggmButton Type="submit">Submit</PggmButton>
</EditForm>
```

## Accessibility

The input component provides:
- Proper ARIA attributes
- Label association support
- Keyboard navigation
- Screen reader compatibility
- Validation state communication

## Best Practices

1. Always provide meaningful placeholder text
2. Use appropriate input types for better UX and validation
3. Include proper labels using `PggmLabel` component
4. Set `Required` attribute for mandatory fields
5. Use validation patterns for data format validation
6. Provide clear error messages for validation failures

## Dependencies

- Inherits from `PggmComponentBase`
- Requires the PGGM design system web components JavaScript library