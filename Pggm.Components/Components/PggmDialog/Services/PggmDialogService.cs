using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using System.Collections.Generic;

namespace Pggm.Components.Components.PggmDialog.Services
{
    public class PggmDialogService : IDialogService
    {
        private readonly Stack<DialogReference> _stack = new();

        public event Action<DialogReference>? OnShow;

        public DialogReference Show(string title, RenderFragment? content, bool modal = true, string[]? actionLabels = null, DialogParameters? parameters = null)
        {
            // If action labels are provided, create DialogAction list and inject into parameters
            if (actionLabels != null && actionLabels.Length > 0)
            {
                var actions = new List<DialogAction>();
                foreach (var label in actionLabels)
                {
                    actions.Add(new DialogAction { Text = label });
                }

                if (parameters == null)
                    parameters = new DialogParameters();

                parameters["Actions"] = actions;
            }

            var reference = new DialogReference(title, content, modal, parameters);
            _stack.Push(reference);
            OnShow?.Invoke(reference);
            return reference;
        }

        public DialogReference Show(string title, string? content, bool modal = true, string[]? actionLabels = null, DialogParameters? parameters = null)
        {
            RenderFragment? fragment = null;
            if (content != null)
            {
                fragment = builder => builder.AddContent(0, content);
            }

            return Show(title, fragment, modal, actionLabels, parameters);
        }

        public async Task<DialogResult> ShowAsync(string title, RenderFragment? content, bool modal = true, string[]? actionLabels = null, DialogParameters? parameters = null)
        {
            var reference = Show(title, content, modal, actionLabels, parameters);
            return await reference.Result.ConfigureAwait(false);
        }

        public Task<DialogResult> ShowAsync(string title, string? content, bool modal = true, string[]? actionLabels = null, DialogParameters? parameters = null)
        {
            return ShowAsync(title, content == null ? null : (RenderFragment)(builder => builder.AddContent(0, content)), modal, actionLabels, parameters);
        }

        public Task CloseAsync(DialogReference reference, object? result = null)
        {
            if (reference is null) throw new ArgumentNullException(nameof(reference));

            // If the given reference is on top of the stack, pop it
            if (_stack.Count > 0 && ReferenceEquals(_stack.Peek(), reference))
            {
                _stack.Pop();
            }

            return reference.CloseAsync(result);
        }
    }
}
