using System.Collections.Generic;

namespace Pggm.Components.Models
{
    public class NavMenuItem
    {
        public string? Title { get; set; }
        public string? Url { get; set; }
        public string? Icon { get; set; }
        public bool IsOpen { get; set; }
        public List<NavMenuItem> Children { get; set; } = new List<NavMenuItem>();
        public object? Data { get; set; }
    }
}
