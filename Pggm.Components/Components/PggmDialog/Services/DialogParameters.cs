using System.Collections.Generic;

namespace Pggm.Components.Components.PggmDialog.Services
{
    public class DialogParameters : Dictionary<string, object?>
    {
        public DialogParameters()
        {
        }

        public DialogParameters(IDictionary<string, object?>? items) : base(items ?? new Dictionary<string, object?>())
        {
        }
    }
}
