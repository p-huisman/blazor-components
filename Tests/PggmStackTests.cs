using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmStackTests : TestContext
    {
        public PggmStackTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Renders_Vertical_By_Default()
        {
            var cut = RenderComponent<Pggm.Components.PggmStack>(parameters => parameters
                .AddChildContent("<div>one</div><div>two</div>")
            );

            var div = cut.Find("div");
            // default class should include vertical
            Assert.Contains("pggm-stack-vertical", div.ClassName);
            // default vertical gap should be present in style
            Assert.Contains("row-gap", div.GetAttribute("style") ?? string.Empty);
        }

        [Fact]
        public void Renders_Horizontal_When_Orientation_Set()
        {
            var cut = RenderComponent<Pggm.Components.PggmStack>(parameters => parameters
                .Add(p => p.Orientation, Pggm.Components.Orientation.Horizontal)
                .AddChildContent("<div>a</div><div>b</div>")
            );

            var div = cut.Find("div");
            Assert.Contains("pggm-stack-horizontal", div.ClassName);
            Assert.Contains("column-gap", div.GetAttribute("style") ?? string.Empty);
        }

        [Fact]
        public void Applies_Wrap_And_Reversed_Attributes()
        {
            var cut = RenderComponent<Pggm.Components.PggmStack>(parameters => parameters
                .Add(p => p.Wrap, true)
                .Add(p => p.Reversed, true)
                .AddChildContent("<div>x</div>")
            );

            var div = cut.Find("div");
            Assert.Contains("flex-wrap", div.GetAttribute("style") ?? string.Empty);
            // 'reverse' should be present as an attribute (value may be empty for boolean attrs)
            Assert.True(div.HasAttribute("reverse"));
        }
    }
}
