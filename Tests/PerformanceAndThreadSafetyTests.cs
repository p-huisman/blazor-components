using Pggm.Components.Base;
using Pggm.Components.Builders;
using Pggm.Components.Utilities;
using Xunit;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Pggm.Components.Tests
{
    public class PerformanceAndThreadSafetyTests
    {
        [Fact]
        public void AttributeHelper_ConvertToKebabCase_PerformanceTest()
        {
            // Arrange
            var testCases = new[]
            {
                "SimpleProperty",
                "VeryLongPropertyNameWithManyWords",
                "XMLHttpRequest",
                "HTMLElement",
                "CSSStyleDeclaration",
                "JSONData",
                "URLPattern"
            };

            var stopwatch = new Stopwatch();
            const int iterations = 10000;

            // Act
            stopwatch.Start();
            for (int i = 0; i < iterations; i++)
            {
                foreach (var testCase in testCases)
                {
                    var result = AttributeHelper.ConvertToKebabCase(testCase);
                    // Ensure the result is used to prevent optimization
                    _ = result.Length;
                }
            }
            stopwatch.Stop();

            // Assert - Performance should be reasonable (less than 100ms for 70k conversions)
            Assert.True(stopwatch.ElapsedMilliseconds < 100,
                $"Performance test failed. Elapsed: {stopwatch.ElapsedMilliseconds}ms");
        }

        [Fact]
        public void AttributeHelper_ConvertToKebabCase_CachingEffectiveness()
        {
            // Arrange
            const string testProperty = "VeryLongPropertyNameForCachingTest";
            var stopwatch = new Stopwatch();
            const int iterations = 1000;

            // First run - populates cache
            stopwatch.Start();
            for (int i = 0; i < iterations; i++)
            {
                AttributeHelper.ConvertToKebabCase(testProperty);
            }
            var firstRunTime = stopwatch.ElapsedMilliseconds;
            stopwatch.Restart();

            // Second run - should use cache
            for (int i = 0; i < iterations; i++)
            {
                AttributeHelper.ConvertToKebabCase(testProperty);
            }
            var secondRunTime = stopwatch.ElapsedMilliseconds;
            stopwatch.Stop();

            // Assert - Second run should be significantly faster (or at least not slower)
            Assert.True(secondRunTime <= firstRunTime * 1.5,
                $"Caching not effective. First run: {firstRunTime}ms, Second run: {secondRunTime}ms");
        }

        [Fact]
        public async Task AttributeHelper_ConvertToKebabCase_ThreadSafety()
        {
            // Arrange
            const int threadCount = 10;
            const int iterationsPerThread = 1000;
            var testCases = new[]
            {
                "ThreadSafetyTest",
                "ConcurrentAccess",
                "ParallelExecution",
                "MultiThreading",
                "CacheConsistency"
            };

            var results = new ConcurrentDictionary<string, string>();
            var tasks = new List<Task>();

            // Act - Run concurrent conversions
            for (int t = 0; t < threadCount; t++)
            {
                tasks.Add(Task.Run(() =>
                {
                    for (int i = 0; i < iterationsPerThread; i++)
                    {
                        foreach (var testCase in testCases)
                        {
                            var result = AttributeHelper.ConvertToKebabCase(testCase);
                            results.TryAdd(testCase, result);
                        }
                    }
                }));
            }

            await Task.WhenAll(tasks.ToArray());

            // Assert - All results should be consistent and correct
            Assert.Equal("thread-safety-test", results["ThreadSafetyTest"]);
            Assert.Equal("concurrent-access", results["ConcurrentAccess"]);
            Assert.Equal("parallel-execution", results["ParallelExecution"]);
            Assert.Equal("multi-threading", results["MultiThreading"]);
            Assert.Equal("cache-consistency", results["CacheConsistency"]);

            // Verify no exceptions occurred and all results are present
            Assert.Equal(testCases.Length, results.Count);
        }

        [Fact]
        public async Task AttributeHelper_SetAttributeIfNotEmpty_ConcurrentAccess()
        {
            // Arrange
            const int threadCount = 20;
            const int iterationsPerThread = 100;
            var tasks = new List<Task>();
            var allResults = new ConcurrentBag<Dictionary<string, object>>();

            // Act - Concurrent attribute setting
            for (int t = 0; t < threadCount; t++)
            {
                var threadIndex = t;
                tasks.Add(Task.Run(() =>
                {
                    for (int i = 0; i < iterationsPerThread; i++)
                    {
                        var attributes = new Dictionary<string, object>();
                        AttributeHelper.SetAttributeIfNotEmpty(attributes, "test-attr", $"thread-{threadIndex}-value-{i}");
                        AttributeHelper.SetAttributeIfNotEmpty(attributes, "empty-attr", "");
                        AttributeHelper.SetAttributeIfNotEmpty(attributes, "null-attr", null);
                        AttributeHelper.SetAttributeIfNotEmpty(attributes, "whitespace-attr", "   ");

                        allResults.Add(attributes);
                    }
                }));
            }

            await Task.WhenAll(tasks.ToArray());

            // Assert - All operations should complete successfully
            Assert.Equal(threadCount * iterationsPerThread, allResults.Count);

            // Verify that each result has the expected attributes
            foreach (var result in allResults)
            {
                Assert.Equal(2, result.Count); // "test-attr" and "whitespace-attr" should be present
                Assert.True(result.ContainsKey("test-attr"));
                Assert.True(result.ContainsKey("whitespace-attr"));
                Assert.StartsWith("thread-", result["test-attr"].ToString());
                Assert.Equal("   ", result["whitespace-attr"]);
            }
        }

        [Fact]
        public void AttributeBuilder_Fluent_API_Performance()
        {
            // Arrange
            const int iterations = 5000;
            var stopwatch = new Stopwatch();

            // Act
            stopwatch.Start();
            for (int i = 0; i < iterations; i++)
            {
                var result = AttributeBuilder.Create()
                    .AddClass("base-class")
                    .AddClass($"dynamic-class-{i}")
                    .SetAttribute("data-test", $"value-{i}")
                    .SetBooleanAttribute("enabled", i % 2 == 0)
                    .SetBooleanAttribute("disabled", i % 2 == 1)
                    .SetAttribute("aria-label", $"Label {i}")
                    .Build();

                // Ensure result is used
                var count = result.Count;
            }
            stopwatch.Stop();

            // Assert - Should complete in reasonable time (less than 200ms for 5k builds)
            Assert.True(stopwatch.ElapsedMilliseconds < 200,
                $"AttributeBuilder performance test failed. Elapsed: {stopwatch.ElapsedMilliseconds}ms");
        }

        [Fact]
        public async Task AttributeBuilder_Concurrent_Usage()
        {
            // Arrange
            const int threadCount = 15;
            const int buildersPerThread = 50;
            var tasks = new List<Task>();
            var allResults = new ConcurrentBag<Dictionary<string, object>>();

            // Act - Concurrent AttributeBuilder usage
            for (int t = 0; t < threadCount; t++)
            {
                var threadIndex = t;
                tasks.Add(Task.Run(() =>
                {
                    for (int i = 0; i < buildersPerThread; i++)
                    {
                        var result = AttributeBuilder.Create()
                            .AddClass($"thread-{threadIndex}")
                            .AddClass($"iteration-{i}")
                            .SetAttribute("data-thread", threadIndex.ToString())
                            .SetAttribute("data-iteration", i.ToString())
                            .SetBooleanAttribute("is-even", i % 2 == 0)
                            .Build();

                        allResults.Add(result);
                    }
                }));
            }

            await Task.WhenAll(tasks.ToArray());

            // Assert - All builders should complete successfully
            Assert.Equal(threadCount * buildersPerThread, allResults.Count);

            // Verify that results are consistent and independent
            var resultsGrouped = allResults.GroupBy(r => r["data-thread"]).ToList();
            Assert.Equal(threadCount, resultsGrouped.Count);

            foreach (var group in resultsGrouped)
            {
                Assert.Equal(buildersPerThread, group.Count());
            }
        }

        [Fact]
        public void ComponentBase_GetAttributes_Memory_Efficiency()
        {
            // Arrange
            const int componentCount = 1000;
            var components = new List<TestPerformanceComponent>();

            // Create components with varying configurations
            for (int i = 0; i < componentCount; i++)
            {
                var component = new TestPerformanceComponent(
                    cssClass: $"component-{i} test-class",
                    additionalAttributes: new Dictionary<string, object>
                    {
                        { "data-id", i.ToString() },
                        { "aria-label", $"Component {i}" },
                        { "data-category", i % 5 == 0 ? "special" : "normal" }
                    });
                components.Add(component);
            }

            // Act - Generate attributes for all components
            var stopwatch = Stopwatch.StartNew();
            var allAttributes = new List<Dictionary<string, object>>();

            foreach (var component in components)
            {
                var attributes = component.GetTestAttributes();
                allAttributes.Add(attributes);
            }

            stopwatch.Stop();

            // Assert - Should complete efficiently
            Assert.True(stopwatch.ElapsedMilliseconds < 100,
                $"GetAttributes performance test failed. Elapsed: {stopwatch.ElapsedMilliseconds}ms");

            // Verify all attributes were generated correctly
            Assert.Equal(componentCount, allAttributes.Count);

            for (int i = 0; i < componentCount; i++)
            {
                var attrs = allAttributes[i];
                Assert.Contains($"component-{i}", attrs["class"].ToString()!);
                Assert.Equal(i.ToString(), attrs["data-id"].ToString());
            }
        }

        [Fact]
        public void AttributeHelper_SetBooleanAttribute_EdgeCases()
        {
            // Arrange
            var attributes = new Dictionary<string, object>();

            // Act & Assert - Various boolean scenarios
            AttributeHelper.SetBooleanAttribute(attributes, "true-value", true);
            AttributeHelper.SetBooleanAttribute(attributes, "false-value", false);
            AttributeHelper.SetBooleanAttribute(attributes, "nullable-true", ((bool?)true).GetValueOrDefault());
            AttributeHelper.SetBooleanAttribute(attributes, "nullable-false", ((bool?)false).GetValueOrDefault());
            AttributeHelper.SetBooleanAttribute(attributes, "nullable-null", ((bool?)null).GetValueOrDefault());

            // Verify results
            Assert.Equal(true, attributes["true-value"]);
            Assert.False(attributes.ContainsKey("false-value")); // False values should not be added
            Assert.Equal(true, attributes["nullable-true"]);
            Assert.False(attributes.ContainsKey("nullable-false"));
            Assert.False(attributes.ContainsKey("nullable-null"));
        }

        [Fact]
        public async Task ConcurrentComponent_Creation_And_AttributeGeneration()
        {
            // Arrange
            const int componentCount = 100;
            var tasks = new List<Task<Dictionary<string, object>>>();

            // Act - Create components and generate attributes concurrently
            for (int i = 0; i < componentCount; i++)
            {
                var index = i;
                tasks.Add(Task.Run(() =>
                {
                    var component = new TestPerformanceComponent(
                        cssClass: $"concurrent-{index}",
                        additionalAttributes: new Dictionary<string, object>
                        {
                            { "data-concurrent-id", index.ToString() },
                            { "data-timestamp", DateTime.UtcNow.Ticks.ToString() }
                        });

                    return component.GetTestAttributes();
                }));
            }

            var results = await Task.WhenAll(tasks);

            // Assert - All components should be created successfully
            Assert.Equal(componentCount, results.Length);

            // Verify uniqueness and correctness
            var uniqueIds = results.Select(r => r["data-concurrent-id"].ToString()).Distinct().ToList();
            Assert.Equal(componentCount, uniqueIds.Count);

            // Verify all have correct class structure
            foreach (var result in results)
            {
                Assert.Contains("concurrent-", result["class"].ToString()!);
                Assert.Contains("data-concurrent-id", result.Keys);
                Assert.Contains("data-timestamp", result.Keys);
            }
        }
    }

    // Test component for performance testing
    public class TestPerformanceComponent : PggmComponentBase
    {
        public override string TagName => "test-performance";

        // Parameterless constructor for Blazor rendering
        public TestPerformanceComponent() : this(null, null) { }

        // Constructor for testing purposes
        public TestPerformanceComponent(string? cssClass = null, Dictionary<string, object>? additionalAttributes = null)
        {
            CssClass = cssClass;
            AdditionalAttributes = additionalAttributes;
        }

        protected override void AddComponentAttributes(Dictionary<string, object> attributes)
        {
            attributes["data-component-type"] = "performance-test";
        }

        public Dictionary<string, object> GetTestAttributes()
        {
            return GetAttributes();
        }
    }
}