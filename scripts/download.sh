#!/usr/bin/env bash
set -euo pipefail

scripts/download-webcomponents.sh https://proget.p.pggm-cloud.nl/npm/PGGMnpmRegistry/%40pggm/pggm-components/-/pggm-components-2.0.21-rc2516751.99.tgz Pggm.Components/wwwroot/js

scripts/download-webcomponents.sh https://proget.p.pggm-cloud.nl/npm/PGGMnpmRegistry/p-elements-core/-/p-elements-core-1.2.32.tgz Pggm.Components/wwwroot/js


scripts/download-styles.sh https://proget.p.pggm-cloud.nl/npm/PGGMnpmRegistry/%40pggm/pggm-fundamentals/-/pggm-fundamentals-2.0.21-rc2516751.99.tgz Pggm.Components/wwwroot/css