namespace Pggm.Components.DataAdapters;

/// <summary>
/// Provides an abstraction for fetching paginated, sorted, and filtered data
/// for use with a <see cref="PggmTable"/> component.
/// </summary>
/// <typeparam name="TItem">The type of data represented by each row in the table.</typeparam>
/// <remarks>
/// Implement this interface to supply table data from any source (HTTP, EF Core,
/// in-memory collections, etc.).  Register the implementation with the DI container
/// via the extension methods in <c>PggmTableAdapterServiceCollectionExtensions</c>,
/// then inject it into your page/component to populate the table's <c>Data</c> parameter.
/// </remarks>
public interface IPggmTableDataAdapter<TItem>
{
    /// <summary>
    /// Asynchronously retrieves a page of items matching the supplied request.
    /// </summary>
    /// <param name="request">Pagination, sort, and filter parameters.</param>
    /// <returns>A <see cref="PggmTableResult{TItem}"/> containing the current page and the total item count.</returns>
    Task<PggmTableResult<TItem>> GetItemsAsync(PggmTableRequest request);
}
