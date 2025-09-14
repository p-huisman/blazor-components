# AGENT.md - Development Best Practices

This document outlines the development best practices, patterns, and conventions used in the PGGM Blazor Components project. These guidelines ensure consistency, maintainability, and quality across the codebase.

## Project Architecture

### Component Structure
- **Base Classes**: All components inherit from either `PggmComponentBase` or `PggmEventComponentBase`
- **Web Component Wrapping**: Each Blazor component wraps a corresponding PGGM Design System web component
- **Consistent Naming**: Components follow the `Pggm[ComponentName]` naming convention
- **Modular Design**: Related components are grouped (e.g., Accordion, AccordionItem, AccordionItemTitle)

### Directory Organization
```
blazor-components/
├── src/
│   ├── Components/           # Blazor component implementations
│   ├── Services/            # JavaScript interop and utilities
│   └── wwwroot/            # Static assets (CSS, JS bundles)
├── docs/
│   ├── components/         # Individual component documentation
│   ├── getting-started.md  # Installation guide
│   └── api-reference.md    # Complete API reference
├── Sample/                 # Demo application
│   └── Pages           
│       └── Components     # Hold ComponentName.razor demo files    
└── README.md              # Main project documentation
```

## Blazor Component Best Practices

### 1. Component Inheritance
```csharp
// Simple components without events
public partial class PggmButton : PggmComponentBase
{
    // Implementation
}

// Components with complex event handling
public partial class PggmWizard : PggmEventComponentBase
{
    // Implementation with JavaScript interop
}
```

### 2. Parameter Definitions
```csharp
// Use descriptive names and provide defaults
[Parameter] public string Variant { get; set; } = "primary";
[Parameter] public bool Disabled { get; set; } = false;
[Parameter] public RenderFragment? ChildContent { get; set; }

// Event callbacks for user interactions
[Parameter] public EventCallback<MouseEventArgs> OnClick { get; set; }
```

### 3. JavaScript Interop
```csharp
// Use IJSRuntime for web component interaction
protected override async Task OnAfterRenderAsync(bool firstRender)
{
    if (firstRender)
    {
        await JSRuntime.InvokeVoidAsync("initializeComponent", ElementRef);
    }
}
```

### 4. Lifecycle Management
```csharp
// Proper disposal of resources
protected override async ValueTask DisposeAsync(bool disposing)
{
    if (disposing && JSRuntime != null)
    {
        await JSRuntime.InvokeVoidAsync("disposeComponent", ElementRef);
    }
    await base.DisposeAsync(disposing);
}
```

## Documentation Standards

### 1. Component Documentation Structure
Each component documentation file should include:
- **Properties table** with types, defaults, and descriptions
- **Events table** with event types and descriptions
- **Methods table** where applicable
- **Comprehensive examples** showing real-world usage
- **Form integration** examples with validation
- **Accessibility guidelines**
- **Best practices** section

### 2. Code Example Format
```markdown
## Example Usage

```razor
<PggmButton Variant="primary" OnClick="HandleClick">
    Submit Form
</PggmButton>
```

```csharp
private void HandleClick(MouseEventArgs e)
{
    // Handle button click
}
```
```

### 3. Property Documentation
```markdown
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Variant` | string | "primary" | The button style variant |
| `Disabled` | bool | false | Whether the button is disabled |
```

## Code Quality Standards

### 1. Naming Conventions
- **Components**: PascalCase with `Pggm` prefix (e.g., `PggmButton`)
- **Parameters**: PascalCase (e.g., `NextLabel`)
- **Methods**: PascalCase with `Async` suffix for async methods
- **Events**: PascalCase starting with `On` (e.g., `OnClick`)
- **Files**: kebab-case for documentation (e.g., `getting-started.md`)

### 2. Error Handling
```csharp
// Graceful error handling with logging
try
{
    await JSRuntime.InvokeVoidAsync("componentMethod", parameters);
}
catch (JSException ex)
{
    // Log error and provide fallback
    Console.WriteLine($"JavaScript error: {ex.Message}");
}
```

### 3. Accessibility
- Always include proper ARIA attributes
- Ensure keyboard navigation support
- Provide meaningful labels and descriptions
- Test with screen readers

### 4. Performance
- Use `@key` directives for list items
- Implement proper disposal patterns
- Minimize JavaScript interop calls
- Use `StateHasChanged()` judiciously

## Form Integration Patterns

### 1. EditForm Integration
```razor
<EditForm Model="model" OnValidSubmit="HandleValidSubmit">
    <DataAnnotationsValidator />
    <ValidationSummary />
    
    <PggmInput @bind-Value="model.Name" Label="Name" Required="true" />
    <PggmButton Type="submit">Submit</PggmButton>
</EditForm>
```

### 2. Two-Way Data Binding
```csharp
[Parameter] public string Value { get; set; } = string.Empty;
[Parameter] public EventCallback<string> ValueChanged { get; set; }

private async Task UpdateValue(string newValue)
{
    Value = newValue;
    await ValueChanged.InvokeAsync(Value);
}
```

## Testing Guidelines

### 1. Unit Testing
- Test component rendering with different parameter combinations
- Verify event callbacks are triggered correctly
- Test form validation scenarios
- Mock JavaScript interop calls

### 2. Integration Testing
- Test component interactions within forms
- Verify wizard navigation flows
- Test accessibility features
- Validate web component integration

## Versioning and Release

### 1. Semantic Versioning
- **MAJOR**: Breaking changes to component APIs
- **MINOR**: New components or non-breaking feature additions
- **PATCH**: Bug fixes and documentation updates

### 2. Breaking Change Guidelines
- Always provide migration guides
- Maintain backward compatibility when possible
- Use `[Obsolete]` attributes before removing features
- Document breaking changes in release notes

## Bundle Management

### 1. PGGM Design System Integration
- Host design system bundles locally for reliability
- Version bundles alongside component releases
- Provide fallback loading mechanisms
- Document bundle update procedures

### 2. CSS and JavaScript
- Minimize external dependencies
- Use CSS custom properties for theming
- Implement progressive enhancement
- Optimize bundle sizes

## Security Considerations

### 1. Input Validation
- Sanitize all user inputs
- Validate parameters at component boundaries
- Use parameterized queries for data operations
- Implement proper CORS policies

### 2. XSS Prevention
- Escape HTML content by default
- Use `MarkupString` only when necessary
- Validate and sanitize rich content
- Implement Content Security Policy

## Development Workflow

### 1. Branch Strategy
- Use feature branches for new components
- Require pull request reviews
- Run automated tests on all branches
- Maintain clean commit history

### 2. Code Review Checklist
- [ ] Component follows established patterns
- [ ] Documentation is complete and accurate
- [ ] Examples are tested and working
- [ ] Accessibility requirements are met
- [ ] Performance implications are considered
- [ ] Breaking changes are documented

## Tools and IDE Setup

### 1. Required Extensions (VS Code)
- C# for Visual Studio Code
- Blazor WASM Debugging
- HTML CSS Support
- EditorConfig for VS Code

### 2. Code Formatting
- Use EditorConfig for consistent formatting
- Enable format on save
- Follow established indentation (4 spaces)
- Use consistent line endings (LF)

## Continuous Integration

### 1. Build Pipeline
- Compile all projects successfully
- Run unit and integration tests
- Generate documentation
- Package NuGet artifacts

### 2. Quality Gates
- Minimum test coverage threshold
- No build warnings in release mode
- Documentation completeness check
- Accessibility validation

## Common Patterns

### 1. Event Handling
```csharp
// Consistent event parameter naming
[Parameter] public EventCallback<bool> OnToggle { get; set; }
[Parameter] public EventCallback<string> OnValueChanged { get; set; }
[Parameter] public EventCallback<MouseEventArgs> OnClick { get; set; }
```

### 2. Conditional Rendering
```razor
@if (ShowContent)
{
    <div class="content">
        @ChildContent
    </div>
}
```

### 3. CSS Class Management
```csharp
private string CssClass => new CssBuilder()
    .AddClass("pggm-component")
    .AddClass($"pggm-component--{Variant}")
    .AddClass("pggm-component--disabled", Disabled)
    .AddClass(Class)
    .Build();
```

## Anti-Patterns to Avoid

### 1. Component Design
- ❌ Don't create monolithic components
- ❌ Avoid tight coupling between components
- ❌ Don't expose internal implementation details
- ❌ Avoid inconsistent parameter naming

### 2. Performance
- ❌ Don't call JavaScript on every render
- ❌ Avoid creating new objects in render methods
- ❌ Don't use string concatenation for CSS classes
- ❌ Avoid unnecessary re-renders

### 3. Documentation
- ❌ Don't leave examples untested
- ❌ Avoid incomplete property documentation
- ❌ Don't forget accessibility guidelines
- ❌ Avoid outdated code samples

## Conclusion

These best practices ensure that the PGGM Blazor Components library remains maintainable, performant, and user-friendly. When contributing to the project, always refer to this guide to maintain consistency and quality.

For questions about these practices or suggestions for improvements, please create an issue or start a discussion in the project repository.