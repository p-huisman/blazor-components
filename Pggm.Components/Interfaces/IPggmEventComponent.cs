namespace Pggm.Components.Interfaces;

/// <summary>
/// Interface for components that can handle events
/// </summary>
public interface IPggmEventComponent : IPggmComponent
{
    /// <summary>
    /// Handle an event from the web component
    /// </summary>
    Task HandleEvent(string eventName, object? eventData = null);

    /// <summary>
    /// Handle a cancelable event from the web component
    /// </summary>
    Task<bool> HandleCancelableEvent(string eventName, object? eventData = null);
}