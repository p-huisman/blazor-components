# CORS Configuration for PGGM Design System

## The CORS Issue (RESOLVED)

~~When loading PGGM Design System assets from `https://staticweb-cdn.azureedge.net/`, you may encounter CORS (Cross-Origin Resource Sharing) errors in development environments~~

**✅ RESOLVED**: The PGGM bundle.js file has been moved to the local `wwwroot/js/` folder, eliminating CORS issues completely.

## Current Implementation

The library now uses a **local bundle approach**:
- ✅ **Local PGGM Bundle**: `bundle.js` is hosted within the component library
- ✅ **No CORS Issues**: All assets load from the same origin
- ✅ **Reliable Loading**: No external dependencies for core functionality
- ✅ **Offline Support**: Components work without internet connectivity

## Asset Loading Strategy

### Current Setup (Recommended)
```javascript
// Primary: Local PGGM bundle (no CORS issues)
src: "./_content/Pggm.Components/js/bundle.js"

// Secondary: External P-elements core (with CORS handling)
src: "https://cdn.jsdelivr.net/npm/p-elements-core@1.2.31/dist/p-elements-core-modern.min.js"
```

### Benefits of Local Bundle Approach
- ✅ **Zero CORS Issues**: Same-origin loading
- ✅ **Predictable Performance**: No CDN dependencies
- ✅ **Version Control**: Bundle version is locked and controlled
- ✅ **Offline Development**: Works without internet connection

## Alternative Solutions (For Reference)

Add a proxy configuration to your `appsettings.Development.json`:

```json
{
  "ReverseProxy": {
    "Routes": {
      "pggm-assets": {
        "ClusterId": "pggm-cluster",
        "Match": {
          "Path": "/pggm-assets/{**catch-all}"
        },
        "Transforms": [
          {
            "PathPattern": "/design-system/{**catch-all}"
          }
        ]
      }
    },
    "Clusters": {
      "pggm-cluster": {
        "Destinations": {
          "pggm-cdn": {
            "Address": "https://staticweb-cdn.azureedge.net/"
          }
        }
      }
    }
  }
}
```

Then update the JavaScript to use the proxy:
```javascript
src: "/pggm-assets/pggm-components/bundle.js"
```

### 3. **Production Deployment**
In production, ensure your server includes proper CORS headers or:
- Host PGGM assets on the same domain
- Use a CDN that supports CORS
- Configure your reverse proxy to handle CORS

### 4. **Local Asset Hosting**
Download PGGM design system assets and host them locally:

1. Download the bundle from PGGM
2. Place in `wwwroot/assets/pggm/`
3. Update JavaScript to use local paths:
   ```javascript
   src: "/assets/pggm/bundle.js"
   ```

## Current Implementation

The library includes automatic fallback handling:
- ✅ Graceful degradation when assets fail to load
- ✅ Console warnings for debugging
- ✅ Basic styling for all components
- ✅ Full functionality preserved

## Testing

To test CORS handling:
1. Open browser developer tools
2. Check console for CORS warnings
3. Verify components still render and function
4. Fallback styles should be applied automatically
