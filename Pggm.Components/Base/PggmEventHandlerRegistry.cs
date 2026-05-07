using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Pggm.Components.Models.Wizard;
using System.Threading.Tasks;

namespace Pggm.Components.Base
{
    internal sealed class PggmEventHandlerRegistry
    {
        private readonly ConcurrentDictionary<string, Func<object?, Task>> _handlers = new(StringComparer.OrdinalIgnoreCase);
        private readonly ConcurrentDictionary<string, Func<object?, Task<bool>>> _cancelableHandlers = new(StringComparer.OrdinalIgnoreCase);

        public IEnumerable<string> GetEventNames() => _handlers.Keys.Concat(_cancelableHandlers.Keys).Distinct(StringComparer.OrdinalIgnoreCase);

        public void Register(string eventName, Func<object?, Task> handler)
        {
            _handlers[eventName] = handler ?? throw new ArgumentNullException(nameof(handler));
        }

        public void Register(string eventName, Func<Task> handler)
        {
            if (handler == null) throw new ArgumentNullException(nameof(handler));
            _handlers[eventName] = _ => handler();
        }

        public void RegisterTyped<T>(string eventName, Func<T?, Task> handler)
        {
            if (handler == null) throw new ArgumentNullException(nameof(handler));
            _handlers[eventName] = eventData =>
            {
                var typed = eventData is T t ? t : default(T);
                return handler(typed);
            };
        }

        public void RegisterCancelableTyped<T>(string eventName, Func<T?, Task<bool>> handler) where T : class, new()
        {
            if (handler == null) throw new ArgumentNullException(nameof(handler));
            _cancelableHandlers[eventName] = async eventData =>
            {
                var typed = PggmEventDataConverter.DeserializeEventData<T>(eventData);
                var result = await handler(typed).ConfigureAwait(false);
                if (typed is CancelableEventArgs cancelable && cancelable.Cancel)
                    return false;
                return result;
            };
        }

        public void RegisterCancelable(string eventName, Func<object?, Task<bool>> handler)
        {
            _cancelableHandlers[eventName] = handler ?? throw new ArgumentNullException(nameof(handler));
        }

        public bool TryGetHandler(string eventName, out Func<object?, Task>? handler)
        {
            if (_handlers.TryGetValue(eventName, out var h))
            {
                handler = h;
                return true;
            }
            handler = null;
            return false;
        }

        public bool TryGetCancelableHandler(string eventName, out Func<object?, Task<bool>>? handler)
        {
            if (_cancelableHandlers.TryGetValue(eventName, out var h))
            {
                handler = h;
                return true;
            }
            handler = null;
            return false;
        }

        public Dictionary<string, Func<object?, Task>> GetHandlersSnapshot()
        {
            return _handlers.ToDictionary(kv => kv.Key, kv => kv.Value, StringComparer.OrdinalIgnoreCase);
        }

        public Dictionary<string, Func<object?, Task<bool>>> GetCancelableHandlersSnapshot()
        {
            return _cancelableHandlers.ToDictionary(kv => kv.Key, kv => kv.Value, StringComparer.OrdinalIgnoreCase);
        }

        public bool Unregister(string eventName)
        {
            if (string.IsNullOrWhiteSpace(eventName)) return false;
            return _handlers.TryRemove(eventName, out _);
        }

        public bool UnregisterCancelable(string eventName)
        {
            if (string.IsNullOrWhiteSpace(eventName)) return false;
            return _cancelableHandlers.TryRemove(eventName, out _);
        }
    }
}
