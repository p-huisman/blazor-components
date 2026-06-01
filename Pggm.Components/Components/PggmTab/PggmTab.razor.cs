using System.Text.Json;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmTab : PggmEventComponentBase
{
    public override string TagName => "pggm-tab";

    /// <summary>
    /// The currently active tab index
    /// </summary>
    [Parameter] public int? ActiveTabIndex { get; set; }

    /// <summary>
    /// Event callback fired when a tab is selected
    /// </summary>
    [Parameter] public EventCallback<int> OnChange { get; set; }

    /// <summary>
    /// Event callback fired when a tab is clicked
    /// </summary>
    [Parameter] public EventCallback<int> OnClick { get; set; }

    protected override IEnumerable<string> GetEventNames()
    {
        return new[] { "tabChange", "tabClick" };
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (ActiveTabIndex.HasValue)
        {
            attributes["active-tab-index"] = ActiveTabIndex.Value.ToString();
        }
    }

    private async Task HandleTabChange(object? eventData)
    {
        if (eventData != null && OnChange.HasDelegate)
        {
            // Try to extract tab index from event data
            if (eventData is JsonElement element && element.TryGetProperty("detail", out var detail))
            {
                if (detail.TryGetProperty("activeTabIndex", out var indexProperty) &&
                    indexProperty.TryGetInt32(out var tabIndex))
                {
                    ActiveTabIndex = tabIndex;
                    await OnChange.InvokeAsync(tabIndex);
                }
            }
            // Fallback: try to parse directly as int
            else if (int.TryParse(eventData.ToString(), out var index))
            {
                ActiveTabIndex = index;
                await OnChange.InvokeAsync(index);
            }
        }
    }

    private async Task HandleTabClick(object? eventData)
    {
        if (eventData != null && OnClick.HasDelegate)
        {
            // Try to extract tab index from event data
            if (eventData is JsonElement element && element.TryGetProperty("detail", out var detail))
            {
                if (detail.TryGetProperty("tabIndex", out var indexProperty) &&
                    indexProperty.TryGetInt32(out var tabIndex))
                {
                    await OnClick.InvokeAsync(tabIndex);
                }
            }
            // Fallback: try to parse directly as int
            else if (int.TryParse(eventData.ToString(), out var index))
            {
                await OnClick.InvokeAsync(index);
            }
        }
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        if (firstRender)
        {
            try
            {
                // The pggm-tab component has got a weird behavior, there will be
                // pseudo elements added that cause horizontal scrolling.
                // To counter this, we forcibly set overflow-x to hidden.
                // Set overflow-x hidden on initialization
                await JSRuntime.InvokeVoidAsync("PggmComponents.setStyle", ElementRef, "overflowX", "hidden");
            }
            catch (Exception ex)
            {
                Logger?.LogError(ex, "Failed to set overflowX style.");
            }
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        RegisterEventHandler("tabChange", async (eventData) => await HandleTabChange(eventData));
        RegisterEventHandler("tabClick", async (eventData) => await HandleTabClick(eventData));

        await base.OnParametersSetAsync();

        // Update the active tab index if it was changed externally
        if (ElementRef.Id != null && ActiveTabIndex.HasValue)
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "activeTabIndex", ActiveTabIndex.Value);
            }
            catch
            {
                // Element might not be ready yet, ignore
            }
        }
    }
}
