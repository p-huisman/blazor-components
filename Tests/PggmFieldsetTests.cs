// PggmFieldsetTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmFieldsetTests : PggmTestContext
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
