// PggmHeaderTests.cs
using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

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
