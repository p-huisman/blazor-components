// PggmInputIbanTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmInputIbanTests : TestContext
    {
        public PggmInputIbanTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmInputIban>();
            Assert.NotNull(cut.Markup);
        }
    }
}
