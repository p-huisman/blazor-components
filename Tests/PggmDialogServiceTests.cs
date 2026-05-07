using System.Threading.Tasks;
using Xunit;
using Microsoft.AspNetCore.Components;
using Pggm.Components.Components.PggmDialog.Services;

namespace Pggm.Components.Tests
{
    public class PggmDialogServiceTests
    {
        [Fact]
        public async Task ShowAsync_Returns_When_Closed()
        {
            var service = new PggmDialogService();
            DialogReference? captured = null;
            service.OnShow += r => captured = r;

            var showTask = service.ShowAsync("title", (RenderFragment?)null);

            Assert.NotNull(captured);

            await service.CloseAsync(captured!, "payload");

            var result = await showTask;
            Assert.False(result.Cancelled);
            Assert.Equal("payload", result.Data);
        }

        [Fact]
        public async Task ShowAsync_ReturnsCancelled_When_Dismissed()
        {
            var service = new PggmDialogService();
            DialogReference? captured = null;
            service.OnShow += r => captured = r;

            var showTask = service.ShowAsync("title", (RenderFragment?)null);

            Assert.NotNull(captured);

            await captured!.DismissAsync();

            var result = await showTask;
            Assert.True(result.Cancelled);
        }
    }
}
