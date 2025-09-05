# Local PGGM Assets Management

## Overview

The PGGM Design System assets (bundle.js and tokens.css) are now hosted locally within the component library to eliminate CORS issues and ensure reliable loading.

## File Location

```
Blazor.Pggm.Components/
├── wwwroot/
│   ├── css/
│   │   └── tokens.css         ← PGGM Design System CSS tokens
│   └── js/
│       ├── bundle.js          ← PGGM Design System bundle
│       └── pggm-components.js ← Blazor integration scripts
```

## Updating the Assets

To update the PGGM Design System to a newer version:

1. **Download Latest Assets**
   ```bash
   # Download bundle from PGGM's CDN (when accessible)
   curl -o bundle.js https://staticweb-cdn.azureedge.net/design-system/pggm-components/bundle.js
   
   # Download CSS tokens
   curl -o tokens.css https://staticweb-cdn.azureedge.net/design-system/pggm-components/tokens.css
   ```

2. **Replace Local Files**
   ```bash
   # Replace the existing assets
   cp bundle.js Blazor.Pggm.Components/wwwroot/js/bundle.js
   cp tokens.css Blazor.Pggm.Components/wwwroot/css/tokens.css
   ```

3. **Test Components**
   ```bash
   # Rebuild and test
   dotnet build
   cd Sample && dotnet run
   ```

## Version Tracking

Consider adding version information to track which PGGM assets are included:

```javascript
// At the top of bundle.js, add a comment:
// PGGM Design System Bundle - Version: 1.2.3 - Date: 2025-09-05
```

```css
/* At the top of tokens.css, add a comment: */
/* PGGM Design System Tokens - Version: 1.2.3 - Date: 2025-09-05 */
```

## Benefits of Local Hosting

- ✅ **No CORS Issues**: Same-origin loading
- ✅ **Offline Development**: Works without internet
- ✅ **Version Control**: Bundle is part of source control
- ✅ **Performance**: No external CDN dependency
- ✅ **Reliability**: No external service dependencies

## Build Integration

The bundle.js and tokens.css files are automatically included in the NuGet package as part of the `wwwroot` content, so consumers of the library get both assets automatically.
