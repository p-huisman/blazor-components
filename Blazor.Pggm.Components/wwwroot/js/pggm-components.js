// PGGM Design System JavaScript interop functions
let bundleLoaded = false;

// Initialize immediately when script loads
(function() {
  // Make functions available globally for Blazor interop immediately
  window.PggmComponents = window.PggmComponents || {};
  
  // Alert-specific event handlers
  const alertEventListeners = new Map();

  window.PggmComponents.addCloseAlertListener = function(element, dotNetRef) {
    if (element) {
      const handler = async (event) => {
        await dotNetRef.invokeMethodAsync('HandleCloseAlert');
      };
      
      element.addEventListener('closeAlert', handler);
      alertEventListeners.set(element, handler);
    }
  };

  window.PggmComponents.removeCloseAlertListener = function(element) {
    if (element && alertEventListeners.has(element)) {
      const handler = alertEventListeners.get(element);
      element.removeEventListener('closeAlert', handler);
      alertEventListeners.delete(element);
    }
  };

  // Accordion item toggle event handlers
  const accordionItemToggleListeners = new Map();

  window.PggmComponents.addAccordionItemToggleListener = function(element, dotNetRef) {
    if (element) {
      const handler = async (event) => {
        await dotNetRef.invokeMethodAsync('HandleAccordionItemToggle');
      };
      
      element.addEventListener('accordionItemToggle', handler);
      accordionItemToggleListeners.set(element, handler);
    }
  };

  window.PggmComponents.removeAccordionItemToggleListener = function(element) {
    if (element && accordionItemToggleListeners.has(element)) {
      const handler = accordionItemToggleListeners.get(element);
      element.removeEventListener('accordionItemToggle', handler);
      accordionItemToggleListeners.delete(element);
    }
  };

  // Checkbox change event handlers
  const checkboxChangeListeners = new Map();

  window.PggmComponents.setupCheckboxChangeHandler = function(element, dotNetRef) {
    if (element) {
      const handler = (event) => {
        // Get the checked state from the web component
        const isChecked = element.checked || false;
        
        // Use setTimeout to defer the callback and avoid heap lock issues
        setTimeout(async () => {
          try {
            await dotNetRef.invokeMethodAsync('HandleCheckboxChange', isChecked);
          } catch (error) {
            console.error('Error invoking HandleCheckboxChange:', error);
          }
        }, 0);
      };
      
      // Listen for change events on the checkbox web component
      element.addEventListener('change', handler);
      checkboxChangeListeners.set(element, handler);
    }
  };

  window.PggmComponents.cleanupCheckboxChangeHandler = function(element) {
    if (element && checkboxChangeListeners.has(element)) {
      const handler = checkboxChangeListeners.get(element);
      element.removeEventListener('change', handler);
      checkboxChangeListeners.delete(element);
    }
  };

  // Dialog event handlers
  const dialogEventListeners = new Map();

  window.PggmComponents.setupDialogEventHandlers = function(element, dotNetRef) {
    if (element) {
      const handlers = {
        open: (event) => {
          setTimeout(async () => {
            try {
              await dotNetRef.invokeMethodAsync('HandleDialogOpen');
            } catch (error) {
              console.error('Error invoking HandleDialogOpen:', error);
            }
          }, 0);
        },
        close: (event) => {
          setTimeout(async () => {
            try {
              await dotNetRef.invokeMethodAsync('HandleDialogClose');
            } catch (error) {
              console.error('Error invoking HandleDialogClose:', error);
            }
          }, 0);
        },
        cancel: (event) => {
          setTimeout(async () => {
            try {
              await dotNetRef.invokeMethodAsync('HandleDialogCancel');
            } catch (error) {
              console.error('Error invoking HandleDialogCancel:', error);
            }
          }, 0);
        }
      };
      
      // Listen for dialog events
      element.addEventListener('openDialog', handlers.open);
      element.addEventListener('closeDialog', handlers.close);
      element.addEventListener('cancelDialog', handlers.cancel);
      
      dialogEventListeners.set(element, handlers);
    }
  };

  window.PggmComponents.cleanupDialogEventHandlers = function(element) {
    if (element && dialogEventListeners.has(element)) {
      const handlers = dialogEventListeners.get(element);
      element.removeEventListener('openDialog', handlers.open);
      element.removeEventListener('closeDialog', handlers.close);
      element.removeEventListener('cancelDialog', handlers.cancel);
      dialogEventListeners.delete(element);
    }
  };

  // Helper functions for programmatic dialog control
  window.PggmComponents.openDialog = function(element) {
    if (element && element.open !== undefined) {
      element.open = true;
    }
  };

  window.PggmComponents.closeDialog = function(element) {
    if (element && element.open !== undefined) {
      element.open = false;
    }
  };
})();

// Initialize the PGGM design system
export function initialize() {
  // Load CSS tokens first
  loadCssTokens();

  // Try to load PGGM design system with fallback handling
  loadPElementsCore();

  // Load the PGGM bundle
  loadBundle();

  return true;
}

// Load PGGM CSS tokens
function loadCssTokens() {
  const cssId = "pggm-tokens-css";
  if (!document.getElementById(cssId)) {
    const link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.href =
      "./_content/Blazor.Pggm.Components/css/tokens.css";
    document.head.appendChild(link);

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "./_content/Blazor.Pggm.Components/css/fonts.css";
    document.head.appendChild(fontLink);
  }
}

function loadBundle() {
  if (bundleLoaded) {
    return;
  }
  bundleLoaded = true;
  waitForObjectIsDefined("CustomElement")
    .then(() => {
      const b = document.createElement("script");
      b.src = "./_content/Blazor.Pggm.Components/js/bundle.js";
      b.id = "pggm-bundle";
      b.type = "module";
      document.head.appendChild(b);
    })
    .catch((error) => {
      console.error("Error loading PGGM bundle:", error);
    });
}

function waitForObjectIsDefined(name) {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (window[name] !== undefined) {
        clearInterval(interval);
        resolve(true);
      } else {
        // Still waiting
      }
    }, 100);

    // Timeout after 10 seconds
    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Timeout waiting for ${name} to be defined`));
    }, 10000);
  });
}

function loadPElementsCore() {
  if (document.getElementById("p-elements-core")) {
    return;
  }
  const s = document.createElement("script");
  s.src =
    "https://cdn.jsdelivr.net/npm/p-elements-core@1.2.31/dist/p-elements-core-modern.min.js";
  s.id = "p-elements-core";
  s.crossOrigin = "anonymous";
  s.type = "module";
  document.head.appendChild(s);
}

// Set property on a web component
export function setProperty(element, property, value) {
  if (element && element[property] !== undefined) {
    element[property] = value;
  }
}

// Get property from a web component
export function getProperty(element, property) {
  return element ? element[property] : undefined;
}

// Add event listener to a web component
export function addEventListener(element, eventName, callback) {
  if (element) {
    element.addEventListener(eventName, callback);
  }
}

// Update global object with additional functions
window.PggmComponents.initialize = initialize;
window.PggmComponents.setProperty = setProperty;
window.PggmComponents.getProperty = getProperty;
window.PggmComponents.addEventListener = addEventListener;
