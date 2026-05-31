using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;

namespace Pggm.Components.Base
{
    /// <summary>
    /// Hybrid base class for Blazor form input components that wrap form-associated web components
    /// and support advanced event handling via JS interop.
    /// </summary>
    public abstract class PggmEventComponentInputBase<T> : InputBase<T>, IAsyncDisposable
    {
        // Backing field used to create a valid member-access ValueExpression when none is supplied.
        private readonly T _dummyValueBacking = default!;
        /// <summary>
        /// Reference to the underlying web component element
        /// </summary>
        public ElementReference ElementRef { get; protected set; }

        /// <summary>
        /// The tag name for the web component (override in derived classes)
        /// </summary>
        public virtual string TagName => "input";

        /// <summary>
        /// Returns the attributes to be rendered on the element (override in derived classes)
        /// Merges captured AdditionalAttributes by default so unmatched attributes are rendered.
        /// </summary>
        // Reuse a dictionary instance to avoid per-render allocations.
        private readonly Dictionary<string, object> _attributeCache = new();

        protected virtual Dictionary<string, object> GetAttributes()
        {
            _attributeCache.Clear();
            if (AdditionalAttributes != null)
            {
                foreach (var kv in AdditionalAttributes)
                {
                    // AdditionalAttributes values are allowed to be null; ensure non-null reference
                    if (kv.Value != null)
                        _attributeCache[kv.Key] = kv.Value!;
                    else
                        _attributeCache[kv.Key] = string.Empty;
                }
            }
            return _attributeCache;
        }

        /// <summary>
        /// Required by InputBase: parse value from string (override in derived classes for custom parsing)
        /// </summary>
        protected override bool TryParseValueFromString(string? value, out T result, out string validationErrorMessage)
        {
            // Default implementation for string type
            if (typeof(T) == typeof(string))
            {
                // Normalize JS "null"/"undefined" strings that can leak through the JS interop layer.
                // Without this, an uninitialized web component whose .value property returns the
                // JavaScript string "null" would be stored as the 4-char string "null" in the model,
                // which silently passes [Required] validation because it is non-null and non-empty.
                var normalized = (value == "null" || value == "undefined") ? null : value;

                result = (T)(object?)(normalized ?? string.Empty)!;
                validationErrorMessage = null!;
                return true;
            }
            throw new NotSupportedException($"TryParseValueFromString not implemented for type {typeof(T)}");
        }
        private PggmEventListenerManager<PggmEventComponentInputBase<T>>? _eventManager;
        private bool _eventsInitialized;
        private bool _disposed;

        [Inject] protected IJSRuntime JSRuntime { get; set; } = default!;
        [Inject] protected ILogger<PggmEventComponentInputBase<T>>? Logger { get; set; }

        private readonly PggmEventHandlerRegistry _handlerRegistry = new();

        /// <summary>
        /// List of event names to listen for (override in derived classes)
        /// </summary>
        protected virtual IEnumerable<string> GetEventNames() => Array.Empty<string>();

        /// <summary>
        /// Register an event handler for the specified event name
        /// </summary>
        protected void RegisterEventHandler(string eventName, Func<object?, Task> handler)
        {
            _handlerRegistry.Register(eventName, handler);
        }

        /// <summary>
        /// Register an event handler with no parameters
        /// </summary>
        protected void RegisterEventHandler(string eventName, Func<Task> handler)
        {
            _handlerRegistry.Register(eventName, handler);
        }

        /// <summary>
        /// Register a typed event handler
        /// </summary>
        protected void RegisterEventHandler<TData>(string eventName, Func<TData?, Task> handler)
        {
            _handlerRegistry.RegisterTyped(eventName, handler);
        }

        /// <summary>
        /// Register a cancelable typed event handler
        /// </summary>
        protected void RegisterCancelableEventHandler<TData>(string eventName, Func<TData?, Task<bool>> handler) where TData : class, new()
        {
            _handlerRegistry.RegisterCancelableTyped<TData>(eventName, handler);
        }

        /// <summary>
        /// Unregister an event handler
        /// </summary>
        protected void UnregisterEventHandler(string eventName)
        {
            _handlerRegistry.Unregister(eventName);
        }

        /// <summary>
        /// Unregister a cancelable event handler
        /// </summary>
        protected void UnregisterCancelableEventHandler(string eventName)
        {
            _handlerRegistry.UnregisterCancelable(eventName);
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await base.OnAfterRenderAsync(firstRender);
            if (firstRender && !_eventsInitialized)
            {
                _eventManager = new PggmEventListenerManager<PggmEventComponentInputBase<T>>(JSRuntime, Logger, ElementRef, this);
                await SetupEventListenersAsync();
                _eventsInitialized = true;
            }
            // ElementRef is set by derived component via @ref assignment.
        }

        protected virtual async Task SetupEventListenersAsync()
        {
            foreach (var eventName in GetEventNames())
            {
                try
                {
                    if (_eventManager != null)
                    {
                        await _eventManager.AddEventListenerAsync(eventName, nameof(HandleEvent));
                    }
                }
                catch (Exception ex)
                {
                    Logger?.LogWarning(ex, "Failed to register event listener for {EventName}", eventName);
                }
            }
        }

        [JSInvokable]
        public async Task HandleEvent(string eventName, object? eventData = null)
        {
            if (_disposed) return;
            try
            {
                if (_handlerRegistry.TryGetHandler(eventName, out var handler))
                {
                    await handler!(eventData);
                }
            }
            catch (Exception ex)
            {
                Logger?.LogError(ex, "Error handling event '{EventName}'", eventName);
            }
        }

        public virtual async ValueTask DisposeAsync()
        {
            _disposed = true;
            try
            {
                if (_eventManager != null)
                {
                    await _eventManager.DisposeAsync();
                }
            }
            catch (Exception ex)
            {
                Logger?.LogWarning(ex, "Error disposing event manager");
            }
            _eventManager = null;
        }

        public override Task SetParametersAsync(ParameterView parameters)
        {
            // Ensure ValueExpression is always set to avoid InputBase throwing when the component
            // is used without an explicit @bind-Value (common in demos). Provide a harmless
            // default expression when missing so runtime doesn't fail.
            bool hasValueExpression = false;
            foreach (var p in parameters)
            {
                if (string.Equals(p.Name, "ValueExpression", StringComparison.OrdinalIgnoreCase))
                {
                    hasValueExpression = p.Value != null;
                    break;
                }
            }

            if (!hasValueExpression)
            {
                var dict = new Dictionary<string, object?>(StringComparer.OrdinalIgnoreCase);
                foreach (var p in parameters)
                {
                    dict[p.Name] = p.Value;
                }
                // Create a dummy member-access expression that references a private field on this instance.
                // FieldIdentifier accepts member-access expressions (obj => obj.Field), so using a
                // member on the component instance is valid and prevents FieldIdentifier errors.
                Expression<Func<T>> dummy = () => _dummyValueBacking;
                dict["ValueExpression"] = dummy;
                return base.SetParametersAsync(ParameterView.FromDictionary(dict));
            }

            return base.SetParametersAsync(parameters);
        }
    }
}
