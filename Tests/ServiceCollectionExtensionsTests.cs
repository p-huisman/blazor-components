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
            var mockJSRuntime = new Mock<IJSRuntime>();
            services.AddSingleton(mockJSRuntime.Object);
            services.AddLogging();

            // Act
            var result = services.AddPggmComponents();

            // Assert
            Assert.Same(services, result);
            
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
        public void AddPggmComponents_WithConfiguration_RegistersOptions()
        {
            // Arrange
            var services = new ServiceCollection();

            // Act
            services.AddPggmComponents(options =>
            {
                options.EnableDevelopmentMode = true;
                options.EnablePerformanceMetrics = true;
                options.CustomCssBundlePath = "/custom/css/path";
                options.CustomJsBundlePath = "/custom/js/path";
            });

            // Assert
            var serviceProvider = services.BuildServiceProvider();
            var options = serviceProvider.GetService<PggmComponentsOptions>();
            
            Assert.NotNull(options);
            Assert.True(options.EnableDevelopmentMode);
            Assert.True(options.EnablePerformanceMetrics);
            Assert.Equal("/custom/css/path", options.CustomCssBundlePath);
            Assert.Equal("/custom/js/path", options.CustomJsBundlePath);
        }

        [Fact]
        public void AddPggmComponents_WithoutConfiguration_UsesDefaultOptions()
        {
            // Arrange
            var services = new ServiceCollection();

            // Act
            services.AddPggmComponents();

            // Assert
            var serviceProvider = services.BuildServiceProvider();
            var options = serviceProvider.GetService<PggmComponentsOptions>();
            
            Assert.NotNull(options);
            Assert.False(options.EnableDevelopmentMode);
            Assert.False(options.EnablePerformanceMetrics);
            Assert.Null(options.CustomCssBundlePath);
            Assert.Null(options.CustomJsBundlePath);
        }

        [Fact]
        public void AddPggmComponents_OptionsRegisteredAsSingleton()
        {
            // Arrange
            var services = new ServiceCollection();

            // Act
            services.AddPggmComponents();

            // Assert
            var serviceDescriptor = services.FirstOrDefault(s => s.ServiceType == typeof(PggmComponentsOptions));
            Assert.NotNull(serviceDescriptor);
            Assert.Equal(ServiceLifetime.Singleton, serviceDescriptor.Lifetime);
        }

        [Fact]
        public void AddPggmComponents_CanBeCalledMultipleTimes()
        {
            // Arrange
            var services = new ServiceCollection();
            
            // Add required dependencies
            var mockJSRuntime = new Mock<IJSRuntime>();
            services.AddSingleton(mockJSRuntime.Object);
            services.AddLogging();

            // Act & Assert - Should not throw
            services.AddPggmComponents();
            services.AddPggmComponents();

            // Verify services are still registered correctly
            var serviceProvider = services.BuildServiceProvider();
            var designSystemService = serviceProvider.GetService<PggmDesignSystemService>();
            Assert.NotNull(designSystemService);
        }

        [Theory]
        [InlineData(true, true)]
        [InlineData(true, false)]
        [InlineData(false, true)]
        [InlineData(false, false)]
        public void AddPggmComponents_WithBooleanOptions_ConfiguresCorrectly(bool developmentMode, bool performanceMetrics)
        {
            // Arrange
            var services = new ServiceCollection();

            // Act
            services.AddPggmComponents(options =>
            {
                options.EnableDevelopmentMode = developmentMode;
                options.EnablePerformanceMetrics = performanceMetrics;
            });

            // Assert
            var serviceProvider = services.BuildServiceProvider();
            var options = serviceProvider.GetService<PggmComponentsOptions>();
            
            Assert.NotNull(options);
            Assert.Equal(developmentMode, options.EnableDevelopmentMode);
            Assert.Equal(performanceMetrics, options.EnablePerformanceMetrics);
        }
    }
}
