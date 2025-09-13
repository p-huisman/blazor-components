# PGGM Components

A Blazor component library that provides strongly-typed wrappers for PGGM Design System web components, making them available as native Blazor components with full .NET integration.

## What This Package Does

The PGGM Components library bridges the gap between PGGM's web component design system and Blazor applications by providing:

- **Native Blazor Components**: Use PGGM design system components directly in your Blazor markup
- **Type Safety**: Strongly-typed parameters, events, and data binding
- **Seamless Integration**: Automatic web component initialization and JavaScript interop
- **Production Ready**: Built for .NET 8 with comprehensive testing and documentation

## Quick Start

### 1. Installation

Install the package via NuGet Package Manager:

```bash
dotnet add package Pggm.Components
```

Or via Package Manager Console in Visual Studio:

```powershell
Install-Package Pggm.Components
```

### 2. Service Registration

Add PGGM Components services to your `Program.cs`:

```csharp
using Pggm.Components.Extensions;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Register PGGM Components services
builder.Services.AddPggmComponents();

await builder.Build().RunAsync();
```

### 3. Import Namespace

Add the namespace to your `_Imports.razor`:

```razor
@using Pggm.Components
```

### 4. Start Using Components

```razor
@page "/example"

<PggmButton Variant="primary" OnClick="HandleClick">
    Get Started
</PggmButton>

<PggmInput @bind-Value="userInput" 
           Type="@PggmInput.InputTypes.Email"
           Placeholder="Enter your email..."
           Required="true" />

@code {
    private string userInput = "";
    
    private void HandleClick()
    {
        // Handle button click
        Console.WriteLine($"User entered: {userInput}");
    }
}
```

## Available Components

This library provides Blazor wrappers for the following PGGM Design System components:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **PggmAccordion** | Expandable content sections | Collapsible content, accessibility support |
| **PggmAlert** | Notification messages | Dismissible, various severity levels |
| **PggmButton** | Interactive buttons | Multiple variants and sizes, event handling |
| **PggmCheckbox** | Form checkboxes | Two-way binding, validation support |
| **PggmDialog** | Modal dialogs | Customizable actions, backdrop control |
| **PggmErrorMessage** | Validation errors | Form validation display |
| **PggmFieldset** | Form grouping | Accessible field grouping with legends |
| **PggmFileUpload** | File input controls | Multiple file support, validation |
| **PggmHeader** | Page headers | Consistent page header styling |
| **PggmIcon** | Icon display | PGGM icon library integration |
| **PggmInput** | Text inputs | Multiple input types, validation, events |
| **PggmInputDate** | Date pickers | Date selection with localization |
| **PggmInputIban** | IBAN inputs | IBAN validation and formatting |
| **PggmInputPhone** | Phone inputs | Country selection, number validation |
| **PggmLabel** | Form labels | Accessible form labeling |
| **PggmLink** | Navigation links | Consistent link styling |
| **PggmProgressIndicator** | Progress display | Wizard and loading progress |
| **PggmProgressStep** | Progress steps | Individual step indicators |
| **PggmRadio** | Radio buttons | Radio button groups with validation |
| **PggmSelect** | Dropdown selects | Single and multi-select support |
| **PggmSlider** | Range inputs | Numeric range selection |
| **PggmSwitch** | Toggle switches | Boolean state controls |
| **PggmTab** | Tab interfaces | Tabbed content organization |
| **PggmTable** | Data tables | Sorting, filtering, pagination |
| **PggmTextarea** | Text areas | Multi-line text input with character counting |
| **PggmTooltip** | Information overlays | Contextual help and information |
| **PggmWizard** | Multi-step forms | Guided form workflows |
| **PggmWizardForm** | Wizard steps | Individual wizard form steps |

## Key Features

### 🎯 **Type Safety**
All components are strongly typed with IntelliSense support:

```csharp
// Compile-time type checking
[Parameter] public string Variant { get; set; } = "primary";
[Parameter] public bool Disabled { get; set; } = false;
[Parameter] public EventCallback<MouseEventArgs> OnClick { get; set; }
```

### 🔄 **Data Binding**
Two-way data binding with Blazor's `@bind` syntax:

```razor
<PggmInput @bind-Value="@user.Email" Type="@PggmInput.InputTypes.Email" />
<PggmCheckbox @bind-Checked="@user.AcceptsTerms" />
<PggmSelect @bind-Value="@user.Country" Items="@countries" />
```

### ⚡ **Event Handling**
Native Blazor event handling with strongly-typed event arguments:

```razor
<PggmButton OnClick="HandleButtonClick">Submit</PggmButton>
<PggmInput OnChange="HandleInputChange" OnFocus="HandleInputFocus" />

@code {
    private async Task HandleButtonClick(MouseEventArgs args)
    {
        // Handle click with access to mouse event details
    }
    
    private void HandleInputChange(ChangeEventArgs args)
    {
        // Handle input change with typed event arguments
    }
}
```

### 🎨 **Styling Integration**
Automatic loading of PGGM Design System styles and tokens:

- CSS tokens are automatically included
- No manual style imports required
- Consistent PGGM branding out of the box

## Common Usage Patterns

### Form with Validation

```razor
<EditForm Model="@user" OnValidSubmit="@HandleSubmit">
    <DataAnnotationsValidator />
    
    <PggmFieldset Title="Personal Information">
        <PggmLabel For="email">Email Address</PggmLabel>
        <PggmInput @bind-Value="@user.Email" 
                   Type="@PggmInput.InputTypes.Email"
                   Id="email"
                   Required="true" />
        <ValidationMessage For="@(() => user.Email)" />
        
        <PggmLabel For="phone">Phone Number</PggmLabel>
        <PggmInputPhone @bind-Value="@user.Phone" 
                        Id="phone"
                        InitialCountry="NL"
                        Required="true" />
        <ValidationMessage For="@(() => user.Phone)" />
    </PggmFieldset>
    
    <PggmButton Type="submit" Variant="primary">
        Save Information
    </PggmButton>
</EditForm>
```

### Data Table with Remote Data

```razor
<PggmTable RemoteUrl="@($"/api/employees?page={currentPage}")" 
           Remote="cursor"
           FilterLabel="Filter employees" 
           ClearLabel="Clear filters"
           OnSelectionChanged="HandleSelectionChanged">
    
    <PggmTh Field="firstName" Type="string" Sortable="true" Filterable="true">
        First Name
    </PggmTh>
    <PggmTh Field="lastName" Type="string" Sortable="true" Filterable="true">
        Last Name
    </PggmTh>
    <PggmTh Field="department" Type="string" Filterable="true">
        Department
    </PggmTh>
    <PggmTh Field="salary" Type="number" Format="currency" Sortable="true">
        Salary
    </PggmTh>
</PggmTable>
```

### Multi-Step Wizard

```razor
<PggmWizard OnWizardFinished="HandleWizardComplete" 
            OnBeforeSubmit="ValidateWizard">
    
    <PggmWizardForm Label="Personal Details" Active="true">
        <PggmInput @bind-Value="@wizard.FirstName" Placeholder="First Name" Required="true" />
        <PggmInput @bind-Value="@wizard.LastName" Placeholder="Last Name" Required="true" />
    </PggmWizardForm>
    
    <PggmWizardForm Label="Contact Information">
        <PggmInput @bind-Value="@wizard.Email" Type="@PggmInput.InputTypes.Email" Required="true" />
        <PggmInputPhone @bind-Value="@wizard.Phone" InitialCountry="NL" Required="true" />
    </PggmWizardForm>
    
    <PggmWizardForm Label="Review & Submit">
        <p>Please review your information before submitting.</p>
        <!-- Display summary -->
    </PggmWizardForm>
    
    <FinishContent>
        <PggmAlert Variant="success">
            Your information has been successfully submitted!
        </PggmAlert>
    </FinishContent>
</PggmWizard>
```

## Advanced Features

### Custom Styling

All components support additional CSS classes and attributes:

```razor
<PggmButton CssClass="my-custom-class" 
            Style="margin-top: 1rem;"
            data-analytics="submit-button">
    Submit
</PggmButton>
```

### Event Cancellation

Some components support event cancellation for advanced control:

```razor
<PggmWizard OnBeforeNavigate="ValidateBeforeNavigation">
    <!-- Wizard steps -->
</PggmWizard>

@code {
    private async Task ValidateBeforeNavigation(BeforeNavigateEventArgs args)
    {
        var isValid = await ValidateCurrentStep();
        if (!isValid)
        {
            args.Cancel = true; // Prevent navigation
        }
    }
}
```

### JavaScript Interop

Access underlying web component methods when needed:

```razor
<PggmTable @ref="tableRef">
    <!-- Table configuration -->
</PggmTable>

@code {
    private PggmTable tableRef;
    
    private async Task RefreshTable()
    {
        await tableRef.RefreshAsync();
    }
}
```

## Requirements

- **.NET 8.0** or later
- **Blazor WebAssembly** or **Blazor Server**
- Modern browser with **Web Components** support

## Browser Support

The PGGM Design System web components support:

- Chrome 60+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## Architecture

### Component Hierarchy

```
PggmComponentBase (Abstract base class)
├── PggmEventComponentBase (For components with complex events)
├── PggmInput (Text inputs)
├── PggmButton (Buttons and clickable elements)
├── PggmTable (Data tables)
└── [Other components...]
```

### Services

- **PggmDesignSystemService**: Manages web component initialization and JavaScript interop
- **ServiceCollectionExtensions**: Provides easy service registration

### JavaScript Integration

The library automatically handles:
- Loading PGGM Design System bundle
- Web component registration
- Event listener setup and cleanup
- Property synchronization between Blazor and web components

## Troubleshooting

### Common Issues

**Components not rendering correctly**
- Ensure `builder.Services.AddPggmComponents()` is called in `Program.cs`
- Verify `@using Pggm.Components` is in `_Imports.razor`

**JavaScript errors in browser console**
- Check that the PGGM Design System bundle loaded correctly
- Ensure your browser supports Web Components

**Styling issues**
- Verify PGGM CSS tokens are loading
- Check for CSS conflicts with your application styles

### Getting Help

- **Sample Application**: Run the included sample for working examples
- **API Documentation**: Use IntelliSense for parameter documentation  
- **PGGM Design System**: Reference the official design system documentation
- **Issues**: Report bugs on the project repository

## License

None

## Contributing

Contributions are welcome! Please ensure:

1. All new components follow the established patterns
2. Include comprehensive tests for new functionality
3. Update documentation for API changes
4. Follow the existing code style and conventions

---

**Package Information:**
- **Package ID**: Pggm.Components
- **Authors**: PGGM
- **Tags**: blazor, pggm, design-system, web-components, ui
- **Target Framework**: .NET 8.0
