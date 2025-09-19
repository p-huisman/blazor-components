// PggmLinkTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmLinkTests : TestContext
    {
        public PggmLinkTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmLink>();
            Assert.NotNull(cut.Markup);
        }
    }
}
