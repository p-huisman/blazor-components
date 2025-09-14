# PggmWizard

The main wizard component that orchestrates navigation between multiple forms.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Method` | string | "POST" | HTTP method for form submission (GET or POST) |
| `Action` | string | "" | URL to submit the form to |
| `NextLabel` | string | "Volgende" | Label for the next button |
| `BackLabel` | string | "Vorige" | Label for the back button |
| `SubmitLabel` | string | "Verzenden" | Label for the submit button |
| `FinishContent` | RenderFragment | null | Content to display in the finish slot |
| `ErrorContent` | RenderFragment | null | Content to display in the error slot |
| `ChildContent` | RenderFragment | null | The wizard forms and other content |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnBeforeSubmit` | EventCallback<BeforeSubmitEventArgs> | Fired before form submission. Set `Cancel = true` in event args to prevent submission |
| `OnBeforeNavigate` | EventCallback<BeforeNavigateEventArgs> | Fired before navigation. Set `Cancel = true` in event args to prevent navigation |
| `OnAfterNavigate` | EventCallback<AfterNavigateEventArgs> | Fired after navigation |
| `OnWizardFinished` | EventCallback | Fired when wizard is finished |
| `OnWizardFormInvalid` | EventCallback<WizardFormInvalidEventArgs> | Fired when a wizard form is invalid |

## Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `NavigateAsync` | string direction | Navigate to the next or previous step |
| `StartAsync` | - | Start the wizard |
| `FinishAsync` | bool success | Finish the wizard with the specified result |
| `GetFormDataAsync` | - | Get the current form data as a dictionary |

## Example Usage

### Basic Wizard

```razor
<PggmWizard 
    Method="POST" 
    Action="/api/submit-wizard" 
    OnBeforeSubmit="HandleBeforeSubmit"
    OnWizardFinished="HandleWizardFinished">
    
    <ChildContent>
        <PggmWizardForm Label="Personal Information" Active="true">
            <form>
                <fieldset>
                    <legend>Personal Details</legend>
                    <div>
                        <PggmLabel For="firstName">First Name</PggmLabel>
                        <PggmInput @bind-Value="firstName" Name="firstName" Required="true" />
                    </div>
                    <div>
                        <PggmLabel For="lastName">Last Name</PggmLabel>
                        <PggmInput @bind-Value="lastName" Name="lastName" Required="true" />
                    </div>
                </fieldset>
            </form>
        </PggmWizardForm>
        
        <PggmWizardForm Label="Contact Information">
            <form>
                <fieldset>
                    <legend>Contact Details</legend>
                    <div>
                        <PggmLabel For="email">Email</PggmLabel>
                        <PggmInput @bind-Value="email" Name="email" Type="email" Required="true" />
                    </div>
                    <div>
                        <PggmLabel For="phone">Phone</PggmLabel>
                        <PggmInputPhone @bind-Value="phone" Name="phone" />
                    </div>
                </fieldset>
            </form>
        </PggmWizardForm>
    </ChildContent>
    
    <FinishContent>
        <div class="success-message">
            <h3>Thank you!</h3>
            <p>Your information has been submitted successfully.</p>
        </div>
    </FinishContent>
    
    <ErrorContent>
        <div class="error-message">
            <h3>Error</h3>
            <p>There was an error processing your submission. Please try again.</p>
        </div>
    </ErrorContent>
</PggmWizard>

@code {
    private string firstName = string.Empty;
    private string lastName = string.Empty;
    private string email = string.Empty;
    private string phone = string.Empty;

    private Task HandleBeforeSubmit(BeforeSubmitEventArgs args)
    {
        // Validate form data before submission
        if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
        {
            args.Cancel = true; // Prevent submission
            // Show validation error
            return Task.CompletedTask;
        }
        
        // Allow submission to continue
        return Task.CompletedTask;
    }

    private Task HandleWizardFinished()
    {
        // Handle successful completion
        Console.WriteLine("Wizard completed successfully!");
        return Task.CompletedTask;
    }
}
```

### Wizard with Progress Indicator

```razor
<PggmWizard OnBeforeNavigate="HandleBeforeNavigate">
    <ChildContent>
        <PggmProgressIndicator>
            <PggmProgressStep Completed="true">
                <span>Step 1: Personal Info</span>
            </PggmProgressStep>
            <PggmProgressStep Current="true">
                <span>Step 2: Address</span>
            </PggmProgressStep>
            <PggmProgressStep>
                <span>Step 3: Confirmation</span>
            </PggmProgressStep>
        </PggmProgressIndicator>
        
        <!-- Wizard forms here -->
    </ChildContent>
</PggmWizard>
```

## Event Handling

### Before Submit Event

```csharp
private Task HandleBeforeSubmit(BeforeSubmitEventArgs args)
{
    // Access form data
    var formData = args.FormData;
    
    // Validate data
    if (!IsValidData(formData))
    {
        args.Cancel = true; // Prevent form submission
        ShowValidationErrors();
    }
    
    return Task.CompletedTask;
}
```

### Before Navigate Event

```csharp
private Task HandleBeforeNavigate(BeforeNavigateEventArgs args)
{
    // Check if user can navigate (e.g., form is valid)
    if (args.Direction == "forwards" && !IsCurrentStepValid())
    {
        args.Cancel = true; // Prevent navigation
        ShowValidationMessage();
    }
    
    return Task.CompletedTask;
}
```

## Customization

### Custom Button Labels

```razor
<PggmWizard 
    NextLabel="Continue"
    BackLabel="Previous"
    SubmitLabel="Complete">
    <!-- Content -->
</PggmWizard>
```

### Custom Finish and Error Content

```razor
<PggmWizard>
    <!-- Wizard forms -->
    
    <FinishContent>
        <div class="custom-success">
            <PggmIcon Name="checkmark" />
            <h2>Registration Complete!</h2>
            <p>Welcome to our platform.</p>
            <PggmButton OnClick="NavigateToAccount">Go to Account</PggmButton>
        </div>
    </FinishContent>
    
    <ErrorContent>
        <div class="custom-error">
            <PggmIcon Name="warning" />
            <h2>Submission Failed</h2>
            <p>Please check your information and try again.</p>
            <PggmButton OnClick="RetrySubmission">Retry</PggmButton>
        </div>
    </ErrorContent>
</PggmWizard>
```

## Best Practices

1. **Form Validation**: Include proper HTML5 validation attributes and Blazor validation
2. **Progressive Enhancement**: Show progress indicators to guide users
3. **Error Handling**: Provide meaningful error messages in the ErrorContent slot
4. **Accessibility**: Use proper labels, fieldsets, and legends
5. **Data Persistence**: Consider saving form data to prevent loss on navigation

## Accessibility

- Uses semantic HTML form elements
- Provides proper ARIA attributes
- Supports keyboard navigation
- Screen reader compatible
- Maintains focus management during navigation

## Dependencies

- Inherits from `PggmEventComponentBase`
- Requires `BeforeSubmitEventArgs`, `BeforeNavigateEventArgs`, and other wizard event args
- Works with `PggmWizardForm`, `PggmProgressIndicator`, and `PggmProgressStep` components
- Requires the PGGM design system web components JavaScript library

For complete implementation details, see the [WIZARD-COMPONENTS.md](../../WIZARD-COMPONENTS.md) documentation.