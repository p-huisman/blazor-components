// PggmComboboxTests.cs
using System.Linq.Expressions;

using Bunit;

using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;

using Pggm.Components;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmComboboxTests : PggmTestContext
    {
        // Dummy backing field required so PggmEventComponentInputBase can create a
        // default ValueExpression without relying on a real model.
        private readonly string? _dummyValue = null;

        private IRenderedComponent<PggmCombobox<object>> RenderCombobox(
            Action<ComponentParameterCollectionBuilder<PggmCombobox<object>>>? configure = null)
        {
            return RenderComponent<PggmCombobox<object>>(parameters =>
            {
                parameters.Add(p => p.ValueExpression, (Expression<Func<string>>)(() => _dummyValue!));
                configure?.Invoke(parameters);
            });
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            var cut = RenderCombobox();

            Assert.NotNull(cut.Markup);
            Assert.Contains("pggm-combobox", cut.Markup);
        }

        [Fact]
        public void Should_Set_Value_Attribute()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Value, "option1"));

            Assert.Contains("value=\"option1\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_Name_Attribute()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Name, "my-combobox"));

            Assert.Contains("name=\"my-combobox\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_Placeholder_Attribute()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Placeholder, "Choose an option"));

            Assert.Contains("placeholder=\"Choose an option\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_Disabled_When_True()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Disabled, true));

            Assert.Contains("disabled", cut.Markup);
        }

        [Fact]
        public void Should_Not_Set_Disabled_When_False()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Disabled, false));

            var element = cut.Find("pggm-combobox");
            Assert.False(element.HasAttribute("disabled"));
        }

        [Fact]
        public void Should_Set_Required_Attribute_Outside_EditForm()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Required, true));

            Assert.Contains("required", cut.Markup);
        }

        [Fact]
        public void Should_Set_ReadOnly_Attribute()
        {
            var cut = RenderCombobox(p => p.Add(c => c.ReadOnly, true));

            Assert.Contains("readonly", cut.Markup);
        }

        [Fact]
        public void Should_Set_Open_Attribute_When_True()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Open, true));

            Assert.Contains("open", cut.Markup);
        }

        [Fact]
        public void Should_Not_Set_Open_Attribute_When_False()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Open, false));

            var element = cut.Find("pggm-combobox");
            Assert.False(element.HasAttribute("open"));
        }

        [Fact]
        public void Should_Set_Multiple_Attribute_When_True()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Multiple, true));

            Assert.Contains("multiple", cut.Markup);
        }

        [Fact]
        public void Should_Not_Set_Multiple_Attribute_When_False()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Multiple, false));

            var element = cut.Find("pggm-combobox");
            Assert.False(element.HasAttribute("multiple"));
        }

        [Fact]
        public void Should_Set_Min_Attribute()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Min, 1));

            Assert.Contains("min=\"1\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_Max_Attribute()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Max, 3));

            Assert.Contains("max=\"3\"", cut.Markup);
        }

        [Fact]
        public void Should_Set_Id_Attribute_When_Provided()
        {
            var cut = RenderCombobox(p => p.Add(c => c.Id, "combo-field"));

            Assert.Contains("id=\"combo-field\"", cut.Markup);
        }

        [Fact]
        public void Should_Generate_DataId_When_No_Id_Provided()
        {
            var cut = RenderCombobox();

            // A data-id attribute should always be present (auto-generated)
            Assert.Contains("data-id=\"pggm-combobox-", cut.Markup);
        }

        [Fact]
        public void Should_Render_ChildContent()
        {
            var cut = RenderComponent<PggmCombobox<object>>(parameters =>
            {
                parameters.Add(p => p.ValueExpression, (Expression<Func<string>>)(() => _dummyValue!));
                parameters.AddChildContent("<pggm-combobox-item value=\"a\">Option A</pggm-combobox-item>");
            });

            Assert.Contains("pggm-combobox-item", cut.Markup);
            Assert.Contains("Option A", cut.Markup);
        }

        [Fact]
        public void Should_Not_Set_Value_Attribute_In_Html_When_Values_Is_Set()
        {
            // Values are pushed to the element as a real JS array via setProperty after render,
            // NOT serialized as a JSON string attribute (which would be displayed as a chip label).
            var cut = RenderCombobox(p =>
            {
                p.Add(c => c.Multiple, true);
                p.Add(c => c.Values, new[] { "a", "b" });
            });

            var element = cut.Find("pggm-combobox");
            Assert.False(element.HasAttribute("value"),
                "value attribute must NOT be set; the array is pushed via JS setProperty instead.");
        }

        [Fact]
        public void Should_Not_Set_Value_Attribute_When_Values_Is_Empty_Array()
        {
            var cut = RenderCombobox(p =>
            {
                p.Add(c => c.Multiple, true);
                p.Add(c => c.Values, Array.Empty<string>());
            });

            var element = cut.Find("pggm-combobox");
            // Empty array → no value attribute
            Assert.False(element.HasAttribute("value"));
        }

        [Fact]
        public void Should_Sync_Values_To_CurrentValue_On_Parameters_Set()
        {
            var cut = RenderCombobox(p =>
            {
                p.Add(c => c.Multiple, true);
                p.Add(c => c.Values, new[] { "x", "y", "z" });
            });

            // CurrentValue should be the comma-joined representation for EditForm validation.
            Assert.Equal("x,y,z", cut.Instance.Value);
        }

        [Fact]
        public void Should_Prefer_Values_Array_CurrentValue_Over_Single_Value_When_Multiple_And_Values_Set()
        {
            // In multi-select mode CurrentValue is the comma-joined string (used by EditForm).
            // The HTML value attribute is NOT set; the JS array is pushed via setProperty.
            var cut = RenderCombobox(p =>
            {
                p.Add(c => c.Multiple, true);
                p.Add(c => c.Values, new[] { "opt1", "opt2" });
                p.Add(c => c.Value, "opt1");
            });

            // No JSON string in the attribute
            var element = cut.Find("pggm-combobox");
            Assert.False(element.HasAttribute("value"));
            // CurrentValue is kept as comma-joined for EditForm/[Required]
            Assert.Equal("opt1,opt2", cut.Instance.Value);
        }
    }
}
