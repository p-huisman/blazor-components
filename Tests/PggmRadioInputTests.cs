using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmRadioInputTests : PggmTestContext
    {
        public PggmRadioInputTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Renders_Value_And_Checked_When_Value_Matches_RadioValue()
        {
            // Arrange & Act
            // Provide a ValueExpression that refers to a model property (FieldIdentifier requires member access)
            var model = new TestModel { Selected = "apple" };
            System.Linq.Expressions.Expression<System.Func<string>> expr = () => model.Selected;
            var cut = RenderComponent<Pggm.Components.PggmRadio>(parameters => parameters
                .Add(p => p.RadioValue, "apple")
                .Add(p => p.Value, model.Selected)
                .Add(p => p.ValueExpression, expr)
            );

            var radio = cut.Find("pggm-radio");

            // Assert
            Assert.Equal("apple", radio.GetAttribute("value"));
            // 'checked' attribute should be present when matched
            Assert.True(radio.HasAttribute("checked"));
        }
        private class TestModel { public string Selected { get; set; } = default!; }
    }
}
