// PggmProgressStepTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmProgressStepTests : TestContext
    {
        public PggmProgressStepTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
            JSInterop.SetupVoid("PggmComponents.initialize", _ => true);
            JSInterop.SetupVoid("PggmComponents.loadScript", _ => true);
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmProgressStep>();
            Assert.NotNull(cut.Markup);
        }
    }
}
