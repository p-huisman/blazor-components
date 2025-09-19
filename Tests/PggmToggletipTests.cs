// PggmToggletipTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmToggletipTests : TestContext
    {
        public PggmToggletipTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmToggletip>();
            Assert.NotNull(cut.Markup);
        }
    }
}
