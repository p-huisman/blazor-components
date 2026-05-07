// PggmRadioTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmRadioTests : PggmTestContext
    {
        public PggmRadioTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmRadio>();
            Assert.NotNull(cut.Markup);
        }
    }
}
