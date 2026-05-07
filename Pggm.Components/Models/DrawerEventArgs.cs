namespace Pggm.Components.Models;

/// <summary>
/// Event arguments for the drawer requestClose event.
/// </summary>
public class DrawerRequestCloseEventArgs
{
    /// <summary>
    /// The source that triggered the close request.
    /// Possible values: "close-button", "overlay", "keyboard".
    /// </summary>
    public string? Source { get; set; }

    /// <summary>
    /// Set to true to prevent the drawer from closing.
    /// </summary>
    public bool Cancel { get; set; }
}
