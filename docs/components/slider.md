# PggmSlider Component

The `PggmSlider` component provides an interactive slider control for selecting numeric values within a specified range. It wraps the PGGM Design System's `pggm-slider` web component and supports `PggmSliderLabel` components for visual markers.

## Components

### PggmSlider

The main slider component.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Value` | double | 0 | The current value of the slider |
| `Min` | double | 0 | The minimum value of the slider |
| `Max` | double | 100 | The maximum value of the slider |
| `Disabled` | bool | false | Whether the slider is disabled |
| `SnapValues` | string? | null | Comma-separated string of numbers that the slider should snap to |
| `FractionDigits` | int? | null | Number of decimal places to display in the slider value (0 for integers) |

### PggmSliderLabel

A label component that can be positioned at specific values on the slider.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Value` | double | 0 | The position value where this label should be displayed on the slider |
| `ChildContent` | RenderFragment? | null | The content to display in the label (supports HTML) |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `ValueChanged` | EventCallback&lt;double&gt; | Triggered when the slider value changes |
| `OnInput` | EventCallback&lt;double&gt; | Triggered continuously while dragging the slider |

## Basic Usage

```razor
<PggmSlider @bind-Value="sliderValue" 
            Min="0" 
            Max="100" />

@code {
    private double sliderValue = 50;
}
```

## Snap Values Example

The `SnapValues` property allows you to specify specific values that the slider should snap to, regardless of the step size. When snap values are provided, the `enable-snap` attribute is automatically set on the underlying web component:

```razor
<PggmSlider @bind-Value="sliderValue" 
            Min="0" 
            Max="100" 
            SnapValues="0,25,50,75,100" />

@code {
    private double sliderValue = 50;
}
```

**Note**: The `enable-snap` attribute is automatically added when `SnapValues` contains one or more values. You don't need to set it manually.

## Slider Labels Example

The `PggmSliderLabel` component allows you to add visual labels at specific positions on the slider. Labels can contain HTML content and will be positioned automatically by the web component:

```razor
<PggmSlider @bind-Value="sliderValue" 
            Min="0" 
            Max="100" 
            FractionDigits="0">
    <PggmSliderLabel Value="0">0%</PggmSliderLabel>
    <PggmSliderLabel Value="25">25%</PggmSliderLabel>
    <PggmSliderLabel Value="50">50%</PggmSliderLabel>
    <PggmSliderLabel Value="75">75%</PggmSliderLabel>
    <PggmSliderLabel Value="100">100%</PggmSliderLabel>
</PggmSlider>

@code {
    private double sliderValue = 50;
}
```

### HTML Content in Labels

Labels can contain rich HTML content including styling and emojis:

```razor
<PggmSlider @bind-Value="ratingValue" 
            Min="1" 
            Max="5" 
            SnapValues="1,2,3,4,5" 
            FractionDigits="0">
    <PggmSliderLabel Value="1">
        <span style="color: #ff4444;">😞 Poor</span>
    </PggmSliderLabel>
    <PggmSliderLabel Value="2">
        <span style="color: #ff8800;">😐 Fair</span>
    </PggmSliderLabel>
    <PggmSliderLabel Value="3">
        <span style="color: #ffaa00;">🙂 Good</span>
    </PggmSliderLabel>
    <PggmSliderLabel Value="4">
        <span style="color: #88dd00;">😊 Very Good</span>
    </PggmSliderLabel>
    <PggmSliderLabel Value="5">
        <span style="color: #00cc44;">🤩 Excellent</span>
    </PggmSliderLabel>
</PggmSlider>

@code {
    private double ratingValue = 3;
}
```

## Fraction Digits Example

The `FractionDigits` property controls how many decimal places are displayed in the slider value. Set it to 0 for integer display:

```razor
<!-- Display as integers (no decimals) -->
<PggmSlider @bind-Value="integerValue" 
            Min="0" 
            Max="10" 
            FractionDigits="0" />

<!-- Display with 1 decimal place -->
<PggmSlider @bind-Value="decimalValue" 
            Min="0" 
            Max="10" 
            FractionDigits="1" />

<!-- Display with 2 decimal places -->
<PggmSlider @bind-Value="preciseValue" 
            Min="0" 
            Max="10" 
            FractionDigits="2" />

@code {
    private double integerValue = 5.7;   // Displays as "6"
    private double decimalValue = 5.7;   // Displays as "5.7"
    private double preciseValue = 5.75;  // Displays as "5.75"
}
```

## Event Handling

```razor
<PggmSlider @bind-Value="sliderValue" 
            OnInput="HandleInput"
            ValueChanged="HandleValueChanged" />

@code {
    private double sliderValue = 50;
    
    private void HandleInput(double value)
    {
        // Called continuously while dragging
        Console.WriteLine($"Input: {value}");
    }
    
    private void HandleValueChanged(double value)
    {
        // Called when the value is committed (e.g., mouse release)
        Console.WriteLine($"Value changed: {value}");
    }
}
```

## Form Integration

The slider component works seamlessly with Blazor's form validation:

```razor
<EditForm Model="model" OnValidSubmit="HandleValidSubmit">
    <DataAnnotationsValidator />
    <ValidationSummary />
    
    <PggmSlider @bind-Value="model.Rating" 
                Min="1" 
                Max="10" 
                Step="1" />
    
    <PggmButton Type="submit">Submit</PggmButton>
</EditForm>

@code {
    private Model model = new();
    
    public class Model
    {
        [Range(1, 10, ErrorMessage = "Rating must be between 1 and 10")]
        public double Rating { get; set; } = 5;
    }
    
    private void HandleValidSubmit()
    {
        // Handle form submission
    }
}
```

## Accessibility

The slider component includes:
- Proper ARIA attributes for screen readers
- Keyboard navigation support (arrow keys, page up/down, home/end)
- Focus management
- Semantic markup

## Best Practices

1. **Value Ranges**: Always set appropriate `Min` and `Max` values for your use case
2. **Snap Values**: Use snap values for specific milestones or important thresholds
3. **Fraction Digits**: Set `FractionDigits` to 0 for integer values, or specify the appropriate number of decimal places for precision display
4. **Slider Labels**: Use `PggmSliderLabel` components to provide visual context at key values
5. **Label Positioning**: Ensure label values are within the slider's min/max range for proper positioning
6. **Labels**: Always provide context with labels or descriptions
7. **Validation**: Use data annotations for form validation when appropriate

## Performance Considerations

- The `OnInput` event fires frequently during dragging - use it sparingly for performance-critical applications
- Use `ValueChanged` for most scenarios where you need to react to value changes
- Consider debouncing frequent updates if they trigger expensive operations

## Styling

The slider inherits styles from the PGGM Design System. Custom styling should be applied through CSS custom properties or by extending the design system theme.

## Browser Support

The component supports all modern browsers through the underlying PGGM Design System web components.