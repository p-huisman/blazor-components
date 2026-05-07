// PggmFileUploadTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmFileUploadTests : PggmTestContext
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
