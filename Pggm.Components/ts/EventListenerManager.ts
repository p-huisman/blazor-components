import type { DotNetObjectReference, ListenerEntry } from "./types";
import { sanitizeEventData } from "./sanitize";

/**
 * Generic event listener manager for web components
 */
export class EventListenerManager {
  private readonly listeners = new Map<string, ListenerEntry>();

  /**
   * Add an event listener with error handling and automatic cleanup
   */
  addListener(
    element: HTMLElement,
    eventName: string,
    dotNetRef: DotNetObjectReference,
    methodName: string,
    useTimeout = true,
  ): void {
    if (!element || !eventName || !dotNetRef || !methodName) {
      console.warn("EventListenerManager: Invalid parameters provided");
      return;
    }

    // Ensure element has an id for consistent key generation
    if (!element.id) {
      element.id = `pggm_element_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    }

    const key = this._getKey(element, eventName);

    // First, clean up any stale listeners for this element
    this._forceCleanupStaleListeners(element.id);

    if (this.listeners.has(key)) {
      // Check if existing listener is stale
      const existingListener = this.listeners.get(key)!;
      const isStale = !existingListener.element.isConnected;

      if (isStale) {
        this.listeners.delete(key);
      } else {
        // Listener still valid, skip adding duplicate
        return;
      }
    }

    const handler = async (event: Event): Promise<void> => {
      const executeCallback = async (): Promise<void> => {
        try {
          // Check if the DotNetObjectReference is still valid
          if (!dotNetRef || typeof dotNetRef.invokeMethodAsync !== "function") {
            return;
          }

          // Sanitize event data to remove circular references
          const sanitizedEventData = sanitizeEventData(
            (event as CustomEvent).detail,
          );

          // Pass the event name as the first parameter and sanitized event details as the second
          await dotNetRef.invokeMethodAsync(
            methodName,
            eventName,
            sanitizedEventData,
          );
        } catch (error) {
          // Check if this is a disposed object reference error
          if (
            error instanceof Error &&
            error.message?.includes("no tracked object with id")
          ) {
            // Remove this specific listener to prevent future errors
            element.removeEventListener(eventName, handler);
            return;
          }
          console.error(`Error invoking ${methodName}:`, error);
        }
      };

      if (useTimeout) {
        setTimeout(executeCallback, 0);
      } else {
        await executeCallback();
      }
    };

    element.addEventListener(eventName, handler);
    this.listeners.set(key, { element, eventName, handler, dotNetRef });
  }

  /**
   * Add a cancelable event listener with error handling and automatic cleanup
   */
  addCancelableListener(
    element: HTMLElement,
    eventName: string,
    dotNetRef: DotNetObjectReference,
    methodName: string,
  ): void {
    if (!element || !eventName || !dotNetRef || !methodName) {
      console.warn("EventListenerManager: Invalid parameters provided");
      return;
    }

    // Ensure element has an id for consistent key generation
    if (!element.id) {
      element.id = `pggm_element_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    }

    const key = this._getKey(element, eventName);
    if (this.listeners.has(key)) {
      // Listener already exists, silently skip adding duplicate
      return;
    }

    const handler = (event: Event): void => {
      // Always prevent default to stop web component's built-in behavior
      event.preventDefault();

      // Check with .NET if the event should proceed
      this._handleCancelableEvent(
        element,
        eventName,
        event as CustomEvent,
        dotNetRef,
        methodName,
      );
    };

    element.addEventListener(eventName, handler);
    this.listeners.set(key, { element, eventName, handler, dotNetRef });
  }

  /**
   * Handle the async validation and optional re-triggering of cancelable events
   */
  private async _handleCancelableEvent(
    element: HTMLElement,
    eventName: string,
    event: CustomEvent,
    dotNetRef: DotNetObjectReference,
    methodName: string,
  ): Promise<void> {
    try {
      // Check if the DotNetObjectReference is still valid
      if (!dotNetRef || typeof dotNetRef.invokeMethodAsync !== "function") {
        console.warn(
          `DotNetObjectReference is null or invalid for cancelable ${eventName}`,
        );
        return; // Let the event proceed by default
      }

      // Sanitize event data to remove circular references
      const sanitizedEventData = sanitizeEventData(event.detail);

      const shouldContinue = await dotNetRef.invokeMethodAsync(
        methodName,
        eventName,
        sanitizedEventData,
      );

      if (shouldContinue === true) {
        this._retriggerEventAction(element, eventName, event.detail);
      }
      // If shouldContinue is false, event remains cancelled (no action needed)
    } catch (error) {
      // Check if this is a disposed object reference error
      if (
        error instanceof Error &&
        error.message?.includes("no tracked object with id")
      ) {
        console.warn(
          `DotNetObjectReference was disposed for cancelable ${eventName}`,
        );
        return; // Let the event proceed by default
      }
      console.error(
        `Error in cancelable event handler for ${eventName}:`,
        error,
      );
    }
  }

  /**
   * Re-trigger the web component's action after validation approval
   */
  private _retriggerEventAction(
    element: HTMLElement,
    eventName: string,
    eventDetail: unknown,
  ): void {
    // Use setTimeout to avoid any potential timing issues
    setTimeout(() => {
      try {
        const detail = eventDetail as Record<string, unknown> | null;
        if (
          eventName === "beforeNavigate" &&
          typeof detail?.["direction"] === "string"
        ) {
          const el = element as HTMLElement & {
            navigate?: (direction: string) => void;
          };
          if (typeof el.navigate === "function") {
            el.navigate(detail["direction"]);
          }
        } else if (eventName === "requestClose") {
          const el = element as HTMLElement & { hide?: () => void };
          if (typeof el.hide === "function") {
            el.hide();
          }
        }
        // beforeSubmit — reserved for future implementation
        // Add more event types here as needed
      } catch (error) {
        console.error(`Error re-triggering action for ${eventName}:`, error);
      }
    }, 0);
  }

  /**
   * Remove a specific event listener
   */
  removeListener(element: HTMLElement | null, eventName: string): void {
    if (!element) {
      return; // Element is null, nothing to remove
    }

    const key = this._getKey(element, eventName);
    const listenerInfo = this.listeners.get(key);

    if (listenerInfo) {
      // Use optional chaining to safely remove event listener without throwing
      listenerInfo.element?.removeEventListener(
        listenerInfo.eventName,
        listenerInfo.handler,
      );

      // Always clean up our Map regardless of DOM removal success
      this.listeners.delete(key);
    } else {
      // Force cleanup: remove any stale listeners with the same element ID
      this._forceCleanupStaleListeners(element.id);
    }
  }

  /**
   * Remove all listeners for an element
   */
  removeAllListeners(element: HTMLElement | null): void {
    if (!element) {
      return; // Element is null, nothing to remove
    }
    const keysToRemove: string[] = [];

    for (const [key, listenerInfo] of this.listeners) {
      if (listenerInfo.element === element) {
        listenerInfo.element.removeEventListener(
          listenerInfo.eventName,
          listenerInfo.handler,
        );
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => this.listeners.delete(key));
  }

  /**
   * Generate a unique key for element-event combination
   */
  private _getKey(element: HTMLElement, eventName: string): string {
    // Elements are guaranteed to have an id when listeners are added
    return `${element.id}_${eventName}`;
  }

  /**
   * Force cleanup of stale listeners for a given element ID.
   * This handles cases where disposal didn't properly clean up all entries.
   */
  _forceCleanupStaleListeners(elementId: string): void {
    const staleKeys: string[] = [];

    for (const [key, listenerInfo] of this.listeners) {
      if (key.startsWith(`${elementId}_`)) {
        // Check if element is still connected
        const isStale = !listenerInfo.element.isConnected;
        if (isStale) {
          staleKeys.push(key);
        }
      }
    }

    // Remove stale entries
    staleKeys.forEach((key) => {
      const listenerInfo = this.listeners.get(key);
      if (listenerInfo) {
        try {
          listenerInfo.element.removeEventListener(
            listenerInfo.eventName,
            listenerInfo.handler,
          );
        } catch (e) {
          // Silently ignore errors for disconnected elements during cleanup
          console.debug(
            `Cleanup: Could not remove listener for stale element ${key}:`,
            e,
          );
        }
        this.listeners.delete(key);
      }
    });
  }

  /**
   * Clean up all listeners
   */
  dispose(): void {
    for (const [, listenerInfo] of this.listeners) {
      listenerInfo.element.removeEventListener(
        listenerInfo.eventName,
        listenerInfo.handler,
      );
    }
    this.listeners.clear();
  }
}
