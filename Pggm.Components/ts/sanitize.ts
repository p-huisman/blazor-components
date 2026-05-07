/**
 * Extract safe properties from complex objects
 */
export function sanitizeComplexObject(obj: object): Record<string, unknown> {
  const safeProps: Record<string, unknown> = {};
  try {
    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        const propValue = (obj as Record<string, unknown>)[prop];
        if (
          typeof propValue === "string" ||
          typeof propValue === "number" ||
          typeof propValue === "boolean" ||
          propValue === null
        ) {
          safeProps[prop] = propValue;
        }
      }
    }
  } catch (e) {
    // Log error for debugging while safely handling property access failures
    console.warn("Error sanitizing object properties:", e);
  }
  return safeProps;
}

/**
 * Sanitize event data to remove circular references and DOM elements
 */
export function sanitizeEventData(eventData: unknown): unknown {
  if (eventData === null || eventData === undefined) {
    return null;
  }

  // If it's a primitive type, return as-is
  if (typeof eventData !== "object") {
    return eventData;
  }

  // If it's a DOM element, return only safe properties
  if (eventData instanceof Element) {
    return {
      tagName: eventData.tagName,
      id: eventData.id,
      className: eventData.className,
      value: (eventData as HTMLInputElement).value || null,
    };
  }

  // If it's an array, sanitize each element
  if (Array.isArray(eventData)) {
    return eventData.map((item) => sanitizeEventData(item));
  }

  // Special-case common pattern: { item: Element } (e.g., dropdownSelect)
  try {
    const data = eventData as Record<string, unknown>;
    if (
      Object.prototype.hasOwnProperty.call(data, "item") &&
      data["item"] instanceof Element
    ) {
      const el = data["item"] as HTMLElement & { value?: string };
      return {
        item: {
          tagName: el.tagName,
          id: el.id || null,
          value: el.getAttribute?.("value") ?? el.value ?? null,
          textContent: el.textContent || null,
        },
      };
    }
  } catch {
    // ignore and continue with generic sanitization
  }

  // For objects, create a new object with sanitized properties
  const sanitized: Record<string, unknown> = {};
  const seen = new WeakSet<object>();

  function shouldSkipValue(value: unknown): boolean {
    return (
      typeof value === "function" ||
      value instanceof Element ||
      value instanceof Node
    );
  }

  function sanitizePropertyValue(
    value: unknown,
    target: Record<string, unknown>,
    key: string,
  ): void {
    if (value === null || typeof value !== "object") {
      target[key] = value;
    } else if (Array.isArray(value)) {
      target[key] = value.map((item) => sanitizeEventData(item));
    } else if ((value as object).constructor === Object) {
      target[key] = {};
      sanitizeObject(
        value as Record<string, unknown>,
        target[key] as Record<string, unknown>,
      );
    } else {
      const safeProps = sanitizeComplexObject(value as object);
      if (Object.keys(safeProps).length > 0) {
        target[key] = safeProps;
      }
    }
  }

  function sanitizeObject(
    obj: Record<string, unknown>,
    target: Record<string, unknown>,
  ): void {
    if (obj === null || obj === undefined) {
      return;
    }

    // Prevent circular references
    if (seen.has(obj)) {
      return;
    }
    seen.add(obj);

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];

        // Skip functions and DOM elements
        if (shouldSkipValue(value)) {
          continue;
        }

        sanitizePropertyValue(value, target, key);
      }
    }
  }

  sanitizeObject(eventData as Record<string, unknown>, sanitized);
  return sanitized;
}
