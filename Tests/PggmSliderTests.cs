// PggmSliderTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmSliderTests : TestContext
    {
        public PggmSliderTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
            JSInterop.SetupVoid("PggmComponents.initialize", _ => true);
            JSInterop.SetupVoid("PggmComponents.loadScript", _ => true);
            JSInterop.SetupVoid("PggmComponents.addEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.removeEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.setProperty", _ => true);
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmSlider>();
            Assert.NotNull(cut.Markup);
        }
    }
}
