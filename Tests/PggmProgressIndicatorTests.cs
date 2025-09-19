// PggmProgressIndicatorTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmProgressIndicatorTests : TestContext
    {
        public PggmProgressIndicatorTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmProgressIndicator>();
            Assert.NotNull(cut.Markup);
        }
    }
}
