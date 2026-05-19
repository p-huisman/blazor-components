export interface DotNetObjectReference {
  invokeMethodAsync(methodName: string, ...args: unknown[]): Promise<unknown>;
}

export interface ListenerEntry {
  element: HTMLElement;
  eventName: string;
  handler: EventListener;
  dotNetRef: DotNetObjectReference;
}

export interface ScriptFile {
  src: string;
  id: string;
  isModule: boolean;
}

export interface PggmComponentsNamespace {
  addEventListener(
    element: HTMLElement,
    eventName: string,
    dotNetRef: DotNetObjectReference,
    methodName: string,
    useTimeout?: boolean,
  ): void;
  addCancelableEventListener(
    element: HTMLElement,
    eventName: string,
    dotNetRef: DotNetObjectReference,
    methodName: string,
  ): void;
  removeEventListener(element: HTMLElement | null, eventName: string): void;
  removeAllEventListeners(element: HTMLElement | null): void;
  forceCleanupElement(elementId: string): void;
  setProperty(element: HTMLElement | null, property: string, value: unknown): void;
  getProperty(element: HTMLElement | null, property: string): unknown;
  callElementMethod(element: HTMLElement | string | null, methodName: string, ...args: unknown[]): unknown;
  disableNativeFormValidation(element: HTMLElement | null): void;
  dispose(): void;
  initialize(): Promise<boolean>;
  loadScript(id: string): Promise<void>;
  getValidity(element: HTMLElement | null, validityState: string): boolean;
  setStyle(element: HTMLElement | null, property: string, value: string): void;
  openExternal?(url: string, target?: string): void;
  scrollToTop?(): void;
}

declare global {
  // eslint-disable-next-line no-var
  var PggmComponents: PggmComponentsNamespace;
  // eslint-disable-next-line no-var
  var pggmDataGrid: PggmDataGridNamespace;
}

export interface PggmDataGridNamespace {
  scrollToTop(element: Element | null): void;
  getScrollableAncestorHeight(element: Element | null): number;
  enableColumnResizing(gridElement: HTMLElement): void;
  resetColumnWidths(gridElement: HTMLElement): void;
  enableAutoItemsPerPage(gridElement: HTMLElement, dotNetRef: DotNetObjectReference, rowHeight: number): void;
  disableAutoItemsPerPage(gridElement: HTMLElement): void;
  setVirtualizedHeight(gridElement: HTMLElement | null, height: string): void;
  applyRowIndents(gridElement: HTMLElement | null): void;
  syncColumnWidths(gridElement: HTMLElement | null): void;
  syncStickyOffsets(gridElement: HTMLElement | null): void;
  // Virtualization and focus helpers
  registerRenderedCell?(gridId: string, row: number, col: number, elementId: string): void;
  clearRenderedCells?(gridId: string): void;
  focusCellById?(id: string): void;
  focusCellByLogical?(gridId: string, row: number, col: number, itemSize?: number): boolean;
  setFocusRevealDebug?(enabled: boolean): void;
  // Keyboard navigation
  enableKeyboardNav(gridElement: HTMLElement): void;
  disableKeyboardNav?(gridElement: HTMLElement): void;
}
