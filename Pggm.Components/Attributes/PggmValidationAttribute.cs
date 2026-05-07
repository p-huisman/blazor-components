using System.ComponentModel.DataAnnotations;

namespace Pggm.Components;

/// <summary>
/// Marks a property as requiring web-component-level validation by a PGGM input component
/// (e.g. PggmInputBsn). This attribute is a message carrier only — DataAnnotations always
/// considers it valid. The Blazor wrapper component reads the ErrorMessage and writes it into
/// the EditContext ValidationMessageStore when the underlying web component reports invalid.
///
/// Usage:
/// <code>
/// [Required(ErrorMessage = "BSN is verplicht")]
/// [PggmValidation(ErrorMessage = "Vul een geldig BSN in")]
/// public string? Bsn { get; set; }
/// </code>
/// </summary>
[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field, AllowMultiple = false)]
public sealed class PggmValidationAttribute : ValidationAttribute
{
    /// <summary>
    /// Creates a new instance with the specified error message.
    /// </summary>
    public PggmValidationAttribute(string errorMessage)
    {
        ErrorMessage = errorMessage;
    }

    /// <summary>
    /// Always returns success — validation is performed by the web component,
    /// not by the DataAnnotations pipeline.
    /// </summary>
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        => ValidationResult.Success;
}
