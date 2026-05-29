using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;

namespace Pggm.Components;

public partial class PggmToolbar : ComponentBase, IDisposable
{
    private Pggm.Components.Components.PggmToolbar.PggmToolbarState? _subscribedState;

    [Parameter, EditorRequired]
    public Pggm.Components.Components.PggmToolbar.PggmToolbarState? State { get; set; }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        Subscribe();
    }

    protected override void OnParametersSet()
    {
        if (ReferenceEquals(_subscribedState, State)) return;
        Unsubscribe();
        Subscribe();
    }

    private void Subscribe()
    {
        if (State is null) return;
        _subscribedState = State;
        _subscribedState.OnChange += OnStateChanged;
    }

    private void Unsubscribe()
    {
        if (_subscribedState is null) return;
        _subscribedState.OnChange -= OnStateChanged;
        _subscribedState = null;
    }

    private void OnStateChanged()
    {
        _ = InvokeAsync(StateHasChanged);
    }

    public void Dispose() => Unsubscribe();
}
