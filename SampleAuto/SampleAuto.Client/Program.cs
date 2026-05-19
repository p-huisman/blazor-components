using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Pggm.Components;
using Pggm.Components.Extensions;


var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Add PGGM Components
builder.Services.AddPggmComponents();

await builder.Build().RunAsync();
