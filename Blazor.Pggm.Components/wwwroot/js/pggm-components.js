// PGGM Design System JavaScript interop functions
let bundleLoaded = false;

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
          // Pass the event name as the first parameter and event details as the second
          await dotNetRef.invokeMethodAsync(
            methodName,
            eventName,
            event.detail || null
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
      link.href = "./_content/Blazor.Pggm.Components/css/tokens.css";
      document.head.appendChild(link);

      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href = "./_content/Blazor.Pggm.Components/css/fonts.css";
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
        src: "./_content/Blazor.Pggm.Components/js/bundle.js",
        id: "pggm-bundle",
        isModule: true,
      },
      {
        src: "./_content/Blazor.Pggm.Components/js/slider.js",
        id: "pggm-slider",
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

// Export functions for module usage
export function initialize() {
  return designSystem.initialize();
}

export function setProperty(element, property, value) {
  if (element && element[property] !== undefined) {
    element[property] = value;
  }
}

export function getProperty(element, property) {
  return element ? element[property] : undefined;
}

// Update global object with functions
window.PggmComponents.initialize = initialize;
