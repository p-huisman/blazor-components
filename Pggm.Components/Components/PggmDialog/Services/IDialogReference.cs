using System.Threading.Tasks;

namespace Pggm.Components.Components.PggmDialog.Services
{
    public interface IDialogReference
    {
        Task<DialogResult> Result { get; }

        Task CloseAsync(object? result = null);

        Task DismissAsync();
    }
}
