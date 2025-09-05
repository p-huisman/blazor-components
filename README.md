# Blazor PGGM Components

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
- **Button**: Interactive buttons with various styles and sizes
- **Card**: Content containers with elevation and styling options

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
dotnet add package Blazor.Pggm.Components
```

### 2. Register Services

In your `Program.cs` file:

```csharp
using Blazor.Pggm.Components.Extensions;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
// ... other configuration

// Add PGGM Components services
builder.Services.AddPggmComponents();

await builder.Build().RunAsync();
```

### 3. Add Using Statement

In your `_Imports.razor` file:

```razor
@using Blazor.Pggm.Components
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

### Card Component

```razor
<Card Elevation="2" Variant="highlighted">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
</Card>
```

### Nested Components

```razor
<Card Elevation="1">
    <h3>User Profile</h3>
    
    <Accordion Title="Personal Information" Expanded="true">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
    </Accordion>
    
    <Accordion Title="Preferences">
        <p><strong>Language:</strong> Dutch</p>
        <p><strong>Notifications:</strong> Email</p>
    </Accordion>
    
    <div style="margin-top: 1rem;">
        <Button Variant="primary" OnClick="SaveProfile">Save</Button>
        <Button Variant="secondary" OnClick="Cancel">Cancel</Button>
    </div>
</Card>
```

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

### Card

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| Elevation | string? | null | Card elevation level |
| Variant | string? | null | Card style variant |
| Padded | bool | true | Whether the card has default padding |
| CssClass | string? | null | Additional CSS classes |
| ChildContent | RenderFragment? | null | Card content |

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
