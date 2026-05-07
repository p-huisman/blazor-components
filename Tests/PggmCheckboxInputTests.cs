using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmCheckboxInputBindingTests : TestContext
    {
        public PggmCheckboxInputBindingTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Renders_Checked_When_Value_True()
        {
            var model = new TestModel { Checked = true };
            System.Linq.Expressions.Expression<System.Func<bool>> expr = () => model.Checked;
            var cut = RenderComponent<Pggm.Components.PggmCheckbox>(parameters => parameters
                .Add(p => p.Value, model.Checked)
                .Add(p => p.ValueExpression, expr)
            );

            var checkbox = cut.Find("pggm-checkbox");
            Assert.True(checkbox.HasAttribute("checked"));
        }
        private class TestModel { public bool Checked { get; set; } }
    }
}
