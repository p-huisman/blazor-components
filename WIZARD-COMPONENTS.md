# PGGM Wizard Components

This document provides comprehensive documentation for the PGGM Wizard components that wrap the underlying web components.

## Components Overview

The wizard functionality is provided through four main components:

1. **PggmWizard** - The main wizard container
2. **PggmWizardForm** - Individual wizard steps/forms
3. **PggmProgressIndicator** - Container for progress visualization
4. **PggmProgressStep** - Individual progress steps

## PggmWizard

The main wizard component that orchestrates navigation between multiple forms.

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Method` | string | "POST" | HTTP method for form submission (GET or POST) |
| `Action` | string | "" | URL to submit the form to |
| `NextLabel` | string | "Volgende" | Label for the next button |
| `BackLabel` | string | "Vorige" | Label for the back button |
| `SubmitLabel` | string | "Verzenden" | Label for the submit button |
| `SuccessTitle` | string | "Bedankt" | Title shown on successful form submission |
| `ErrorTitle` | string | "Er is iets fout gegaan" | Title shown on form submission error |
| `SuccessContent` | RenderFragment | null | Content to display in the success slot |
| `ErrorContent` | RenderFragment | null | Content to display in the error slot |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `OnBeforeSubmit` | EventCallback<BeforeSubmitEventArgs> | Fired before form submission. Set `Cancel = true` in event args to prevent submission |
| `OnBeforeNavigate` | EventCallback<BeforeNavigateEventArgs> | Fired before navigation. Set `Cancel = true` in event args to prevent navigation |
| `OnAfterNavigate` | EventCallback<AfterNavigateEventArgs> | Fired after navigation |
| `OnWizardFinished` | EventCallback | Fired when wizard is finished |
| `OnWizardFormInvalid` | EventCallback<WizardFormInvalidEventArgs> | Fired when a wizard form is invalid |

### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `NavigateAsync` | string direction | Navigate to the next or previous step |
| `StartAsync` | - | Start the wizard |
| `FinishAsync` | bool success | Finish the wizard with the specified result |
| `GetFormDataAsync` | - | Get the current form data as a dictionary |

### Example Usage

```razor
<PggmWizard 
    Method="POST" 
    Action="/api/submit-wizard" 
    SuccessTitle="Success!" 
    ErrorTitle="Something went wrong"
    OnBeforeSubmit="HandleBeforeSubmit"
    OnWizardFinished="HandleWizardFinished">
    
    <ChildContent>
        <PggmWizardForm Label="Personal Information" Active="true">
            <!-- Form content -->
        </PggmWizardForm>
        
        <PggmWizardForm Label="Address Information">
            <!-- Form content -->
        </PggmWizardForm>
    </ChildContent>
    
    <SuccessContent>
        <p>Thank you for submitting your information!</p>
    </SuccessContent>
    
    <ErrorContent>
        <p>There was an error. Please try again.</p>
    </ErrorContent>
</PggmWizard>
```

## PggmWizardForm

Individual wizard step that contains form content.

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Label` | string | "" | The label for this wizard form step |
| `Active` | bool | false | Whether this form is the currently active step |
| `Disabled` | bool | false | Whether this form step is disabled |
| `NextDisabled` | bool | false | Whether the next button should be disabled for this step |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `OnWizardFormChanged` | EventCallback | Fired when the form changes (active, disabled, etc.) |
| `OnAfterNavigate` | EventCallback<AfterNavigateEventArgs> | Fired after navigation to this form |

### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `SlideOutAsync` | string direction | Slide out the form in the specified direction |
| `SlideInAsync` | string direction | Slide in the form from the specified direction |
| `CheckValidityAsync` | - | Check if the form is valid |
| `GetAllowNextAsync` | - | Get whether the next button should be allowed |

### Example Usage

```razor
<PggmWizardForm Label="Personal Information" Active="true">
    <form>
        <fieldset>
            <legend>Personal Details</legend>
            
            <div>
                <label for="firstName">First Name</label>
                <input id="firstName" name="firstName" required />
            </div>
            
            <div>
                <label for="lastName">Last Name</label>
                <input id="lastName" name="lastName" required />
            </div>
        </fieldset>
    </form>
</PggmWizardForm>
```

## PggmProgressIndicator

Container component for progress visualization.

### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `GetCurrentStepElementAsync` | - | Get the current step element |

### Example Usage

```razor
<PggmProgressIndicator>
    <PggmProgressStep Completed="true">
        <div>Step 1: Personal Info</div>
    </PggmProgressStep>
    <PggmProgressStep Current="true">
        <div>Step 2: Address</div>
    </PggmProgressStep>
    <PggmProgressStep>
        <div>Step 3: Confirmation</div>
    </PggmProgressStep>
</PggmProgressIndicator>
```

## PggmProgressStep

Individual progress step within a progress indicator.

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Last` | bool | false | Whether this is the last step in the progress indicator |
| `Completed` | bool | false | Whether this step has been completed |
| `Current` | bool | false | Whether this is the current step |

### Example Usage

```razor
<PggmProgressStep Completed="true">
    <div>Completed Step</div>
</PggmProgressStep>

<PggmProgressStep Current="true">
    <div>Current Step</div>
</PggmProgressStep>

<PggmProgressStep>
    <div>Upcoming Step</div>
</PggmProgressStep>
```

## Event Arguments

### BeforeSubmitEventArgs

```csharp
public class BeforeSubmitEventArgs : CancelableEventArgs
{
    public Dictionary<string, object>? FormData { get; set; }
    public bool Cancel { get; set; } // Set to true to prevent submission
}
```

### BeforeNavigateEventArgs

```csharp
public class BeforeNavigateEventArgs : CancelableEventArgs
{
    public string? Direction { get; set; } // "forwards" or "backwards"
    public bool Cancel { get; set; } // Set to true to prevent navigation
}
```

### AfterNavigateEventArgs

```csharp
public class AfterNavigateEventArgs
{
    public string? Direction { get; set; } // "forwards" or "backwards"
}
```

### WizardFormInvalidEventArgs

```csharp
public class WizardFormInvalidEventArgs
{
    public object? Form { get; set; }
}
```

## Event Cancellation

The `beforeSubmit` and `beforeNavigate` events support cancellation through the `Cancel` property in their event arguments. When you set `Cancel = true`, the underlying web component event will be prevented from executing its default behavior.

### Example Usage

```csharp
private Task HandleBeforeSubmit(BeforeSubmitEventArgs args)
{
    // Validate form data
    if (args.FormData?.ContainsKey("email") != true)
    {
        args.Cancel = true; // This will prevent form submission
        // Show error message to user
        return Task.CompletedTask;
    }
    
    // Allow submission to continue
    return Task.CompletedTask;
}

private Task HandleBeforeNavigate(BeforeNavigateEventArgs args)
{
    // Prevent navigation under certain conditions
    if (/* some condition */)
    {
        args.Cancel = true; // This will prevent navigation
        return Task.CompletedTask;
    }
    
    // Allow navigation to continue
    return Task.CompletedTask;
}
```

The cancellation is handled automatically by the component's JavaScript interop layer, which calls `event.preventDefault()` when the `Cancel` property is set to `true`.

### How It Works

1. The Blazor component registers cancelable event listeners for `beforeSubmit` and `beforeNavigate`
2. When these events fire, the JavaScript calls the .NET event handlers
3. The .NET handlers execute your custom logic and set the `Cancel` property if needed
4. The JavaScript checks the return value and calls `event.preventDefault()` if cancellation is requested
5. The web component respects the preventDefault and doesn't execute its default behavior

## Complete Example

For a complete working example, see the `WizardDemo.razor` page in the Sample project, which demonstrates:

- Multi-step form with validation
- Progress indicator integration
- Event handling
- Success and error states

## Best Practices

1. **Form Validation**: Always include proper HTML5 validation attributes (`required`, `type="email"`, etc.) in your form fields
2. **Labels**: Use proper `<label>` elements with `for` attributes for accessibility
3. **Fieldsets**: Group related form fields using `<fieldset>` and `<legend>` elements
4. **Error Handling**: Provide meaningful error messages in the `ErrorContent` slot
5. **Progress Feedback**: Use the progress indicator to show users their current position in the wizard
6. **Event Handling**: Implement event handlers to provide custom logic for navigation and form submission

## Dependencies

The wizard components depend on:

- `PggmComponentBase` or `PggmEventComponentBase` from the base classes
- `AttributeHelper` for attribute management
- The underlying PGGM web components (pggm-wizard, pggm-wizard-form, etc.)

Make sure to include the necessary JavaScript files that define the web components in your application.
