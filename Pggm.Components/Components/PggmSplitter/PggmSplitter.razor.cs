using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.Constants;
using Pggm.Components.Enums;
using Pggm.Components.Extensions;

namespace Pggm.Components;

public partial class PggmSplitter : PggmEventComponentBase
{
    public override string TagName => "pggm-splitter";

    private double _position = 0.5;

    /// <summary>
    /// Content rendered in the start (left/top) panel.
    /// </summary>
    [Parameter] public RenderFragment? StartContent { get; set; }

    /// <summary>
    /// Content rendered in the end (right/bottom) panel.
    /// </summary>
    [Parameter] public RenderFragment? EndContent { get; set; }

    /// <summary>
    /// Divider position expressed as a 0–1 fraction. Defaults to 0.5.
    /// </summary>
    [Parameter]
#pragma warning disable BL0007
    public double Position
    {
        get => _position;
        set
        {
            var clamped = Math.Max(0, Math.Min(1, value));
            if (Math.Abs(_position - clamped) > double.Epsilon)
            {
                _position = clamped;
                _ = UpdateElementPositionAsync();
            }
        }
    }
#pragma warning restore BL0007

    /// <summary>
    /// Event callback fired when <see cref="Position"/> changes via user interaction.
    /// </summary>
    [Parameter] public EventCallback<double> PositionChanged { get; set; }

    /// <summary>
    /// Event callback fired on every <c>splitterResize</c> event.
    /// </summary>
    [Parameter] public EventCallback OnSplitterResize { get; set; }

    /// <summary>
    /// Orientation of the splitter. Defaults to <see cref="SplitterOrientation.Horizontal"/>.
    /// </summary>
    [Parameter] public SplitterOrientation Orientation { get; set; } = SplitterOrientation.Horizontal;

    /// <summary>
    /// When <see langword="true"/>, dragging and keyboard interactions are disabled.
    /// </summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>
    /// Space-separated list of snap points in percentages (e.g. "25 50 75").
    /// The divider snaps to the nearest point within <see cref="SnapThreshold"/> pixels.
    /// </summary>
    [Parameter] public string? Snap { get; set; }

    /// <summary>
    /// Snap threshold in pixels for matching snap points. Defaults to 10.
    /// </summary>
    [Parameter] public int SnapThreshold { get; set; } = 10;

    protected override Task OnParametersSetAsync()
    {
        RegisterEventHandler(EventNames.SplitterResize, HandleSplitterResizeAsync);
        return base.OnParametersSetAsync();
    }

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-splitter");
        await base.InitializeWebComponentAsync();
        await UpdateElementPositionAsync();
    }

    protected override IEnumerable<string> GetEventNames()
    {
        yield return EventNames.SplitterResize;
    }

    private async Task UpdateElementPositionAsync()
    {
        if (ElementRef.Id is not null)
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "position", _position);
            }
            catch
            {
                // Element may not be ready yet
            }
        }
    }

    private async Task HandleSplitterResizeAsync(object? eventData)
    {
        double newPosition;
        try
        {
            newPosition = await JSRuntime.InvokeAsync<double>("PggmComponents.getProperty", ElementRef, "position");
        }
        catch
        {
            return;
        }

        if (Math.Abs(_position - newPosition) > double.Epsilon)
        {
            _position = Math.Max(0, Math.Min(1, newPosition));

            await InvokeAsync(async () =>
            {
                if (PositionChanged.HasDelegate)
                    await PositionChanged.InvokeAsync(_position);

                if (OnSplitterResize.HasDelegate)
                    await OnSplitterResize.InvokeAsync();
            });
        }
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        // position is managed imperatively via UpdateElementPositionAsync to avoid
        // setting the HTML attribute during drag, which would interfere with the
        // web component's internal drag handler.
        attributes["orientation"] = Orientation.ToAttributeValue()!;

        if (Disabled)
            attributes["disabled"] = true;
        else
            attributes.Remove("disabled");

        if (!string.IsNullOrEmpty(Snap))
            attributes["snap"] = Snap;

        if (SnapThreshold != 10)
            attributes["snap-threshold"] = SnapThreshold;
    }
}
