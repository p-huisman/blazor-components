using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Pggm.Components.Components.PggmDialog.Services;

namespace Pggm.Components.Components.PggmDialog
{
    public partial class DialogProvider : ComponentBase, IDisposable
    {
        [Inject] public IDialogService DialogService { get; set; } = null!;

        private readonly List<DialogReference> _dialogs = new();

        protected override void OnInitialized()
        {
            DialogService.OnShow += HandleShow;
        }

        private void HandleShow(DialogReference reference)
        {
            _dialogs.Add(reference);

            _ = reference.Result.ContinueWith(_ =>
            {
                InvokeAsync(() =>
                {
                    _dialogs.Remove(reference);
                    StateHasChanged();
                });
            });

            InvokeAsync(StateHasChanged);
        }

        private List<Pggm.Components.DialogAction> GetActions(DialogReference reference)
        {
            if (reference.Parameters is DialogParameters dp && dp.TryGetValue("Actions", out var obj) && obj is List<Pggm.Components.DialogAction> actions)
            {
                var list = new List<Pggm.Components.DialogAction>();
                for (int i = 0; i < actions.Count; i++)
                {
                    var a = actions[i];
                    var newAction = new Pggm.Components.DialogAction
                    {
                        Text = a.Text,
                        Appearance = a.Appearance,
                        Disabled = a.Disabled,
                        CssClass = a.CssClass,
                        Type = a.Type
                    };

                    var idx = i; // capture for closure
                    var label = a.Text;
                    newAction.OnClick = EventCallback.Factory.Create(this, async () => await DialogService.CloseAsync(reference, new DialogActionSelection { Index = idx, Label = label }));
                    list.Add(newAction);
                }

                return list;
            }

            return new List<Pggm.Components.DialogAction>
            {
                new Pggm.Components.DialogAction { Text = "OK", Appearance = "primary", OnClick = EventCallback.Factory.Create(this, async () => await DialogService.CloseAsync(reference, new DialogActionSelection { Index = 0, Label = "OK" })) },
                new Pggm.Components.DialogAction { Text = "Cancel", Appearance = "secondary", OnClick = EventCallback.Factory.Create(this, async () => await reference.DismissAsync()) }
            };
        }

        private bool GetModal(DialogReference reference)
        {
            if (reference.Parameters is DialogParameters dp && dp.TryGetValue("Modal", out var obj) && obj is bool b)
                return b;

            return reference.Modal;
        }

        private string? GetCloseLabel(DialogReference reference)
        {
            if (reference.Parameters is DialogParameters dp && dp.TryGetValue("CloseLabel", out var obj) && obj is string s)
                return s;

            return null;
        }

        private async Task OnDialogClose(DialogReference reference)
        {
            await DialogService.CloseAsync(reference);
        }

        private async Task OnDialogCancel(DialogReference reference)
        {
            await reference.DismissAsync();
        }

        public void Dispose()
        {
            DialogService.OnShow -= HandleShow;
        }
    }
}
