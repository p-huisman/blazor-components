// PggmInputPhoneTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmInputPhoneTests : TestContext
    {
        public PggmInputPhoneTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmInputPhone>();
            Assert.NotNull(cut.Markup);
        }
    }
}
