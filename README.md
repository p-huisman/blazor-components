# PGGM Components

A Blazor component library that wraps web components from the PGGM Design System, making them available as native Blazor components.

## Features

- 🎨 **PGGM Design System Integration**: Seamless integration with PGGM's web components
- 🔧 **Type-safe Blazor Components**: Strongly-typed parameters and event handling
- 📦 **Easy to Use**: Simple NuGet package installation and service registration
- 🌐 **Web Component Interop**: Efficient JavaScript interop for web component interactions
- 🎯 **Production Ready**: Built with .NET 8 and modern Blazor practices

## Components

### Available Components

- **Accordion**: Expandable/collapsible content sections
- **Alert**: Informational messages and notifications with dismissal support
- **Button**: Interactive buttons with various styles and sizes
- **Checkbox**: Form input controls with validation support
- **Dialog**: Modal dialogs with customizable actions and content
- **Error Message**: Validation error display components
- **Fieldset**: Form grouping containers with labels and descriptions
- **Input**: Text input controls with comprehensive validation and event handling
- **Input Phone**: Specialized phone number input with country selection and formatting
- **Slider**: Range input controls for numeric value selection

### Component Features

All components include:
- Strongly-typed parameters
- Event handling support
- CSS class customization
- Additional attributes support
- Accessibility features from PGGM Design System

## Installation

### 1. Install the NuGet Package

```bash
dotnet add package Pggm.Components
```

### 2. Register Services

In your `Program.cs` file:

```csharp
using Pggm.Components.Extensions;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
// ... other configuration

// Add PGGM Components services
builder.Services.AddPggmComponents();

await builder.Build().RunAsync();
```

### 3. Add Using Statement

In your `_Imports.razor` file:

```razor
@using Pggm.Components
```

## Usage Examples

### Accordion Component

```razor
<Accordion Title="Frequently Asked Questions" Expanded="false">
    <p>This is the content inside the accordion.</p>
    <p>It can contain any HTML or Blazor components.</p>
</Accordion>
```

### Button Component

```razor
<Button Variant="primary" Size="medium" OnClick="HandleClick">
    Click Me
</Button>

@code {
    private void HandleClick()
    {
        // Handle button click
    }
}
```

### Input Component

```razor
<!-- Basic text input with two-way binding -->
<PggmInput @bind-Value="userInput" 
           Type="@PggmInput.InputTypes.Text"
           Placeholder="Enter your name..."
           Required="true" />

<!-- Email input with validation -->
<PggmInput @bind-Value="emailAddress" 
           Type="@PggmInput.InputTypes.Email"
           Placeholder="Enter your email..."
           OnChange="HandleEmailChange" />

<!-- Number input with constraints -->
<PggmInput @bind-Value="ageValue" 
           Type="@PggmInput.InputTypes.Number"
           Min="18"
           Max="120"
           Placeholder="Enter your age..." />

@code {
    private string? userInput = "";
    private string? emailAddress = "";
    private string? ageValue = "";
    
    private void HandleEmailChange(ChangeEventArgs args)
    {
        // Handle email validation or formatting
    }
}
```

### Input Phone Component

```razor
<!-- Basic phone input with top countries -->
<PggmInputPhone @bind-Value="phoneNumber" 
                TopCountries="NL,BE,DE,FR"
                InitialCountry="NL"
                Required="true" />

<!-- Phone input with events -->
<PggmInputPhone @bind-Value="phoneWithEvents" 
                InitialCountry="NL"
                OnChange="HandlePhoneChange" />

<!-- Mobile numbers only validation -->
<PggmInputPhone @bind-Value="mobilePhone" 
                PhoneNumberType="@PggmInputPhone.PhoneNumberTypes.Mobile"
                InitialCountry="NL"
                Name="mobile-phone" />

<!-- Fixed line numbers only validation -->
<PggmInputPhone @bind-Value="fixedLinePhone" 
                PhoneNumberType="@PggmInputPhone.PhoneNumberTypes.FixedLine"
                Name="fixed-line-phone" />

<!-- European countries priority -->
<PggmInputPhone @bind-Value="europeanPhone" 
                TopCountries="NL,BE,DE,FR,ES,IT"
                CountryLabel="Select your country..."
                InitialCountry="NL"
                Name="european-phone" />

@code {
    private string? phoneNumber = "";
    private string? internationalPhone = "";
    private string? simplePhone = "";
    private string? mobilePhone = "";
    private string? fixedLinePhone = "";
    private string? europeanPhone = "";
    
    private void HandlePhoneChange(ChangeEventArgs args)
    {
        // Handle phone number validation or formatting
    }
}
```

**Key Parameters:**
- `InitialCountry`: Sets the initial country selection (e.g., "NL", "BE", "DE")
- `TopCountries`: Comma-separated list of countries to show at the top of the dropdown
- `CountryLabel`: Placeholder text for the country selector
- `PhoneNumberType`: Validates specific phone number types (Mobile, FixedLine, etc.)

### Nested Components


## Component API Reference

### Accordion

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| Title | string? | null | The title text for the accordion header |
| Expanded | bool | false | Whether the accordion is expanded by default |
| Disabled | bool | false | Whether the accordion is disabled |
| CssClass | string? | null | Additional CSS classes |
| ChildContent | RenderFragment? | null | The content inside the accordion |

### Button

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| Variant | string? | null | Button style variant (primary, secondary, etc.) |
| Size | string? | null | Button size (small, medium, large) |
| Disabled | bool | false | Whether the button is disabled |
| Type | string | "button" | HTML button type (button, submit, reset) |
| OnClick | EventCallback<MouseEventArgs> | - | Click event handler |
| CssClass | string? | null | Additional CSS classes |
| ChildContent | RenderFragment? | null | Button content |



## Development

### Building the Library

```bash
dotnet build
```

### Running the Sample Application

```bash
cd Sample
dotnet run
```

The sample application will be available at `https://localhost:5001` and includes a comprehensive demo of all components.

### Testing

```bash
dotnet test
```

## Architecture

### Component Structure

- **Base Classes**: `PggmComponentBase` provides common functionality for all components
- **Services**: `PggmDesignSystemService` manages web component initialization and interaction
- **JavaScript Interop**: Efficient communication with PGGM web components
- **Type Safety**: Strongly-typed parameters and event handling

### Web Component Integration

The library automatically:
1. Loads the PGGM Design System CSS tokens (locally hosted)
2. Loads the PGGM Design System bundle (locally hosted)
3. Initializes web components on first render  
4. Provides .NET-friendly APIs for web component properties
5. Handles events and data binding

**Local Asset Strategy**: The PGGM bundle.js and tokens.css are included locally to avoid CORS issues and ensure reliable loading.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## PGGM Design System

This library wraps components from the PGGM Design System. For more information about the design system and available components, visit:

- [PGGM Design System Documentation](https://staticweb-cdn.azureedge.net/design-system/?path=/docs/components-accordion--accordion)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
- Create an issue on GitHub
- Check the sample application for usage examples
- Review the PGGM Design System documentation
