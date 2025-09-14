# API Reference

Complete API reference for all PGGM Blazor Components.

## Base Classes

### PggmComponentBase

Base class for simple PGGM components without complex event handling.

**Properties:**
- `ElementRef` (ElementReference) - Reference to the underlying DOM element
- `AdditionalAttributes` (Dictionary<string, object>) - Additional HTML attributes
- `ChildContent` (RenderFragment) - Child content to render

**Methods:**
- `GetAttributes()` - Returns the combined attributes for the component
- `AddComponentAttributes(Dictionary<string, object> attributes)` - Adds component-specific attributes

### PggmEventComponentBase

Base class for PGGM components that handle events and require JavaScript interop.

**Inherits from:** `PggmComponentBase`

**Additional Properties:**
- Various event callback properties depending on the component

**Additional Methods:**
- Event handling methods for JavaScript interop
- Component lifecycle methods for event registration

## Form Components

### PggmAccordion
[View detailed documentation](components/accordion.md)

**Properties:**
- `AllowMultiple` (bool) - Whether multiple items can be open

### PggmAccordionItem
[View detailed documentation](components/accordion-item.md)

**Properties:**
- `Open` (bool) - Whether this accordion item is open/expanded
- `Disabled` (bool) - Whether this accordion item is disabled

**Events:**
- `OnToggle` (EventCallback<bool>) - Fired when the accordion item is toggled
- `OnOpen` (EventCallback) - Fired when the accordion item is opened
- `OnClose` (EventCallback) - Fired when the accordion item is closed

### PggmAccordionItemTitle
[View detailed documentation](components/accordion-item-title.md)

**Properties:**
- `ChildContent` (RenderFragment) - The title content to be displayed

### PggmButton
[View detailed documentation](components/button.md)

**Properties:**
- `Appearance` (string) - Button variant (primary, secondary, etc.)
- `Disabled` (bool) - Whether button is disabled
- `Type` (string) - Button type (button, submit, reset)
- `OnClick` (EventCallback<MouseEventArgs>) - Click event handler

### PggmCheckbox
[View detailed documentation](components/checkbox.md)

**Properties:**
- `Checked` (bool) - Whether checkbox is checked
- `CheckedChanged` (EventCallback<bool>) - Checked state change event
- `Disabled` (bool) - Whether checkbox is disabled
- `Required` (bool) - Whether checkbox is required
- `Indeterminate` (bool) - Whether checkbox is in indeterminate state
- `Name` (string) - Name attribute
- `Value` (string) - Value attribute
- `Description` (string) - Description text

### PggmInput
[View detailed documentation](components/input.md)

**Properties:**
- `Value` (string) - Current value
- `ValueChanged` (EventCallback<string>) - Value change event for two-way binding
- `Type` (string) - Input type (text, email, password, etc.)
- `Placeholder` (string) - Placeholder text
- `Disabled` (bool) - Whether input is disabled
- `Required` (bool) - Whether input is required
- `ReadOnly` (bool) - Whether input is readonly
- `Name` (string) - Name attribute
- `MaxLength` (int?) - Maximum length
- `MinLength` (int?) - Minimum length
- `Pattern` (string) - Validation pattern
- `Min` (string) - Minimum value for number inputs
- `Max` (string) - Maximum value for number inputs
- `Step` (string) - Step value for number inputs

**Events:**
- `OnChange` (EventCallback<ChangeEventArgs>) - Change event
- `OnInput` (EventCallback<ChangeEventArgs>) - Input event
- `OnFocus` (EventCallback<FocusEventArgs>) - Focus event
- `OnBlur` (EventCallback<FocusEventArgs>) - Blur event

### PggmLabel
[View detailed documentation](components/label.md)

**Properties:**
- `For` (string) - Associates label with form control

### PggmSelect
[View detailed documentation](components/select.md)

**Properties:**
- `Value` (string) - Currently selected value
- `ValueChanged` (EventCallback<string>) - Value change event
- `Disabled` (bool) - Whether select is disabled
- `Required` (bool) - Whether select is required
- `Name` (string) - Name attribute

**Events:**
- `OnChange` (EventCallback<ChangeEventArgs>) - Selection change event

## UI Components

### PggmAlert
[View detailed documentation](components/alert.md)

**Properties:**
- `Type` (string) - Alert type (info, success, warning, error)
- `Title` (string) - Optional alert title
- `Dismissible` (bool) - Whether alert can be dismissed

**Events:**
- `OnDismiss` (EventCallback) - Dismiss event

### PggmDialog
[View detailed documentation](components/dialog.md)

**Properties:**
- `Open` (bool) - Whether dialog is open
- `Title` (string) - Dialog title
- `CloseOnEscape` (bool) - Whether dialog closes on Escape key
- `CloseOnBackdrop` (bool) - Whether dialog closes on backdrop click
- `Actions` (RenderFragment) - Action buttons content

**Events:**
- `OnClose` (EventCallback) - Close event
- `OnOpen` (EventCallback) - Open event

## Wizard Components

### PggmWizard
[View detailed documentation](components/wizard.md)

**Properties:**
- `Method` (string) - HTTP method for form submission
- `Action` (string) - URL to submit form to
- `NextLabel` (string) - Next button label
- `BackLabel` (string) - Back button label
- `SubmitLabel` (string) - Submit button label
- `FinishContent` (RenderFragment) - Finish slot content
- `ErrorContent` (RenderFragment) - Error slot content

**Events:**
- `OnBeforeSubmit` (EventCallback<BeforeSubmitEventArgs>) - Before submit event
- `OnBeforeNavigate` (EventCallback<BeforeNavigateEventArgs>) - Before navigate event
- `OnAfterNavigate` (EventCallback<AfterNavigateEventArgs>) - After navigate event
- `OnWizardFinished` (EventCallback) - Wizard finished event
- `OnWizardFormInvalid` (EventCallback<WizardFormInvalidEventArgs>) - Form invalid event

**Methods:**
- `NavigateAsync(string direction)` - Navigate to next/previous step
- `StartAsync()` - Start the wizard
- `FinishAsync(bool success)` - Finish the wizard
- `GetFormDataAsync()` - Get current form data

### PggmWizardForm
[View detailed documentation](components/wizard-form.md)

**Properties:**
- `Label` (string) - Step label
- `Active` (bool) - Whether step is active
- `Disabled` (bool) - Whether step is disabled
- `NextDisabled` (bool) - Whether next button is disabled for this step

**Events:**
- `OnWizardFormChanged` (EventCallback) - Form change event
- `OnAfterNavigate` (EventCallback<AfterNavigateEventArgs>) - After navigate event

**Methods:**
- `SlideOutAsync(string direction)` - Slide out form
- `SlideInAsync(string direction)` - Slide in form  
- `CheckValidityAsync()` - Check form validity
- `GetAllowNextAsync()` - Get whether next is allowed

### PggmProgressIndicator
[View detailed documentation](components/progress-indicator.md)

**Methods:**
- `GetCurrentStepElementAsync()` - Get current step element

### PggmProgressStep
[View detailed documentation](components/progress-step.md)

**Properties:**
- `Last` (bool) - Whether this is the last step
- `Completed` (bool) - Whether step is completed
- `Current` (bool) - Whether step is current

## Event Arguments

### Wizard Event Arguments

**BeforeSubmitEventArgs** (extends CancelableEventArgs):
- `FormData` (Dictionary<string, object>) - Form data being submitted
- `Cancel` (bool) - Set to true to prevent submission

**BeforeNavigateEventArgs** (extends CancelableEventArgs):
- `Direction` (string) - Navigation direction ("forwards" or "backwards")
- `Cancel` (bool) - Set to true to prevent navigation

**AfterNavigateEventArgs**:
- `Direction` (string) - Navigation direction ("forwards" or "backwards")

**WizardFormInvalidEventArgs**:
- `Form` (object) - The invalid form

## Services

### ServiceCollectionExtensions

**Extension Methods:**
- `AddPggmComponents(this IServiceCollection services)` - Register PGGM component services
- `AddPggmComponents(this IServiceCollection services, Action<PggmComponentOptions> configure)` - Register with configuration

### PggmComponentOptions

Configuration options for PGGM components:
- `DefaultButtonAppearance` (string) - Default button appearance
- `DefaultInputValidation` (bool) - Enable default input validation
- `DefaultWizardLabels` (WizardLabels) - Default wizard button labels

## Utilities

### AttributeHelper

Static helper class for managing HTML attributes:

**Methods:**
- `SetAttributeIfNotEmpty(Dictionary<string, object> attributes, string key, string value)` - Set attribute if value is not empty
- `SetBooleanAttribute(Dictionary<string, object> attributes, string key, bool value)` - Set boolean attribute
- `SetAttributeIfTrue(Dictionary<string, object> attributes, string key, bool condition)` - Set attribute if condition is true
- `MergeAttributes(Dictionary<string, object> target, Dictionary<string, object> source)` - Merge attribute dictionaries

### Guard

Static utility class for parameter validation:

**Methods:**
- `NotNull<T>(T value, string parameterName)` - Ensure value is not null
- `NotNullOrEmpty(string value, string parameterName)` - Ensure string is not null or empty
- `NotNullOrWhiteSpace(string value, string parameterName)` - Ensure string is not null or whitespace

## Interfaces

### IPggmComponent

Base interface for all PGGM components:
- `ElementRef` (ElementReference) - DOM element reference
- `AdditionalAttributes` (Dictionary<string, object>) - Additional attributes

### IPggmEventComponent

Interface for PGGM components with event handling:
- Inherits from `IPggmComponent`
- Additional event-related properties and methods

## Constants

### ComponentConstants

Static class containing component-related constants:
- Default values for component properties
- Common CSS classes
- ARIA attribute names
- Event names

For detailed usage examples and implementation patterns, see the individual [component documentation](components/).