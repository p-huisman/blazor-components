using System;
using System.Collections.Generic;
using Bunit;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;
using Pggm.Components.Components.PggmDataGrid;
using Xunit;

namespace Pggm.Components.Tests;

public class KeyboardNavigationTests : TestContext
{
    public KeyboardNavigationTests()
    {
        Services.AddScoped<Pggm.Components.Services.PggmDesignSystemService>();
    }

    [Fact]
    public void ArrowDown_OnLastRow_MovesToNextPageAndFocusesFirstRow()
    {
        var items = CreateItems(25);
        var pagination = new PaginationState { PageSize = 10, PageIndex = 0 };
        var comp = RenderDataGrid(items, pagination);

        var lastRowCell = comp.Find("td[id$='-r9-c0']");
        lastRowCell.TriggerEvent("onfocusin", new FocusEventArgs());

        var grid = comp.Find("div[role='grid']");
        grid.TriggerEvent("onkeydown", new KeyboardEventArgs { Key = "ArrowDown" });

        comp.WaitForAssertion(() => Assert.Equal(1, pagination.PageIndex));
        comp.WaitForAssertion(() =>
        {
            var focusedCell = comp.Find("td[id$='-r0-c0'][tabindex='0']");
            Assert.Contains("Item-10", focusedCell.TextContent);
        });
    }

    [Fact]
    public void ArrowUp_OnFirstRow_MovesToPreviousPageAndFocusesLastRow()
    {
        var items = CreateItems(25);
        var pagination = new PaginationState { PageSize = 10, PageIndex = 1 };
        var comp = RenderDataGrid(items, pagination);

        var firstRowCell = comp.Find("td[id$='-r0-c0']");
        firstRowCell.TriggerEvent("onfocusin", new FocusEventArgs());

        var grid = comp.Find("div[role='grid']");
        grid.TriggerEvent("onkeydown", new KeyboardEventArgs { Key = "ArrowUp" });

        comp.WaitForAssertion(() => Assert.Equal(0, pagination.PageIndex));
        comp.WaitForAssertion(() =>
        {
            var focusedCell = comp.Find("td[id$='-r9-c0'][tabindex='0']");
            Assert.Contains("Item-9", focusedCell.TextContent);
        });
    }

    [Fact]
    public void ArrowDown_FromHeaderFocus_FocusesFirstBodyRow()
    {
        var items = CreateItems(25);
        var pagination = new PaginationState { PageSize = 10, PageIndex = 0 };
        var comp = RenderDataGrid(items, pagination);

        var headerButton = comp.Find("th[col-index='0'] .pggm-grid-header-sort");
        headerButton.TriggerEvent("onfocusin", new FocusEventArgs());

        var grid = comp.Find("div[role='grid']");
        grid.TriggerEvent("onkeydown", new KeyboardEventArgs { Key = "ArrowDown" });

        comp.WaitForAssertion(() =>
        {
            var focusedCell = comp.Find("td[id$='-r0-c0'][tabindex='0']");
            Assert.Contains("Item-0", focusedCell.TextContent);
        });
    }

    private IRenderedComponent<PggmDataGrid<RowItem>> RenderDataGrid(List<RowItem> items, PaginationState pagination)
    {
        return RenderComponent<PggmDataGrid<RowItem>>(parameters => parameters
            .Add(p => p.Items!, items.AsQueryable())
            .Add(p => p.Pagination, pagination)
            .Add<RenderFragment>(p => p.ChildContent!, builder =>
            {
                builder.OpenComponent(0, typeof(PropertyColumn<RowItem, string>));
                builder.AddAttribute(1, "Title", "Name");
                builder.AddAttribute(2, "Index", 0);
                builder.AddAttribute(3, "Property", (System.Linq.Expressions.Expression<Func<RowItem, string>>)(x => x.Name));
                builder.CloseComponent();
            }));
    }

    private static List<RowItem> CreateItems(int count)
    {
        var items = new List<RowItem>();
        for (var i = 0; i < count; i++)
        {
            items.Add(new RowItem($"Item-{i}"));
        }

        return items;
    }

    private record RowItem(string Name);
}
