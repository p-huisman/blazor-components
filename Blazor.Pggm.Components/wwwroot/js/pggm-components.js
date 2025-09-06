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

  // Backward compatibility - Alert event handlers
  window.PggmComponents.addCloseAlertListener = function (element, dotNetRef) {
    if (element) {
      const handler = async (event) => {
        try {
          await dotNetRef.invokeMethodAsync("HandleCloseAlert");
        } catch (error) {
          console.error("Error invoking HandleCloseAlert:", error);
        }
      };

      element.addEventListener("closeAlert", handler);
      eventManager.listeners.set(eventManager._getKey(element, "closeAlert"), {
        element,
        eventName: "closeAlert",
        handler,
        dotNetRef,
      });
    }
  };

  window.PggmComponents.removeCloseAlertListener = function (element) {
    eventManager.removeListener(element, "closeAlert");
  };

  // Backward compatibility - Accordion event handlers
  window.PggmComponents.addAccordionItemToggleListener = function (
    element,
    dotNetRef
  ) {
    if (element) {
      const handler = async (event) => {
        try {
          await dotNetRef.invokeMethodAsync("HandleAccordionItemToggle");
        } catch (error) {
          console.error("Error invoking HandleAccordionItemToggle:", error);
        }
      };

      element.addEventListener("accordionItemToggle", handler);
      eventManager.listeners.set(
        eventManager._getKey(element, "accordionItemToggle"),
        {
          element,
          eventName: "accordionItemToggle",
          handler,
          dotNetRef,
        }
      );
    }
  };

  window.PggmComponents.removeAccordionItemToggleListener = function (element) {
    eventManager.removeListener(element, "accordionItemToggle");
  };

  // Backward compatibility - Checkbox event handlers
  window.PggmComponents.setupCheckboxChangeHandler = function (
    element,
    dotNetRef
  ) {
    if (element) {
      const handler = (event) => {
        // Get the checked state from the web component
        const isChecked = element.checked || false;

        // Use setTimeout to defer the callback and avoid heap lock issues
        setTimeout(async () => {
          try {
            await dotNetRef.invokeMethodAsync(
              "HandleCheckboxChange",
              isChecked
            );
          } catch (error) {
            console.error("Error invoking HandleCheckboxChange:", error);
          }
        }, 0);
      };

      // Listen for change events on the checkbox web component
      element.addEventListener("change", handler);
      eventManager.listeners.set(eventManager._getKey(element, "change"), {
        element,
        eventName: "change",
        handler,
        dotNetRef,
      });
    }
  };

  window.PggmComponents.cleanupCheckboxChangeHandler = function (element) {
    eventManager.removeListener(element, "change");
  };

  // Backward compatibility - Dialog event handlers
  window.PggmComponents.setupDialogEventHandlers = function (
    element,
    dotNetRef
  ) {
    if (element) {
      const handlers = {
        open: async (event) => {
          setTimeout(async () => {
            try {
              await dotNetRef.invokeMethodAsync("HandleDialogOpen");
            } catch (error) {
              console.error("Error invoking HandleDialogOpen:", error);
            }
          }, 0);
        },
        close: async (event) => {
          setTimeout(async () => {
            try {
              await dotNetRef.invokeMethodAsync("HandleDialogClose");
            } catch (error) {
              console.error("Error invoking HandleDialogClose:", error);
            }
          }, 0);
        },
        cancel: async (event) => {
          setTimeout(async () => {
            try {
              await dotNetRef.invokeMethodAsync("HandleDialogCancel");
            } catch (error) {
              console.error("Error invoking HandleDialogCancel:", error);
            }
          }, 0);
        },
      };

      // Listen for dialog events
      element.addEventListener("openDialog", handlers.open);
      element.addEventListener("closeDialog", handlers.close);
      element.addEventListener("cancelDialog", handlers.cancel);

      // Store handlers in event manager
      eventManager.listeners.set(eventManager._getKey(element, "openDialog"), {
        element,
        eventName: "openDialog",
        handler: handlers.open,
        dotNetRef,
      });
      eventManager.listeners.set(eventManager._getKey(element, "closeDialog"), {
        element,
        eventName: "closeDialog",
        handler: handlers.close,
        dotNetRef,
      });
      eventManager.listeners.set(
        eventManager._getKey(element, "cancelDialog"),
        {
          element,
          eventName: "cancelDialog",
          handler: handlers.cancel,
          dotNetRef,
        }
      );
    }
  };

  window.PggmComponents.cleanupDialogEventHandlers = function (element) {
    eventManager.removeListener(element, "openDialog");
    eventManager.removeListener(element, "closeDialog");
    eventManager.removeListener(element, "cancelDialog");
  };

  // Helper functions for programmatic dialog control
  window.PggmComponents.openDialog = function (element) {
    if (element && element.open !== undefined) {
      element.open = true;
    }
  };

  window.PggmComponents.closeDialog = function (element) {
    if (element && element.open !== undefined) {
      element.open = false;
    }
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
