// PggmNotificationTitleTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmNotificationTitleTests : TestContext
    {
        public PggmNotificationTitleTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmNotificationTitle>();
            Assert.NotNull(cut.Markup);
        }
    }
}
