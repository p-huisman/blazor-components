// PggmProgressIndicatorTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmProgressIndicatorTests : TestContext
    {
        public PggmProgressIndicatorTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
            JSInterop.SetupVoid("PggmComponents.initialize", _ => true);
            JSInterop.SetupVoid("PggmComponents.loadScript", _ => true);
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmProgressIndicator>();
            Assert.NotNull(cut.Markup);
        }
    }
}
