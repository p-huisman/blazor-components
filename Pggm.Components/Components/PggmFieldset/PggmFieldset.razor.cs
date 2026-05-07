using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmFieldset : PggmComponentBase
{
    public override string TagName => "pggm-fieldset";

    // Note: ChildContent is inherited from PggmComponentBase, so we don't redeclare it here
    protected readonly object _fieldsetCascadingToken = new object();
}
