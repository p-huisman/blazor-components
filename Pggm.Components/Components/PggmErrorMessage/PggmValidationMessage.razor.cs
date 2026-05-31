using System.Linq.Expressions;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmValidationMessage<TField> : PggmComponentBase
{
    public override string TagName => "pggm-error-message";

    [CascadingParameter] private EditContext? CurrentEditContext { get; set; }

    /// <summary>
    /// Expression that identifies the model field to associate with this validation message.
    /// Usage: &lt;PggmValidationMessage For="() => model.Property" /&gt;
    /// </summary>
    [Parameter, EditorRequired] public Expression<Func<TField>>? For { get; set; }

    private FieldIdentifier _fieldIdentifier;
    private IReadOnlyCollection<string> _messages = Array.Empty<string>();
    // True once the user has touched this field (field marked modified) or the form was submitted.
    private bool _submitted;

    private bool _shouldShow => (_submitted || (!_fieldIdentifier.Equals(default(FieldIdentifier)) && CurrentEditContext?.IsModified(_fieldIdentifier) == true)) && _messages.Any();
    protected string? CurrentMessage => _shouldShow ? _messages.FirstOrDefault() : null;

    protected override void OnInitialized()
    {
        base.OnInitialized();

        if (CurrentEditContext == null)
        {
            throw new InvalidOperationException("PggmValidationMessage must be used inside an EditForm (a cascading EditContext is required).");
        }

        if (For == null)
        {
            throw new InvalidOperationException("The For parameter is required. Use For = @(() => model.Property) to identify the field.");
        }

        _fieldIdentifier = FieldIdentifier.Create(For);

        CurrentEditContext.OnValidationStateChanged += OnValidationStateChanged;
        CurrentEditContext.OnValidationRequested += OnValidationRequested;
    }

    // Fired when EditForm attempts submission (EditContext.Validate() is called).
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
        _messages = CurrentEditContext.GetValidationMessages(_fieldIdentifier).ToList();

        // Ensure the web component shows/hides based on presence of messages
        StateHasChanged();
    }

    protected override void AddComponentAttributes(Dictionary<string, object> attributes)
    {
        // Set the `for` attribute to the field name so summary/focus helpers can
        // locate the related input when possible. Also set visibility when messages exist.
        if (For != null && !string.IsNullOrEmpty(_fieldIdentifier.FieldName))
        {
            attributes["for"] = _fieldIdentifier.FieldName;
        }

        if (_shouldShow)
        {
            attributes["visible"] = "visible";
        }
    }

    public override async ValueTask DisposeAsync()
    {
        if (CurrentEditContext != null)
        {
            CurrentEditContext.OnValidationStateChanged -= OnValidationStateChanged;
            CurrentEditContext.OnValidationRequested -= OnValidationRequested;
        }
        await base.DisposeAsync();
    }
}
