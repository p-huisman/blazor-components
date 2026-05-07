using Bunit;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.JSInterop;

using Pggm.Components.Services;

namespace Pggm.Components.Tests
{
    public abstract class PggmTestContext : TestContext
    {
        protected PggmTestContext()
        {
            Services.AddSingleton<PggmDesignSystemService>();

            // Setup JSInterop for common PGGM JS calls
            JSInterop.SetupVoid("PggmWebComponent.initialize", _ => true);
            JSInterop.SetupVoid("PggmWebComponent.setProperty", _ => true);
            JSInterop.SetupVoid("PggmWebComponent.addEventListener", _ => true);
            JSInterop.SetupVoid("PggmWebComponent.removeEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.initialize", _ => true);
            JSInterop.SetupVoid("PggmComponents.loadScript", _ => true);
            JSInterop.SetupVoid("PggmComponents.setProperty", _ => true);
            JSInterop.SetupVoid("PggmComponents.setStyle", _ => true);
            JSInterop.SetupVoid("PggmComponents.addEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.addCancelableEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.removeEventListener", _ => true);
            JSInterop.SetupVoid("PggmComponents.removeAllEventListeners", _ => true);
            JSInterop.SetupVoid("PggmComponents.forceCleanupElement", _ => true);
            JSInterop.Setup<object?>("PggmComponents.getProperty", _ => true).SetResult(null);
            JSInterop.SetupVoid("PggmComponents.callElementMethod", _ => true);
        }
    }
}
