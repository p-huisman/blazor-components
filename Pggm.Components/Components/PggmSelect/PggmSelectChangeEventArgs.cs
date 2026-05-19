namespace Pggm.Components;

/// <summary>Provides data for the <see cref="PggmSelect{TOption}.OnChange"/> event.</summary>
public sealed class PggmSelectChangeEventArgs<TOption>
{
    /// <summary>The new string value. Populated for single selection.</summary>
    public string? Value { get; init; }

    /// <summary>The new string values. Populated for multiple selection.</summary>
    public string[] Values { get; init; } = [];

    /// <summary>The newly selected item object. Populated for single selection when <c>Items</c> and <c>OptionValue</c> are set.</summary>
    public TOption? Item { get; init; }

    /// <summary>The newly selected item objects. Populated for multiple selection when <c>Items</c> is set.</summary>
    public IEnumerable<TOption> Items { get; init; } = [];
}
