using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmRadioAttributeTests : TestContext
    {
        public PggmRadioAttributeTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Forwards_AdditionalAttributes_To_WebComponent()
        {
            // Arrange & Act
            var cut = RenderComponent<Pggm.Components.PggmRadio>(parameters => parameters
                .AddUnmatched("id", "my-radio")
                .AddUnmatched("data-test", "xyz")
            );

            var radio = cut.Find("pggm-radio");

            // Assert
            Assert.Equal("my-radio", radio.GetAttribute("id"));
            Assert.Equal("xyz", radio.GetAttribute("data-test"));
        }
    }
}
