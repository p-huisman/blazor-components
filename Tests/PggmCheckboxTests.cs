// PggmCheckboxTests.cs
using Xunit;
using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace Tests
{
    public class PggmCheckboxTests : TestContext
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
        }

        // Add more tests as needed
    }
}
