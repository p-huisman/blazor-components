using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Pggm.Components.Extensions;
using SampleWebComponent.Components;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Add PGGM Components
builder.Services.AddPggmComponents();

// Register Blazor components as custom HTML elements (web components).
// These can be used in any HTML page as <pggm-sample-form>, <pggm-sample-counter>, etc.
builder.RootComponents.RegisterCustomElement<SampleForm>("pggm-sample-form");
builder.RootComponents.RegisterCustomElement<SampleCounter>("pggm-sample-counter");

await builder.Build().RunAsync();
