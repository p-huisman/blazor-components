using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;

namespace Pggm.Components.Base
{
    internal sealed class PggmEventListenerManager<TComponent> : IAsyncDisposable where TComponent : class
    {
        private readonly IJSRuntime _jsRuntime;
        private readonly ILogger? _logger;
        private readonly TComponent _component;
        private DotNetObjectReference<TComponent>? _objectReference;
        private readonly List<string> _registeredEvents = new();
        private readonly ElementReference _elementRef;

        public PggmEventListenerManager(IJSRuntime jsRuntime, ILogger? logger, ElementReference elementRef, TComponent component)
        {
            _jsRuntime = jsRuntime ?? throw new ArgumentNullException(nameof(jsRuntime));
            _logger = logger;
            _elementRef = elementRef;
            _component = component ?? throw new ArgumentNullException(nameof(component));
            _objectReference = DotNetObjectReference.Create(_component);
        }

        public async Task AddEventListenerAsync(string eventName, string callbackName = "HandleEvent")
        {
            if (_objectReference == null) _objectReference = DotNetObjectReference.Create(_component);
            try
            {
                await _jsRuntime.InvokeVoidAsync("PggmComponents.addEventListener", _elementRef, eventName, _objectReference, callbackName);
                _registeredEvents.Add(eventName);
            }
            catch (Exception ex)
            {
                _logger?.LogWarning(ex, "Failed to add event listener for {EventName}", eventName);
                throw;
            }
        }

        public async Task AddEventListenersAsync(IEnumerable<string> eventNames, string callbackName = "HandleEvent")
        {
            if (eventNames == null) return;
            var list = eventNames.Where(e => !string.IsNullOrWhiteSpace(e)).Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
            if (list.Length == 0) return;
            if (_objectReference == null) _objectReference = DotNetObjectReference.Create(_component);

            // Try batch add first (single JS call). If not supported, fall back to per-event calls.
            try
            {
                await _jsRuntime.InvokeVoidAsync("PggmComponents.addEventListeners", _elementRef, list, _objectReference, callbackName);
                foreach (var e in list) if (!_registeredEvents.Contains(e)) _registeredEvents.Add(e);
                return;
            }
            catch (JSException)
            {
                // fall through to per-event
            }

            foreach (var eventName in list)
            {
                if (_registeredEvents.Contains(eventName)) continue;
                try
                {
                    await _jsRuntime.InvokeVoidAsync("PggmComponents.addEventListener", _elementRef, eventName, _objectReference, callbackName);
                    _registeredEvents.Add(eventName);
                }
                catch (Exception ex)
                {
                    _logger?.LogWarning(ex, "Failed to add event listener for {EventName}", eventName);
                    throw;
                }
            }
        }

        public async Task AddCancelableEventListenerAsync(string eventName, string callbackName = "HandleCancelableEvent")
        {
            if (_objectReference == null) _objectReference = DotNetObjectReference.Create(_component);
            try
            {
                await _jsRuntime.InvokeVoidAsync("PggmComponents.addCancelableEventListener", _elementRef, eventName, _objectReference, callbackName);
                _registeredEvents.Add(eventName);
            }
            catch (Exception ex)
            {
                _logger?.LogWarning(ex, "Failed to add cancelable event listener for {EventName}", eventName);
                throw;
            }
        }

        public async Task AddCancelableEventListenersAsync(IEnumerable<string> eventNames, string callbackName = "HandleCancelableEvent")
        {
            if (eventNames == null) return;
            var list = eventNames.Where(e => !string.IsNullOrWhiteSpace(e)).Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
            if (list.Length == 0) return;
            if (_objectReference == null) _objectReference = DotNetObjectReference.Create(_component);

            try
            {
                await _jsRuntime.InvokeVoidAsync("PggmComponents.addCancelableEventListeners", _elementRef, list, _objectReference, callbackName);
                foreach (var e in list) if (!_registeredEvents.Contains(e)) _registeredEvents.Add(e);
                return;
            }
            catch (JSException)
            {
                // fall back
            }

            foreach (var eventName in list)
            {
                if (_registeredEvents.Contains(eventName)) continue;
                try
                {
                    await _jsRuntime.InvokeVoidAsync("PggmComponents.addCancelableEventListener", _elementRef, eventName, _objectReference, callbackName);
                    _registeredEvents.Add(eventName);
                }
                catch (Exception ex)
                {
                    _logger?.LogWarning(ex, "Failed to add cancelable event listener for {EventName}", eventName);
                    throw;
                }
            }
        }

        public async Task RemoveEventListenersAsync(IEnumerable<string> eventNames)
        {
            if (eventNames == null) return;
            var list = eventNames.Where(e => !string.IsNullOrWhiteSpace(e)).Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
            if (list.Length == 0) return;

            try
            {
                await _jsRuntime.InvokeVoidAsync("PggmComponents.removeEventListeners", _elementRef, list);
                foreach (var e in list) _registeredEvents.Remove(e);
                return;
            }
            catch (JSException)
            {
                // fall back to per-event
            }

            foreach (var eventName in list)
            {
                try
                {
                    await _jsRuntime.InvokeVoidAsync("PggmComponents.removeEventListener", _elementRef, eventName);
                    _registeredEvents.Remove(eventName);
                }
                catch (Exception ex)
                {
                    _logger?.LogWarning(ex, "Failed to remove event listener for {EventName}", eventName);
                }
            }
        }

        public async ValueTask DisposeAsync()
        {
            if (!string.IsNullOrEmpty(_elementRef.Id))
            {
                try
                {
                    // Attempt batch remove
                    await RemoveEventListenersAsync(_registeredEvents.ToArray());
                }
                catch (Exception ex)
                {
                    _logger?.LogWarning(ex, "Failed to remove event listeners during disposal");
                }
            }

            _registeredEvents.Clear();
            _objectReference?.Dispose();
            _objectReference = null;
        }
    }
}
