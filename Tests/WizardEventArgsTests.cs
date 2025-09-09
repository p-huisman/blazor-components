using Pggm.Components.Models.Wizard;
using Xunit;

namespace Pggm.Components.Tests
{
    public class WizardEventArgsTests
    {
        [Fact]
        public void CancelableEventArgs_DefaultCancel_IsFalse()
        {
            // Act
            var args = new CancelableEventArgs();

            // Assert
            Assert.False(args.Cancel);
        }

        [Fact]
        public void CancelableEventArgs_SetCancel_WorksCorrectly()
        {
            // Arrange
            var args = new CancelableEventArgs();

            // Act
            args.Cancel = true;

            // Assert
            Assert.True(args.Cancel);
        }

        [Fact]
        public void BeforeSubmitEventArgs_InheritsFromCancelableEventArgs()
        {
            // Act
            var args = new BeforeSubmitEventArgs();

            // Assert
            Assert.IsAssignableFrom<CancelableEventArgs>(args);
            Assert.False(args.Cancel);
            Assert.Null(args.FormData);
        }

        [Fact]
        public void BeforeSubmitEventArgs_SetProperties_WorksCorrectly()
        {
            // Arrange
            var formData = new Dictionary<string, object>
            {
                ["field1"] = "value1",
                ["field2"] = "value2"
            };

            // Act
            var args = new BeforeSubmitEventArgs
            {
                Cancel = true,
                FormData = formData
            };

            // Assert
            Assert.True(args.Cancel);
            Assert.Equal(formData, args.FormData);
            Assert.Equal("value1", args.FormData["field1"]);
        }

        [Fact]
        public void BeforeNavigateEventArgs_InheritsFromCancelableEventArgs()
        {
            // Act
            var args = new BeforeNavigateEventArgs();

            // Assert
            Assert.IsAssignableFrom<CancelableEventArgs>(args);
            Assert.False(args.Cancel);
            Assert.Null(args.Direction);
        }

        [Fact]
        public void BeforeNavigateEventArgs_SetProperties_WorksCorrectly()
        {
            // Act
            var args = new BeforeNavigateEventArgs
            {
                Cancel = true,
                Direction = "next"
            };

            // Assert
            Assert.True(args.Cancel);
            Assert.Equal("next", args.Direction);
        }

        [Fact]
        public void AfterNavigateEventArgs_DefaultDirection_IsNull()
        {
            // Act
            var args = new AfterNavigateEventArgs();

            // Assert
            Assert.Null(args.Direction);
        }

        [Fact]
        public void AfterNavigateEventArgs_SetDirection_WorksCorrectly()
        {
            // Act
            var args = new AfterNavigateEventArgs
            {
                Direction = "previous"
            };

            // Assert
            Assert.Equal("previous", args.Direction);
        }

        [Fact]
        public void WizardFormInvalidEventArgs_DefaultValues_AreNull()
        {
            // Act
            var args = new WizardFormInvalidEventArgs();

            // Assert
            Assert.Null(args.FormId);
            Assert.Null(args.FormName);
        }

        [Fact]
        public void WizardFormInvalidEventArgs_SetProperties_WorksCorrectly()
        {
            // Act
            var args = new WizardFormInvalidEventArgs
            {
                FormId = "wizard-step-1",
                FormName = "user-details-form"
            };

            // Assert
            Assert.Equal("wizard-step-1", args.FormId);
            Assert.Equal("user-details-form", args.FormName);
        }
    }
}
