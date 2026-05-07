using System.Threading.Tasks;

namespace Pggm.Components.Components.PggmDialog.Services
{
    public class DialogReference : IDialogReference
    {
        private readonly TaskCompletionSource<DialogResult> _tcs = new(TaskCreationOptions.RunContinuationsAsynchronously);

        public Task<DialogResult> Result => _tcs.Task;

        internal string Title { get; }

        internal object? Parameters { get; }

        internal Microsoft.AspNetCore.Components.RenderFragment? Content { get; }

        internal bool Modal { get; }

        public DialogReference(string title, Microsoft.AspNetCore.Components.RenderFragment? content, bool modal = true, object? parameters = null)
        {
            Title = title;
            Content = content;
            Modal = modal;
            Parameters = parameters;
        }

        public Task CloseAsync(object? result = null)
        {
            if (result is DialogActionSelection sel)
            {
                // Maintain backward compatibility by setting Data to the selected index
                _tcs.TrySetResult(DialogResult.Ok(sel.Index, sel.Index, sel.Label));
            }
            else if (result is int idx)
            {
                // Maintain backward compatibility: Data contains index as before
                _tcs.TrySetResult(DialogResult.Ok(idx, idx, null));
            }
            else
            {
                _tcs.TrySetResult(DialogResult.Ok(result));
            }
            return Task.CompletedTask;
        }

        public Task DismissAsync()
        {
            _tcs.TrySetResult(DialogResult.Cancel());
            return Task.CompletedTask;
        }
    }
}
