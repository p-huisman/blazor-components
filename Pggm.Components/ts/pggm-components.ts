// PGGM Design System – entry point for esbuild
// Each concern lives in its own module; this file wires them to globalThis.

import type { DotNetObjectReference, PggmComponentsNamespace } from "./types";
import { EventListenerManager } from "./EventListenerManager";
import { PggmDesignSystem } from "./PggmDesignSystem";
import "./pggm-data-grid";

// ─── Bootstrap ────────────────────────────────────────────────────────────────

(function () {
  globalThis.PggmComponents =
    globalThis.PggmComponents ?? ({} as PggmComponentsNamespace);

  // Global event listener manager
  const eventManager = new EventListenerManager();

  // Generic event listener functions
  globalThis.PggmComponents.addEventListener = function (
    element: HTMLElement,
    eventName: string,
    dotNetRef: DotNetObjectReference,
    methodName: string,
    useTimeout = true,
  ): void {
    eventManager.addListener(element, eventName, dotNetRef, methodName, useTimeout);
  };

  globalThis.PggmComponents.addCancelableEventListener = function (
    element: HTMLElement,
    eventName: string,
    dotNetRef: DotNetObjectReference,
    methodName: string,
  ): void {
    eventManager.addCancelableListener(element, eventName, dotNetRef, methodName);
  };

  globalThis.PggmComponents.removeEventListener = function (
    element: HTMLElement | null,
    eventName: string,
  ): void {
    if (!element) return;
    eventManager.removeListener(element, eventName);
  };

  globalThis.PggmComponents.removeAllEventListeners = function (
    element: HTMLElement | null,
  ): void {
    if (!element) return;
    eventManager.removeAllListeners(element);
  };

  globalThis.PggmComponents.forceCleanupElement = function (
    elementId: string,
  ): void {
    eventManager._forceCleanupStaleListeners(elementId);
  };

  // Property management
  globalThis.PggmComponents.setProperty = function (
    element: HTMLElement | null,
    property: string,
    value: unknown,
  ): void {
    if (element) {
      try {
        // Force property assignment even if it's undefined initially
        (element as unknown as Record<string, unknown>)[property] = value;

        // For web components, also try setting as attribute if property doesn't work
        if (element.setAttribute && typeof value === "string") {
          element.setAttribute(property, value);
        }

        // Trigger a change event to ensure web component updates
        if (property === "value" && element.dispatchEvent) {
          element.dispatchEvent(new Event("input", { bubbles: true }));
        }
      } catch (e) {
        console.warn("Failed to set property", property, "on element", element, "Error:", e);
      }
    }
  };

  globalThis.PggmComponents.getProperty = function (
    element: HTMLElement | null,
    property: string,
  ): unknown {
    return element
      ? (element as unknown as Record<string, unknown>)[property]
      : undefined;
  };

  globalThis.PggmComponents.callElementMethod = function (
    element: HTMLElement | string | null,
    methodName: string,
    ...args: unknown[]
  ): unknown {
    const resolved = typeof element === "string" ? document.getElementById(element) : element;
    const el = resolved as (HTMLElement & Record<string, unknown>) | null;
    if (el && typeof el[methodName] === "function") {
      return (el[methodName] as (...a: unknown[]) => unknown)(...args);
    } else {
      console.warn(`Method '${methodName}' not found on element or is not a function`, element);
    }
  };

  /**
   * Finds the nearest ancestor <form> of the given element and sets the `novalidate`
   * attribute, suppressing all native browser constraint-validation popups so that
   * Blazor EditForm / PggmValidationMessage are the only validation UI.
   */
  globalThis.PggmComponents.disableNativeFormValidation = function (
    element: HTMLElement | null,
  ): void {
    if (!element) return;
    const form = element.closest("form");
    if (form) {
      form.setAttribute("novalidate", "");
    }
  };

  globalThis.PggmComponents.dispose = function (): void {
    eventManager.dispose();
  };
})();

// ─── Design system singleton ──────────────────────────────────────────────────

const designSystem = new PggmDesignSystem();

globalThis.PggmComponents.initialize = function (): Promise<boolean> {
  return designSystem.initialize();
};


globalThis.PggmComponents.loadScript = function (id: string): Promise<void> {
  return designSystem.loadScript(id);
};

globalThis.PggmComponents.setProperty = function (
  element: HTMLElement | null,
  property: string,
  value: unknown,
): void {
  const el = element as (HTMLElement & Record<string, unknown>) | null;
  if (el?.[property] !== undefined) {
    el[property] = value;
  }
};

globalThis.PggmComponents.getProperty = function (
  element: HTMLElement | null,
  property: string,
): unknown {
  return element
    ? (element as unknown as Record<string, unknown>)[property]
    : undefined;
};

globalThis.PggmComponents.getValidity = function (
  element: HTMLElement | null,
  validityState: string,
): boolean {
  const el = element as HTMLInputElement | null;
  return (el?.validity?.[validityState as keyof ValidityState] as boolean) ?? false;
};

globalThis.PggmComponents.setStyle = function (
  element: HTMLElement | null,
  property: string,
  value: string,
): void {
  if (element?.style) {
    (element.style as unknown as Record<string, string>)[property] = value;
  }
};

// Open an external URL in a new tab/window with a safe fallback.
globalThis.PggmComponents.openExternal = function (url: string, target = '_blank'): void {
  try {
    const win = window.open(url, target);
    // Try to remove opener reference for security when a window is returned
    if (win && 'opener' in win) {
      try { win.opener = null; } catch { /* ignore */ }
    }
  } catch {
    // If popup blocked or unexpected error, navigate in current window as fallback
    try { globalThis.location.assign(url); } catch { /* ignore */ }
  }
};

// Scroll helpers (used by Blazor layout to reset page position)
globalThis.PggmComponents.scrollToTop = function (): void {
  try {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const main = document.getElementById('MainContainer') as HTMLElement | null;
    if (main && main.scrollTo) {
      if (prefersReduced) main.scrollTop = 0;
      else main.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }
    if (prefersReduced) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  } catch {
    try { window.scrollTo(0, 0); } catch { /* ignore */ }
  }
};


// ─── DataGrid JS helpers ──────────────────────────────────────────────────────

function findScrollableAncestor(element: Element | null): Element | null {
  let el: Element | null = element;
  while (el) {
    el = el.parentElement;
    if (!el || el === document.body) break;
    const overflowY = globalThis.getComputedStyle(el).overflowY;
    if (overflowY === 'auto' || overflowY === 'scroll') return el;
  }
  return null;
}

globalThis.pggmDataGrid = globalThis.pggmDataGrid ?? {};

globalThis.pggmDataGrid.scrollToTop = function (element: Element | null): void {
  if (!element) return;
  const scrollable = findScrollableAncestor(element);
  if (scrollable) {
    (scrollable as HTMLElement).scrollTop = 0;
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
};

globalThis.pggmDataGrid.getScrollableAncestorHeight = function (element: Element | null): number {
  if (!element) return 0;
  const scrollable = findScrollableAncestor(element);
  return scrollable ? (scrollable as HTMLElement).clientHeight || 0 : window.innerHeight || 0;
};

// Set the height for a virtualized grid via a CSS variable on the grid element.
globalThis.pggmDataGrid.setVirtualizedHeight = function (gridElement: HTMLElement | null, height: string): void {
  if (!gridElement) return;
  try {
    gridElement.style.setProperty('--pggm-data-grid-height', height || '400px');
  } catch {
    // silently ignore
  }
};

// Apply per-row hierarchical indents by reading the data-indent attribute and
// setting a CSS variable on each matching element. This avoids inline style in
// markup generation while still allowing dynamic per-row values to be applied
// via JS at runtime.
globalThis.pggmDataGrid.applyRowIndents = function (gridElement: HTMLElement | null): void {
  if (!gridElement) return;
  try {
    const nodes = Array.from(gridElement.querySelectorAll<HTMLElement>('[data-indent]'));
    nodes.forEach(n => {
      const v = n.dataset.indent;
      if (v !== undefined) n.style.setProperty('--pggm-hier-indent', `${v}px`);
    });
  } catch{
    // ignore
  }
};

// Compute and apply left/right offsets for stacked sticky columns so they
// correctly sit next to each other. Applies offsets to both thead th and
// corresponding tbody td cells. Safe no-op when no sticky columns present.
globalThis.pggmDataGrid.syncStickyOffsets = function (gridElement: HTMLElement | null): void {
  if (!gridElement) return;
  try {
    const isRTL = getComputedStyle(gridElement).direction === 'rtl';
    const thead = gridElement.querySelector<HTMLElement>('thead');
    if (!thead) return;

    const headerRow = thead.querySelector<HTMLElement>('tr');
    if (!headerRow) return;

    const headerCells = Array.from(headerRow.children) as HTMLElement[];
    // Find sticky header cells in DOM order
    const stickyThs = headerCells.filter(h => h.classList.contains('pggm-sticky-col'));

    // Compute cumulative offsets using layout widths
    let cumulative = 0;
    stickyThs.forEach(th => {
      const rect = th.getBoundingClientRect();
      const w = rect.width || th.offsetWidth || Number.parseFloat(th.style.width || '0') || 0;
      if (isRTL) {
        th.style.right = cumulative + 'px';
        th.style.left = '';
      } else {
        th.style.left = cumulative + 'px';
        th.style.right = '';
      }
      cumulative += w;
    });

    // Apply same offsets to body cells by matching header index
    const rows = Array.from(gridElement.querySelectorAll<HTMLElement>('tbody > tr'));
    rows.forEach(row => {
      const cells = Array.from(row.children) as HTMLElement[];
      stickyThs.forEach(th => {
        const idx = headerCells.indexOf(th);
        if (idx < 0) return;
        const td = cells[idx] as HTMLElement | undefined;
        if (!td) return;
        if (!td.classList.contains('pggm-sticky-col')) return;
        if (isRTL) {
          td.style.right = th.style.right || '';
          td.style.left = '';
        } else {
          td.style.left = th.style.left || '';
          td.style.right = '';
        }
      });
    });
  } catch{
    // ignore errors — best-effort positioning only
  }
};

// Sync column widths declared in `data-width` on TH elements to the actual
// header width. Installs a MutationObserver to react to future attribute changes.
const _syncObservers = new Map<string, MutationObserver>();
globalThis.pggmDataGrid.syncColumnWidths = function (gridElement: HTMLElement | null): void {
  if (!gridElement) return;

  const id = gridElement.id;

  // Tear down any existing observer for this grid
  const existing = _syncObservers.get(id);
  if (existing) {
    try { existing.disconnect(); } catch { }
    _syncObservers.delete(id);
  }

  try {
    // Initial apply: set width from data-width attributes
    const ths = Array.from(gridElement.querySelectorAll<HTMLElement>('th'));
    ths.forEach(th => {
      const w = th.dataset.width;
      if (w) th.style.width = w;
    });
    // After widths applied, compute sticky offsets so stacked sticky columns
    // get the correct left/right inline offsets.
    try { globalThis.pggmDataGrid.syncStickyOffsets?.(gridElement); } catch { }

    // Observe attribute changes for data-width within the grid subtree
    const observer = new MutationObserver(muts => {
      muts.forEach(m => {
        if (m.type === 'attributes' && m.attributeName === 'data-width') {
          const target = m.target as HTMLElement;
          if (target?.tagName.toLowerCase() === 'th') {
            const v = target.dataset.width;
            if (v === undefined) {
              // if attribute removed, clear inline width so layout can revert
              target.style.width = '';
            } else {
              target.style.width = v;
            }
            try { globalThis.pggmDataGrid.syncStickyOffsets?.(gridElement); } catch { }
          }
        }
      });
    });

    observer.observe(gridElement, { subtree: true, attributes: true, attributeFilter: ['data-width'] });
    _syncObservers.set(id, observer);
  } catch {
    // ignore
  }
};

// ─── DataGrid column resize ───────────────────────────────────────────────────

interface ResizeColumnEntry {
  header: HTMLElement;
  size: string;
}

interface ResizeGridEntry {
  id: string;
  columns: ResizeColumnEntry[];
  initialWidths: string;
  controller: AbortController;
  frozenHeaders: HTMLElement[];
}

const _resizeGrids: ResizeGridEntry[] = [];

globalThis.pggmDataGrid.enableColumnResizing = function (gridElement: HTMLElement): void {
  if (!gridElement) return;

  const table = gridElement.querySelector('table') as HTMLElement | null;
  const headers = Array.from(gridElement.querySelectorAll<HTMLElement>('.column-header.resizable'));

  if (headers.length === 0) return;

  const id = gridElement.id;
  let entry = _resizeGrids.find(g => g.id === id);

  // Abort previous resize listeners before re-initialising
  if (entry?.controller) {
    entry.controller.abort();
  }

  const controller = new AbortController();
  const { signal } = controller;

  const columns: ResizeColumnEntry[] = [];

  // Determine the full height of the grid so the drag handle spans all rows
  let tableHeight = gridElement.offsetHeight;
  if (tableHeight < 70) {
    const rowCount = Number.parseInt(table?.getAttribute('aria-rowcount') ?? '10', 10);
    const rowHeight = headers[0]?.offsetHeight ?? 40;
    tableHeight = rowCount * rowHeight;
  }

  // ── Freeze all column widths NOW (at init, not on first drag) ─────────────
  // Reading all offsets before any write avoids any layout shift.
  const frozenHeaders: HTMLElement[] = [];
  if (table && !table.style.tableLayout) {
    const allThs = Array.from(table.querySelectorAll<HTMLElement>(':scope > thead > tr > th'));
    const thWidths = allThs.map(th => th.offsetWidth); // read all first
    const tableScrollWidth = table.scrollWidth;         // read before any write
    allThs.forEach((th, i) => { th.style.width = thWidths[i] + 'px'; });
    table.style.width = tableScrollWidth + 'px';
    table.style.tableLayout = 'fixed';
    frozenHeaders.push(...allThs);
  }

  headers.forEach((header) => {
    // Use the now-frozen inline width as the initial size
    columns.push({ header, size: header.style.width || `${header.clientWidth}px` });

    // Remove any handles left over from a previous call
    header.querySelectorAll('.actual-resize-handle').forEach(d => d.remove());

    const placeholder = header.querySelector<HTMLElement>('.resize-handle');
    const resizeTop = placeholder?.offsetTop ?? 0;

    const handle = createResizeHandle(tableHeight, resizeTop);
    header.appendChild(handle);
    setResizeListeners(handle, signal);
  });

  const initialWidths = columns.map(({ size }) => size).join(' ');

  if (entry) {
    const columnsChanged = entry.columns.length !== columns.length;
    entry.columns = columns;
    if (columnsChanged) entry.initialWidths = initialWidths;
    entry.controller = controller;
    entry.frozenHeaders = frozenHeaders;
  } else {
    _resizeGrids.push({ id, columns, initialWidths, controller, frozenHeaders });
  }

  function setResizeListeners(handle: HTMLElement, sig: AbortSignal): void {
    let startPageX = 0;
    let curCol: HTMLElement | null = null;
    let curColWidth = 0;

    
      // Use RAF scheduling to avoid nesting an anonymous function inside the
      // pointermove handler. Store the last event and run the resize logic once
      // per animation frame.
      let _latestEvent: PointerEvent | null = null;
      let _rafScheduled = false;

      function onRaf(): void {
        _rafScheduled = false;
        const e = _latestEvent;
        if (!e || !curCol || !table) return;
        const isRTL = getComputedStyle(gridElement).direction === 'rtl';
        const diffX = isRTL ? startPageX - e.pageX : e.pageX - startPageX;
        const col = columns.find(({ header }) => header === curCol);
        if (!col) return;
        const attrMin = curCol.dataset.minWidth;
        const minW = Number.parseFloat(curCol.style.minWidth) || (attrMin ? Number.parseFloat(attrMin) : 50);
        const newSize = Math.max(minW, curColWidth + diffX) + 'px';
        const delta = Number.parseFloat(newSize) - Number.parseFloat(col.size);
        col.size = newSize;
        curCol.style.width = newSize;
        // Adjust table width by the same delta so other columns are undisturbed
        if (delta !== 0) {
          const currentTableW = Number.parseFloat(table.style.width) || table.scrollWidth;
          table.style.width = Math.max(0, currentTableW + delta) + 'px';
        }
      }

      const moveHandler = (e: PointerEvent) => {
        _latestEvent = e;
        if (!_rafScheduled) {
          _rafScheduled = true;
          requestAnimationFrame(onRaf);
        }
      };

    const upHandler = () => {
      document.removeEventListener('pointermove', moveHandler);
      document.removeEventListener('pointerup', upHandler);
      // Persist new widths to the TH `data-width` attribute so subsequent
      // calls to `syncColumnWidths` (which read `data-width`) do not
      // overwrite the user's manual resize. Persist for ALL THs so
      // non-resizable columns keep their frozen width as well.
      try {
        const allThs = Array.from(gridElement.querySelectorAll<HTMLElement>('th'));
        allThs.forEach(th => {
          try {
            const w = th.style.width;
            if (w) {
              th.dataset.width = w;
            } else {
              // remove any previously set data-width if there's no inline width
              delete th.dataset.width;
            }
          } catch { }
        });
      } catch { }
      curCol = null;
      // After a resize completes, recompute sticky offsets so pinned columns
      // remain correctly stacked next to each other.
      try { requestAnimationFrame(() => globalThis.pggmDataGrid.syncStickyOffsets?.(gridElement)); } catch { }
    };

    handle.addEventListener('pointerdown', (e: PointerEvent) => {
      e.preventDefault();
      curCol = handle.parentElement;
      startPageX = e.pageX;
      curColWidth = curCol ? curCol.offsetWidth - getPaddingDiff(curCol) : 0;
      document.addEventListener('pointermove', moveHandler);
      document.addEventListener('pointerup', upHandler);
    }, { signal: sig });

    handle.addEventListener('pointerover', () => {
      handle.style.borderInlineEnd = '2px solid var(--pggm-resize-handle-active-color, var(--pggm-primary, #005580))';
      const visual = handle.previousElementSibling as HTMLElement | null;
      if (visual) visual.style.visibility = 'hidden';
    }, { signal: sig });

    const removeBorder = () => {
      handle.style.borderInlineEnd = '';
      const visual = handle.previousElementSibling as HTMLElement | null;
      if (visual) visual.style.visibility = '';
    };

    handle.addEventListener('pointerup', removeBorder, { signal: sig });
    handle.addEventListener('pointercancel', removeBorder, { signal: sig });
    handle.addEventListener('pointerleave', removeBorder, { signal: sig });
  }

  function createResizeHandle(height: number, top: number): HTMLElement {
    const div = document.createElement('div');
    div.className = 'actual-resize-handle';
    div.style.top = top + 'px';
    div.style.position = 'absolute';
    div.style.cursor = 'col-resize';
    div.style.userSelect = 'none';
    div.style.touchAction = 'none';
    div.style.height = (height - 4) + 'px';
    div.style.width = '6px';
    div.style.insetInlineEnd = '0';
    div.style.zIndex = '1';
    return div;
  }

  function getPaddingDiff(col: HTMLElement): number {
    if (getComputedStyle(col).boxSizing === 'border-box') return 0;
    return (Number.parseFloat(getComputedStyle(col).paddingLeft) || 0) +
           (Number.parseFloat(getComputedStyle(col).paddingRight) || 0);
  }
};

globalThis.pggmDataGrid.resetColumnWidths = function (gridElement: HTMLElement): void {
  const entry = _resizeGrids.find(({ id }) => id === gridElement.id);
  if (!entry) return;

  const table = gridElement.querySelector('table') as HTMLElement | null;
  const widths = entry.initialWidths.split(' ');

  entry.columns.forEach((col, i) => {
    col.size = widths[i] ?? col.size;
    col.header.style.width = col.size;
  });
  // Clear widths from non-resizable headers that were frozen during drag
  entry.frozenHeaders.forEach(th => {
    if (!entry.columns.some(c => c.header === th)) {
      th.style.width = '';
    }
  });
  entry.frozenHeaders = [];

  if (table) {
    table.style.tableLayout = '';
    table.style.width = '';
  }
};

// ─── DataGrid auto items per page ─────────────────────────────────────────────

interface AutoItemsEntry {
  observer: ResizeObserver | null;
  windowListener: (() => void) | null;
}

const _autoItemsMap = new Map<string, AutoItemsEntry>();

globalThis.pggmDataGrid.enableAutoItemsPerPage = function (
  gridElement: HTMLElement,
  dotNetRef: DotNetObjectReference,
  rowHeight: number
): void {
  if (!gridElement) return;

  const id = gridElement.id;
  // Tear down any existing observer for this grid
  globalThis.pggmDataGrid.disableAutoItemsPerPage(gridElement);

  const scrollable = findScrollableAncestor(gridElement);

  const calculate = () => {
    const thead = gridElement.querySelector<HTMLElement>('thead');

    // Measure from the bottom of the thead to the bottom of the scroll container.
    // This correctly ignores all content above the grid (headings, toolbars, etc.)
    // and gives us only the space that the tbody can actually occupy.
    let availableHeight: number;
    if (thead) {
      const theadBottom = thead.getBoundingClientRect().bottom;
      if (scrollable) {
        const containerBottom = (scrollable as HTMLElement).getBoundingClientRect().bottom;
        availableHeight = Math.max(0, containerBottom - theadBottom);
      } else {
        availableHeight = Math.max(0, window.innerHeight - theadBottom);
      }
    } else {
      // Fallback when thead is not yet rendered
      const theadHeight = 40;
      const containerHeight = scrollable
        ? (scrollable as HTMLElement).clientHeight
        : window.innerHeight;
      availableHeight = Math.max(0, containerHeight - theadHeight);
    }

    const count = Math.max(1, Math.floor(availableHeight / rowHeight));
    dotNetRef.invokeMethodAsync('UpdateItemsPerPageAsync', count);
  };

  const entry: AutoItemsEntry = { observer: null, windowListener: null };

  const target: Element | null = scrollable ?? gridElement.parentElement;

  if (target && typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(calculate);
    observer.observe(target);
    entry.observer = observer;
  } else {
    entry.windowListener = calculate;
    window.addEventListener('resize', calculate);
  }

  _autoItemsMap.set(id, entry);
  calculate(); // compute immediately on init
};

globalThis.pggmDataGrid.disableAutoItemsPerPage = function (
  gridElement: HTMLElement
): void {
  if (!gridElement) return;
  const id = gridElement.id;
  const entry = _autoItemsMap.get(id);
  if (!entry) return;
  entry.observer?.disconnect();
  if (entry.windowListener) window.removeEventListener('resize', entry.windowListener);
  _autoItemsMap.delete(id);
};
