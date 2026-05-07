using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmLabel : PggmComponentBase
{
    public override string TagName => "label";

    /// <summary>
    /// The for attribute - associates the label with a form control
    /// </summary>
    [Parameter] public string? For { get; set; }

    /// <summary>
    /// Override to prevent CSS classes from being applied
    /// </summary>
    protected override string? GetDefaultCssClasses()
    {
        return null;
    }
}
