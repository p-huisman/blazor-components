using Bunit;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;

using Pggm.Components;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmAddressInputTests : PggmTestContext
    {
        public PggmAddressInputTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmAddressInput>();

            // Assert
            Assert.NotNull(cut.Markup);
            Assert.Contains("pggm-address-input", cut.Markup);
        }

        [Fact]
        public void Should_Render_With_Name_Attribute()
        {
            // Arrange
            var expectedName = "address";

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Name, expectedName));

            // Assert
            Assert.Equal(expectedName, cut.Instance.Name);
            Assert.Contains($"name=\"{expectedName}\"", cut.Markup);
        }

        [Fact]
        public void Should_Support_Two_Way_Data_Binding()
        {
            // Arrange
            var initialValue = "{\"postalCode\":\"1234AB\",\"houseNumber\":\"123\"}";
            string? receivedValue = null;

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Value, initialValue)
                .Add(p => p.ValueChanged, EventCallback.Factory.Create<string?>(this, (value) =>
                {
                    receivedValue = value;
                })));

            // Assert
            Assert.Equal(initialValue, cut.Instance.Value);
        }

        [Fact]
        public void Should_Set_Required_Attribute()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Required, true));

            // Assert
            Assert.True(cut.Instance.Required);
            Assert.Contains("required", cut.Markup);
        }

        [Fact]
        public void Should_Set_Disabled_Attribute()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Disabled, true));

            // Assert
            Assert.True(cut.Instance.Disabled);
            Assert.Contains("disabled", cut.Markup);
        }

        [Fact]
        public void Should_Set_Foreign_Attribute()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Foreign, true));

            // Assert
            Assert.True(cut.Instance.Foreign);
            Assert.Contains("foreign", cut.Markup);
        }

        [Fact]
        public void Should_Set_Autocomplete_Attribute()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Autocomplete, true));

            // Assert
            Assert.True(cut.Instance.Autocomplete);
            Assert.Contains("autocomplete", cut.Markup);
        }

        [Fact]
        public void Should_Handle_All_Properties()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Name, "address")
                .Add(p => p.Required, true)
                .Add(p => p.Disabled, false)
                .Add(p => p.Foreign, true)
                .Add(p => p.Autocomplete, true));

            // Assert
            Assert.Equal("address", cut.Instance.Name);
            Assert.True(cut.Instance.Required);
            Assert.False(cut.Instance.Disabled);
            Assert.True(cut.Instance.Foreign);
            Assert.True(cut.Instance.Autocomplete);
        }

        [Fact]
        public void Should_Preserve_Value_When_Not_Changed()
        {
            // Arrange
            var initialValue = "{\"postalCode\":\"5678CD\",\"houseNumber\":\"456\",\"street\":\"Main Street\",\"city\":\"Utrecht\"}";
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Value, initialValue));

            // Act - Simulate re-render with same value
            cut.SetParametersAndRender(parameters => parameters
                .Add(p => p.Value, initialValue));

            // Assert - Value should remain unchanged
            Assert.Equal(initialValue, cut.Instance.Value);
        }

        [Fact]
        public void Should_Support_OnChange_Callback()
        {
            // Arrange
            ChangeEventArgs? receivedArgs = null;

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.OnChange, EventCallback.Factory.Create<ChangeEventArgs>(this, (args) =>
                {
                    receivedArgs = args;
                })));

            // Assert - Component should be configured with the callback
            Assert.True(cut.Instance.OnChange.HasDelegate);
        }

        [Fact]
        public void Should_Support_OnInput_Callback()
        {
            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.OnInput, EventCallback.Factory.Create<ChangeEventArgs>(this, _ =>
                {
                })));

            // Assert
            Assert.True(cut.Instance.OnInput.HasDelegate);
        }

        [Fact]
        public void Should_Support_OnFocus_Callback()
        {
            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.OnFocus, EventCallback.Factory.Create<FocusEventArgs>(this, _ =>
                {
                })));

            // Assert
            Assert.True(cut.Instance.OnFocus.HasDelegate);
        }

        [Fact]
        public void Should_Support_OnBlur_Callback()
        {
            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.OnBlur, EventCallback.Factory.Create<FocusEventArgs>(this, _ =>
                {
                })));

            // Assert
            Assert.True(cut.Instance.OnBlur.HasDelegate);
        }

        [Fact]
        public void Should_Support_OnValidationChanged_Callback()
        {
            // Arrange
            bool? validationState = null;

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.OnValidationChanged, EventCallback.Factory.Create<bool>(this, (isValid) =>
                {
                    validationState = isValid;
                })));

            // Assert
            Assert.True(cut.Instance.OnValidationChanged.HasDelegate);
        }

        [Fact]
        public void Should_Apply_Additional_Attributes()
        {
            // Arrange
            var additionalAttributes = new Dictionary<string, object>
            {
                { "data-test-id", "address-input-test" },
                { "aria-label", "Address Input" }
            };

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.AdditionalAttributes, additionalAttributes));

            // Assert
            Assert.Contains("data-test-id=\"address-input-test\"", cut.Markup);
            Assert.Contains("aria-label=\"Address Input\"", cut.Markup);
        }

        [Fact]
        public void Should_Apply_CssClass()
        {
            // Arrange
            var cssClass = "custom-address-input";

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.CssClass, cssClass));

            // Assert
            Assert.Contains($"class=\"{cssClass}\"", cut.Markup);
        }

        [Fact]
        public void Should_Render_With_Id_Attribute()
        {
            // Arrange
            var expectedId = "main-address";

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Id, expectedId));

            // Assert
            Assert.Equal(expectedId, cut.Instance.Id);
            Assert.Contains($"id=\"{expectedId}\"", cut.Markup);
        }

        [Fact]
        public void Should_Handle_Dutch_Address_Format()
        {
            // Arrange
            var dutchAddress = "{\"postalCode\":\"1011AA\",\"houseNumber\":\"1\",\"street\":\"Dam\",\"city\":\"Amsterdam\"}";

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Value, dutchAddress)
                .Add(p => p.Foreign, false));

            // Assert
            Assert.Equal(dutchAddress, cut.Instance.Value);
            Assert.False(cut.Instance.Foreign);
        }

        [Fact]
        public void Should_Handle_Foreign_Address_Format()
        {
            // Arrange
            var foreignAddress = "{\"street\":\"10 Downing Street\",\"city\":\"London\",\"postalCode\":\"SW1A 2AA\",\"country\":\"United Kingdom\"}";

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .Add(p => p.Value, foreignAddress)
                .Add(p => p.Foreign, true));

            // Assert
            Assert.Equal(foreignAddress, cut.Instance.Value);
            Assert.True(cut.Instance.Foreign);
        }

        [Fact]
        public void Should_Have_Correct_TagName()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmAddressInput>();

            // Assert
            Assert.Equal("pggm-address-input", cut.Instance.TagName);
        }

        [Fact]
        public void Should_Support_ChildContent()
        {
            // Arrange
            var childContent = "<div>Child Content</div>";

            // Act
            var cut = RenderComponent<PggmAddressInput>(parameters => parameters
                .AddChildContent(childContent));

            // Assert
            Assert.Contains("Child Content", cut.Markup);
        }
    }
}
