namespace Pggm.Components.Sample.Configuration;

public class ApiSettings
{
    public FactuurApiSettings FactuurApi { get; set; } = new();
}

public class FactuurApiSettings
{
    public string BaseUrl { get; set; } = "https://your-api-base-url";
}
