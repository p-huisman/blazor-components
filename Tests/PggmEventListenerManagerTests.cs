using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;

using Moq;
using Moq.Language.Flow;

using Pggm.Components.Base;

using Xunit;

namespace Pggm.Components.Tests;

/// <summary>
/// Tests for PggmEventListenerManager focusing on batch vs per-event fallback paths
/// and correct disposal behaviour. All JS interop is mocked with Moq.
/// </summary>
public class PggmEventListenerManagerTests
{
    // Helper: build a dummy ElementReference with a non-empty Id
    // (JSRuntime calls are skipped when Id is empty — real behaviour too)
    private static ElementReference BuildRef() =>
        new ElementReference(Guid.NewGuid().ToString());

    private static Mock<IJSRuntime> BuildJsMock() => new(MockBehavior.Loose);

    // -----------------------------------------------------------------------
    // AddEventListenersAsync – batch succeeds
    // -----------------------------------------------------------------------

    [Fact]
    public async Task AddEventListenersAsync_BatchSucceeds_SingleJsCallMade()
    {
        var js = BuildJsMock();

        // Batch path succeeds (MockBehavior.Loose returns default ValueTask automatically)
        var manager = new PggmEventListenerManager<DummyComponent>(
            js.Object, null, BuildRef(), new DummyComponent());

        await manager.AddEventListenersAsync(new[] { "click", "change" }, "HandleEvent");

        // Exactly one batch call and no per-event calls
        js.Verify(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
            "PggmComponents.addEventListeners", It.IsAny<object?[]?>()), Times.Once);
        js.Verify(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
            "PggmComponents.addEventListener", It.IsAny<object?[]?>()), Times.Never);
    }

    // -----------------------------------------------------------------------
    // AddEventListenersAsync – batch throws JSException, falls back per-event
    // -----------------------------------------------------------------------

    [Fact]
    public async Task AddEventListenersAsync_BatchFails_FallsBackToPerEvent()
    {
        var js = BuildJsMock();

        // Batch call throws JSException
        js.Setup(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
                "PggmComponents.addEventListeners", It.IsAny<object?[]?>()))
            .ThrowsAsync(new JSException("not supported"));

        // Per-event succeeds (MockBehavior.Loose returns default ValueTask automatically)

        var manager = new PggmEventListenerManager<DummyComponent>(
            js.Object, null, BuildRef(), new DummyComponent());

        await manager.AddEventListenersAsync(new[] { "click", "change" }, "HandleEvent");

        // Per-event called once for each event
        js.Verify(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
            "PggmComponents.addEventListener", It.IsAny<object?[]?>()), Times.Exactly(2));
    }

    // -----------------------------------------------------------------------
    // AddCancelableEventListenersAsync – batch succeeds
    // -----------------------------------------------------------------------

    [Fact]
    public async Task AddCancelableEventListenersAsync_BatchSucceeds_SingleJsCallMade()
    {
        var js = BuildJsMock();

        var manager = new PggmEventListenerManager<DummyComponent>(
            js.Object, null, BuildRef(), new DummyComponent());

        await manager.AddCancelableEventListenersAsync(new[] { "beforeSubmit" }, "HandleCancelableEvent");

        js.Verify(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
            "PggmComponents.addCancelableEventListeners", It.IsAny<object?[]?>()), Times.Once);
    }

    // -----------------------------------------------------------------------
    // AddCancelableEventListenersAsync – batch throws, falls back
    // -----------------------------------------------------------------------

    [Fact]
    public async Task AddCancelableEventListenersAsync_BatchFails_FallsBackToPerEvent()
    {
        var js = BuildJsMock();

        js.Setup(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
                "PggmComponents.addCancelableEventListeners", It.IsAny<object?[]?>()))
            .ThrowsAsync(new JSException("not supported"));

        // per-event succeeds via MockBehavior.Loose

        var manager = new PggmEventListenerManager<DummyComponent>(
            js.Object, null, BuildRef(), new DummyComponent());

        await manager.AddCancelableEventListenersAsync(
            new[] { "beforeSubmit", "beforeNavigate" }, "HandleCancelableEvent");

        js.Verify(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
            "PggmComponents.addCancelableEventListener", It.IsAny<object?[]?>()), Times.Exactly(2));
    }

    // -----------------------------------------------------------------------
    // Empty / null input is ignored
    // -----------------------------------------------------------------------

    [Fact]
    public async Task AddEventListenersAsync_EmptyList_NoJsCallsMade()
    {
        var js = BuildJsMock();
        var manager = new PggmEventListenerManager<DummyComponent>(
            js.Object, null, BuildRef(), new DummyComponent());

        await manager.AddEventListenersAsync(Array.Empty<string>(), "HandleEvent");

        js.Verify(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
            It.IsAny<string>(), It.IsAny<object?[]?>()), Times.Never);
    }

    [Fact]
    public async Task AddEventListenersAsync_NullInput_NoJsCallsMade()
    {
        var js = BuildJsMock();
        var manager = new PggmEventListenerManager<DummyComponent>(
            js.Object, null, BuildRef(), new DummyComponent());

        await manager.AddEventListenersAsync(null!, "HandleEvent");

        js.Verify(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
            It.IsAny<string>(), It.IsAny<object?[]?>()), Times.Never);
    }

    // -----------------------------------------------------------------------
    // Duplicate event names are deduplicated
    // -----------------------------------------------------------------------

    [Fact]
    public async Task AddEventListenersAsync_DuplicateNames_RegisteredOnlyOnce()
    {
        var js = BuildJsMock();

        // Batch not available — test per-event path
        js.Setup(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
                "PggmComponents.addEventListeners", It.IsAny<object?[]?>()))
            .ThrowsAsync(new JSException("not supported"));

        // per-event succeeds via MockBehavior.Loose

        var manager = new PggmEventListenerManager<DummyComponent>(
            js.Object, null, BuildRef(), new DummyComponent());

        await manager.AddEventListenersAsync(new[] { "click", "CLICK", "click" }, "HandleEvent");

        // Only one unique event after dedup
        js.Verify(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
            "PggmComponents.addEventListener", It.IsAny<object?[]?>()), Times.Once);
    }

    // -----------------------------------------------------------------------
    // DisposeAsync removes registered events
    // -----------------------------------------------------------------------

    [Fact]
    public async Task DisposeAsync_BatchRemove_Called()
    {
        var js = BuildJsMock();

        // add + remove succeeded via MockBehavior.Loose

        var manager = new PggmEventListenerManager<DummyComponent>(
            js.Object, null, BuildRef(), new DummyComponent());

        await manager.AddEventListenersAsync(new[] { "click" }, "HandleEvent");
        await manager.DisposeAsync();

        js.Verify(x => x.InvokeAsync<Microsoft.JSInterop.Infrastructure.IJSVoidResult>(
            "PggmComponents.removeEventListeners", It.IsAny<object?[]?>()), Times.Once);
    }

    // -----------------------------------------------------------------------
    // Constructor validates arguments
    // -----------------------------------------------------------------------

    [Fact]
    public void Constructor_NullJsRuntime_Throws()
    {
        Assert.Throws<ArgumentNullException>(() =>
            new PggmEventListenerManager<DummyComponent>(null!, null, BuildRef(), new DummyComponent()));
    }

    [Fact]
    public void Constructor_NullComponent_Throws()
    {
        Assert.Throws<ArgumentNullException>(() =>
            new PggmEventListenerManager<DummyComponent>(BuildJsMock().Object, null, BuildRef(), null!));
    }
}

// Minimal stand-in used only for the type parameter
internal sealed class DummyComponent { }
