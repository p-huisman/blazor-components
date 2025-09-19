// PggmWizardTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmWizardTests : TestContext
    {
        public PggmWizardTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
            JSInterop.SetupVoid("PggmComponents.addEventListener", _ => true);
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmWizard>();
            Assert.NotNull(cut.Markup);
        }
    }
}
