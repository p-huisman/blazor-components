// PggmErrorMessageTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmErrorMessageTests : PggmTestContext
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
