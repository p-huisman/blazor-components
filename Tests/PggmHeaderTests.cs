// PggmHeaderTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmHeaderTests : TestContext
    {
        public PggmHeaderTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmHeader>();
            Assert.NotNull(cut.Markup);
        }
    }
}
