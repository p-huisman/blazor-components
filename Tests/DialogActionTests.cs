using Microsoft.AspNetCore.Components;
using Pggm.Components;
using Xunit;

namespace Pggm.Components.Tests
{
    public class DialogActionTests
    {
        [Fact]
        public void DialogAction_DefaultValues_AreCorrect()
        {
            // Act
            var action = new DialogAction();

            // Assert
            Assert.Equal(string.Empty, action.Text);
            Assert.Null(action.Appearance);
            Assert.False(action.Disabled);
            Assert.False(action.OnClick.HasDelegate);
            Assert.Null(action.CssClass);
            Assert.Equal("button", action.Type);
        }

        [Fact]
        public void DialogAction_SetProperties_WorksCorrectly()
        {
            // Arrange
            EventCallback onClickCallback = EventCallback.Factory.Create(this, () => { /* callback action */ });

            // Act
            var action = new DialogAction
            {
                Text = "Save",
                Appearance = "primary",
                Disabled = true,
                OnClick = onClickCallback,
                CssClass = "custom-class",
                Type = "submit"
            };

            // Assert
            Assert.Equal("Save", action.Text);
            Assert.Equal("primary", action.Appearance);
            Assert.True(action.Disabled);
            Assert.True(action.OnClick.HasDelegate);
            Assert.Equal("custom-class", action.CssClass);
            Assert.Equal("submit", action.Type);
        }

        [Fact]
        public async Task DialogAction_OnClickCallback_CanBeExecuted()
        {
            // Arrange
            var clicked = false;
            var action = new DialogAction
            {
                OnClick = EventCallback.Factory.Create(this, () => clicked = true)
            };

            // Act
            await action.OnClick.InvokeAsync();

            // Assert
            Assert.True(clicked);
        }
    }
}
