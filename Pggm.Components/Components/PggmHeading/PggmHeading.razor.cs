using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmHeading : PggmComponentBase
{
    /// <summary>
    /// The HTML tag name for the web component
    /// </summary>
    public override string TagName => GetHeadingTag();

    /// <summary>
    /// The heading level (1-5)
    /// </summary>
    [Parameter] public int Level { get; set; } = 1;

    /// <summary>
    /// The size of the heading: "2xl", "xl", "lg", "md", "sm"
    /// </summary>
    [Parameter] public string? Size { get; set; }

    /// <summary>
    /// Gets the appropriate heading tag based on the Level parameter
    /// </summary>
    private string GetHeadingTag()
    {
        return Level switch
        {
            1 => "h1",
            2 => "h2",
            3 => "h3",
            4 => "h4",
            5 => "h5",
            _ => "h1" // Default to h1 if invalid level
        };
    }
}
