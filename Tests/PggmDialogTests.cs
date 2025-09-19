// Tests for PggmDialog component

using Bunit;
using Xunit;
using Pggm.Components;
using Microsoft.Extensions.DependencyInjection;

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
