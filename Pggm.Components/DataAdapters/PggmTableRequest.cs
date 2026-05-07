namespace Pggm.Components.DataAdapters;

/// <summary>
/// Represents a request for paginated, sorted, and filtered table data
/// from a <see cref="IPggmTableDataAdapter{TItem}"/>.
/// </summary>
public sealed class PggmTableRequest
{
    /// <summary>
    /// Gets the zero-based index of the first item to be returned.
    /// </summary>
    public int StartIndex { get; init; }

    /// <summary>
    /// Gets the maximum number of items to return, or <c>null</c> for unlimited.
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Gets the name of the field to sort by, or <c>null</c> when no sort is applied.
    /// </summary>
    public string? SortField { get; init; }

    /// <summary>
    /// Gets a value indicating whether to sort in ascending order.
    /// Defaults to <c>true</c>. Ignored when <see cref="SortField"/> is <c>null</c>.
    /// </summary>
    public bool SortAscending { get; init; } = true;

    /// <summary>
    /// Gets the active column filters as a field-name → filter-value dictionary,
    /// or <c>null</c> when no filters are applied.
    /// </summary>
    public IReadOnlyDictionary<string, string>? Filters { get; init; }

    /// <summary>
    /// Gets a <see cref="System.Threading.CancellationToken"/> that signals when the request is cancelled.
    /// </summary>
    public CancellationToken CancellationToken { get; init; }
}
