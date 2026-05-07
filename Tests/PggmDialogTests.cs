// Tests for PggmDialog component

using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Pggm.Components;

using Xunit;

public class PggmDialogTests : TestContext
{
    public PggmDialogTests()
    {
        Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
    }

    [Fact]
    public void PggmDialog_RendersCorrectly()
    {
        var cut = RenderComponent<PggmDialog>(parameters => parameters
            .Add(p => p.Open, true)
            .Add(p => p.HeaderContent, "Test Dialog")
        );

        Assert.Contains("pggm-dialog", cut.Markup);
        Assert.Contains("Test Dialog", cut.Markup);
    }
}
