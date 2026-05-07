// Tests for PggmInputDate component

using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Pggm.Components;

using Xunit;

public class PggmInputDateTests : TestContext
{
    public PggmInputDateTests()
    {
        Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        JSInterop.SetupVoid("PggmComponents.setProperty", _ => true);
    }
    [Fact]
    public void PggmInputDate_RendersCorrectly()
    {
        // Arrange & Act
        var cut = RenderComponent<PggmInputDate>(parameters => parameters
            .Add(p => p.Value, "2025-09-19")
            .Add(p => p.Name, "date")
            .Add(p => p.Required, true)
        );

        // Assert
        cut.MarkupMatches(@"<pggm-input-date name=""date"" required value=""2025-09-19""></pggm-input-date>");
    }

    [Fact]
    public void PggmInputDate_HandlesDisabledState()
    {
        var cut = RenderComponent<PggmInputDate>(parameters => parameters
            .Add(p => p.Disabled, true)
        );

        Assert.Contains("disabled", cut.Markup);
    }
}
