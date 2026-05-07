using System.Collections.Generic;

namespace Pggm.Components.Sample.Components.ApiDocumentation
{
    public class ApiMember
    {
        public string Name { get; set; } = string.Empty;
        public string? Type { get; set; }
        public string? DefaultValue { get; set; }
        public string? Description { get; set; }
        public string? Signature { get; set; }
        public IEnumerable<ApiParameter>? Parameters { get; set; }
    }

    public class ApiParameter
    {
        public string Name { get; set; } = string.Empty;
        public string? Type { get; set; }
        public string? Description { get; set; }
    }
}
