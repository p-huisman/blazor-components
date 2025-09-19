using Pggm.Components.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;

namespace Pggm.Components.Extensions;

/// <summary>
/// Configuration options for PGGM components
/// </summary>
public class PggmComponentsOptions
{
    /// <summary>
    /// Enable development mode with additional logging and validation
    /// </summary>
    public bool EnableDevelopmentMode { get; set; } = false;

    /// <summary>
    /// Enable component performance metrics
    /// </summary>
    public bool EnablePerformanceMetrics { get; set; } = false;

    /// <summary>
    /// Custom CSS bundle path (optional)
    /// </summary>
    public string? CustomCssBundlePath { get; set; }

    /// <summary>
    /// Custom JavaScript bundle path (optional)
    /// </summary>
    public string? CustomJsBundlePath { get; set; }
}

/// <summary>
/// Extension methods for registering PGGM components services
/// </summary>
public static class ServiceCollectionExtensions
{
    /// <summary>
    /// Adds PGGM Design System services to the service collection
    /// </summary>
    /// <param name="services">The service collection</param>
    /// <returns>The service collection for chaining</returns>
    public static IServiceCollection AddPggmComponents(this IServiceCollection services)
    {
        return AddPggmComponents(services, _ => { });
    }

    /// <summary>
    /// Adds PGGM Design System services to the service collection with configuration
    /// </summary>
    /// <param name="services">The service collection</param>
    /// <param name="configureOptions">Configuration options</param>
    /// <returns>The service collection for chaining</returns>
    public static IServiceCollection AddPggmComponents(this IServiceCollection services, Action<PggmComponentsOptions> configureOptions)
    {
        var options = new PggmComponentsOptions();
        configureOptions(options);

        services.TryAddSingleton(options);
        services.TryAddScoped<PggmDesignSystemService>();

        return services;
    }
}
