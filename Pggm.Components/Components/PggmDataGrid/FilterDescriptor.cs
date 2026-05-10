using System;

namespace Pggm.Components.Components.PggmDataGrid
{
    public enum FilterType
    {
        String,
        Number,
        Date
    }

    public class FilterDescriptor
    {
        // Field identifier (matches Column.Field or column Title if Field is null)
        public string? Field { get; set; }

        // Type of the column being filtered
        public FilterType FilterType { get; set; } = FilterType.String;

        // Operator:
        //   String:  contains | equals | startsWith | endsWith
        //   Number:  equals | notEquals | greaterThan | lessThan | greaterThanOrEqual | lessThanOrEqual | between
        //   Date:    equals | before | after | between
        public string? Operator { get; set; }

        // Single value (string representation). For between, use Values[0]/Values[1]
        public string? Value { get; set; }

        // Two-value range (used by 'between' operator)
        public string[]? Values { get; set; }

        public bool CaseSensitive { get; set; }
    }
}
