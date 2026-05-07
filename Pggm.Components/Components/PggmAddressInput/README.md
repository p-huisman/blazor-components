# PggmAddressInput Component

A Blazor wrapper component for the `pggm-address-input` web component, which provides a comprehensive address input form with support for Dutch and foreign addresses.

## Features

- Support for Dutch addresses (postal code, house number, street, city)
- Support for foreign/international addresses
- Autocomplete functionality
- Built-in validation
- Form-associated custom element
- Two-way data binding
- Event handling for input, change, focus, and blur events
- Accessibility support

## Usage

### Basic Address Input

```razor
<PggmAddressInput 
    Name="address" 
    @bind-Value="@addressValue" 
    Required="true" />
```

### With Foreign Address Support

```razor
<PggmAddressInput 
    Name="address" 
    @bind-Value="@addressValue" 
    Foreign="true"
    Autocomplete="true"
    Required="true" />
```

### With Custom Endpoints

```razor
<PggmAddressInput 
    Name="address" 
    @bind-Value="@addressValue"
    LandenEndpoint="https://custom.api.com/landen.json"
    AdresEndpoint="https://custom.api.com/adres.json"
    Autocomplete="true"
    Required="true" />
```

### With Event Handlers

```razor
<PggmAddressInput 
    Name="address" 
    @bind-Value="@addressValue"
    OnChange="@HandleAddressChange"
    OnValidationChanged="@HandleValidation"
    Required="true" />

@code {
    private string? addressValue;

    private void HandleAddressChange(ChangeEventArgs args)
    {
        Console.WriteLine($"Address changed: {args.Value}");
    }

    private void HandleValidation(bool isValid)
    {
        Console.WriteLine($"Address is {(isValid ? "valid" : "invalid")}");
    }
}
```

### In a Form

```razor
<EditForm Model="@formModel" OnValidSubmit="@HandleSubmit">
    <div class="form-group">
        <PggmLabel For="address">Address</PggmLabel>
        <PggmAddressInput 
            Id="address"
            Name="address" 
            @bind-Value="@formModel.Address"
            Required="true"
            Foreign="true" />
    </div>
    <button type="submit">Submit</button>
</EditForm>

@code {
    private FormModel formModel = new();

    public class FormModel
    {
        public string? Address { get; set; }
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
| `Value` | `string?` | `null` | The current address value as JSON string |
| `ValueChanged` | `EventCallback<string?>` | - | Event callback for value changes (two-way binding) |

### Input Configuration

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `Name` | `string?` | `null` | The name attribute for the address input |
| `Id` | `string?` | `null` | The id attribute for the address input |
| `Disabled` | `bool` | `false` | Whether the input is disabled |
| `Required` | `bool` | `false` | Whether the input is required |
| `Foreign` | `bool` | `false` | Whether to allow foreign/international addresses |
| `Autocomplete` | `bool` | `false` | Whether to enable autocomplete functionality |
| `LandenEndpoint` | `string` | `https://staticweb-cdn-o.azureedge.net//design-system/api/topography-landen.json` | Endpoint URL for countries data |
| `AdresEndpoint` | `string` | `https://staticweb-cdn-o.azureedge.net//design-system/api/adres.json` | Endpoint URL for address data |

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

## Address Value Format

The `Value` property contains the address data as a JSON string. The format depends on whether it's a Dutch or foreign address:

### Dutch Address Format

```json
{
  "postalCode": "1234AB",
  "houseNumber": "123",
  "houseNumberExtension": "A",
  "street": "Example Street",
  "city": "Amsterdam"
}
```

### Foreign Address Format

```json
{
  "street": "123 Example Street",
  "city": "London",
  "postalCode": "SW1A 1AA",
  "country": "United Kingdom"
}
```

## Web Component Integration

This component wraps the `pggm-address-input` web component:

```html
<pggm-address-input 
    name="address" 
    required 
    foreign
    autocomplete
    landen-endpoint="https://staticweb-cdn-o.azureedge.net//design-system/api/topography-landen.json"
    adres-endpoint="https://staticweb-cdn-o.azureedge.net//design-system/api/adres.json">
</pggm-address-input>
```

## Browser Support

The component requires browsers that support:
- Custom Elements (Web Components)
- ES6 features used by the underlying `pggm-address-input` web component
- Modern JavaScript APIs for address autocomplete

## Accessibility

The component maintains all standard form accessibility features:
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Error message announcement

## Styling

The component inherits styling from the `pggm-address-input` web component. Additional CSS classes can be applied using the `CssClass` parameter or `AdditionalAttributes`.

CSS variables are available for customization:
- `--pggm-address-input-*` - Component-specific styling
- `--pggm-text-input-*` - Input field styling
- `--pggm-focus-*` - Focus state styling

## Examples

### Disabled State

```razor
<PggmAddressInput 
    Name="address" 
    @bind-Value="@addressValue"
    Disabled="true" />
```

### Required Field with Validation

```razor
<PggmAddressInput 
    Name="address" 
    @bind-Value="@addressValue"
    Required="true"
    OnValidationChanged="@((isValid) => validationMessage = isValid ? string.Empty : "Please enter a valid address")" />

@if (!string.IsNullOrEmpty(validationMessage))
{
    <PggmErrorMessage>@validationMessage</PggmErrorMessage>
}
```

### International Address

```razor
<PggmAddressInput 
    Name="internationalAddress" 
    @bind-Value="@internationalAddressValue"
    Foreign="true"
    Autocomplete="true"
    Required="true" />
```

## Related Components

- [PggmInput](../PggmInput/README.md) - Standard text input component
- [PggmInputIban](../PggmInputIban/README.md) - IBAN input component
- [PggmInputPhone](../PggmInputPhone/README.md) - Phone number input component
- [PggmFieldset](../PggmFieldset/README.md) - Fieldset container for form groups
- [PggmLabel](../PggmLabel/README.md) - Label component for form inputs
- [PggmErrorMessage](../PggmErrorMessage/README.md) - Error message component

## See Also

- [Design System Documentation](https://staticweb-cdn-o.azureedge.net/design-system/?path=/story/molecules-address-input--default)
- [Web Component API](../../../docs/api-reference.md)
