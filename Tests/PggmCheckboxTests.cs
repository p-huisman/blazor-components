// PggmCheckboxTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmCheckboxTests : PggmTestContext
    {
        [Fact]
        public void Should_Render_Correctly()
        {
            // Register required service
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();

            // Arrange & Act
            var cut = RenderComponent<Pggm.Components.PggmCheckbox>();

            // Assert
            cut.MarkupMatches("<pggm-checkbox ></pggm-checkbox>");
            Assert.NotNull(cut.Markup);
        }

        // Add more tests as needed
    }
}
