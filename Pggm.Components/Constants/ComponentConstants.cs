namespace Pggm.Components.Constants;

/// <summary>
/// Constants for PGGM component event names
/// </summary>
public static class EventNames
{
    // Alert events
    public const string CloseAlert = "closeAlert";

    // Accordion events
    public const string AccordionItemToggle = "accordionItemToggle";

    // Dialog events
    public const string OpenDialog = "openDialog";
    public const string CloseDialog = "closeDialog";
    public const string CancelDialog = "cancelDialog";

    // Tab events
    public const string TabChange = "tabChange";
    public const string TabClick = "tabClick";

    // Form events
    public const string Change = "change";
    public const string Input = "input";
    public const string Focus = "focus";
    public const string Blur = "blur";

    // Button events
    public const string Click = "click";

    // Splitter events
    public const string SplitterResize = "splitterResize";
}

/// <summary>
/// Common attribute name constants used across components
/// </summary>
public static class AttributeNames
{
    public const string Value = "value";
    public const string Placeholder = "placeholder";
    public const string Name = "name";
    public const string Disabled = "disabled";
    public const string Required = "required";
    public const string ReadOnly = "readonly";
}

/// <summary>
/// Constants for CSS class names
/// </summary>
public static class CssClasses
{
    // State classes
    public const string Loading = "loading";
    public const string Error = "error";
    public const string Success = "success";
    public const string Warning = "warning";

    // Size classes
    public const string Small = "small";
    public const string Medium = "medium";
    public const string Large = "large";

    // Utility classes
    public const string Hidden = "hidden";
    public const string Visible = "visible";
}

/// <summary>
/// Constants for common component values
/// </summary>
public static class ComponentValues
{

    /// <summary>
    /// Alert severity values
    /// </summary>
    public static class AlertSeverity
    {
        public const string Info = "info";
        public const string Success = "success";
        public const string Warning = "warning";
        public const string Error = "error";
    }

    /// <summary>
    /// Size values
    /// </summary>
    public static class Size
    {
        public const string Small = "small";
        public const string Medium = "medium";
        public const string Large = "large";
    }

    /// <summary>
    /// Button appearance values
    /// </summary>
    public static class ButtonAppearance
    {
        public const string Primary = "primary";
        public const string Secondary = "secondary";
        public const string Tertiary = "tertiary";
        public const string Ghost = "ghost";
        public const string Danger = "danger";
    }

    /// <summary>
    /// Icon size values
    /// </summary>
    public static class IconSize
    {
        public const string Small = "small";
        public const string Medium = "medium";
        public const string Large = "large";
        // Keep the ExtraLarge identifier for compatibility, but map to "large"
        public const string ExtraLarge = "large";
    }

    /// <summary>
    /// Icon name values
    /// </summary>
    public static class IconName
    {
        public const string AlertFilled = "alert-filled";
        public const string Alert = "alert";
        public const string Apple = "apple";
        public const string Calendar = "calendar";
        public const string ChartBars = "chart-bars";
        public const string ChevronDown = "chevron-down";
        public const string ChevronLeft = "chevron-left";
        public const string ChevronRight = "chevron-right";
        public const string ChevronUp = "chevron-up";
        public const string Copy = "copy";
        public const string Heart = "heart";
        public const string Info = "info";
        public const string MoodSmile = "mood-smile";
        public const string Pencil = "pencil";
        public const string User = "user";
        public const string Users = "users";
    }
}

