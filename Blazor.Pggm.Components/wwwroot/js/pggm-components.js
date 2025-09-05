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
