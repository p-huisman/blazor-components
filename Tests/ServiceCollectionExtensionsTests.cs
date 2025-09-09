using Microsoft.Extensions.DependencyInjection;
using Microsoft.JSInterop;
using Moq;
using Pggm.Components.Extensions;
using Pggm.Components.Services;
using Xunit;

namespace Pggm.Components.Tests
{
    public class ServiceCollectionExtensionsTests
    {
        [Fact]
        public void AddPggmComponents_RegistersServices()
        {
            // Arrange
            var services = new ServiceCollection();
            // Add required dependencies
            services.AddScoped<IJSRuntime>(_ => new Mock<IJSRuntime>().Object);

            // Act
            var result = services.AddPggmComponents();

            // Assert
            Assert.Same(services, result); // Ensures fluent interface returns the same collection
            
            // Verify the service is registered
            var serviceProvider = services.BuildServiceProvider();
            var designSystemService = serviceProvider.GetService<PggmDesignSystemService>();
            Assert.NotNull(designSystemService);
        }

        [Fact]
        public void AddPggmComponents_RegistersServiceAsScoped()
        {
            // Arrange
            var services = new ServiceCollection();

            // Act
            services.AddPggmComponents();

            // Assert
            var serviceDescriptor = services.FirstOrDefault(s => s.ServiceType == typeof(PggmDesignSystemService));
            Assert.NotNull(serviceDescriptor);
            Assert.Equal(ServiceLifetime.Scoped, serviceDescriptor.Lifetime);
        }

        [Fact]
        public void AddPggmComponents_CanBeCalledMultipleTimes()
        {
            // Arrange
            var services = new ServiceCollection();
            // Add required dependencies
            services.AddScoped<IJSRuntime>(_ => new Mock<IJSRuntime>().Object);

            // Act
            services.AddPggmComponents();
            services.AddPggmComponents(); // Should not cause issues

            // Assert
            var serviceProvider = services.BuildServiceProvider();
            var designSystemService = serviceProvider.GetService<PggmDesignSystemService>();
            Assert.NotNull(designSystemService);
        }
    }
}
