using System;

namespace Pggm.Components.Components.PggmDialog.Services
{
    public sealed class DialogResult
    {
        public bool Cancelled { get; }
        public object? Data { get; }

        public int? ActionIndex { get; }

        public string? ActionLabel { get; }

        private DialogResult(bool cancelled, object? data, int? actionIndex, string? actionLabel)
        {
            Cancelled = cancelled;
            Data = data;
            ActionIndex = actionIndex;
            ActionLabel = actionLabel;
        }

        public static DialogResult Ok(object? data = null, int? actionIndex = null, string? actionLabel = null) => new DialogResult(false, data, actionIndex, actionLabel);

        public static DialogResult Cancel() => new DialogResult(true, null, null, null);
    }
}
