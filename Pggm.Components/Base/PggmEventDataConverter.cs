using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Pggm.Components.Base
{
    internal static class PggmEventDataConverter
    {
        public static T DeserializeEventData<T>(object? eventData) where T : class, new()
        {
            if (eventData == null) return new T();
            try
            {
                if (eventData is JsonElement jsonElement)
                {
                    var options = new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true,
                        ReferenceHandler = ReferenceHandler.IgnoreCycles,
                        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
                    };
                    var typedData = new T();
                    var tempData = JsonSerializer.Deserialize<T>(jsonElement.GetRawText(), options);
                    if (tempData != null) CopyProperties(tempData, typedData);
                    return typedData;
                }
                if (eventData is T directCast) return directCast;
                return SafeConvertEventData<T>(eventData);
            }
            catch
            {
                return new T();
            }
        }

        private static T SafeConvertEventData<T>(object eventData) where T : class, new()
        {
            var result = new T();
            var sourceType = eventData.GetType();
            foreach (var targetProp in typeof(T).GetProperties())
            {
                if (!targetProp.CanWrite) continue;
                var sourceProp = sourceType.GetProperty(targetProp.Name);
                if (sourceProp == null || !sourceProp.CanRead) continue;
                try
                {
                    var value = sourceProp.GetValue(eventData);
                    if (value == null || !IsSimpleType(targetProp.PropertyType)) continue;
                    var converted = targetProp.PropertyType.IsAssignableFrom(sourceProp.PropertyType)
                        ? value
                        : Convert.ChangeType(value, targetProp.PropertyType);
                    targetProp.SetValue(result, converted);
                }
                catch
                {
                    // Skip property on error
                }
            }
            return result;
        }

        private static bool IsSimpleType(Type t) =>
            t.IsPrimitive || t == typeof(string) || t == typeof(bool) || t == typeof(DateTime) || t.IsEnum;

        private static void CopyProperties<T>(T source, T target) where T : class
        {
            foreach (var prop in typeof(T).GetProperties())
            {
                if (prop.CanWrite && prop.CanRead)
                {
                    try
                    {
                        var value = prop.GetValue(source);
                        prop.SetValue(target, value);
                    }
                    catch
                    {
                        // Skip property on error
                    }
                }
            }
        }
    }
}
