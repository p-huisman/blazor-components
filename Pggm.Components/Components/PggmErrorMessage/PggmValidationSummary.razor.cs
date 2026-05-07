using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.JSInterop;

namespace Pggm.Components;

public partial class PggmValidationSummary : ComponentBase, IAsyncDisposable
{
    [CascadingParameter] private EditContext? CurrentEditContext { get; set; }

    [Inject] private IJSRuntime JSRuntime { get; set; } = default!;

    [Parameter] public bool ShowSummary { get; set; } = true;
    [Parameter] public RenderFragment? ChildContent { get; set; }

    private IReadOnlyCollection<string> _messages = Array.Empty<string>();
    private bool _submitted;
    private List<MessageInfo> _visibleMessages { get; set; } = new();
    private sealed record MessageInfo(string? For, string Text);

    protected override void OnInitialized()
    {
        base.OnInitialized();
        if (CurrentEditContext == null)
            throw new InvalidOperationException("PggmValidationSummary must be placed inside an EditForm (EditContext is required).");

        CurrentEditContext.OnValidationStateChanged += OnValidationStateChanged;
        CurrentEditContext.OnValidationRequested += OnValidationRequested;
    }

    // Fired when EditForm attempts submission.
    private void OnValidationRequested(object? sender, ValidationRequestedEventArgs args)
    {
        _submitted = true;
        UpdateMessages();
    }

    private void OnValidationStateChanged(object? sender, ValidationStateChangedEventArgs args)
    {
        UpdateMessages();
    }

    private void UpdateMessages()
    {
        if (CurrentEditContext == null) return;
        _messages = CurrentEditContext.GetValidationMessages().ToList();
        // Render server-side validation messages as a plain list (no JS focus/scroll)
        _visibleMessages = _messages.Select(m => new MessageInfo(null, m)).ToList();
        StateHasChanged();
    }

    protected Dictionary<string, object> GetAttributes()
    {
        var attrs = new Dictionary<string, object>();
        // Only mark visible after the user attempted to submit the form.
        if (_submitted && _messages.Any()) attrs["visible"] = "visible";
        return attrs;
    }

    public async ValueTask DisposeAsync()
    {
        if (CurrentEditContext != null)
        {
            CurrentEditContext.OnValidationStateChanged -= OnValidationStateChanged;
            CurrentEditContext.OnValidationRequested -= OnValidationRequested;
        }
        await Task.CompletedTask;
    }
}
