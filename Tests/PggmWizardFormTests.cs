// PggmWizardFormTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmWizardFormTests : TestContext
    {
        public PggmWizardFormTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmWizardForm>();
            Assert.NotNull(cut.Markup);
        }
    }
}
