using System.Net.Http.Json;
using System.Text.Json;

using Microsoft.Extensions.Options;

namespace Pggm.Components.DataAdapters;

/// <summary>
/// An <see cref="IPggmTableDataAdapter{TItem}"/> implementation that fetches data
/// from an HTTP endpoint and maps it to a <see cref="PggmTableResult{TItem}"/>.
/// </summary>
/// <typeparam name="TItem">The type of data represented by each row in the table.</typeparam>
/// <remarks>
/// <para>
/// Register this adapter with
/// <see cref="PggmTableAdapterServiceCollectionExtensions.AddPggmTableHttpAdapter{TItem}(Microsoft.Extensions.DependencyInjection.IServiceCollection, Action{HttpClientPggmTableDataAdapterOptions{TItem}})"/>
/// and inject <see cref="IPggmTableDataAdapter{TItem}"/> into your components.
/// </para>
/// <para>
/// By default the adapter expects the remote endpoint to respond with:
/// <code>{ "items": [...], "totalItemCount": 123 }</code>
/// Provide a custom <see cref="HttpClientPggmTableDataAdapterOptions{TItem}.ResponseMapper"/>
/// when your API uses a different response envelope.
/// </para>
/// </remarks>
public class HttpClientPggmTableDataAdapter<TItem> : IPggmTableDataAdapter<TItem>
{
    private readonly HttpClient _httpClient;
    private readonly HttpClientPggmTableDataAdapterOptions<TItem> _options;

    /// <summary>
    /// Initialises a new instance of <see cref="HttpClientPggmTableDataAdapter{TItem}"/>.
    /// </summary>
    /// <param name="httpClient">The <see cref="HttpClient"/> used for remote requests.</param>
    /// <param name="options">The adapter configuration options.</param>
    public HttpClientPggmTableDataAdapter(
        HttpClient httpClient,
        IOptions<HttpClientPggmTableDataAdapterOptions<TItem>> options)
    {
        _httpClient = httpClient;
        _options = options.Value;
    }

    /// <inheritdoc />
    public async Task<PggmTableResult<TItem>> GetItemsAsync(PggmTableRequest request)
    {
        var url = BuildUrl(request);

        var jsonElement = await _httpClient.GetFromJsonAsync<JsonElement>(
            url,
            _options.JsonSerializerOptions,
            request.CancellationToken);

        return _options.ResponseMapper is not null
            ? _options.ResponseMapper(jsonElement)
            : MapDefaultResponse(jsonElement);
    }

    private string BuildUrl(PggmTableRequest request)
    {
        var queryParams = new Dictionary<string, string?>
        {
            [_options.StartIndexParam] = request.StartIndex.ToString(),
        };

        if (request.Count.HasValue)
        {
            queryParams[_options.CountParam] = request.Count.Value.ToString();
        }

        if (!string.IsNullOrEmpty(request.SortField))
        {
            queryParams[_options.SortFieldParam] = request.SortField;
            queryParams[_options.SortDirectionParam] = request.SortAscending
                ? _options.AscendingValue
                : _options.DescendingValue;
        }

        if (request.Filters is { Count: > 0 })
        {
            foreach (var (field, value) in request.Filters)
            {
                queryParams[$"filter[{field}]"] = value;
            }
        }

        var queryString = string.Join("&", queryParams
            .Where(p => p.Value is not null)
            .Select(p => $"{Uri.EscapeDataString(p.Key)}={Uri.EscapeDataString(p.Value ?? string.Empty)}"));

        var separator = _options.BaseUrl.Contains('?') ? "&" : "?";
        return string.IsNullOrEmpty(queryString)
            ? _options.BaseUrl
            : $"{_options.BaseUrl}{separator}{queryString}";
    }

    private PggmTableResult<TItem> MapDefaultResponse(JsonElement root)
    {
        var items = root.TryGetProperty("items", out var itemsElement)
            ? itemsElement.Deserialize<TItem[]>(_options.JsonSerializerOptions) ?? []
            : [];

        var total = root.TryGetProperty("totalItemCount", out var totalElement)
            && totalElement.TryGetInt32(out var totalValue)
                ? totalValue
                : 0;

        return PggmTableResult<TItem>.From(items, total);
    }
}
