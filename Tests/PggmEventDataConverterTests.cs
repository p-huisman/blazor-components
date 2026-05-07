using System;
using System.Text.Json;

using Pggm.Components.Base;

using Xunit;

namespace Pggm.Components.Tests;

public class PggmEventDataConverterTests
{
    // -----------------------------------------------------------------------
    // Null / default input
    // -----------------------------------------------------------------------

    [Fact]
    public void DeserializeEventData_NullInput_ReturnsDefaultInstance()
    {
        var result = PggmEventDataConverter.DeserializeEventData<SimpleData>(null);

        Assert.NotNull(result);
        Assert.Null(result.Name);
        Assert.Equal(0, result.Value);
    }

    // -----------------------------------------------------------------------
    // Direct cast
    // -----------------------------------------------------------------------

    [Fact]
    public void DeserializeEventData_DirectCast_ReturnsSameInstance()
    {
        var original = new SimpleData { Name = "Alice", Value = 7 };
        var result = PggmEventDataConverter.DeserializeEventData<SimpleData>(original);

        Assert.NotNull(result);
        Assert.Equal("Alice", result.Name);
        Assert.Equal(7, result.Value);
    }

    // -----------------------------------------------------------------------
    // JsonElement input
    // -----------------------------------------------------------------------

    [Fact]
    public void DeserializeEventData_JsonElement_MapsProperties()
    {
        var json = """{"name":"Bob","value":42}""";
        var element = JsonDocument.Parse(json).RootElement;

        var result = PggmEventDataConverter.DeserializeEventData<SimpleData>(element);

        Assert.NotNull(result);
        Assert.Equal("Bob", result.Name);
        Assert.Equal(42, result.Value);
    }

    [Fact]
    public void DeserializeEventData_JsonElement_CaseInsensitive()
    {
        var json = """{"NAME":"Charlie","VALUE":99}""";
        var element = JsonDocument.Parse(json).RootElement;

        var result = PggmEventDataConverter.DeserializeEventData<SimpleData>(element);

        Assert.NotNull(result);
        Assert.Equal("Charlie", result.Name);
        Assert.Equal(99, result.Value);
    }

    [Fact]
    public void DeserializeEventData_JsonElement_UnknownProperties_IgnoredGracefully()
    {
        var json = """{"name":"Carol","value":5,"unknownProp":"ignored"}""";
        var element = JsonDocument.Parse(json).RootElement;

        var result = PggmEventDataConverter.DeserializeEventData<SimpleData>(element);

        Assert.NotNull(result);
        Assert.Equal("Carol", result.Name);
        Assert.Equal(5, result.Value);
    }

    [Fact]
    public void DeserializeEventData_MalformedInput_ReturnsDefaultInstance()
    {
        // Anonymous object with no matching props → falls through to safe-convert, still returns a valid instance
        var result = PggmEventDataConverter.DeserializeEventData<SimpleData>(new { Foo = "bar" });

        Assert.NotNull(result);
    }

    // -----------------------------------------------------------------------
    // Anonymous object (safe-convert path)
    // -----------------------------------------------------------------------

    [Fact]
    public void DeserializeEventData_AnonymousObjectWithMatchingProps_CopiesValues()
    {
        var anon = new { Name = "Dave", Value = 12 };
        var result = PggmEventDataConverter.DeserializeEventData<SimpleData>(anon);

        Assert.NotNull(result);
        Assert.Equal("Dave", result.Name);
        Assert.Equal(12, result.Value);
    }

    [Fact]
    public void DeserializeEventData_AnonymousObjectNoMatchingProps_ReturnsDefaults()
    {
        var anon = new { Something = "else" };
        var result = PggmEventDataConverter.DeserializeEventData<SimpleData>(anon);

        Assert.NotNull(result);
        Assert.Null(result.Name);
        Assert.Equal(0, result.Value);
    }
}

/// <summary>Minimal DTO used by converter tests.</summary>
public class SimpleData
{
    public string? Name { get; set; }
    public int Value { get; set; }
}
