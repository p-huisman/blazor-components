// pggm-data-grid.ts
// TypeScript helpers for Pggm DataGrid keyboard/focus behavior and virtualization mapping.

interface RenderedCellEntry {
  elementId: string;
  row: number;
  col: number;
}

const _renderedCellsByGrid = new Map<string, RenderedCellEntry[]>();

function isDebugEnabled() {
  const runtime = !!((globalThis as any).pggmDataGrid?._debugFocusReveal);
  const fromQuery = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('pggmDebugFocusReveal') === '1';
  const fromStorage = typeof window !== 'undefined' && window.localStorage.getItem('pggmDebugFocusReveal') === '1';
  return runtime || fromQuery || fromStorage;
}

function logFocusDiagnostics(stage: string, cell: HTMLElement) {
  if (!isDebugEnabled()) return;

  const scrollContainer = cell.closest('.pggm-data-grid') as HTMLElement | null;
  const cellRect = cell.getBoundingClientRect();
  const containerRect = scrollContainer?.getBoundingClientRect();
  const topMargin = 8;
  const bottomMargin = 8;

  const inGridViewport = !!containerRect &&
    cellRect.left >= containerRect.left &&
    cellRect.right <= containerRect.right &&
    cellRect.top >= containerRect.top &&
    cellRect.bottom <= containerRect.bottom;

  const inDocumentViewport =
    cellRect.top >= topMargin &&
    cellRect.bottom <= (window.innerHeight - bottomMargin);

  console.log('[pggmDataGrid] focus reveal', {
    stage,
    cellId: cell.id,
    row: cell.getAttribute('data-row-index') ?? cell.closest('[data-row-index]')?.getAttribute('data-row-index') ?? null,
    col: cell.getAttribute('data-col-index') ?? null,
    inGridViewport,
    inDocumentViewport,
    scrollTop: scrollContainer?.scrollTop ?? null,
    scrollLeft: scrollContainer?.scrollLeft ?? null,
    cellRect: {
      top: Math.round(cellRect.top),
      right: Math.round(cellRect.right),
      bottom: Math.round(cellRect.bottom),
      left: Math.round(cellRect.left)
    },
    containerRect: containerRect ? {
      top: Math.round(containerRect.top),
      right: Math.round(containerRect.right),
      bottom: Math.round(containerRect.bottom),
      left: Math.round(containerRect.left)
    } : null,
    windowInnerHeight: window.innerHeight
  });
}

function ensureGridRegistry(gridId: string) {
  if (!_renderedCellsByGrid.has(gridId)) _renderedCellsByGrid.set(gridId, []);
  return _renderedCellsByGrid.get(gridId)!;
}

function isVirtualizedGridCell(cell: HTMLElement) {
  return cell.closest('.pggm-data-grid--virtualized') !== null;
}

function revealCellHorizontally(cell: HTMLElement) {
  const scrollContainer = cell.closest('.pggm-data-grid') as HTMLElement | null;
  if (!scrollContainer) return;

  const containerRect = scrollContainer.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();

  let visibleLeftBoundary = containerRect.left;
  const stickyCells = scrollContainer.querySelectorAll('.pggm-sticky-col');
  stickyCells.forEach((sticky) => {
    const stickyRect = (sticky as HTMLElement).getBoundingClientRect();
    if (stickyRect.right > visibleLeftBoundary && stickyRect.left < containerRect.right) {
      visibleLeftBoundary = stickyRect.right;
    }
  });

  if (cellRect.left < visibleLeftBoundary) {
    scrollContainer.scrollLeft -= visibleLeftBoundary - cellRect.left;
    return;
  }

  if (cellRect.right > containerRect.right) {
    scrollContainer.scrollLeft += cellRect.right - containerRect.right;
  }
}

function revealCellVertically(cell: HTMLElement) {
  const scrollContainer = cell.closest('.pggm-data-grid') as HTMLElement | null;
  if (!scrollContainer) return;

  const containerRect = scrollContainer.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();

  if (cellRect.top < containerRect.top) {
    scrollContainer.scrollTop -= containerRect.top - cellRect.top;
    return;
  }

  if (cellRect.bottom > containerRect.bottom) {
    scrollContainer.scrollTop += cellRect.bottom - containerRect.bottom;
  }
}

function revealCellInDocumentViewport(cell: HTMLElement) {
  const topMargin = 8;
  const bottomMargin = 8;
  const rect = cell.getBoundingClientRect();

  const grid = cell.closest('.pggm-data-grid') as HTMLElement | null;
  let target: HTMLElement | null = null;
  let parent = grid?.parentElement ?? cell.parentElement;

  // Find the first vertical scroll container outside the grid itself.
  while (parent && parent !== document.body) {
    const style = window.getComputedStyle(parent);
    const isScrollable = (style.overflowY === 'auto' || style.overflowY === 'scroll')
      && parent.scrollHeight > parent.clientHeight;
    if (isScrollable) {
      target = parent;
      break;
    }
    parent = parent.parentElement;
  }

  if (target) {
    const targetRect = target.getBoundingClientRect();
    if (rect.top < targetRect.top + topMargin) {
      target.scrollTop -= (targetRect.top + topMargin) - rect.top;
      return;
    }

    const maxBottom = targetRect.bottom - bottomMargin;
    if (rect.bottom > maxBottom) {
      target.scrollTop += rect.bottom - maxBottom;
    }
    return;
  }

  if (rect.top < topMargin) {
    window.scrollBy({ top: rect.top - topMargin, behavior: 'auto' });
    return;
  }

  const maxBottom = window.innerHeight - bottomMargin;
  if (rect.bottom > maxBottom) {
    window.scrollBy({ top: rect.bottom - maxBottom, behavior: 'auto' });
  }
}

function focusCellElement(cell: HTMLElement) {
  logFocusDiagnostics('before-reveal', cell);

  try {
    cell.focus({ preventScroll: true });
  } catch {
    cell.focus();
  }

  revealCellHorizontally(cell);
  if (!isVirtualizedGridCell(cell)) {
    revealCellVertically(cell);
  }
  revealCellInDocumentViewport(cell);
  logFocusDiagnostics('after-reveal', cell);
}

globalThis.pggmDataGrid = globalThis.pggmDataGrid ?? {} as any;

globalThis.pggmDataGrid.setFocusRevealDebug = function (enabled: boolean) {
  (globalThis.pggmDataGrid as any)._debugFocusReveal = !!enabled;
  try {
    window.localStorage.setItem('pggmDebugFocusReveal', enabled ? '1' : '0');
  } catch {
    // ignore storage failures
  }
  console.log('[pggmDataGrid] focus reveal debug', enabled ? 'enabled' : 'disabled');
};

globalThis.pggmDataGrid.registerRenderedCell = function (gridId: string, row: number, col: number, elementId: string) {
  try {
    const reg = ensureGridRegistry(gridId);
    // remove any existing entry for same elementId
    const idx = reg.findIndex(r => r.elementId === elementId);
    if (idx >= 0) reg.splice(idx, 1);
    reg.push({ elementId, row, col });
  } catch (e) { /* ignore */ }
};

globalThis.pggmDataGrid.clearRenderedCells = function (gridId: string) {
  _renderedCellsByGrid.delete(gridId);
};

globalThis.pggmDataGrid.focusCellById = function (id: string) {
  try {
    const el = document.getElementById(id);
    if (el && typeof (el as HTMLElement).focus === 'function') focusCellElement(el as HTMLElement);
  } catch { }
};

function tryGetLogicalCell(gridId: string, row: number, col: number): HTMLElement | null {
  const reg = _renderedCellsByGrid.get(gridId);
  if (reg) {
    const found = reg.find(r => r.row === row && r.col === col);
    if (found) {
      return document.getElementById(found.elementId) as HTMLElement | null;
    }
  }

  const id = `${gridId}-r${row}-c${col}`;
  const el = document.getElementById(id);
  if (el) return el as HTMLElement;

  const gridEl = document.getElementById(gridId);
  if (!gridEl) return null;

  const selector = `[data-row-index="${row}"] td[data-col-index="${col}"]`;
  return gridEl.querySelector(selector) as HTMLElement | null;
}

globalThis.pggmDataGrid.focusCellByLogical = function (gridId: string, row: number, col: number, itemSize = 40) {
  try {
    const gridEl = document.getElementById(gridId);
    if (!gridEl) return false;

    const focusIfRendered = () => {
      const cell = tryGetLogicalCell(gridId, row, col);
      if (!cell) return false;
      focusCellElement(cell);
      return true;
    };

    if (focusIfRendered()) {
      return true;
    }

    (gridEl as HTMLElement).scrollTop = Math.max(0, row * itemSize);

    let attempts = 0;
    const retryFocus = () => {
      if (focusIfRendered()) {
        return;
      }

      attempts += 1;
      if (attempts < 6) {
        requestAnimationFrame(retryFocus);
      }
    };

    requestAnimationFrame(retryFocus);

    return true;
  } catch {
    return false;
  }
};

// Prevent browser-default scroll behaviour for grid navigation keys.
// Call once per grid element (guarded by a flag on the element).
globalThis.pggmDataGrid.enableKeyboardNav = function (el: HTMLElement) {
  if (!el) return;
  // If a previous disable blocker was installed, remove it so enable works correctly.
  try {
    const existingBlocker = (el as any)._pggmKbNavBlocker;
    if (existingBlocker) {
      el.removeEventListener('keydown', existingBlocker, true as any);
      delete (el as any)._pggmKbNavBlocker;
      delete (el as any)._pggmKbNavDisabled;
    }
  } catch { }

  if ((el as any)._pggmKbNav) return;
  (el as any)._pggmKbNav = true;
  const navKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
                           'Home', 'End', 'PageUp', 'PageDown']);
  el.addEventListener('keydown', (e: KeyboardEvent) => {
    if (navKeys.has(e.key)) {
      e.preventDefault();
      return;
    }
    // Prevent Space from scrolling when the grid cell <td> itself has focus.
    if (e.key === ' ' && (e.target as HTMLElement)?.getAttribute('role') === 'gridcell') {
      e.preventDefault();
    }
  }, { passive: false, capture: false });

  el.addEventListener('focusin', (e: FocusEvent) => {
    const cell = (e.target as HTMLElement | null)?.closest('[role="gridcell"]') as HTMLElement | null;
    if (cell) {
      logFocusDiagnostics('focusin-before-reveal', cell);
      revealCellHorizontally(cell);
      if (!isVirtualizedGridCell(cell)) {
        revealCellVertically(cell);
      }
      revealCellInDocumentViewport(cell);
      logFocusDiagnostics('focusin-after-reveal', cell);
    }
  });
};

// Disable keyboard navigation handlers for a grid element by installing a
// capturing blocker that prevents previous handlers from acting. This avoids
// needing to remove anonymous listeners added earlier.
globalThis.pggmDataGrid.disableKeyboardNav = function (el: HTMLElement) {
  if (!el) return;
  try {
    (el as any)._pggmKbNavDisabled = true;
    // If a blocker is already installed, nothing to do.
    if ((el as any)._pggmKbNavBlocker) return;

    const navKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown']);
    const blocker = function (e: KeyboardEvent) {
      try {
        if (navKeys.has(e.key)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          return;
        }
        if (e.key === ' ' && (e.target as HTMLElement)?.getAttribute('role') === 'gridcell') {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      } catch { }
    };

    el.addEventListener('keydown', blocker as any, { passive: false, capture: true } as any);
    (el as any)._pggmKbNavBlocker = blocker;
  } catch { }
};

// Expose simple API for scrolling
globalThis.pggmDataGrid.scrollToTop = globalThis.pggmDataGrid.scrollToTop || function (el: Element | null) {
  if (!el) return; const s = el.closest('[data-scrollable]') as HTMLElement | null; if (s) s.scrollTop = 0; else window.scrollTo(0, 0);
};

export {};
