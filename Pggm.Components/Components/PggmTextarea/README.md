# PggmTextarea Component

A Blazor wrapper component for the `pggm-textarea` web component, which extends the standard HTML textarea element with custom styling and functionality.

## Usage

### Basic Usage

```html
<PggmTextarea @bind-Value="textValue" 
              Rows="4" 
              Cols="50" 
              Placeholder="Enter your text here..." />
```

### Advanced Usage

```html
<PggmTextarea @bind-Value="commentValue"
              Rows="6"
              Cols="60"
              MaxLength="500"
              Required="true"
              Placeholder="Please enter your comments (max 500 characters)..."
              OnInput="@HandleInput"
              OnChange="@HandleChange" />
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `Value` | `string?` | `null` | The current value of the textarea (supports two-way binding) |
| `ValueChanged` | `EventCallback<string?>` | - | Event callback for value changes (two-way binding) |
| `Rows` | `int?` | `null` | Number of visible text lines for the control |
| `Cols` | `int?` | `null` | Visible width of the text control, in average character widths |
| `Placeholder` | `string?` | `null` | Placeholder text for the textarea |
| `Disabled` | `bool` | `false` | Whether the textarea is disabled |
| `Required` | `bool` | `false` | Whether the textarea is required |
| `ReadOnly` | `bool` | `false` | Whether the textarea is readonly |
| `Name` | `string?` | `null` | The name attribute for the textarea |
| `MaxLength` | `int?` | `null` | Maximum length for the textarea value |
| `MinLength` | `int?` | `null` | Minimum length for the textarea value |
| `Wrap` | `string?` | `null` | How the text should be wrapped when submitted |
| `AutoFocus` | `bool` | `false` | Whether the textarea should automatically get focus |
| `AutoComplete` | `string?` | `null` | Provides a hint for form auto-completion |
| `SpellCheck` | `bool` | `true` | Whether spell checking is enabled |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `OnChange` | `EventCallback<ChangeEventArgs>` | Fired when the textarea loses focus and value has changed |
| `OnInput` | `EventCallback<ChangeEventArgs>` | Fired on every keystroke/input |
| `OnFocus` | `EventCallback<FocusEventArgs>` | Fired when the textarea gains focus |
| `OnBlur` | `EventCallback<FocusEventArgs>` | Fired when the textarea loses focus |

## Constants

### WrapTypes

The component provides constants for the `Wrap` parameter:

- `PggmTextarea.WrapTypes.Hard` - Text is wrapped and line breaks are included when submitted
- `PggmTextarea.WrapTypes.Soft` - Text is wrapped but line breaks are not included when submitted
- `PggmTextarea.WrapTypes.Off` - Text is not wrapped

## Examples

### Character Counter

```html
<PggmTextarea @bind-Value="userInput" 
              MaxLength="200"
              Placeholder="Share your thoughts..." />
<p>Characters: @(userInput?.Length ?? 0) / 200</p>

@code {
    private string? userInput = "";
}
```

### Event Handling

```html
<PggmTextarea @bind-Value="message"
              OnInput="@OnInputHandler"
              OnChange="@OnChangeHandler" />

@code {
    private string? message = "";
    
    private void OnInputHandler(ChangeEventArgs args)
    {
        // Handle real-time input changes
        Console.WriteLine($"Input changed: {args.Value}");
    }
    
    private void OnChangeHandler(ChangeEventArgs args)
    {
        // Handle when user finishes editing (loses focus)
        Console.WriteLine($"Final value: {args.Value}");
    }
}
```

### Form Validation

```html
<EditForm Model="@model" OnValidSubmit="@HandleSubmit">
    <DataAnnotationsValidator />
    
    <div class="form-group">
        <label for="description">Description:</label>
        <PggmTextarea @bind-Value="model.Description"
                      Name="description"
                      Required="true"
                      Rows="4"
                      Placeholder="Enter a description..." />
        <ValidationMessage For="@(() => model.Description)" />
    </div>
    
    <button type="submit">Submit</button>
</EditForm>

@code {
    private FormModel model = new();
    
    private void HandleSubmit()
    {
        // Handle form submission
    }
    
    public class FormModel
    {
        [Required]
        [MinLength(10)]
        public string? Description { get; set; }
    }
}
```

## Web Component Integration

This component wraps the `pggm-textarea` web component using the `is` attribute:

```html
<textarea is="pggm-textarea" rows="8" cols="30"></textarea>
```

The Blazor wrapper automatically handles:
- Two-way data binding
- Event handling and propagation
- Attribute mapping from Blazor parameters to HTML attributes
- Type-safe parameter validation

## Browser Support

The component requires browsers that support:
- Custom Elements (Web Components)
- ES6 features used by the underlying `pggm-textarea` web component

## Accessibility

The component maintains all standard textarea accessibility features:
- Screen reader compatibility
- Keyboard navigation
- ARIA attributes support through additional attributes
- Focus management

## Styling

The component inherits styling from the `pggm-textarea` web component. Additional CSS classes can be applied using the `CssClass` parameter or `AdditionalAttributes`.
