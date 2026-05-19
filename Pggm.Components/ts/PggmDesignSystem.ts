import type { ScriptFile } from "./types";

let bundleLoaded = false;

const _lazyScripts: Record<string, string> = {
  "pggm-card": "./_content/Pggm.Components/js/card.js",
  "pggm-slider": "./_content/Pggm.Components/js/slider.js",
  "pggm-wizard": "./_content/Pggm.Components/js/wizard.js",
  "pggm-table": "./_content/Pggm.Components/js/table.js",
  "pggm-signature-pad": "./_content/Pggm.Components/js/signature-pad.js",
  "pggm-address-input": "./_content/Pggm.Components/js/address-input.js",
  "pggm-bank-account-input": "./_content/Pggm.Components/js/bank-account-input.js",
  "pggm-dropdown": "./_content/Pggm.Components/js/dropdown.js",
  "pggm-combobox": "./_content/Pggm.Components/js/combobox.js",
  "pggm-drawer": "./_content/Pggm.Components/js/drawer.js",
  "pggm-avatar": "./_content/Pggm.Components/js/avatar.js",
  "pggm-splitter": "./_content/Pggm.Components/js/splitter.js",
  "pggm-scroller": "./_content/Pggm.Components/js/scroller.js", 
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
      link.href = "./_content/Pggm.Components/css/tokens.css";
      document.head.appendChild(link);

      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href = "./_content/Pggm.Components/css/fonts.css";
      document.head.appendChild(fontLink);

      const pggmComponentsStyles = document.createElement("link");
      pggmComponentsStyles.rel = "stylesheet";
      pggmComponentsStyles.href =
        "./_content/Pggm.Components/css/pggm-components.css";
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
        src: "./_content/Pggm.Components/js/p-elements-core-modern.js",
        id: "p-elements-core",
        isModule: true,
      },
      {
        src: "./_content/Pggm.Components/js/bundle.js",
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

    const src = _lazyScripts[id];
    if (!src) {
      return Promise.reject(new Error(`Unknown lazy script id: ${id}`));
    }

    const promise = this._loadScript(src, id, true);
    _scriptPromises.set(id, promise);
    return promise;
  }
}
