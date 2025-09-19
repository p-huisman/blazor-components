// Tests for PggmAccordionItemTitle component

using Bunit;
using Xunit;
using Pggm.Components;
using Microsoft.Extensions.DependencyInjection;

public class PggmAccordionItemTitleTests : TestContext
{
    public PggmAccordionItemTitleTests()
    {
        Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
    }

    [Fact]
    public void PggmAccordionItemTitle_RendersCorrectly()
    {
        var cut = RenderComponent<PggmAccordionItemTitle>(parameters => parameters
            .AddChildContent("Accordion Title")
        );

        Assert.Contains("<span slot=\"header\"", cut.Markup);
        Assert.Contains("Accordion Title", cut.Markup);
    }
}
