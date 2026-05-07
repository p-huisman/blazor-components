# PggmBankAccountInput Component

A Blazor wrapper component for the `pggm-bank-account-input` web component, which provides a comprehensive bank account input form with support for multiple countries and account number formats.

## Features

- Support for multiple country bank account formats
- Built-in validation for bank account numbers
- Country-specific formatting
- Form-associated custom element
- Two-way data binding
- Event handling for input, change, focus, and blur events
- Accessibility support
- Configurable country endpoint

## Usage

### Basic Bank Account Input

```razor
<PggmBankAccountInput 
    Name="bankAccount" 
    @bind-Value="@bankAccountValue" 
    Required="true" />
```

### With Specific Country

```razor
<PggmBankAccountInput 
    Name="bankAccount" 
    @bind-Value="@bankAccountValue" 
    Country="NL"
    Required="true" />
```

### With Custom Endpoint

```razor
<PggmBankAccountInput 
    Name="bankAccount" 
    @bind-Value="@bankAccountValue"
    LandenEndpoint="https://custom.api.com/landen.json"
    Country="DE"
    Required="true" />
```

### With Event Handlers

```razor
<PggmBankAccountInput 
    Name="bankAccount" 
    @bind-Value="@bankAccountValue"
    OnChange="@HandleBankAccountChange"
    OnValidationChanged="@HandleValidation"
    Required="true" />

@code {
    private string? bankAccountValue;

    private void HandleBankAccountChange(ChangeEventArgs args)
    {
        Console.WriteLine($"Bank account changed: {args.Value}");
    }

    private void HandleValidation(bool isValid)
    {
        Console.WriteLine($"Bank account is {(isValid ? "valid" : "invalid")}");
    }
}
```

### In a Form

```razor
<EditForm Model="@formModel" OnValidSubmit="@HandleSubmit">
    <div class="form-group">
        <PggmLabel For="bankAccount">Bank Account</PggmLabel>
        <PggmBankAccountInput 
            Id="bankAccount"
            Name="bankAccount" 
            @bind-Value="@formModel.BankAccount"
            Country="NL"
            Required="true" />
    </div>
    <button type="submit">Submit</button>
</EditForm>

@code {
    private FormModel formModel = new();

    public class FormModel
    {
        public string? BankAccount { get; set; }
    }

    private void HandleSubmit()
    {
        // Handle form submission
    }
}
```

## Parameters

### Value Binding

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `Value` | `string?` | `null` | The current bank account value as JSON string |
| `ValueChanged` | `EventCallback<string?>` | - | Event callback for value changes (two-way binding) |

### Input Configuration

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `Name` | `string?` | `null` | The name attribute for the bank account input |
| `Id` | `string?` | `null` | The id attribute for the bank account input |
| `Disabled` | `bool` | `false` | Whether the input is disabled |
| `Required` | `bool` | `false` | Whether the input is required |
| `Country` | `string?` | `null` | The country code for the bank account (e.g., "NL", "DE", "BE") |
| `LandenEndpoint` | `string` | `https://staticweb-cdn-o.azureedge.net/design-system/api/financieel-landen.json` | Endpoint URL for countries data |

### Event Callbacks

| Parameter | Type | Description |
|-----------|------|-------------|
| `OnChange` | `EventCallback<ChangeEventArgs>` | Fired when the input loses focus and the value has changed |
| `OnInput` | `EventCallback<ChangeEventArgs>` | Fired on every input change |
| `OnFocus` | `EventCallback<FocusEventArgs>` | Fired when the input gains focus |
| `OnBlur` | `EventCallback<FocusEventArgs>` | Fired when the input loses focus |
| `OnValidationChanged` | `EventCallback<bool>` | Fired when validation state changes |

### Common Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `CssClass` | `string?` | `null` | Additional CSS classes to apply |
| `AdditionalAttributes` | `Dictionary<string, object>?` | `null` | Additional HTML attributes to apply |
| `ChildContent` | `RenderFragment?` | `null` | Child content (slots) for the component |

## Bank Account Value Format

The `Value` property contains the bank account data as a JSON string. The format depends on the country:

### Example Bank Account Format

```json
{
  "accountNumber": "NL91ABNA0417164300",
  "country": "NL"
}
```

## Supported Countries

The component supports various country bank account formats including:
- Netherlands (NL) - IBAN format
- Germany (DE) - IBAN format
- Belgium (BE) - IBAN format
- And other European countries with IBAN support

The list of countries is fetched from the `landen-endpoint` configuration.

## Web Component Integration

This component wraps the `pggm-bank-account-input` web component:

```html
<pggm-bank-account-input 
    name="bankAccount" 
    required 
    country="NL"
    landen-endpoint="https://staticweb-cdn-o.azureedge.net//design-system/api/topography-landen.json">
</pggm-bank-account-input>
```

## Browser Support

The component requires browsers that support:
- Custom Elements (Web Components)
- ES6 features used by the underlying `pggm-bank-account-input` web component
- Modern JavaScript APIs for bank account validation

## Accessibility

The component maintains all standard form accessibility features:
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Error message announcement

## Styling

The component inherits styling from the `pggm-bank-account-input` web component. Additional CSS classes can be applied using the `CssClass` parameter or `AdditionalAttributes`.

CSS variables are available for customization:
- `--pggm-bank-account-input-*` - Component-specific styling
- `--pggm-text-input-*` - Input field styling
- `--pggm-focus-*` - Focus state styling

## Examples

### Disabled State

```razor
<PggmBankAccountInput 
    Name="bankAccount" 
    @bind-Value="@bankAccountValue"
    Disabled="true" />
```

### Required Field with Validation

```razor
<PggmBankAccountInput 
    Name="bankAccount" 
    @bind-Value="@bankAccountValue"
    Country="NL"
    Required="true"
    OnValidationChanged="@((isValid) => validationMessage = isValid ? string.Empty : "Please enter a valid bank account")" />

@if (!string.IsNullOrEmpty(validationMessage))
{
    <PggmErrorMessage>@validationMessage</PggmErrorMessage>
}
```

### Different Country Formats

```razor
<PggmBankAccountInput 
    Name="dutchAccount" 
    @bind-Value="@dutchAccountValue"
    Country="NL"
    Required="true" />

<PggmBankAccountInput 
    Name="germanAccount" 
    @bind-Value="@germanAccountValue"
    Country="DE"
    Required="true" />

<PggmBankAccountInput 
    Name="belgianAccount" 
    @bind-Value="@belgianAccountValue"
    Country="BE"
    Required="true" />
```

## Related Components

- [PggmInput](../PggmInput/README.md) - Standard text input component
- [PggmInputIban](../PggmInputIban/README.md) - IBAN input component
- [PggmAddressInput](../PggmAddressInput/README.md) - Address input component
- [PggmFieldset](../PggmFieldset/README.md) - Fieldset container for form groups
- [PggmLabel](../PggmLabel/README.md) - Label component for form inputs
- [PggmErrorMessage](../PggmErrorMessage/README.md) - Error message component

## See Also

- [Web Component API](../../../docs/api-reference.md)
