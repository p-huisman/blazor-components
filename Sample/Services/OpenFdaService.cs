using System.Net.Http.Json;
using System.Text.Json.Serialization;

using Pggm.Components.Components.PggmDataGrid;

namespace Pggm.Components.Sample.Services
{
    public class FoodEnforcementItem
    {
        [JsonPropertyName("recall_number")]
        public string? RecallNumber { get; set; }

        [JsonPropertyName("state")]
        public string? State { get; set; }

        [JsonPropertyName("city")]
        public string? City { get; set; }

        [JsonPropertyName("recalling_firm")]
        public string? RecallingFirm { get; set; }

        [JsonPropertyName("status")]
        public string? Status { get; set; }

        [JsonPropertyName("recall_initiation_date")]
        public string? RecallInitiationDate { get; set; }
    }

    public class OpenFdaService
    {
        private readonly HttpClient _http;
        private const string BaseUrl = "https://api.fda.gov/food/enforcement.json";

        public OpenFdaService(HttpClient http)
        {
            _http = http;
        }

        public async Task<GridItemsProviderResult<FoodEnforcementItem>> GetItemsAsync(
            int startIndex,
            int count,
            string? sortField,
            bool ascending,
            string? stateFilter,
            CancellationToken cancellationToken = default)
        {
            var skip = startIndex;
            var limit = count > 0 ? count : 10;

            var search = string.IsNullOrWhiteSpace(stateFilter) ? "" : $"&search=state:\"{Uri.EscapeDataString(stateFilter)}\"";
            var sort = string.IsNullOrWhiteSpace(sortField) ? "" : $"&sort={Uri.EscapeDataString(sortField)}:{(ascending ? "asc" : "desc")}";
            var url = $"{BaseUrl}?skip={skip}&limit={limit}{search}{sort}";

            var response = await _http.GetFromJsonAsync<OpenFdaResponse>(url, cancellationToken);

            var items = response?.Results ?? new System.Collections.Generic.List<FoodEnforcementItem>();
            var total = response?.Meta?.Results?.Total ?? items.Count;

            return GridItemsProviderResult.From(items, total);
        }
    }

    internal class OpenFdaResponse
    {
        [JsonPropertyName("meta")]
        public OpenFdaMeta? Meta { get; set; }

        [JsonPropertyName("results")]
        public System.Collections.Generic.List<FoodEnforcementItem>? Results { get; set; }
    }

    internal class OpenFdaMeta
    {
        [JsonPropertyName("results")]
        public OpenFdaMetaResults? Results { get; set; }
    }

    internal class OpenFdaMetaResults
    {
        [JsonPropertyName("total")]
        public int Total { get; set; }
    }
}
