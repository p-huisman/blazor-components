using Pggm.Components.Constants;
using Xunit;

namespace Pggm.Components.Tests
{
    public class ComponentConstantsTests
    {
        [Fact]
        public void EventNames_AlertEvents_HaveCorrectValues()
        {
            Assert.Equal("closeAlert", EventNames.CloseAlert);
        }

        [Fact]
        public void EventNames_AccordionEvents_HaveCorrectValues()
        {
            Assert.Equal("accordionItemToggle", EventNames.AccordionItemToggle);
        }

        [Fact]
        public void EventNames_DialogEvents_HaveCorrectValues()
        {
            Assert.Equal("openDialog", EventNames.OpenDialog);
            Assert.Equal("closeDialog", EventNames.CloseDialog);
            Assert.Equal("cancelDialog", EventNames.CancelDialog);
        }

        [Fact]
        public void EventNames_TabEvents_HaveCorrectValues()
        {
            Assert.Equal("tabChange", EventNames.TabChange);
            Assert.Equal("tabClick", EventNames.TabClick);
        }

        [Fact]
        public void EventNames_FormEvents_HaveCorrectValues()
        {
            Assert.Equal("change", EventNames.Change);
            Assert.Equal("input", EventNames.Input);
            Assert.Equal("focus", EventNames.Focus);
            Assert.Equal("blur", EventNames.Blur);
        }

        [Fact]
        public void EventNames_ButtonEvents_HaveCorrectValues()
        {
            Assert.Equal("click", EventNames.Click);
        }

        [Fact]
        public void AttributeNames_CommonAttributes_HaveCorrectValues()
        {
            Assert.Equal("appearance", AttributeNames.Appearance);
            Assert.Equal("disabled", AttributeNames.Disabled);
            Assert.Equal("required", AttributeNames.Required);
            Assert.Equal("readonly", AttributeNames.ReadOnly);
        }

        [Fact]
        public void AttributeNames_FormAttributes_HaveCorrectValues()
        {
            Assert.Equal("name", AttributeNames.Name);
            Assert.Equal("value", AttributeNames.Value);
            Assert.Equal("placeholder", AttributeNames.Placeholder);
        }

        [Fact]
        public void AttributeNames_LayoutAttributes_HaveCorrectValues()
        {
            Assert.Equal("size", AttributeNames.Size);
            Assert.Equal("variant", AttributeNames.Variant);
        }

        [Fact]
        public void AttributeNames_AccordionAttributes_HaveCorrectValues()
        {
            Assert.Equal("allow-multiple", AttributeNames.AllowMultiple);
        }

        [Fact]
        public void AttributeNames_DialogAttributes_HaveCorrectValues()
        {
            Assert.Equal("open", AttributeNames.Open);
            Assert.Equal("modal", AttributeNames.Modal);
        }

        [Fact]
        public void CssClasses_StateClasses_HaveCorrectValues()
        {
            Assert.Equal("loading", CssClasses.Loading);
            Assert.Equal("error", CssClasses.Error);
            Assert.Equal("success", CssClasses.Success);
            Assert.Equal("warning", CssClasses.Warning);
        }

        [Fact]
        public void CssClasses_SizeClasses_HaveCorrectValues()
        {
            Assert.Equal("small", CssClasses.Small);
            Assert.Equal("medium", CssClasses.Medium);
            Assert.Equal("large", CssClasses.Large);
        }

        [Fact]
        public void CssClasses_UtilityClasses_HaveCorrectValues()
        {
            Assert.Equal("hidden", CssClasses.Hidden);
            Assert.Equal("visible", CssClasses.Visible);
        }

        [Fact]
        public void ComponentValues_ButtonAppearance_HaveCorrectValues()
        {
            Assert.Equal("primary", ComponentValues.ButtonAppearance.Primary);
            Assert.Equal("secondary", ComponentValues.ButtonAppearance.Secondary);
            Assert.Equal("tertiary", ComponentValues.ButtonAppearance.Tertiary);
            Assert.Equal("ghost", ComponentValues.ButtonAppearance.Ghost);
            Assert.Equal("danger", ComponentValues.ButtonAppearance.Danger);
        }

        [Fact]
        public void ComponentValues_AlertSeverity_HaveCorrectValues()
        {
            Assert.Equal("info", ComponentValues.AlertSeverity.Info);
            Assert.Equal("success", ComponentValues.AlertSeverity.Success);
            Assert.Equal("warning", ComponentValues.AlertSeverity.Warning);
            Assert.Equal("error", ComponentValues.AlertSeverity.Error);
        }

        [Fact]
        public void ComponentValues_Size_HaveCorrectValues()
        {
            Assert.Equal("small", ComponentValues.Size.Small);
            Assert.Equal("medium", ComponentValues.Size.Medium);
            Assert.Equal("large", ComponentValues.Size.Large);
        }
    }
}
