using Pggm.Components.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Pggm.Components.Extensions;

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
        services.AddScoped<PggmDesignSystemService>();
        return services;
    }
}
