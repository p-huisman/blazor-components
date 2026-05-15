using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Pggm.Components.Sample.Services
{
    public partial class Client
    {
        static partial void UpdateJsonSerializerSettings(JsonSerializerSettings settings)
        {
            // Configure JSON serialization settings to handle the API response format
            settings.NullValueHandling = NullValueHandling.Ignore;
            settings.DateFormatHandling = DateFormatHandling.IsoDateFormat;

            // Handle dates without timezone by assuming UTC
            settings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;

            // Use custom contract resolver to override Required settings
            settings.ContractResolver = new LenientContractResolver();

            // Handle missing values gracefully
            settings.MissingMemberHandling = MissingMemberHandling.Ignore;

            // More lenient parsing for DateTimeOffset fields
            settings.DateParseHandling = DateParseHandling.DateTimeOffset;

            // Add error handler to log specific deserialization issues
            settings.Error = (sender, args) =>
            {
                System.Console.WriteLine($"JSON Error at path '{args.ErrorContext.Path}': {args.ErrorContext.Error.Message}");
                args.ErrorContext.Handled = true; // Continue processing
            };
        }
    }

    // Custom contract resolver that makes all properties optional
    public class LenientContractResolver : DefaultContractResolver
    {
        protected override JsonProperty CreateProperty(System.Reflection.MemberInfo member, MemberSerialization memberSerialization)
        {
            var property = base.CreateProperty(member, memberSerialization);

            // Override Required setting to make all properties optional
            if (property.Required == Required.DisallowNull || property.Required == Required.Always)
            {
                property.Required = Required.Default;
            }

            return property;
        }
    }
}
