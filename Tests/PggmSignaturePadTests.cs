// PggmSignaturePadTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmSignaturePadTests : TestContext
    {
        public PggmSignaturePadTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmSignaturePad>();
            Assert.NotNull(cut.Markup);
        }
    }
}
