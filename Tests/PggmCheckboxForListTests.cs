using System.Collections.Generic;

using Bunit;

using Microsoft.Extensions.DependencyInjection;

using Xunit;

namespace Tests
{
    public class PggmCheckboxForListTests : TestContext
    {
        public PggmCheckboxForListTests()
        {
            Services.AddSingleton<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void IsChecked_When_Item_In_SelectedItems()
        {
            var items = new List<string> { "one", "two" };

            var cut = RenderComponent<Pggm.Components.PggmCheckboxForList<string>>(parameters => parameters
                .Add(p => p.SelectedItems, items)
                .Add(p => p.Item, "two")
            );

            var checkbox = cut.Find("pggm-checkbox");
            Assert.True(checkbox.HasAttribute("checked"));
        }
    }
}
