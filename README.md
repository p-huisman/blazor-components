# PGGM Blazor Components

A Blazor component library that wraps web components from the PGGM Design System, making them available as native Blazor components.

## 🚀 Live Demo

**[Explore the Interactive Demo →](https://p-huisman.github.io/blazor-components/)**

Experience all PGGM Blazor components in action! Try out forms, wizards, accordions, and more with real working examples and source code snippets.

✨ **What you'll find:**
- **Interactive examples** for every component
- **Form validation demos** with real-time feedback
- **Multi-step wizard flows** showing complete user journeys
- **Responsive design** testing across different screen sizes
- **Accessibility features** in action

*Perfect for developers who want to see before they build!*

## Features

- 🎨 **PGGM Design System Integration**: Seamless integration with PGGM's web components
- 🔧 **Type-safe Blazor Components**: Strongly-typed parameters and event handling
- 📦 **Easy to Use**: Simple NuGet package installation and service registration
- 🌐 **Web Component Interop**: Efficient JavaScript interop for web component interactions
- 🎯 **Production Ready**: Built with .NET 8 and modern Blazor practices

## Available Components

### Form Components
- [Accordion](docs/components/accordion.md) - Collapsible content panels
- [Accordion Item](docs/components/accordion-item.md) - Individual accordion sections
- [Accordion Item Title](docs/components/accordion-item-title.md) - Accordion section titles
- [Button](docs/components/button.md) - Interactive button component  
- [Checkbox](docs/components/checkbox.md) - Checkbox input control
- [Input](docs/components/input.md) - Text input field
- [Label](docs/components/label.md) - Form field labels
- [Select](docs/components/select.md) - Dropdown selection control

### UI Components  
- [Alert](docs/components/alert.md) - Contextual feedback messages
- [Dialog](docs/components/dialog.md) - Modal dialog component

### Wizard Components
- [Wizard](docs/components/wizard.md) - Multi-step form wizard container
- [Wizard Form](docs/components/wizard-form.md) - Individual wizard step forms
- [Progress Indicator](docs/components/progress-indicator.md) - Progress visualization container
- [Progress Step](docs/components/progress-step.md) - Individual progress steps

### Additional Components
The following components are also available (documentation in progress):
- PggmErrorMessage - Error message display
- PggmFieldset - Form field grouping
- PggmFileUpload - File upload control
- PggmHeader - Page header component
- PggmIcon - Icon display
- PggmInputDate - Date input field
- PggmInputIban - IBAN input field
- PggmInputPhone - Phone number input field
- PggmLink - Link component
- PggmRadio - Radio button control
- PggmSlider - Range slider control
- PggmSwitch - Toggle switch control
- PggmTab - Tab component
- PggmTable - Data table component
- PggmTextarea - Multi-line text input
- PggmTooltip - Tooltip component

## Installation

### 1. Install the NuGet Package

```bash
dotnet add package Pggm.Components
```

### 2. Register Services

In your `Program.cs` file:

```csharp
using Pggm.Components.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

// Add PGGM Components services
builder.Services.AddPggmComponents();

var app = builder.Build();

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapRazorPages();
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
```

### 3. Add Using Statement

In your `_Imports.razor` file:

```razor
@using Pggm.Components
```

## Quick Start Examples

### Basic Form

```razor
<EditForm Model="contactForm" OnValidSubmit="HandleSubmit">
    <DataAnnotationsValidator />
    
    <div class="form-group">
        <PggmLabel For="name">Name:</PggmLabel>
        <PggmInput id="name" @bind-Value="contactForm.Name" Required="true" />
    </div>
    
    <div class="form-group">
        <PggmLabel For="email">Email:</PggmLabel>
        <PggmInput id="email" Type="email" @bind-Value="contactForm.Email" Required="true" />
    </div>
    
    <PggmButton Type="submit" Appearance="primary">Submit</PggmButton>
</EditForm>

@code {
    private ContactFormModel contactForm = new();

    private void HandleSubmit()
    {
        // Handle form submission
    }

    public class ContactFormModel
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}
```

### Accordion

```razor
<PggmAccordion AllowMultiple="true">
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Section 1</PggmAccordionItemTitle>
        <p>Content for the first section.</p>
    </PggmAccordionItem>
    <PggmAccordionItem>
        <PggmAccordionItemTitle>Section 2</PggmAccordionItemTitle>
        <p>Content for the second section.</p>
    </PggmAccordionItem>
</PggmAccordion>
```

### Wizard

```razor
<PggmWizard OnWizardFinished="HandleRegistrationComplete">
    <ChildContent>
        <PggmWizardForm Label="Personal Information" Active="true">
            <form>
                <fieldset>
                    <legend>Personal Details</legend>
                    <div class="form-group">
                        <PggmLabel For="firstName">First Name</PggmLabel>
                        <PggmInput id="firstName" @bind-Value="registration.FirstName" Required="true" />
                    </div>
                </fieldset>
            </form>
        </PggmWizardForm>
        
        <PggmWizardForm Label="Account Setup">
            <form>
                <fieldset>
                    <legend>Account Information</legend>
                    <div class="form-group">
                        <PggmLabel For="username">Username</PggmLabel>
                        <PggmInput id="username" @bind-Value="registration.Username" Required="true" />
                    </div>
                </fieldset>
            </form>
        </PggmWizardForm>
    </ChildContent>
    
    <FinishContent>
                <PggmNotification Type="success" Title="Registration Complete">
          Your account has been successfully created and is ready to use.
        </PggmNotification>
    </FinishContent>
</PggmWizard>

@code {
    private RegistrationModel registration = new();

    private Task HandleRegistrationComplete()
    {
        Console.WriteLine("Registration completed!");
        return Task.CompletedTask;
    }

    public class RegistrationModel
    {
        public string FirstName { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
    }
}
```

## Documentation

For detailed documentation and examples:

- **[Getting Started Guide](docs/getting-started.md)** - Installation and setup instructions
- **[API Reference](docs/api-reference.md)** - Complete API documentation
- **[Component Documentation](docs/components/)** - Individual component guides with examples

### Additional Documentation

- **[Bundle Management](docs/bundle-management.md)** - Managing PGGM design system bundles
- **[CORS Configuration](docs/cors-configuration.md)** - Cross-origin resource sharing setup
- **[Event Handling Fix](docs/event-handling-fix.md)** - Event handling improvements and fixes
- **[Wizard Components](WIZARD-COMPONENTS.md)** - Detailed wizard component documentation

## Architecture

All PGGM Blazor components are built on top of the PGGM design system web components and follow these principles:

- **Consistent API**: All components follow similar patterns for properties, events, and methods
- **Accessibility**: Built-in support for screen readers, keyboard navigation, and ARIA attributes
- **Type Safety**: Full TypeScript-like intellisense support in Blazor
- **Performance**: Optimized rendering and minimal JavaScript interop
- **Customization**: Flexible styling through CSS classes and custom attributes

### Base Classes

The component library uses two main base classes:

- **PggmComponentBase**: For simple components without complex event handling
- **PggmEventComponentBase**: For components that need advanced event management and JavaScript interop

### Web Component Integration

The library automatically:
1. Loads the PGGM Design System CSS tokens (locally hosted)
2. Loads the PGGM Design System bundle (locally hosted)
3. Initializes web components on first render  
4. Provides .NET-friendly APIs for web component properties
5. Handles events and data binding

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

## Contributing

When contributing new component documentation:

1. Follow the established template structure
2. Include comprehensive examples
3. Document all properties, events, and methods
4. Provide accessibility guidelines
5. Include best practices section

For code contributions:
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
- Review the [documentation](docs/) for detailed component guides
- Review the PGGM Design System documentation