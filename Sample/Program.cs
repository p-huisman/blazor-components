using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Options;

using Pggm.Components.Extensions;
using Pggm.Components.Sample;
using Pggm.Components.Sample.Configuration;
using Pggm.Components.Sample.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// Configure settings from appsettings.json
builder.Services.Configure<ApiSettings>(options =>
{
    builder.Configuration.GetSection("ApiSettings").Bind(options);
});

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

// Configure the API client with settings from appsettings.json
builder.Services.AddScoped<Pggm.Components.Sample.Services.Client>(sp =>
{
    var apiSettings = sp.GetRequiredService<IOptions<ApiSettings>>().Value;
    var httpClient = sp.GetRequiredService<HttpClient>();
    var client = new Pggm.Components.Sample.Services.Client(httpClient);

    // Override the hardcoded BaseUrl with the configured one
    client.BaseUrl = apiSettings.FactuurApi.BaseUrl;

    // Enable reading response as string for debugging
    client.ReadResponseAsString = true;

    return client;
});

// Add PGGM Components
builder.Services.AddPggmComponents();

// Register NavMenuService for component use
builder.Services.AddScoped<NavMenuService>();

// Register OpenFDA service with its own HttpClient (external base address)
builder.Services.AddScoped<Pggm.Components.Sample.Services.OpenFdaService>(_ =>
    new Pggm.Components.Sample.Services.OpenFdaService(new HttpClient()));

await builder.Build().RunAsync();
