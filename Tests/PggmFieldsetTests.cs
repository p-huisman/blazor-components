// PggmFieldsetTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmFieldsetTests : TestContext
    {
        public PggmFieldsetTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmFieldset>();
            Assert.NotNull(cut.Markup);
        }
    }
}
