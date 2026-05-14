using System;

namespace Pggm.Components.Components.PggmDataGrid
{
    internal static class FilterOperators
    {
        // String ops
        public const string Contains = "contains";
        public const string EqualsOperator = "equals";
        public const string StartsWith = "startsWith";
        public const string EndsWith = "endsWith";

        // Number ops
        public const string NotEquals = "notEquals";
        public const string GreaterThan = "greaterThan";
        public const string GreaterThanOrEqual = "greaterThanOrEqual";
        public const string LessThan = "lessThan";
        public const string LessThanOrEqual = "lessThanOrEqual";
        public const string Between = "between";

        // Date ops
        public const string Before = "before";
        public const string After = "after";
    }
}
