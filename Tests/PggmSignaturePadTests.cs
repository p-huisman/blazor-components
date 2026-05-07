// PggmSignaturePadTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmSignaturePadTests : TestContext
    {
        public PggmSignaturePadTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
            JSInterop.SetupVoid("PggmComponents.initialize", _ => true);
            JSInterop.SetupVoid("PggmComponents.loadScript", _ => true);
            JSInterop.SetupVoid("PggmComponents.addEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.removeEventListener", _ => true);
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<Pggm.Components.PggmSignaturePad>();
            Assert.NotNull(cut.Markup);
        }

        [Fact]
        public void Should_Set_Buttons_Attribute()
        {
            var cut = RenderComponent<Pggm.Components.PggmSignaturePad>(parameters =>
            {
                parameters.Add(p => p.Buttons, "erase,undo,redo");
            });

            var element = cut.Find("pggm-signature-pad");
            Assert.Equal("erase,undo,redo", element.GetAttribute("buttons"));
        }

        [Fact]
        public void Should_Set_Disabled_Attribute_When_Disabled_Is_True()
        {
            var cut = RenderComponent<Pggm.Components.PggmSignaturePad>(parameters =>
            {
                parameters.Add(p => p.Disabled, true);
            });

            var element = cut.Find("pggm-signature-pad");
            Assert.True(element.HasAttribute("disabled"));
        }

        [Fact]
        public void Should_Not_Set_Disabled_Attribute_When_Disabled_Is_False()
        {
            var cut = RenderComponent<Pggm.Components.PggmSignaturePad>(parameters =>
            {
                parameters.Add(p => p.Disabled, false);
            });

            var element = cut.Find("pggm-signature-pad");
            Assert.False(element.HasAttribute("disabled"));
        }
    }
}
