using Microsoft.AspNetCore.Components;

using Pggm.Components.Base;

namespace Pggm.Components;

public partial class PggmErrorMessage : PggmComponentBase
{
    public override string TagName => "pggm-error-message";

    /// <summary>
    /// The ID of the form element this error message is associated with
    /// </summary>
    [Parameter, EditorRequired] public string? For { get; set; }

    /// <summary>
    /// Space-separated list of validity states (badInput, customError, patternMismatch, etc.)
    /// </summary>
    [Parameter] public string? Validity { get; set; }

    /// <summary>
    /// Validity state constants for better IntelliSense
    /// </summary>
    public static class ValidityStates
    {
        public const string BadInput = "badInput";
        public const string CustomError = "customError";
        public const string PatternMismatch = "patternMismatch";
        public const string RangeOverflow = "rangeOverflow";
        public const string RangeUnderflow = "rangeUnderflow";
        public const string StepMismatch = "stepMismatch";
        public const string TooLong = "tooLong";
        public const string TooShort = "tooShort";
        public const string TypeMismatch = "typeMismatch";
        public const string ValueMissing = "valueMissing";
    }
}
