using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;

namespace Pggm.Components.Components.PggmDialog.Services
{
    public interface IDialogService
    {
        event Action<DialogReference>? OnShow;

        /// <summary>
        /// Show a dialog with the specified <paramref name="title"/> and <paramref name="content"/> fragment.
        /// </summary>
        /// <param name="title">Dialog title.</param>
        /// <param name="content">RenderFragment to render inside the dialog.</param>
        /// <param name="modal">When true, dialog is modal (prevents background interaction).</param>
        /// <param name="actionLabels">Optional convenience labels to create footer actions.</param>
        /// <param name="parameters">Optional dialog parameters.</param>
        DialogReference Show(string title, RenderFragment? content, bool modal = true, string[]? actionLabels = null, DialogParameters? parameters = null);

        /// <summary>
        /// Show a dialog with the specified <paramref name="title"/> and simple string <paramref name="content"/>.
        /// The string will be converted to a <see cref="RenderFragment"/> before rendering.
        /// </summary>
        /// <param name="title">Dialog title.</param>
        /// <param name="content">Plain string content to render.</param>
        /// <param name="modal">When true, dialog is modal (prevents background interaction).</param>
        /// <param name="actionLabels">Optional convenience labels to create footer actions.</param>
        /// <param name="parameters">Optional dialog parameters.</param>
        DialogReference Show(string title, string? content, bool modal = true, string[]? actionLabels = null, DialogParameters? parameters = null);

        /// <summary>
        /// Show a dialog asynchronously and await the resulting <see cref="DialogResult"/>.
        /// </summary>
        /// <param name="title">Dialog title.</param>
        /// <param name="content">RenderFragment to render inside the dialog.</param>
        /// <param name="modal">When true, dialog is modal (prevents background interaction).</param>
        /// <param name="actionLabels">Optional convenience labels to create footer actions.</param>
        /// <param name="parameters">Optional dialog parameters.</param>
        Task<DialogResult> ShowAsync(string title, RenderFragment? content, bool modal = true, string[]? actionLabels = null, DialogParameters? parameters = null);

        /// <summary>
        /// Show a dialog asynchronously using plain string content. The string will be converted to a <see cref="RenderFragment"/>.
        /// </summary>
        /// <param name="title">Dialog title.</param>
        /// <param name="content">Plain string content to render.</param>
        /// <param name="modal">When true, dialog is modal (prevents background interaction).</param>
        /// <param name="actionLabels">Optional convenience labels to create footer actions.</param>
        /// <param name="parameters">Optional dialog parameters.</param>
        Task<DialogResult> ShowAsync(string title, string? content, bool modal = true, string[]? actionLabels = null, DialogParameters? parameters = null);

        Task CloseAsync(DialogReference reference, object? result = null);
    }
}
