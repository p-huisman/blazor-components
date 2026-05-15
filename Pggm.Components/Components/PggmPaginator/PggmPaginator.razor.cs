using Microsoft.AspNetCore.Components;
using Pggm.Components.Components.PggmDataGrid;

namespace Pggm.Components;

/// <summary>
/// Context passed to <see cref="PggmPaginator.SummaryTemplate"/>.
/// </summary>
public sealed record PaginatorSummaryContext(int FirstItem, int LastItem, int TotalItems);

/// <summary>
/// A pagination control that works with <see cref="PggmDataGrid{TGridItem}"/> via a shared
/// <see cref="PaginationState"/> instance. Mirrors the FluentPaginator API:
/// <code>
/// &lt;PggmPaginator State="@_pagination" /&gt;
/// </code>
/// where <c>_pagination</c> is also passed to the grid as <c>Pagination="@_pagination"</c>.
/// </summary>
public partial class PggmPaginator : ComponentBase, IDisposable
{
    private readonly string _pageSizeSelectId = $"pggm-paginator-ps-{Guid.NewGuid():N}";
    private PaginationState? _subscribedState;

    /// <summary>The shared pagination state. Must be the same instance passed to the grid.</summary>
    [Parameter, EditorRequired]
    public PaginationState? State { get; set; }

    /// <summary>Optional extra CSS class(es) applied to the root element.</summary>
    [Parameter]
    public string? Class { get; set; }

    /// <summary>
    /// When <c>true</c>, numeric page buttons are rendered allowing direct navigation to any page.
    /// Defaults to <c>false</c>.
    /// </summary>
    [Parameter]
    public bool NumericNavigation { get; set; }

    /// <summary>
    /// Optional array of page-size choices rendered as a dropdown.
    /// When <c>null</c> or empty no dropdown is shown.
    /// Example: <c>new[] { 10, 25, 50, 100 }</c>.
    /// </summary>
    [Parameter]
    public int[]? ItemsPerPageOptions { get; set; }

    /// <summary>Label for the items-per-page dropdown. Defaults to "Items per page".</summary>
    [Parameter]
    public string ItemsPerPageLabel { get; set; } = "Items per page";

    /// <summary>
    /// Template used to render the summary text (e.g. "1 – 10 of 50 items").
    /// Receives a <see cref="PaginatorSummaryContext"/> with <c>FirstItem</c>, <c>LastItem</c>
    /// and <c>TotalItems</c>.
    /// </summary>
    [Parameter]
    public RenderFragment<PaginatorSummaryContext> SummaryTemplate { get; set; } =
        ctx => builder =>
        {
            builder.AddContent(0, $"{ctx.FirstItem}\u2013{ctx.LastItem} of {ctx.TotalItems}");
        };

    private bool IsFirstPage => State is null || State.PageIndex == 0;
    private bool IsLastPage => State?.LastPageIndex is null || State.PageIndex >= State.LastPageIndex.Value;

    protected override void OnParametersSet()
    {
        if (ReferenceEquals(_subscribedState, State)) return;

        Unsubscribe();
        _subscribedState = State;
        Subscribe();
    }

    private void Subscribe()
    {
        if (_subscribedState is null) return;
        _subscribedState.CurrentPageChanged += OnStateChangedAsync;
        _subscribedState.TotalItemCountChanged += OnStateChangedAsync;
    }

    private void Unsubscribe()
    {
        if (_subscribedState is null) return;
        _subscribedState.CurrentPageChanged -= OnStateChangedAsync;
        _subscribedState.TotalItemCountChanged -= OnStateChangedAsync;
    }

    private async Task OnStateChangedAsync()
    {
        await InvokeAsync(StateHasChanged);
    }

    private async Task GoToFirstAsync()
    {
        if (State is null || IsFirstPage) return;
        await State.SetCurrentPageIndexAsync(0);
    }

    private async Task GoToPreviousAsync()
    {
        if (State is null || IsFirstPage) return;
        await State.SetCurrentPageIndexAsync(State.PageIndex - 1);
    }

    private async Task GoToNextAsync()
    {
        if (State is null || IsLastPage) return;
        await State.SetCurrentPageIndexAsync(State.PageIndex + 1);
    }

    private async Task GoToLastAsync()
    {
        if (State?.LastPageIndex is null || IsLastPage) return;
        await State.SetCurrentPageIndexAsync(State.LastPageIndex.Value);
    }

    private async Task GoToPageAsync(int pageIndex)
    {
        if (State is null) return;
        await State.SetCurrentPageIndexAsync(pageIndex);
    }

    private async Task OnPageSizeChangedAsync(ChangeEventArgs e)
    {
        if (State is null) return;
        if (int.TryParse(e.Value?.ToString(), out var size))
            await State.SetItemsPerPageAsync(size);
    }

    /// <summary>
    /// Returns page numbers (0-based) to show as buttons, inserting -1 as an ellipsis marker.
    /// Always shows the first and last page plus a window of pages around the current page.
    /// </summary>
    private IEnumerable<int> GetVisiblePageNumbers()
    {
        if (State?.LastPageIndex is not { } last) yield break;

        const int wing = 2; // pages on each side of current
        var current = State.PageIndex;

        var prev = -1;
        for (var p = 0; p <= last; p++)
        {
            var show = p == 0 || p == last || Math.Abs(p - current) <= wing;
            if (!show) continue;

            if (prev >= 0 && p - prev > 1)
                yield return -1; // ellipsis

            yield return p;
            prev = p;
        }
    }

    public void Dispose() => Unsubscribe();
}
