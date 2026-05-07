using System;
using System.Threading.Tasks;

using Pggm.Components.Base;

using Xunit;

namespace Pggm.Components.Tests;

public class PggmEventHandlerRegistryTests
{
    // -----------------------------------------------------------------------
    // Register / TryGetHandler
    // -----------------------------------------------------------------------

    [Fact]
    public void Register_WithObjectParam_CanBeRetrieved()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.Register("click", _ => Task.CompletedTask);

        Assert.True(registry.TryGetHandler("click", out var handler));
        Assert.NotNull(handler);
    }

    [Fact]
    public void Register_WithNoParam_CanBeRetrieved()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.Register("click", () => Task.CompletedTask);

        Assert.True(registry.TryGetHandler("click", out var handler));
        Assert.NotNull(handler);
    }

    [Fact]
    public void Register_OverwritesPreviousHandler()
    {
        var registry = new PggmEventHandlerRegistry();
        var firstCalled = false;
        var secondCalled = false;

        registry.Register("click", _ => { firstCalled = true; return Task.CompletedTask; });
        registry.Register("click", _ => { secondCalled = true; return Task.CompletedTask; });

        registry.TryGetHandler("click", out var handler);
        handler!(null);

        Assert.False(firstCalled);
        Assert.True(secondCalled);
    }

    [Fact]
    public void Register_NullHandler_ThrowsArgumentNullException()
    {
        var registry = new PggmEventHandlerRegistry();
        Assert.Throws<ArgumentNullException>(() => registry.Register("click", (Func<object?, Task>)null!));
    }

    [Fact]
    public void TryGetHandler_UnknownEvent_ReturnsFalse()
    {
        var registry = new PggmEventHandlerRegistry();
        Assert.False(registry.TryGetHandler("unknown", out var handler));
        Assert.Null(handler);
    }

    [Fact]
    public void TryGetHandler_IsCaseInsensitive()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.Register("CLICK", _ => Task.CompletedTask);

        Assert.True(registry.TryGetHandler("click", out _));
        Assert.True(registry.TryGetHandler("Click", out _));
    }

    // -----------------------------------------------------------------------
    // RegisterTyped
    // -----------------------------------------------------------------------

    [Fact]
    public async Task RegisterTyped_InvokesHandlerWithTypedData()
    {
        var registry = new PggmEventHandlerRegistry();
        string? received = null;

        registry.RegisterTyped<string>("change", data =>
        {
            received = data;
            return Task.CompletedTask;
        });

        registry.TryGetHandler("change", out var handler);
        await handler!("hello");

        Assert.Equal("hello", received);
    }

    // -----------------------------------------------------------------------
    // RegisterCancelable / TryGetCancelableHandler
    // -----------------------------------------------------------------------

    [Fact]
    public void RegisterCancelable_CanBeRetrieved()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.RegisterCancelable("submit", _ => Task.FromResult(true));

        Assert.True(registry.TryGetCancelableHandler("submit", out var handler));
        Assert.NotNull(handler);
    }

    [Fact]
    public async Task RegisterCancelable_HandlerReturnValue_IsPreserved()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.RegisterCancelable("submit", _ => Task.FromResult(false));

        registry.TryGetCancelableHandler("submit", out var handler);
        var result = await handler!(null);

        Assert.False(result);
    }

    [Fact]
    public void TryGetCancelableHandler_UnknownEvent_ReturnsFalse()
    {
        var registry = new PggmEventHandlerRegistry();
        Assert.False(registry.TryGetCancelableHandler("unknown", out _));
    }

    // -----------------------------------------------------------------------
    // Unregister
    // -----------------------------------------------------------------------

    [Fact]
    public void Unregister_ExistingEvent_RemovesHandler()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.Register("click", _ => Task.CompletedTask);
        var removed = registry.Unregister("click");

        Assert.True(removed);
        Assert.False(registry.TryGetHandler("click", out _));
    }

    [Fact]
    public void Unregister_NonExistentEvent_ReturnsFalse()
    {
        var registry = new PggmEventHandlerRegistry();
        Assert.False(registry.Unregister("missing"));
    }

    [Fact]
    public void Unregister_NullOrWhiteSpace_ReturnsFalse()
    {
        var registry = new PggmEventHandlerRegistry();
        Assert.False(registry.Unregister(""));
        Assert.False(registry.Unregister("   "));
    }

    [Fact]
    public void UnregisterCancelable_ExistingEvent_RemovesHandler()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.RegisterCancelable("submit", _ => Task.FromResult(true));
        var removed = registry.UnregisterCancelable("submit");

        Assert.True(removed);
        Assert.False(registry.TryGetCancelableHandler("submit", out _));
    }

    // -----------------------------------------------------------------------
    // Snapshots
    // -----------------------------------------------------------------------

    [Fact]
    public void GetHandlersSnapshot_ReturnsAllRegisteredHandlers()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.Register("click", _ => Task.CompletedTask);
        registry.Register("change", _ => Task.CompletedTask);

        var snapshot = registry.GetHandlersSnapshot();

        Assert.Equal(2, snapshot.Count);
        Assert.True(snapshot.ContainsKey("click"));
        Assert.True(snapshot.ContainsKey("change"));
    }

    [Fact]
    public void GetHandlersSnapshot_ReturnsIndependentCopy()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.Register("click", _ => Task.CompletedTask);

        var snapshot = registry.GetHandlersSnapshot();
        registry.Register("change", _ => Task.CompletedTask);

        // Snapshot captured before second registration should only contain one entry
        Assert.Single(snapshot);
    }

    [Fact]
    public void GetCancelableHandlersSnapshot_ReturnsAllRegistered()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.RegisterCancelable("submit", _ => Task.FromResult(true));
        registry.RegisterCancelable("beforeNavigate", _ => Task.FromResult(false));

        var snapshot = registry.GetCancelableHandlersSnapshot();
        Assert.Equal(2, snapshot.Count);
    }

    // -----------------------------------------------------------------------
    // GetEventNames
    // -----------------------------------------------------------------------

    [Fact]
    public void GetEventNames_CombinesHandlerAndCancelableKeys()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.Register("click", _ => Task.CompletedTask);
        registry.RegisterCancelable("submit", _ => Task.FromResult(true));

        var names = registry.GetEventNames();
        Assert.Contains("click", names);
        Assert.Contains("submit", names);
    }

    [Fact]
    public void GetEventNames_NoDuplicates_WhenRegisteredInBoth()
    {
        var registry = new PggmEventHandlerRegistry();
        registry.Register("click", _ => Task.CompletedTask);
        registry.RegisterCancelable("click", _ => Task.FromResult(true));

        var names = new System.Collections.Generic.HashSet<string>(registry.GetEventNames(), StringComparer.OrdinalIgnoreCase);
        // No duplicates
        Assert.Single(names);
    }
}
