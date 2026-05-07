// PggmInputPhoneTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmInputPhoneTests : TestContext
    {
        public PggmInputPhoneTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
            JSInterop.SetupVoid("PggmComponents.setProperty", _ => true);
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmInputPhone>();
            Assert.NotNull(cut.Markup);
        }
    }
}
