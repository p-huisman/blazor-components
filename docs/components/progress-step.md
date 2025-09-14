# PggmProgressStep

Individual progress step within a progress indicator that represents a single step in a multi-step process.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Last` | bool | false | Whether this is the last step in the progress indicator |
| `Completed` | bool | false | Whether this step has been completed |
| `Current` | bool | false | Whether this is the current step |
| `ChildContent` | RenderFragment | null | The content to be displayed for this progress step |

## Example Usage

### Basic Progress Step

```razor
<PggmProgressStep Completed="true">
    <span>Step 1: Personal Information</span>
</PggmProgressStep>

<PggmProgressStep Current="true">
    <span>Step 2: Contact Details</span>
</PggmProgressStep>

<PggmProgressStep>
    <span>Step 3: Review & Submit</span>
</PggmProgressStep>
```

### Progress Step with Rich Content

```razor
<PggmProgressStep Completed="true">
    <div class="step-content">
        <div class="step-header">
            <span class="step-number">1</span>
            <span class="step-title">Account Setup</span>
        </div>
        <div class="step-description">
            Create your account and verify email
        </div>
    </div>
</PggmProgressStep>

<PggmProgressStep Current="true">
    <div class="step-content">
        <div class="step-header">
            <span class="step-number">2</span>
            <span class="step-title">Profile Information</span>
        </div>
        <div class="step-description">
            Complete your profile details
        </div>
    </div>
</PggmProgressStep>
```

### Progress Step with Icons

```razor
<PggmProgressStep Completed="true">
    <div class="step-with-icon">
        <PggmIcon Name="checkmark" class="step-icon completed" />
        <span class="step-label">Personal Info</span>
    </div>
</PggmProgressStep>

<PggmProgressStep Current="true">
    <div class="step-with-icon">
        <PggmIcon Name="location" class="step-icon current" />
        <span class="step-label">Address</span>
    </div>
</PggmProgressStep>

<PggmProgressStep>
    <div class="step-with-icon">
        <PggmIcon Name="payment" class="step-icon pending" />
        <span class="step-label">Payment</span>
    </div>
</PggmProgressStep>
```

### Interactive Progress Step

```razor
<PggmProgressStep Current="@(selectedStep == 1)" Completed="@(selectedStep > 1)">
    <button type="button" 
            class="step-button"
            disabled="@(!CanNavigateToStep(1))"
            @onclick="@(() => NavigateToStep(1))">
        
        <div class="step-button-content">
            <span class="step-number">1</span>
            <span class="step-title">Personal Information</span>
            
            @if (selectedStep > 1)
            {
                <PggmIcon Name="checkmark" class="completed-indicator" />
            }
            else if (selectedStep == 1)
            {
                <PggmIcon Name="edit" class="current-indicator" />
            }
        </div>
    </button>
</PggmProgressStep>

@code {
    private int selectedStep = 1;

    private bool CanNavigateToStep(int step)
    {
        // Only allow navigation to completed steps or current step
        return step <= selectedStep;
    }

    private void NavigateToStep(int step)
    {
        if (CanNavigateToStep(step))
        {
            selectedStep = step;
            // Handle navigation logic
        }
    }
}
```

### Last Step Indicator

```razor
<PggmProgressStep Current="true" Last="true">
    <div class="final-step">
        <PggmIcon Name="flag" class="finish-icon" />
        <span class="step-title">Complete</span>
        <small class="step-subtitle">Review and submit</small>
    </div>
</PggmProgressStep>
```

### Conditional Step States

```razor
@foreach (var (step, index) in steps.Select((s, i) => (s, i)))
{
    <PggmProgressStep 
        Completed="@(step.IsCompleted)"
        Current="@(step.IsCurrent)"
        Last="@(index == steps.Count - 1)">
        
        <div class="conditional-step">
            <div class="step-indicator">
                @if (step.IsCompleted)
                {
                    <PggmIcon Name="checkmark" class="completed-icon" />
                }
                else if (step.IsCurrent)
                {
                    <span class="current-number">@(index + 1)</span>
                }
                else if (step.HasError)
                {
                    <PggmIcon Name="warning" class="error-icon" />
                }
                else
                {
                    <span class="pending-number">@(index + 1)</span>
                }
            </div>
            
            <div class="step-info">
                <span class="step-title">@step.Title</span>
                @if (!string.IsNullOrEmpty(step.Description))
                {
                    <small class="step-description">@step.Description</small>
                }
                @if (step.HasError)
                {
                    <small class="step-error">@step.ErrorMessage</small>
                }
            </div>
        </div>
    </PggmProgressStep>
}

@code {
    private List<ProcessStep> steps = new()
    {
        new ProcessStep 
        { 
            Title = "Setup", 
            Description = "Initial configuration",
            IsCompleted = true 
        },
        new ProcessStep 
        { 
            Title = "Validation", 
            Description = "Verify information",
            IsCurrent = true 
        },
        new ProcessStep 
        { 
            Title = "Processing", 
            Description = "Process your request",
            HasError = false 
        }
    };

    public class ProcessStep
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public bool IsCompleted { get; set; }
        public bool IsCurrent { get; set; }
        public bool HasError { get; set; }
        public string ErrorMessage { get; set; } = string.Empty;
    }
}
```

## Visual States

The progress step component supports several visual states:

### Completed State
```razor
<PggmProgressStep Completed="true">
    <span>✓ Completed Step</span>
</PggmProgressStep>
```

### Current State
```razor
<PggmProgressStep Current="true">
    <span>→ Current Step</span>
</PggmProgressStep>
```

### Pending State
```razor
<PggmProgressStep>
    <span>○ Pending Step</span>
</PggmProgressStep>
```

### Last Step
```razor
<PggmProgressStep Current="true" Last="true">
    <span>🏁 Final Step</span>
</PggmProgressStep>
```

## Styling Examples

### Custom CSS for Step States

```css
.progress-step {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.progress-step.completed {
    background-color: var(--color-success-50);
    border: 2px solid var(--color-success-500);
}

.progress-step.current {
    background-color: var(--color-primary-50);
    border: 2px solid var(--color-primary-500);
    box-shadow: 0 0 0 3px var(--color-primary-100);
}

.progress-step.pending {
    background-color: var(--color-neutral-50);
    border: 2px solid var(--color-neutral-300);
}

.step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    font-weight: 600;
    margin-right: 0.75rem;
}
```

## Integration Patterns

### With Form Validation

```razor
<PggmProgressStep 
    Completed="@(form.IsValid && form.IsSubmitted)"
    Current="@(currentSection == "personal")"
    @onclick="@(() => NavigateToSection("personal"))">
    
    <div class="step-with-validation">
        <span class="step-title">Personal Information</span>
        @if (form.HasErrors)
        {
            <PggmIcon Name="warning" class="validation-error" />
            <span class="error-count">@form.ErrorCount errors</span>
        }
        else if (form.IsValid)
        {
            <PggmIcon Name="checkmark" class="validation-success" />
        }
    </div>
</PggmProgressStep>
```

### With Loading States

```razor
<PggmProgressStep Current="@isProcessing" Completed="@isCompleted">
    <div class="step-with-loading">
        @if (isProcessing)
        {
            <div class="loading-spinner"></div>
            <span>Processing...</span>
        }
        else if (isCompleted)
        {
            <PggmIcon Name="checkmark" />
            <span>Completed</span>
        }
        else
        {
            <span>Ready to Process</span>
        }
    </div>
</PggmProgressStep>
```

## Accessibility

The progress step component provides:
- Proper ARIA roles and states
- Screen reader announcements for state changes
- Keyboard navigation support
- Clear visual indicators for all states
- Semantic markup for assistive technologies

## Best Practices

1. **Clear Visual Hierarchy**: Make state differences obvious
2. **Consistent Styling**: Use consistent visual patterns across steps
3. **Meaningful Content**: Provide descriptive step titles
4. **Error Handling**: Show validation errors clearly
5. **Loading States**: Indicate processing status when applicable

## Dependencies

- Must be used within a `PggmProgressIndicator` component
- Inherits from `PggmComponentBase`
- Requires the PGGM design system web components JavaScript library