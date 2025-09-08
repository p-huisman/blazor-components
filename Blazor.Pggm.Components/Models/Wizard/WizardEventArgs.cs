using System.Collections.Generic;

namespace Blazor.Pggm.Components.Models.Wizard;

/// <summary>
/// Base class for cancelable event arguments
/// </summary>
public class CancelableEventArgs
{
    /// <summary>
    /// Gets or sets a value indicating whether the event should be canceled
    /// </summary>
    public bool Cancel { get; set; }
}

/// <summary>
/// Event arguments for before submit events
/// </summary>
public class BeforeSubmitEventArgs : CancelableEventArgs
{
    public Dictionary<string, object>? FormData { get; set; }
}

/// <summary>
/// Event arguments for before navigate events
/// </summary>
public class BeforeNavigateEventArgs : CancelableEventArgs
{
    public string? Direction { get; set; }
}

/// <summary>
/// Event arguments for after navigate events
/// </summary>
public class AfterNavigateEventArgs
{
    public string? Direction { get; set; }
}

/// <summary>
/// Event arguments for wizard form invalid events
/// </summary>
public class WizardFormInvalidEventArgs
{
    public object? Form { get; set; }
}
