using System;

using Bunit;

using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.DependencyInjection;

using Pggm.Components.Components.PggmDataGrid;

using Xunit;

namespace Pggm.Components.Tests
{
    public class AriaAttributesTests : TestContext
    {
        public AriaAttributesTests()
        {
            // register any services the grid might depend on minimally
            Services.AddScoped<Pggm.Components.Services.PggmDesignSystemService>();
        }

        [Fact]
        public void PggmDataGrid_Renders_RoleGrid_WhenAriaLabelProvided()
        {
            // Arrange & Act
            var comp = RenderComponent<PggmDataGrid<object>>(parameters => parameters
                .Add(p => p.AriaLabel, "Test Grid")
            );

            // Assert
            var grid = comp.Find("div[role='grid']");
            Assert.NotNull(grid);
            Assert.Equal("Test Grid", grid.GetAttribute("aria-label"));
        }
    }
}
