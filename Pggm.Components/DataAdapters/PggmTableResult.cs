namespace Pggm.Components.DataAdapters;

/// <summary>
/// Represents a page of data returned by a <see cref="IPggmTableDataAdapter{TItem}"/>.
/// </summary>
/// <typeparam name="TItem">The type of data represented by each row in the table.</typeparam>
public sealed class PggmTableResult<TItem>
{
    /// <summary>
    /// Gets the items for the current page.
    /// </summary>
    public IReadOnlyList<TItem> Items { get; init; } = [];

    /// <summary>
    /// Gets the total number of items across all pages (before pagination).
    /// </summary>
    public int TotalItemCount { get; init; }

    /// <summary>
    /// Creates a <see cref="PggmTableResult{TItem}"/> from the supplied items and total count.
    /// </summary>
    /// <param name="items">The items for the current page.</param>
    /// <param name="totalItemCount">The total number of items across all pages.</param>
    public static PggmTableResult<TItem> From(IEnumerable<TItem> items, int totalItemCount) =>
        new() { Items = [.. items], TotalItemCount = totalItemCount };

    /// <summary>
    /// Creates an empty <see cref="PggmTableResult{TItem}"/>.
    /// </summary>
    public static PggmTableResult<TItem> Empty() =>
        new() { Items = [], TotalItemCount = 0 };
}
