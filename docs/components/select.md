# PggmSelect

The PggmSelect component provides a dropdown selection control that wraps the PGGM design system select web component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Value` | string | null | The currently selected value |
| `ValueChanged` | EventCallback<string> | - | Event callback for when the selected value changes (two-way binding) |
| `Disabled` | bool | false | Whether the select is disabled |
| `Required` | bool | false | Whether the select is required |
| `Name` | string | null | The name attribute for the select |
| `ChildContent` | RenderFragment | null | The option elements and other content |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnChange` | EventCallback<ChangeEventArgs> | Fired when the selection changes |
| `ValueChanged` | EventCallback<string> | Fired when the value changes (for two-way binding) |

## Example Usage

### Basic Select

```razor
<PggmSelect @bind-Value="selectedCountry">
    <option value="">Select a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="NL">Netherlands</option>
    <option value="DE">Germany</option>
</PggmSelect>

@code {
    private string selectedCountry = string.Empty;
}
```

### Select with Label

```razor
<div class="form-group">
    <PggmLabel For="country">Country:</PggmLabel>
    <PggmSelect id="country" @bind-Value="selectedCountry" Required="true">
        <option value="">Please select a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="NL">Netherlands</option>
    </PggmSelect>
</div>

@code {
    private string selectedCountry = string.Empty;
}
```

### Dynamic Options from List

```razor
<PggmSelect @bind-Value="selectedCity" OnChange="HandleCityChange">
    <option value="">Select a city</option>
    @foreach (var city in cities)
    {
        <option value="@city.Id">@city.Name</option>
    }
</PggmSelect>

@code {
    private string selectedCity = string.Empty;
    private List<City> cities = new()
    {
        new City { Id = "1", Name = "Amsterdam" },
        new City { Id = "2", Name = "Rotterdam" },
        new City { Id = "3", Name = "The Hague" },
        new City { Id = "4", Name = "Utrecht" }
    };

    private void HandleCityChange(ChangeEventArgs e)
    {
        Console.WriteLine($"Selected city: {e.Value}");
    }

    public class City
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
    }
}
```

### Required Select with Validation

```razor
<EditForm Model="model" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    
    <div class="form-group">
        <PggmLabel For="department">Department:</PggmLabel>
        <PggmSelect id="department" @bind-Value="model.Department" Required="true">
            <option value="">Choose a department</option>
            <option value="HR">Human Resources</option>
            <option value="IT">Information Technology</option>
            <option value="FIN">Finance</option>
            <option value="MKT">Marketing</option>
        </PggmSelect>
        <ValidationMessage For="() => model.Department" />
    </div>
    
    <PggmButton Type="submit">Submit</PggmButton>
</EditForm>

@code {
    private FormModel model = new();

    private void HandleSubmit()
    {
        Console.WriteLine($"Selected department: {model.Department}");
    }

    public class FormModel
    {
        [Required(ErrorMessage = "Please select a department")]
        public string Department { get; set; } = string.Empty;
    }
}
```

### Disabled Select

```razor
<PggmSelect Value="disabled-option" Disabled="true">
    <option value="disabled-option">This select is disabled</option>
</PggmSelect>
```

### Grouped Options

```razor
<PggmSelect @bind-Value="selectedFood">
    <option value="">Choose a food</option>
    <optgroup label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
    </optgroup>
    <optgroup label="Vegetables">
        <option value="carrot">Carrot</option>
        <option value="broccoli">Broccoli</option>
        <option value="spinach">Spinach</option>
    </optgroup>
</PggmSelect>

@code {
    private string selectedFood = string.Empty;
}
```

## Form Integration

The select component works seamlessly with Blazor forms and validation:

```razor
<EditForm Model="registrationForm" OnValidSubmit="HandleRegistration">
    <DataAnnotationsValidator />
    <ValidationSummary />
    
    <div class="form-group">
        <PggmLabel For="title">Title:</PggmLabel>
        <PggmSelect id="title" @bind-Value="registrationForm.Title">
            <option value="">Select title</option>
            <option value="Mr">Mr.</option>
            <option value="Mrs">Mrs.</option>
            <option value="Ms">Ms.</option>
            <option value="Dr">Dr.</option>
        </PggmSelect>
        <ValidationMessage For="() => registrationForm.Title" />
    </div>
    
    <div class="form-group">
        <PggmLabel For="country">Country:</PggmLabel>
        <PggmSelect id="country" @bind-Value="registrationForm.Country" Required="true">
            <option value="">Select country</option>
            <option value="NL">Netherlands</option>
            <option value="BE">Belgium</option>
            <option value="DE">Germany</option>
        </PggmSelect>
        <ValidationMessage For="() => registrationForm.Country" />
    </div>
</EditForm>
```

## Accessibility

The select component provides:
- Proper ARIA attributes
- Keyboard navigation (Arrow keys, Enter, Escape)
- Screen reader support
- Focus management
- Label association support

## Best Practices

1. **Default Option**: Always provide a default "please select" option
2. **Meaningful Labels**: Use clear, descriptive option text
3. **Grouping**: Use `<optgroup>` for related options
4. **Validation**: Implement proper validation for required selects
5. **Loading States**: Show loading indicators for dynamic options

## Dependencies

- Inherits from `PggmEventComponentBase`
- Requires the PGGM design system web components JavaScript library