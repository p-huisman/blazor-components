using System.Text.Json;

using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

using Pggm.Components.Base;
using Pggm.Components.DataAdapters;

namespace Pggm.Components;

public partial class PggmTable : PggmComponentBase
{
    public override string TagName => "pggm-table";

    /// <summary>
    /// Label for the filter functionality
    /// </summary>
    [Parameter] public string? FilterLabel { get; set; }

    /// <summary>
    /// Label for clearing filters
    /// </summary>
    [Parameter] public string? ClearLabel { get; set; }

    /// <summary>
    /// Language setting for the table
    /// </summary>
    [Parameter] public string? Lang { get; set; }

    /// <summary>
    /// Field name that serves as the unique identifier for table rows
    /// </summary>
    [Parameter] public string? IdField { get; set; }

    /// <summary>
    /// Whether rows in the table can be selected
    /// </summary>
    [Parameter] public bool Selectable { get; set; }

    /// <summary>
    /// Type of selection allowed (single, multiple)
    /// </summary>
    [Parameter] public string? SelectType { get; set; }

    /// <summary>
    /// JSON data for the table rows
    /// </summary>
    [Parameter] public object? Data { get; set; }

    /// <summary>
    /// Optional adapter that can provide paged/sorted/filtered data for the table.
    /// </summary>
    [Parameter] public IPggmTableDataAdapter<object>? Adapter { get; set; }

    /// <summary>
    /// Number of rows per page when the adapter handles sorting.
    /// </summary>
    [Parameter] public int? PageSize { get; set; }

    /// <summary>
    /// Raised after the adapter returns data in response to a sort event.
    /// </summary>
    [Parameter] public EventCallback<PggmTableResult<object>> OnAdapterResult { get; set; }

    /// <summary>
    /// Raised after the wrapper processes a column-header sort, passing (field, ascending).
    /// </summary>
    [Parameter] public EventCallback<(string Field, bool Ascending)> OnSortChanged { get; set; }

    /// <summary>
    /// Remote URL endpoint for fetching table data
    /// </summary>
    [Parameter] public string? RemoteUrl { get; set; }

    /// <summary>
    /// Remote mode for the endpoint (simple, cursor, offset)
    /// </summary>
    [Parameter] public string? Remote { get; set; }

    /// <summary>
    /// Raised when the row selection changes. The array contains the string IDs of the currently selected rows.
    /// </summary>
    [Parameter] public EventCallback<string[]> OnSelectionChanged { get; set; }

    /// <summary>
    /// Two-way bindable array of selected row IDs.
    /// </summary>
    [Parameter] public string[]? Selected { get; set; }

    /// <summary>
    /// Callback fired when the selected rows change (for two-way binding support).
    /// </summary>
    [Parameter] public EventCallback<string[]> SelectedChanged { get; set; }

    private DotNetObjectReference<PggmTable>? _dotNetRef;
    private object? _lastDataRef;
    private string _lastSentFingerprint = "";

    private string? _currentSortField;
    private bool _currentSortAscending = true;

    private static string GetSelectionFingerprint(string[]? values) =>
        values == null || values.Length == 0 ? "" : string.Join(",", values.OrderBy(x => x));

    protected override async Task InitializeWebComponentAsync()
    {
        await DesignSystemService.LoadScriptAsync("pggm-table");
        await base.InitializeWebComponentAsync();

        var needsRef = Adapter is not null || (Selectable && (OnSelectionChanged.HasDelegate || SelectedChanged.HasDelegate));
        if (needsRef)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
        }

        if (Adapter is not null)
        {
            await JSRuntime.InvokeVoidAsync("PggmComponents.addCancelableEventListener", ElementRef, "beforeSort", _dotNetRef, "HandleCancelableEvent");
            await JSRuntime.InvokeVoidAsync("PggmComponents.addEventListener", ElementRef, "sortChange", _dotNetRef, "HandleEvent");
        }

        if (Selectable && (OnSelectionChanged.HasDelegate || SelectedChanged.HasDelegate))
        {
            await JSRuntime.InvokeVoidAsync("PggmComponents.addEventListener", ElementRef, "selectionChange", _dotNetRef, "HandleEvent");
        }
    }

    [JSInvokable]
    public async Task<bool> HandleCancelableEvent(string eventName, JsonElement detail)
    {
        if (eventName == "beforeSort" &&
            detail.ValueKind == JsonValueKind.Object && detail.TryGetProperty("field", out var fieldEl) && fieldEl.ValueKind == JsonValueKind.String)
        {
            var field = fieldEl.GetString();
            if (!string.IsNullOrEmpty(field) && Adapter is not null)
            {
                if (field == _currentSortField)
                    _currentSortAscending = !_currentSortAscending;
                else
                {
                    _currentSortField = field;
                    _currentSortAscending = true;
                }

                var req = new PggmTableRequest
                {
                    StartIndex = 0,
                    Count = PageSize,
                    SortField = _currentSortField,
                    SortAscending = _currentSortAscending,
                    Filters = null,
                    CancellationToken = CancellationToken.None,
                };

                var result = await Adapter.GetItemsAsync(req);

                await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "data", result.Items);
                await JSRuntime.InvokeVoidAsync("PggmComponents.callElementMethod", ElementRef, "initSort", _currentSortField, _currentSortAscending ? "asc" : "desc");

                await OnAdapterResult.InvokeAsync(result);
                await OnSortChanged.InvokeAsync((_currentSortField!, _currentSortAscending));

                return false;
            }
        }

        return true;
    }

    [JSInvokable]
    public async Task HandleEvent(string eventName, JsonElement detail)
    {
        if (eventName == "sortChange")
        {
            if (detail.ValueKind == JsonValueKind.Object &&
                detail.TryGetProperty("field", out var f) && f.ValueKind == JsonValueKind.String &&
                detail.TryGetProperty("direction", out var d) && d.ValueKind == JsonValueKind.String)
            {
                _currentSortField = f.GetString();
                _currentSortAscending = d.GetString() == "asc";
            }
        }
        else if (eventName == "selectionChange" &&
                 detail.ValueKind == JsonValueKind.Object &&
                 detail.TryGetProperty("selectedRows", out var arr) &&
                 arr.ValueKind == JsonValueKind.Array)
        {
            var ids = arr.EnumerateArray()
                         .Select(x => x.ValueKind == JsonValueKind.String ? x.GetString()! : x.ToString())
                         .ToArray();
            _lastSentFingerprint = GetSelectionFingerprint(ids);
            await OnSelectionChanged.InvokeAsync(ids);
            await SelectedChanged.InvokeAsync(ids);
        }
    }

    protected override ValueTask DisposeAsyncCore()
    {
        if (_dotNetRef is not null)
        {
            _ = JSRuntime.InvokeVoidAsync("PggmComponents.removeEventListener", ElementRef, "beforeSort");
            _ = JSRuntime.InvokeVoidAsync("PggmComponents.removeEventListener", ElementRef, "sortChange");
            _ = JSRuntime.InvokeVoidAsync("PggmComponents.removeEventListener", ElementRef, "selectionChange");
            _dotNetRef.Dispose();
            _dotNetRef = null;
        }

        return base.DisposeAsyncCore();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        if (!string.IsNullOrEmpty(FilterLabel)) attributes["filter-label"] = FilterLabel;
        if (!string.IsNullOrEmpty(ClearLabel)) attributes["clear-label"] = ClearLabel;
        if (!string.IsNullOrEmpty(Lang)) attributes["lang"] = Lang;
        if (!string.IsNullOrEmpty(IdField)) attributes["id-field"] = IdField;
        if (Selectable) attributes["selectable"] = true; else attributes.Remove("selectable");
        if (!string.IsNullOrEmpty(SelectType)) attributes["select-type"] = SelectType;
        if (!string.IsNullOrEmpty(RemoteUrl)) attributes["remote-url"] = RemoteUrl;
        if (!string.IsNullOrEmpty(Remote)) attributes["remote"] = Remote;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        if (!ReferenceEquals(Data, _lastDataRef))
        {
            _lastDataRef = Data;
            await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "data", Data);
        }

        if (Selected != null)
        {
            var fingerprint = GetSelectionFingerprint(Selected);
            if (fingerprint != _lastSentFingerprint)
            {
                _lastSentFingerprint = fingerprint;
                await JSRuntime.InvokeVoidAsync("PggmComponents.setProperty", ElementRef, "selected", Selected);
            }
        }
    }
}
