# PggmProgressIndicator

Container component for progress visualization that displays the current step and overall progress within a wizard or multi-step process.

## Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `GetCurrentStepElementAsync` | - | Get the current step element |

## Example Usage

### Basic Progress Indicator

```razor
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
```

### Progress Indicator in Wizard

```razor
<PggmWizard OnAfterNavigate="UpdateProgress">
    <ChildContent>
        <PggmProgressIndicator>
            <PggmProgressStep Completed="@(currentStep > 1)">
                <div class="step-content">
                    <span class="step-number">1</span>
                    <span class="step-label">Personal Information</span>
                </div>
            </PggmProgressStep>
            <PggmProgressStep Current="@(currentStep == 2)" Completed="@(currentStep > 2)">
                <div class="step-content">
                    <span class="step-number">2</span>
                    <span class="step-label">Contact Details</span>
                </div>
            </PggmProgressStep>
            <PggmProgressStep Current="@(currentStep == 3)" Completed="@(currentStep > 3)" Last="true">
                <div class="step-content">
                    <span class="step-number">3</span>
                    <span class="step-label">Review & Submit</span>
                </div>
            </PggmProgressStep>
        </PggmProgressIndicator>
        
        <!-- Wizard forms -->
        <PggmWizardForm Label="Personal Information" Active="@(currentStep == 1)">
            <!-- Form content -->
        </PggmWizardForm>
        
        <PggmWizardForm Label="Contact Details" Active="@(currentStep == 2)">
            <!-- Form content -->
        </PggmWizardForm>
        
        <PggmWizardForm Label="Review & Submit" Active="@(currentStep == 3)">
            <!-- Form content -->
        </PggmWizardForm>
    </ChildContent>
</PggmWizard>

@code {
    private int currentStep = 1;

    private Task UpdateProgress(AfterNavigateEventArgs args)
    {
        // Update current step based on navigation
        if (args.Direction == "forwards")
        {
            currentStep++;
        }
        else if (args.Direction == "backwards")
        {
            currentStep--;
        }
        
        StateHasChanged();
        return Task.CompletedTask;
    }
}
```

### Progress Indicator with Icons

```razor
<PggmProgressIndicator>
    <PggmProgressStep Completed="true">
        <div class="step-with-icon">
            <PggmIcon Name="user" />
            <span>Personal Info</span>
        </div>
    </PggmProgressStep>
    <PggmProgressStep Current="true">
        <div class="step-with-icon">
            <PggmIcon Name="location" />
            <span>Address</span>
        </div>
    </PggmProgressStep>
    <PggmProgressStep>
        <div class="step-with-icon">
            <PggmIcon Name="payment" />
            <span>Payment</span>
        </div>
    </PggmProgressStep>
    <PggmProgressStep>
        <div class="step-with-icon">
            <PggmIcon Name="check" />
            <span>Complete</span>
        </div>
    </PggmProgressStep>
</PggmProgressIndicator>
```

### Dynamic Progress Indicator

```razor
<PggmProgressIndicator>
    @foreach (var (step, index) in steps.Select((s, i) => (s, i)))
    {
        <PggmProgressStep 
            Completed="@(index < currentStepIndex)"
            Current="@(index == currentStepIndex)"
            Last="@(index == steps.Count - 1)">
            
            <div class="dynamic-step">
                <span class="step-number">@(index + 1)</span>
                <span class="step-title">@step.Title</span>
                @if (!string.IsNullOrEmpty(step.Description))
                {
                    <small class="step-description">@step.Description</small>
                }
            </div>
        </PggmProgressStep>
    }
</PggmProgressIndicator>

@code {
    private int currentStepIndex = 0;
    private List<StepInfo> steps = new()
    {
        new StepInfo { Title = "Account Setup", Description = "Create your account" },
        new StepInfo { Title = "Profile", Description = "Complete your profile" },
        new StepInfo { Title = "Preferences", Description = "Set your preferences" },
        new StepInfo { Title = "Verification", Description = "Verify your email" }
    };

    public class StepInfo
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }
}
```

### Clickable Progress Steps

```razor
<PggmProgressIndicator>
    @foreach (var (step, index) in steps.Select((s, i) => (s, i)))
    {
        <PggmProgressStep 
            Completed="@(index < currentStepIndex)"
            Current="@(index == currentStepIndex)">
            
            <button type="button" 
                    class="step-button @(index <= currentStepIndex ? "accessible" : "disabled")"
                    disabled="@(index > currentStepIndex)"
                    @onclick="@(() => NavigateToStep(index))">
                
                <span class="step-number">@(index + 1)</span>
                <span class="step-label">@step.Title</span>
                
                @if (index < currentStepIndex)
                {
                    <PggmIcon Name="checkmark" class="completed-icon" />
                }
            </button>
        </PggmProgressStep>
    }
</PggmProgressIndicator>

@code {
    private async Task NavigateToStep(int stepIndex)
    {
        if (stepIndex <= currentStepIndex)
        {
            currentStepIndex = stepIndex;
            // Navigate to the selected step
            await OnStepSelected.InvokeAsync(stepIndex);
        }
    }

    [Parameter] public EventCallback<int> OnStepSelected { get; set; }
}
```

## Integration with Forms

The progress indicator works seamlessly with form validation:

```razor
<PggmProgressIndicator>
    <PggmProgressStep Completed="@isStep1Valid" Current="@(currentStep == 1)">
        <span>Personal Info</span>
        @if (!isStep1Valid && hasAttemptedStep1)
        {
            <PggmIcon Name="warning" class="validation-warning" />
        }
    </PggmProgressStep>
    
    <PggmProgressStep 
        Completed="@(isStep2Valid && isStep1Valid)" 
        Current="@(currentStep == 2)">
        <span>Contact Info</span>
    </PggmProgressStep>
    
    <PggmProgressStep Current="@(currentStep == 3)">
        <span>Review</span>
    </PggmProgressStep>
</PggmProgressIndicator>

@code {
    private bool isStep1Valid = false;
    private bool isStep2Valid = false;
    private bool hasAttemptedStep1 = false;
    private int currentStep = 1;
}
```

## Styling

The progress indicator can be styled with CSS:

```css
.step-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.step-number {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: var(--color-neutral-300);
    color: var(--color-neutral-700);
    line-height: 2rem;
    margin-bottom: 0.5rem;
}

.step-label {
    font-size: 0.875rem;
    color: var(--color-neutral-600);
}
```

## Accessibility

The progress indicator provides:
- Proper ARIA attributes for progress communication
- Screen reader announcements for step changes
- Keyboard navigation support when steps are interactive
- Clear visual indicators for current, completed, and upcoming steps

## Best Practices

1. **Clear Labels**: Use concise, descriptive step labels
2. **Visual Hierarchy**: Make the current step clearly visible
3. **Progress Feedback**: Show completed steps distinctly
4. **Responsive Design**: Ensure the indicator works on all screen sizes
5. **Accessibility**: Provide proper ARIA labels and roles

## Dependencies

- Works with `PggmProgressStep` components
- Can be used within `PggmWizard` components
- Inherits from `PggmComponentBase`
- Requires the PGGM design system web components JavaScript library