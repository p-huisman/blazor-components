namespace Pggm.Components.Components.PggmDataGrid;

/// <summary>
/// Holds the current pagination state shared between a <see cref="PggmDataGrid{TGridItem}"/>
/// and a <see cref="PggmPaginator"/>.
/// </summary>
public class PaginationState
{
    private int _pageIndex;
    private int _pageSize = 10;
    private int? _totalItemCount;

    /// <summary>Zero-based index of the current page.</summary>
    public int PageIndex
    {
        get => _pageIndex;
        set => _pageIndex = Math.Max(0, value);
    }

    /// <summary>Number of items displayed per page.</summary>
    public int PageSize
    {
        get => _pageSize;
        set => _pageSize = Math.Max(1, value);
    }

    /// <summary>
    /// Total number of items across all pages. Set by the data grid after each data load.
    /// <c>null</c> means the count is not yet known.
    /// </summary>
    public int? TotalItemCount => _totalItemCount;

    /// <summary>Zero-based index of the last available page, or <c>null</c> when the total is unknown.</summary>
    public int? LastPageIndex =>
        _totalItemCount.HasValue && _pageSize > 0
            ? Math.Max(0, (int)Math.Ceiling((double)_totalItemCount.Value / _pageSize) - 1)
            : null;

    /// <summary>
    /// Raised when the page index or page size changes.
    /// The data grid subscribes to this event to reload data.
    /// </summary>
    public event Func<Task>? CurrentPageChanged;

    /// <summary>
    /// Raised when the total item count is updated by the data grid.
    /// The paginator subscribes to this event to re-render with the correct totals.
    /// </summary>
    public event Func<Task>? TotalItemCountChanged;

    /// <summary>
    /// Navigates to the specified zero-based page index and raises <see cref="CurrentPageChanged"/>.
    /// </summary>
    public async Task SetCurrentPageIndexAsync(int pageIndex)
    {
        _pageIndex = Math.Max(0, pageIndex);
        await NotifyCurrentPageChangedAsync();
    }

    /// <summary>Sets the page size, resets to page 0, and raises <see cref="CurrentPageChanged"/>.</summary>
    public async Task SetItemsPerPageAsync(int pageSize)
    {
        _pageSize = Math.Max(1, pageSize);
        _pageIndex = 0;
        await NotifyCurrentPageChangedAsync();
    }

    /// <summary>
    /// Called by the data grid after loading to update the total item count and raise
    /// <see cref="TotalItemCountChanged"/> so the paginator can re-render.
    /// </summary>
    public async Task SetTotalItemCountAsync(int totalItemCount)
    {
        _totalItemCount = totalItemCount;

        // Clamp page index if the new total is smaller than the current offset.
        if (LastPageIndex.HasValue && _pageIndex > LastPageIndex.Value)
            _pageIndex = LastPageIndex.Value;

        if (TotalItemCountChanged is not null)
            await TotalItemCountChanged.Invoke();
    }

    private async Task NotifyCurrentPageChangedAsync()
    {
        if (CurrentPageChanged is not null)
            await CurrentPageChanged.Invoke();
    }
}
