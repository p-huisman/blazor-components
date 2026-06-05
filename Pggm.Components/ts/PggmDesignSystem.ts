import type { ScriptFile } from "./types";

let bundleLoaded = false;

/**
 * The published location of the Pggm.Components static assets, ending with a
 * trailing slash, e.g. "https://host/app/_content/Pggm.Components/".
 *
 * This is resolved from the URL this very script (pggm-components.js) was loaded
 * from, so that all CSS/JS assets are requested from the same origin/path as the
 * loader itself — even when the host page is served from a different origin
 * (cross-origin web component usage). Falls back to a base-relative path when
 * the script URL cannot be determined.
 *
 * NOTE: `document.currentScript` is only valid while the script is being
 * evaluated synchronously at load time, so this is captured at module scope.
 */
const ASSET_BASE: string = (() => {
  const marker = "_content/Pggm.Components/";
  const scriptSrc = (document.currentScript as HTMLScriptElement | null)?.src;
  if (scriptSrc) {
    const index = scriptSrc.indexOf(marker);
    if (index !== -1) {
      return scriptSrc.substring(0, index + marker.length);
    }
  }
  // Fallback: resolve relative to the document base (legacy behavior).
  return new URL(`./${marker}`, document.baseURI).href;
})();

/**
 * Build an absolute URL for a Pggm.Components asset given a path relative to the
 * "_content/Pggm.Components/" root (e.g. "js/card.js" or "css/tokens.css").
 */
function assetUrl(relativePath: string): string {
  return ASSET_BASE + relativePath.replace(/^\/+/, "");
}

const _lazyScripts: Record<string, string> = {
  "pggm-card": "js/card.js",
  "pggm-slider": "js/slider.js",
  "pggm-wizard": "js/wizard.js",
  "pggm-table": "js/table.js",
  "pggm-signature-pad": "js/signature-pad.js",
  "pggm-address-input": "js/address-input.js",
  "pggm-bank-account-input": "js/bank-account-input.js",
  "pggm-dropdown": "js/dropdown.js",
  "pggm-combobox": "js/combobox.js",
  "pggm-drawer": "js/drawer.js",
  "pggm-avatar": "js/avatar.js",
  "pggm-splitter": "js/splitter.js",
  "pggm-scroller": "js/scroller.js",
};

const _scriptPromises = new Map<string, Promise<void>>();

/**
 * PGGM Design System initialization and management
 */
export class PggmDesignSystem {
  isInitialized = false;
  private initializationPromise: Promise<boolean> | null = null;

  /**
   * Initialize the PGGM design system
   */
  async initialize(): Promise<boolean> {
    if (this.isInitialized) {
      return true;
    }

    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    this.initializationPromise = this._performInitialization();
    return this.initializationPromise;
  }

  private async _performInitialization(): Promise<boolean> {
    if (
      document.querySelector(
        'script[data-pggm-components-skip-loading-defaults="true"]',
      )
    ) {
      this.isInitialized = true;
      return true;
    }
    try {
      // Load CSS tokens first
      this._loadCssTokens();

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
  private _loadCssTokens(): void {
    const cssId = "pggm-tokens-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = assetUrl("css/tokens.css");
      document.head.appendChild(link);

      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href = assetUrl("css/fonts.css");
      document.head.appendChild(fontLink);

      const pggmComponentsStyles = document.createElement("link");
      pggmComponentsStyles.rel = "stylesheet";
      pggmComponentsStyles.href = assetUrl("css/pggm-components.css");
      document.head.appendChild(pggmComponentsStyles);
    }
  }

  private async _loadBundle(): Promise<void> {
    if (bundleLoaded) {
      return;
    }

    bundleLoaded = true;

    const jsFiles: ScriptFile[] = [
      {
        src: assetUrl("js/p-elements-core-modern.js"),
        id: "p-elements-core",
        isModule: true,
      },
      {
        src: assetUrl("js/bundle.js"),
        id: "pggm-bundle",
        isModule: true,
      },
    ];

    for (const file of jsFiles) {
      await this._loadScript(file.src, file.id, file.isModule);
    }
  }

  private _loadScript(
    src: string,
    id: string,
    isModule = false,
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
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
      script.onerror = () =>
        reject(new Error(`Failed to load script: ${src}`));
    });
  }

  /**
   * Lazily load a component-specific script by its registered ID.
   * Concurrent calls for the same ID are deduplicated.
   */
  loadScript(id: string): Promise<void> {
    const existing = _scriptPromises.get(id);
    if (existing) {
      return existing;
    }

    const relativeSrc = _lazyScripts[id];
    if (!relativeSrc) {
      return Promise.reject(new Error(`Unknown lazy script id: ${id}`));
    }

    const promise = this._loadScript(assetUrl(relativeSrc), id, true);
    _scriptPromises.set(id, promise);
    return promise;
  }
}
