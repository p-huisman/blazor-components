using Bunit;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;

using Pggm.Components;

using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmBankAccountInputTests : PggmTestContext
    {
        public PggmBankAccountInputTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void Should_Render_Correctly()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmBankAccountInput>();

            // Assert
            Assert.NotNull(cut.Markup);
            Assert.Contains("pggm-bank-account-input", cut.Markup);
        }

        [Fact]
        public void Should_Render_With_Name_Attribute()
        {
            // Arrange
            var expectedName = "bankAccount";

            // Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.Name, expectedName));

            // Assert
            Assert.Equal(expectedName, cut.Instance.Name);
            Assert.Contains($"name=\"{expectedName}\"", cut.Markup);
        }

        [Fact]
        public void Should_Support_Two_Way_Data_Binding()
        {
            // Arrange
            var initialValue = "{\"accountNumber\":\"NL91ABNA0417164300\",\"country\":\"NL\"}";
            string? receivedValue = null;

            // Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
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
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.Required, true));

            // Assert
            Assert.True(cut.Instance.Required);
            Assert.Contains("required", cut.Markup);
        }

        [Fact]
        public void Should_Set_Disabled_Attribute()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.Disabled, true));

            // Assert
            Assert.True(cut.Instance.Disabled);
            Assert.Contains("disabled", cut.Markup);
        }

        [Fact]
        public void Should_Set_Country_Attribute()
        {
            // Arrange
            var expectedCountry = "NL";

            // Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.Country, expectedCountry));

            // Assert
            Assert.Equal(expectedCountry, cut.Instance.Country);
            Assert.Contains($"country=\"{expectedCountry}\"", cut.Markup);
        }

        [Fact]
        public void Should_Have_Default_LandenEndpoint()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmBankAccountInput>();

            // Assert
            Assert.Equal("https://staticweb-cdn-o.azureedge.net/design-system/api/financieel-landen.json",
                cut.Instance.LandenEndpoint);
        }

        [Fact]
        public void Should_Allow_Custom_LandenEndpoint()
        {
            // Arrange
            var customEndpoint = "https://custom.api.com/landen.json";

            // Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.LandenEndpoint, customEndpoint));

            // Assert
            Assert.Equal(customEndpoint, cut.Instance.LandenEndpoint);
            Assert.Contains($"landen-endpoint=\"{customEndpoint}\"", cut.Markup);
        }

        [Fact]
        public void Should_Handle_All_Properties()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.Name, "bankAccount")
                .Add(p => p.Required, true)
                .Add(p => p.Disabled, false)
                .Add(p => p.Country, "DE"));

            // Assert
            Assert.Equal("bankAccount", cut.Instance.Name);
            Assert.True(cut.Instance.Required);
            Assert.False(cut.Instance.Disabled);
            Assert.Equal("DE", cut.Instance.Country);
        }

        [Fact]
        public void Should_Preserve_Value_When_Not_Changed()
        {
            // Arrange
            var initialValue = "{\"accountNumber\":\"DE89370400440532013000\",\"country\":\"DE\"}";
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
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
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
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
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
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
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
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
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
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
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
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
                { "data-test-id", "bank-account-test" },
                { "aria-label", "Bank Account Input" }
            };

            // Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.AdditionalAttributes, additionalAttributes));

            // Assert
            Assert.Contains("data-test-id=\"bank-account-test\"", cut.Markup);
            Assert.Contains("aria-label=\"Bank Account Input\"", cut.Markup);
        }

        [Fact]
        public void Should_Apply_CssClass()
        {
            // Arrange
            var cssClass = "custom-bank-account-input";

            // Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.CssClass, cssClass));

            // Assert
            Assert.Contains($"class=\"{cssClass}\"", cut.Markup);
        }

        [Fact]
        public void Should_Render_With_Id_Attribute()
        {
            // Arrange
            var expectedId = "main-bank-account";

            // Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.Id, expectedId));

            // Assert
            Assert.Equal(expectedId, cut.Instance.Id);
            Assert.Contains($"id=\"{expectedId}\"", cut.Markup);
        }

        [Fact]
        public void Should_Handle_Different_Country_Formats()
        {
            // Arrange
            var dutchAccount = "{\"accountNumber\":\"NL91ABNA0417164300\",\"country\":\"NL\"}";
            var germanAccount = "{\"accountNumber\":\"DE89370400440532013000\",\"country\":\"DE\"}";
            var belgianAccount = "{\"accountNumber\":\"BE68539007547034\",\"country\":\"BE\"}";

            // Act
            var cutNL = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.Value, dutchAccount)
                .Add(p => p.Country, "NL"));

            var cutDE = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.Value, germanAccount)
                .Add(p => p.Country, "DE"));

            var cutBE = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .Add(p => p.Value, belgianAccount)
                .Add(p => p.Country, "BE"));

            // Assert
            Assert.Equal(dutchAccount, cutNL.Instance.Value);
            Assert.Equal("NL", cutNL.Instance.Country);

            Assert.Equal(germanAccount, cutDE.Instance.Value);
            Assert.Equal("DE", cutDE.Instance.Country);

            Assert.Equal(belgianAccount, cutBE.Instance.Value);
            Assert.Equal("BE", cutBE.Instance.Country);
        }

        [Fact]
        public void Should_Have_Correct_TagName()
        {
            // Arrange & Act
            var cut = RenderComponent<PggmBankAccountInput>();

            // Assert
            Assert.Equal("pggm-bank-account-input", cut.Instance.TagName);
        }

        [Fact]
        public void Should_Support_ChildContent()
        {
            // Arrange
            var childContent = "<div>Child Content</div>";

            // Act
            var cut = RenderComponent<PggmBankAccountInput>(parameters => parameters
                .AddChildContent(childContent));

            // Assert
            Assert.Contains("Child Content", cut.Markup);
        }
    }
}
