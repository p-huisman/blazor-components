// PggmHeadingTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmHeadingTests : TestContext
    {
        public PggmHeadingTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmHeading>();
            Assert.NotNull(cut.Markup);
        }
    }
}
