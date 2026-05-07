using Pggm.Components.DataAdapters;

#pragma warning disable IDE0130 // Namespace does not match folder structure
namespace Microsoft.Extensions.DependencyInjection;
#pragma warning restore IDE0130 // Namespace does not match folder structure

/// <summary>
/// Provides extension methods to register a <see cref="IPggmTableDataAdapter{TItem}"/>
/// on a <see cref="IServiceCollection"/>.
/// </summary>
public static class PggmTableAdapterServiceCollectionExtensions
{
    /// <summary>
    /// Registers an HTTP-based implementation of <see cref="IPggmTableDataAdapter{TItem}"/>
    /// that fetches paginated data from a remote REST endpoint.
    /// </summary>
    /// <typeparam name="TItem">The type of data represented by each row in the table.</typeparam>
    /// <param name="services">The <see cref="IServiceCollection"/>.</param>
    /// <param name="configure">
    /// A delegate to configure <see cref="HttpClientPggmTableDataAdapterOptions{TItem}"/>.
    /// At minimum, set <see cref="HttpClientPggmTableDataAdapterOptions{TItem}.BaseUrl"/>.
    /// </param>
    /// <returns>The <see cref="IServiceCollection"/> for chaining.</returns>
    /// <remarks>
    /// Before calling this method, ensure that a named or typed <see cref="System.Net.Http.HttpClient"/>
    /// is registered in the service collection (e.g. via <c>builder.Services.AddHttpClient()</c> from
    /// the <c>Microsoft.Extensions.Http</c> package).
    /// </remarks>
    /// <example>
    /// <code>
    /// // In Program.cs
    /// builder.Services.AddHttpClient();   // registers IHttpClientFactory / HttpClient
    /// builder.Services.AddPggmTableHttpAdapter&lt;EmployeeDto&gt;(options =>
    /// {
    ///     options.BaseUrl = "https://api.example.com/employees";
    /// });
    /// </code>
    /// Then inject <c>IPggmTableDataAdapter&lt;EmployeeDto&gt;</c> into your component and call
    /// <c>GetItemsAsync</c> to load data into the table's <c>Data</c> parameter.
    /// </example>
    public static IServiceCollection AddPggmTableHttpAdapter<TItem>(
        this IServiceCollection services,
        Action<HttpClientPggmTableDataAdapterOptions<TItem>> configure)
    {
        services.Configure(configure);
        services.AddScoped<IPggmTableDataAdapter<TItem>, HttpClientPggmTableDataAdapter<TItem>>();
        return services;
    }
}
