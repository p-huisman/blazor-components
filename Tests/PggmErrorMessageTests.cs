// PggmErrorMessageTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmErrorMessageTests : TestContext
    {
        public PggmErrorMessageTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmErrorMessage>();
            Assert.NotNull(cut.Markup);
        }
    }
}
