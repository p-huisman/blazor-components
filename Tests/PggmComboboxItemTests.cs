// PggmComboboxItemTests.cs
using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Pggm.Components;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmComboboxItemTests : PggmTestContext
    {
        public PggmComboboxItemTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderComponent<PggmComboboxItem>();

            Assert.NotNull(cut.Markup);
            Assert.Contains("pggm-combobox-item", cut.Markup);
        }

        [Fact]
        public void Should_Set_Value_Attribute()
        {
            var cut = RenderComponent<PggmComboboxItem>(p => p.Add(c => c.Value, "option-a"));

            Assert.Contains("value=\"option-a\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_Disabled_When_True()
        {
            var cut = RenderComponent<PggmComboboxItem>(p => p.Add(c => c.Disabled, true));

            Assert.Contains("disabled", cut.Markup);
        }

        [Fact]
        public void Should_Not_Set_Disabled_When_False()
        {
            var cut = RenderComponent<PggmComboboxItem>(p => p.Add(c => c.Disabled, false));

            var element = cut.Find("pggm-combobox-item");
            Assert.False(element.HasAttribute("disabled"));
        }

        [Fact]
        public void Should_Set_Selected_When_True()
        {
            var cut = RenderComponent<PggmComboboxItem>(p => p.Add(c => c.Selected, true));

            Assert.Contains("selected", cut.Markup);
        }

        [Fact]
        public void Should_Not_Set_Selected_When_False()
        {
            var cut = RenderComponent<PggmComboboxItem>(p => p.Add(c => c.Selected, false));

            var element = cut.Find("pggm-combobox-item");
            Assert.False(element.HasAttribute("selected"));
        }

        [Fact]
        public void Should_Render_ChildContent()
        {
            var cut = RenderComponent<PggmComboboxItem>(parameters =>
            {
                parameters.Add(p => p.Value, "nl");
                parameters.AddChildContent("Nederland");
            });

            Assert.Contains("Nederland", cut.Markup);
        }

        [Fact]
        public void Should_Not_Render_Value_Attribute_When_Not_Set()
        {
            var cut = RenderComponent<PggmComboboxItem>();

            var element = cut.Find("pggm-combobox-item");
            Assert.False(element.HasAttribute("value"));
        }
    }
}
