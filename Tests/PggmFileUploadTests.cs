// PggmFileUploadTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmFileUploadTests : TestContext
    {
        public PggmFileUploadTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmFileUpload>();
            Assert.NotNull(cut.Markup);
        }
    }
}
