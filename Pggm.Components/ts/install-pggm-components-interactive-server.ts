/**
 * install-pggm-components-interactive-server.ts
 *
 * Drop this script immediately after pggm-components.js in the host page.
 * It performs two tasks:
 *
 * 1. Calls PggmComponents.initialize() so the CSS tokens and web-component
 *    bundle are loaded synchronously on page load, before Blazor's circuit
 *    is established (important for Blazor Server / interactive-server mode).
 *
 * 2. Wraps PggmComponents.loadScript() with an absolute-path fallback so lazy
 *    component scripts (e.g. pggm-combobox) resolve correctly when the relative
 *    ./_content/ path is ambiguous in interactive-server hosting.
 */

export {};

declare global {
    interface Window {
        PggmComponents?: {
            initialize(): Promise<boolean>;
            loadScript(id: string): Promise<void>;
        };
    }
}

(function install(): void {
    const pggm = globalThis.window?.PggmComponents;

    // 1. Initialize the design system.
    if (pggm && typeof pggm.initialize === 'function') {
        pggm.initialize();
    }

    // 2. Install the loadScript wrapper.
    function tryInstallWrapper(): boolean {
        const components = globalThis.window?.PggmComponents;
        if (!components || typeof components.loadScript !== 'function') {
            return false;
        }

        const orig = components.loadScript.bind(components);

        function fallbackLoad(id: string): Promise<void> {
            const name = id.replace(/^pggm-/, '');
            const src = `/_content/Pggm.Components/js/${name}.js`;

            return new Promise<void>((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }
                const s = document.createElement('script');
                s.src = src;
                s.async = true;
                s.onload = () => { resolve(); };
                s.onerror = (err) => { console.error('PggmComponents: fallback failed', src, err); reject(new Error(`Failed to load ${src}`)); };
                document.head.appendChild(s);
            });
        }

        components.loadScript = function (id: string): Promise<void> {
            try {
                const res = orig(id);
                res.then(
                    () => { /* loaded */ },
                    (err: unknown) => {
                        console.error('PggmComponents.loadScript: load failed (original),', id, err);
                        return fallbackLoad(id);
                    }
                );
                return res;
            } catch (e) {
                console.error('PggmComponents.loadScript: thrown', id, e);
                return fallbackLoad(id);
            }
        };

        return true;
    }

    if (!tryInstallWrapper()) {
        // pggm-components.js not yet evaluated — retry until it is.
        const t = setInterval(() => { if (tryInstallWrapper()) { clearInterval(t); } }, 100);
    }
})();
