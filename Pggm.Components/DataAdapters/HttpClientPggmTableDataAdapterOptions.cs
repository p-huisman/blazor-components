using System.Text.Json;

namespace Pggm.Components.DataAdapters;

/// <summary>
/// Configuration options for <see cref="HttpClientPggmTableDataAdapter{TItem}"/>.
/// </summary>
/// <typeparam name="TItem">The type of data represented by each row in the table.</typeparam>
public sealed class HttpClientPggmTableDataAdapterOptions<TItem>
{
    /// <summary>
    /// Gets or sets the base URL of the remote data endpoint.
    /// Query parameters for pagination, sorting, and filtering will be appended automatically.
    /// </summary>
    /// <example>https://api.example.com/employees</example>
    public required string BaseUrl { get; set; }

    /// <summary>
    /// Gets or sets the query-string parameter name used for the page start index.
    /// Defaults to <c>"startIndex"</c>.
    /// </summary>
    public string StartIndexParam { get; set; } = "startIndex";

    /// <summary>
    /// Gets or sets the query-string parameter name used for the page size.
    /// Defaults to <c>"count"</c>.
    /// </summary>
    public string CountParam { get; set; } = "count";

    /// <summary>
    /// Gets or sets the query-string parameter name used for the sort field.
    /// Defaults to <c>"sortField"</c>.
    /// </summary>
    public string SortFieldParam { get; set; } = "sortField";

    /// <summary>
    /// Gets or sets the query-string parameter name used for the sort direction.
    /// Defaults to <c>"sortDirection"</c>.
    /// </summary>
    public string SortDirectionParam { get; set; } = "sortDirection";

    /// <summary>
    /// Gets or sets the ascending sort direction value.
    /// Defaults to <c>"asc"</c>.
    /// </summary>
    public string AscendingValue { get; set; } = "asc";

    /// <summary>
    /// Gets or sets the descending sort direction value.
    /// Defaults to <c>"desc"</c>.
    /// </summary>
    public string DescendingValue { get; set; } = "desc";

    /// <summary>
    /// Gets or sets a delegate that maps the raw <see cref="JsonElement"/> response
    /// to a <see cref="PggmTableResult{TItem}"/>.
    /// </summary>
    /// <remarks>
    /// When <c>null</c> (the default), the adapter expects the response to match the shape:
    /// <code>{ "items": [...], "totalItemCount": 123 }</code>
    /// Supply a custom mapper when your API uses a different response envelope.
    /// </remarks>
    public Func<JsonElement, PggmTableResult<TItem>>? ResponseMapper { get; set; }

    /// <summary>
    /// Gets or sets the <see cref="System.Text.Json.JsonSerializerOptions"/> used when
    /// deserialising the HTTP response.  Defaults to <c>null</c> (uses framework defaults).
    /// </summary>
    public JsonSerializerOptions? JsonSerializerOptions { get; set; }
}
