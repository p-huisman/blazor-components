using System.ComponentModel.DataAnnotations;

namespace Pggm.Components;

/// <summary>
/// Validation attribute that requires a <c>bool</c> property to be <c>true</c>.
/// Use this instead of <c>[Required]</c> for checkbox "must be checked" scenarios,
/// because <c>[Required]</c> on a value-type <c>bool</c> never fails (false is not null).
///
/// Usage:
/// <code>
/// [MustBeTrue(ErrorMessage = "U moet akkoord gaan met de voorwaarden")]
/// public bool AcceptTerms { get; set; }
/// </code>
/// </summary>
[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
public sealed class MustBeTrueAttribute : ValidationAttribute
{
    public MustBeTrueAttribute()
    {
        ErrorMessage = "This field must be checked.";
    }

    public override bool IsValid(object? value)
        => value is true;
}
