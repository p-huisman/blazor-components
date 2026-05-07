using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmAccordion : PggmComponentBase
{
    public override string TagName => "pggm-accordion";

    /// <summary>
    /// Whether multiple accordion items can be open at the same time
    /// </summary>
    [Parameter] public bool AllowMultiple { get; set; }
}
