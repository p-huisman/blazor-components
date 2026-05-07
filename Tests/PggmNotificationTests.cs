// PggmNotificationTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmNotificationTests : TestContext
    {
        public PggmNotificationTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmNotification>();
            Assert.NotNull(cut.Markup);
        }
    }
}
