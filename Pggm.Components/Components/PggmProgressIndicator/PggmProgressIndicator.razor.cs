using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmProgressIndicator : PggmComponentBase
{
    public override string TagName => "pggm-progress-indicator";

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-wizard");
        await base.InitializeWebComponentAsync();
    }

    /// <summary>
    /// Get the current step element
    /// </summary>
    public async Task<object?> GetCurrentStepElementAsync()
    {
        if (ElementRef.Id != null)
        {
            return await JSRuntime.InvokeAsync<object>("eval", $"document.getElementById('{ElementRef.Id}').currentStepElement");
        }
        return null;
    }
}
