// PGGM Design System JavaScript interop functions
let bundleLoaded = false;

/**
 * Sanitize event data to remove circular references and DOM elements
 */
function sanitizeEventData(eventData) {
  if (eventData === null || eventData === undefined) {
    return null;
  }

  // If it's a primitive type, return as-is
  if (typeof eventData !== 'object') {
    return eventData;
  }

  // If it's a DOM element, return only safe properties
  if (eventData instanceof Element) {
    return {
      tagName: eventData.tagName,
      id: eventData.id,
      className: eventData.className,
      value: eventData.value || null
    };
  }

  // If it's an array, sanitize each element
  if (Array.isArray(eventData)) {
    return eventData.map(item => sanitizeEventData(item));
  }

  // For objects, create a new object with sanitized properties
  const sanitized = {};
  const seen = new WeakSet();

  function sanitizeObject(obj, target) {
    if (obj === null || obj === undefined) {
      return null;
    }

    // Prevent circular references
    if (seen.has(obj)) {
      return '[Circular Reference]';
    }
    seen.add(obj);

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        
        // Skip functions and DOM elements
        if (typeof value === 'function' || value instanceof Element || value instanceof Node) {
          continue;
        }

        // Handle primitive types
        if (value === null || typeof value !== 'object') {
          target[key] = value;
        }
        // Handle arrays
        else if (Array.isArray(value)) {
          target[key] = value.map(item => sanitizeEventData(item));
        }
        // Handle plain objects (but not complex objects like FormData, etc.)
        else if (value.constructor === Object) {
          target[key] = {};
          sanitizeObject(value, target[key]);
        }
        // For other object types, try to extract safe properties
        else {
          const safeProps = {};
          try {
            // Only include safe property types
            for (const prop in value) {
              if (value.hasOwnProperty(prop)) {
                const propValue = value[prop];
                if (typeof propValue === 'string' || 
                    typeof propValue === 'number' || 
                    typeof propValue === 'boolean' ||
                    propValue === null) {
                  safeProps[prop] = propValue;
                }
              }
            }
            if (Object.keys(safeProps).length > 0) {
              target[key] = safeProps;
            }
          } catch (e) {
            // Skip this property if we can't access it safely
            continue;
          }
        }
      }
    }
  }

  sanitizeObject(eventData, sanitized);
  return sanitized;
}

/**
 * Generic event listener manager for web components
 */
class EventListenerManager {
  constructor() {
    this.listeners = new Map();
  }

  /**
   * Add an event listener with error handling and automatic cleanup
   */
  addListener(element, eventName, dotNetRef, methodName, useTimeout = true) {
    if (!element || !eventName || !dotNetRef || !methodName) {
      console.warn("EventListenerManager: Invalid parameters provided");
      return;
    }

    const key = this._getKey(element, eventName);
    if (this.listeners.has(key)) {
      console.warn(
        `EventListenerManager: Listener already exists for ${eventName} on element`
      );
      return;
    }

    const handler = async (event) => {
      const executeCallback = async () => {
        try {
          // Sanitize event data to remove circular references
          const sanitizedEventData = sanitizeEventData(event.detail);
          
          // Pass the event name as the first parameter and sanitized event details as the second
          await dotNetRef.invokeMethodAsync(
            methodName,
            eventName,
            sanitizedEventData
          );
        } catch (error) {
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
  addCancelableListener(element, eventName, dotNetRef, methodName) {
    if (!element || !eventName || !dotNetRef || !methodName) {
      console.warn("EventListenerManager: Invalid parameters provided");
      return;
    }

    const key = this._getKey(element, eventName);
    if (this.listeners.has(key)) {
      console.warn(
        `EventListenerManager: Listener already exists for ${eventName} on element`
      );
      return;
    }

    const handler = (event) => {
      // Always prevent default to stop web component's built-in behavior
      event.preventDefault();
      
      // Check with .NET if the event should proceed
      this._handleCancelableEvent(element, eventName, event, dotNetRef, methodName);
    };

    element.addEventListener(eventName, handler);
    this.listeners.set(key, { element, eventName, handler, dotNetRef });
  }

  /**
   * Handle the async validation and optional re-triggering of cancelable events
   */
  async _handleCancelableEvent(element, eventName, event, dotNetRef, methodName) {
    try {
      // Sanitize event data to remove circular references
      const sanitizedEventData = sanitizeEventData(event.detail);
      
      const shouldContinue = await dotNetRef.invokeMethodAsync(
        methodName,
        eventName,
        sanitizedEventData
      );
      
      if (shouldContinue === true) {
        this._retriggerEventAction(element, eventName, event.detail);
      }
      // If shouldContinue is false, event remains cancelled (no action needed)
      
    } catch (error) {
      console.error(`Error in cancelable event handler for ${eventName}:`, error);
    }
  }

  /**
   * Re-trigger the web component's action after validation approval
   */
  _retriggerEventAction(element, eventName, eventDetail) {
    // Use setTimeout to avoid any potential timing issues
    setTimeout(() => {
      try {
        if (eventName === 'beforeNavigate' && eventDetail?.direction) {
          if (element.navigate && typeof element.navigate === 'function') {
            element.navigate(eventDetail.direction);
          }
        } else if (eventName === 'beforeSubmit') {
          // For future implementation - manual form submission if needed
        }
        // Add more event types here as needed
      } catch (error) {
        console.error(`Error re-triggering action for ${eventName}:`, error);
      }
    }, 0);
  }

  /**
   * Remove a specific event listener
   */
  removeListener(element, eventName) {
    const key = this._getKey(element, eventName);
    const listenerInfo = this.listeners.get(key);

    if (listenerInfo) {
      listenerInfo.element.removeEventListener(
        listenerInfo.eventName,
        listenerInfo.handler
      );
      this.listeners.delete(key);
    }
  }

  /**
   * Remove all listeners for an element
   */
  removeAllListeners(element) {
    const keysToRemove = [];

    for (const [key, listenerInfo] of this.listeners) {
      if (listenerInfo.element === element) {
        listenerInfo.element.removeEventListener(
          listenerInfo.eventName,
          listenerInfo.handler
        );
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => this.listeners.delete(key));
  }

  /**
   * Generate a unique key for element-event combination
   */
  _getKey(element, eventName) {
    const elementId = element.id || `element_${Date.now()}_${Math.random()}`;
    return `${elementId}_${eventName}`;
  }

  /**
   * Clean up all listeners
   */
  dispose() {
    for (const [key, listenerInfo] of this.listeners) {
      listenerInfo.element.removeEventListener(
        listenerInfo.eventName,
        listenerInfo.handler
      );
    }
    this.listeners.clear();
  }
}

// Initialize immediately when script loads
(function () {
  // Make functions available globally for Blazor interop immediately
  window.PggmComponents = window.PggmComponents || {};

  // Global event listener manager
  const eventManager = new EventListenerManager();

  // Generic event listener functions
  window.PggmComponents.addEventListener = function (
    element,
    eventName,
    dotNetRef,
    methodName,
    useTimeout = true
  ) {
    eventManager.addListener(
      element,
      eventName,
      dotNetRef,
      methodName,
      useTimeout
    );
  };

  window.PggmComponents.addCancelableEventListener = function (
    element,
    eventName,
    dotNetRef,
    methodName
  ) {
    eventManager.addCancelableListener(
      element,
      eventName,
      dotNetRef,
      methodName
    );
  };

  window.PggmComponents.removeEventListener = function (element, eventName) {
    eventManager.removeListener(element, eventName);
  };

  window.PggmComponents.removeAllEventListeners = function (element) {
    eventManager.removeAllListeners(element);
  };

  // Property management
  window.PggmComponents.setProperty = function (element, property, value) {
    if (element && element[property] !== undefined) {
      element[property] = value;
    }
  };

  window.PggmComponents.getProperty = function (element, property) {
    return element ? element[property] : undefined;
  };

  // Method calling
  window.PggmComponents.callElementMethod = function (element, methodName, ...args) {
    if (element && typeof element[methodName] === 'function') {
      return element[methodName](...args);
    } else {
      console.warn(`Method '${methodName}' not found on element or is not a function`, element);
    }
  };

  // Cleanup function
  window.PggmComponents.dispose = function () {
    eventManager.dispose();
  };
})();

/**
 * PGGM Design System initialization and management
 */
class PggmDesignSystem {
  constructor() {
    this.isInitialized = false;
    this.initializationPromise = null;
  }

  /**
   * Initialize the PGGM design system
   */
  async initialize() {
    if (this.isInitialized) {
      return true;
    }

    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    this.initializationPromise = this._performInitialization();
    return this.initializationPromise;
  }

  async _performInitialization() {
    try {
      // Load CSS tokens first
      this._loadCssTokens();

      // Try to load PGGM design system with fallback handling
      this._loadPElementsCore();

      // Load the PGGM bundle
      await this._loadBundle();

      this.isInitialized = true;
      return true;
    } catch (error) {
      console.error("Failed to initialize PGGM Design System:", error);
      throw error;
    }
  }

  /**
   * Load PGGM CSS tokens
   */
  _loadCssTokens() {
    const cssId = "pggm-tokens-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "./_content/Pggm.Components/css/tokens.css";
      document.head.appendChild(link);

      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href = "./_content/Pggm.Components/css/fonts.css";
      document.head.appendChild(fontLink);
    }
  }

  async _loadBundle() {
    if (bundleLoaded) {
      return;
    }

    bundleLoaded = true;

    await this._waitForObjectIsDefined("CustomElement");

    const jsFiles = [
      {
        src: "./_content/Pggm.Components/js/bundle.js",
        id: "pggm-bundle",
        isModule: true,
      },
      {
        src: "./_content/Pggm.Components/js/slider.js",
        id: "pggm-slider",
        isModule: true,
      },
      {
        src: "./_content/Pggm.Components/js/wizard.js",
        id: "pggm-wizard",
        isModule: true,
      },
       {
        src: "./_content/Pggm.Components/js/table.js",
        id: "pggm-table",
        isModule: true,
      },
    ];
    for (const file of jsFiles) {
      await this._loadScript(file.src, file.id, file.isModule);
    }
  }

  _loadScript(src, id, isModule = false) {
    return new Promise((resolve, reject) => {
      if (document.getElementById(id)) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.id = id;
      script.type = isModule ? "module" : "text/javascript";
      document.head.appendChild(script);

      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    });
  }

  _waitForObjectIsDefined(name, timeout = 10000) {
    return new Promise((resolve, reject) => {
      if (window[name] !== undefined) {
        resolve(true);
        return;
      }

      const interval = setInterval(() => {
        if (window[name] !== undefined) {
          clearInterval(interval);
          resolve(true);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        reject(new Error(`Timeout waiting for ${name} to be defined`));
      }, timeout);
    });
  }

  _loadPElementsCore() {
    if (document.getElementById("p-elements-core")) {
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/p-elements-core@1.2.31/dist/p-elements-core-modern.min.js";
    script.id = "p-elements-core";
    script.crossOrigin = "anonymous";
    script.type = "module";
    document.head.appendChild(script);
  }
}

// Create singleton instance
const designSystem = new PggmDesignSystem();

// Make initialize function available globally
window.PggmComponents.initialize = function() {
  return designSystem.initialize();
};

// Make property management functions available globally  
window.PggmComponents.setProperty = function(element, property, value) {
  if (element && element[property] !== undefined) {
    element[property] = value;
  }
};

window.PggmComponents.getProperty = function(element, property) {
  return element ? element[property] : undefined;
};
