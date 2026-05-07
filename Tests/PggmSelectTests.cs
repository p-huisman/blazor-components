// PggmSelectTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmSelectTests : TestContext
    {
        public PggmSelectTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmSelect<string>>();
            Assert.NotNull(cut.Markup);
        }
    }
}
