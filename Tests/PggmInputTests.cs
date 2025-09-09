using Bunit;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components;
using Pggm.Components.Services;
using Xunit;

namespace Pggm.Components.Tests
{
    public class PggmInputTests : TestContext
    {
        public PggmInputTests()
        {
            Services.AddScoped<PggmDesignSystemService>();
        }

        [Fact]
        public void PggmInput_RendersCorrectly()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.Value, "Test value")
                .Add(p => p.Placeholder, "Enter text"));

            // Assert
            var input = component.Find("input");
            Assert.NotNull(input);
            Assert.Equal("pggm-input", input.GetAttribute("is"));
            Assert.Equal("text", input.GetAttribute("type"));
            Assert.Equal("Test value", input.GetAttribute("value"));
            Assert.Equal("Enter text", input.GetAttribute("placeholder"));
        }

        [Fact]
        public void PggmInput_SetsInputType()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.Type, PggmInput.InputTypes.Email));

            // Assert
            var input = component.Find("input");
            Assert.Equal("email", input.GetAttribute("type"));
        }

        [Fact]
        public void PggmInput_HandlesDisabledState()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.Disabled, true));

            // Assert
            var input = component.Find("input");
            Assert.True(input.HasAttribute("disabled"));
        }

        [Fact]
        public void PggmInput_HandlesRequiredState()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.Required, true));

            // Assert
            var input = component.Find("input");
            Assert.True(input.HasAttribute("required"));
        }

        [Fact]
        public void PggmInput_HandlesReadOnlyState()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.ReadOnly, true));

            // Assert
            var input = component.Find("input");
            Assert.True(input.HasAttribute("readonly"));
        }

        [Fact]
        public void PggmInput_SetsNameAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.Name, "username"));

            // Assert
            var input = component.Find("input");
            Assert.Equal("username", input.GetAttribute("name"));
        }

        [Fact]
        public void PggmInput_SetsMaxLengthAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.MaxLength, 50));

            // Assert
            var input = component.Find("input");
            Assert.Equal("50", input.GetAttribute("maxlength"));
        }

        [Fact]
        public void PggmInput_SetsMinLengthAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.MinLength, 3));

            // Assert
            var input = component.Find("input");
            Assert.Equal("3", input.GetAttribute("minlength"));
        }

        [Fact]
        public void PggmInput_SetsPatternAttribute()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.Pattern, @"[A-Za-z]+"));

            // Assert
            var input = component.Find("input");
            Assert.Equal(@"[A-Za-z]+", input.GetAttribute("pattern"));
        }

        [Fact]
        public void PggmInput_SetsMinMaxStepForNumberInputs()
        {
            // Arrange & Act
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.Type, PggmInput.InputTypes.Number)
                .Add(p => p.Min, "0")
                .Add(p => p.Max, "100")
                .Add(p => p.Step, "5"));

            // Assert
            var input = component.Find("input");
            Assert.Equal("number", input.GetAttribute("type"));
            Assert.Equal("0", input.GetAttribute("min"));
            Assert.Equal("100", input.GetAttribute("max"));
            Assert.Equal("5", input.GetAttribute("step"));
        }

        [Fact]
        public void PggmInput_TriggersValueChanged()
        {
            // Arrange
            string? newValue = "";
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.Value, "Initial")
                .Add(p => p.ValueChanged, (string? value) => newValue = value));

            // Act
            var input = component.Find("input");
            input.Change("Updated value");

            // Assert
            Assert.Equal("Updated value", newValue);
        }

        [Fact]
        public void PggmInput_TriggersOnChangeEvent()
        {
            // Arrange
            bool changeTriggered = false;
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.OnChange, (ChangeEventArgs args) => changeTriggered = true));

            // Act
            var input = component.Find("input");
            input.Change("New value");

            // Assert
            Assert.True(changeTriggered);
        }

        [Fact]
        public void PggmInput_TriggersOnInputEvent()
        {
            // Arrange
            bool inputTriggered = false;
            var component = RenderComponent<PggmInput>(parameters => parameters
                .Add(p => p.OnInput, (ChangeEventArgs args) => inputTriggered = true));

            // Act
            var input = component.Find("input");
            input.Input("New value");

            // Assert
            Assert.True(inputTriggered);
        }

        [Fact]
        public void PggmInput_InputTypesConstantsAreCorrect()
        {
            // Assert
            Assert.Equal("text", PggmInput.InputTypes.Text);
            Assert.Equal("email", PggmInput.InputTypes.Email);
            Assert.Equal("password", PggmInput.InputTypes.Password);
            Assert.Equal("number", PggmInput.InputTypes.Number);
            Assert.Equal("tel", PggmInput.InputTypes.Tel);
            Assert.Equal("url", PggmInput.InputTypes.Url);
            Assert.Equal("search", PggmInput.InputTypes.Search);
            Assert.Equal("date", PggmInput.InputTypes.Date);
            Assert.Equal("time", PggmInput.InputTypes.Time);
            Assert.Equal("datetime-local", PggmInput.InputTypes.DateTime);
            Assert.Equal("month", PggmInput.InputTypes.Month);
            Assert.Equal("week", PggmInput.InputTypes.Week);
            Assert.Equal("color", PggmInput.InputTypes.Color);
            Assert.Equal("range", PggmInput.InputTypes.Range);
            Assert.Equal("file", PggmInput.InputTypes.File);
            Assert.Equal("hidden", PggmInput.InputTypes.Hidden);
        }
    }
}
