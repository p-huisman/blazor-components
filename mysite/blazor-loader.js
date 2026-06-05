(function () {
    const blazorBase = "http://localhost:4000/SampleWebComponent/wwwroot/";
    const contentBase = blazorBase + "_content/";
    const frameworkBase = blazorBase + "_framework/";

    // Inject an import map only if none exists yet.
    // Browsers allow at most one import map per document, and it must appear
    // before any ES-module script is parsed. Injecting it here (inside a
    // classic synchronous script) satisfies that timing requirement.

    if (!document.querySelector('script[type="importmap"]')) {
        console.log("No import map found, injecting one for the published origin.");
        const map = document.createElement('script');
        map.type = 'importmap';
        map.textContent = JSON.stringify({
            imports: {
                "/mysite/_content/": contentBase,
                "/mysite/_framework/": frameworkBase
            }
        });
        // Insert immediately before this script tag so it precedes any modules.
        document.currentScript.before(map);
    } else {
        const mapElement = document.querySelector('script[type="importmap"]');
        const currentMap = JSON.parse(mapElement.textContent);
        if (!currentMap.imports["/mysite/_content/"] || !currentMap.imports["/mysite/_framework/"]) {
            currentMap.imports["/mysite/_content/"] = contentBase;
            currentMap.imports["/mysite/_framework/"] = frameworkBase;
            mapElement.textContent = JSON.stringify(currentMap);
        }

    }



    // Inject the PGGM Design System script.
    const pggm = document.createElement('script');
    pggm.src = contentBase + "Pggm.Components/js/pggm-components.js?v1";
    document.head.appendChild(pggm);

    // Inject the Blazor WebAssembly loader with autostart disabled, then start
    // it manually so every boot resource is rewritten to the published origin.
    const blazorScript = document.createElement('script');
    blazorScript.src = frameworkBase + "blazor.webassembly.js";
    blazorScript.setAttribute('autostart', 'false');
    blazorScript.onload = function () {
        Blazor.start({
            loadBootResource: function (type, name) {
                return frameworkBase + name;
            }
        });
    };
    document.head.appendChild(blazorScript);
})();
