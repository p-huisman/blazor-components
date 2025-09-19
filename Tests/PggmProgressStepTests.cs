// PggmProgressStepTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmProgressStepTests : TestContext
    {
        public PggmProgressStepTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmProgressStep>();
            Assert.NotNull(cut.Markup);
        }
    }
}
