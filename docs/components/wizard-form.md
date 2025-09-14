# PggmWizardForm

Individual wizard step that contains form content within a PggmWizard component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Label` | string | "" | The label for this wizard form step |
| `Active` | bool | false | Whether this form is the currently active step |
| `Disabled` | bool | false | Whether this form step is disabled |
| `NextDisabled` | bool | false | Whether the next button should be disabled for this step |
| `ChildContent` | RenderFragment | null | The form content for this wizard step |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnWizardFormChanged` | EventCallback | Fired when the form changes (active, disabled, etc.) |
| `OnAfterNavigate` | EventCallback<AfterNavigateEventArgs> | Fired after navigation to this form |

## Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `SlideOutAsync` | string direction | Slide out the form in the specified direction |
| `SlideInAsync` | string direction | Slide in the form from the specified direction |
| `CheckValidityAsync` | - | Check if the form is valid |
| `GetAllowNextAsync` | - | Get whether the next button should be allowed |

## Example Usage

### Basic Wizard Form

```razor
<PggmWizard>
    <PggmWizardForm Label="Personal Information" Active="true">
        <form>
            <fieldset>
                <legend>Personal Details</legend>
                
                <div class="form-group">
                    <PggmLabel For="firstName">First Name</PggmLabel>
                    <PggmInput id="firstName" name="firstName" @bind-Value="firstName" Required="true" />
                </div>
                
                <div class="form-group">
                    <PggmLabel For="lastName">Last Name</PggmLabel>
                    <PggmInput id="lastName" name="lastName" @bind-Value="lastName" Required="true" />
                </div>
                
                <div class="form-group">
                    <PggmLabel For="birthDate">Date of Birth</PggmLabel>
                    <PggmInputDate id="birthDate" name="birthDate" @bind-Value="birthDate" />
                </div>
            </fieldset>
        </form>
    </PggmWizardForm>
    
    <PggmWizardForm Label="Contact Information">
        <form>
            <fieldset>
                <legend>Contact Details</legend>
                
                <div class="form-group">
                    <PggmLabel For="email">Email Address</PggmLabel>
                    <PggmInput id="email" name="email" Type="email" @bind-Value="email" Required="true" />
                </div>
                
                <div class="form-group">
                    <PggmLabel For="phone">Phone Number</PggmLabel>
                    <PggmInputPhone id="phone" name="phone" @bind-Value="phone" />
                </div>
            </fieldset>
        </form>
    </PggmWizardForm>
</PggmWizard>

@code {
    private string firstName = string.Empty;
    private string lastName = string.Empty;
    private DateTime? birthDate;
    private string email = string.Empty;
    private string phone = string.Empty;
}
```

### Conditional Next Button

```razor
<PggmWizardForm Label="Terms and Conditions" NextDisabled="@(!termsAccepted)">
    <div class="terms-content">
        <h3>Terms and Conditions</h3>
        <div class="terms-text">
            <!-- Terms content -->
            <p>Please read and accept our terms and conditions...</p>
        </div>
        
        <PggmCheckbox @bind-Checked="termsAccepted">
            I have read and accept the terms and conditions
        </PggmCheckbox>
    </div>
</PggmWizardForm>

@code {
    private bool termsAccepted = false;
}
```

### Form with Validation

```razor
<PggmWizardForm Label="Account Setup" OnAfterNavigate="HandleNavigateToAccount">
    <EditForm Model="accountModel" OnValidSubmit="HandleAccountSetup">
        <DataAnnotationsValidator />
        
        <fieldset>
            <legend>Account Information</legend>
            
            <div class="form-group">
                <PggmLabel For="username">Username</PggmLabel>
                <PggmInput id="username" @bind-Value="accountModel.Username" Required="true" />
                <ValidationMessage For="() => accountModel.Username" />
            </div>
            
            <div class="form-group">
                <PggmLabel For="password">Password</PggmLabel>
                <PggmInput id="password" Type="password" @bind-Value="accountModel.Password" Required="true" />
                <ValidationMessage For="() => accountModel.Password" />
            </div>
            
            <div class="form-group">
                <PggmLabel For="confirmPassword">Confirm Password</PggmLabel>
                <PggmInput id="confirmPassword" Type="password" @bind-Value="accountModel.ConfirmPassword" Required="true" />
                <ValidationMessage For="() => accountModel.ConfirmPassword" />
            </div>
        </fieldset>
    </EditForm>
</PggmWizardForm>

@code {
    private AccountModel accountModel = new();

    private Task HandleNavigateToAccount(AfterNavigateEventArgs args)
    {
        Console.WriteLine("Navigated to account setup step");
        return Task.CompletedTask;
    }

    private void HandleAccountSetup()
    {
        Console.WriteLine("Account setup completed");
    }

    public class AccountModel
    {
        [Required]
        [StringLength(50, MinimumLength = 3)]
        public string Username { get; set; } = string.Empty;

        [Required]
        [StringLength(100, MinimumLength = 8)]
        public string Password { get; set; } = string.Empty;

        [Required]
        [Compare(nameof(Password), ErrorMessage = "Passwords do not match")]
        public string ConfirmPassword { get; set; } = string.Empty;
    }
}
```

### Disabled Form Step

```razor
<PggmWizardForm Label="Premium Features" Disabled="@(!hasPremiumAccess)">
    <div class="premium-content">
        @if (!hasPremiumAccess)
        {
            <div class="upgrade-notice">
                <h3>Premium Features</h3>
                <p>Upgrade to premium to access these features.</p>
                <PggmButton OnClick="HandleUpgrade">Upgrade Now</PggmButton>
            </div>
        }
        else
        {
            <!-- Premium form content -->
            <form>
                <!-- Premium features form -->
            </form>
        }
    </div>
</PggmWizardForm>

@code {
    private bool hasPremiumAccess = false;

    private void HandleUpgrade()
    {
        // Handle upgrade logic
    }
}
```

## Form Structure

Each wizard form should contain proper HTML form structure:

```razor
<PggmWizardForm Label="Step Label">
    <form>
        <fieldset>
            <legend>Section Title</legend>
            
            <!-- Form controls here -->
            <div class="form-group">
                <PggmLabel For="field">Field Label</PggmLabel>
                <PggmInput id="field" name="field" @bind-Value="value" />
            </div>
        </fieldset>
    </form>
</PggmWizardForm>
```

## Navigation Control

You can control navigation programmatically:

```razor
<PggmWizardForm Label="Review" @ref="reviewForm">
    <div class="review-content">
        <!-- Review content -->
        
        <div class="actions">
            <PggmButton OnClick="GoBackToEdit">Edit Information</PggmButton>
            <PggmButton OnClick="ValidateAndProceed">Validate & Continue</PggmButton>
        </div>
    </div>
</PggmWizardForm>

@code {
    private PggmWizardForm reviewForm;

    private async Task GoBackToEdit()
    {
        await reviewForm.SlideOutAsync("backwards");
    }

    private async Task ValidateAndProceed()
    {
        var isValid = await reviewForm.CheckValidityAsync();
        if (isValid)
        {
            await reviewForm.SlideOutAsync("forwards");
        }
    }
}
```

## Best Practices

1. **Logical Grouping**: Group related fields in each wizard step
2. **Clear Labels**: Use descriptive labels for each wizard form
3. **Validation**: Implement proper validation for each step
4. **Progress Indication**: Use meaningful step labels
5. **Accessibility**: Include proper fieldsets and legends

## Accessibility

- Uses semantic HTML form elements
- Supports proper fieldset and legend structure
- Maintains focus management during navigation
- Screen reader compatible

## Dependencies

- Must be used within a `PggmWizard` component
- Inherits from `PggmEventComponentBase`
- Requires the PGGM design system web components JavaScript library

For complete wizard implementation details, see the [WIZARD-COMPONENTS.md](../../WIZARD-COMPONENTS.md) documentation.