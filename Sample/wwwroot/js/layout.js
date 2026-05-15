globalThis.blazorCulture = {
  scrollMainToTop: function () {
    const main = document.querySelector("main");
    if (main) main.scrollTop = 0;
  },

  registerResizeHandler: function (dotNetHelper) {
    let isLargeScreen = globalThis.innerWidth >= 690;

    // Initial check
    dotNetHelper.invokeMethodAsync("OnScreenSizeChanged", isLargeScreen);

    // Listen for resize events
    globalThis.addEventListener("resize", function () {
      const newIsLargeScreen = globalThis.innerWidth >= 690;

      // Only call the method if the screen size category changed
      if (newIsLargeScreen !== isLargeScreen) {
        isLargeScreen = newIsLargeScreen;
        dotNetHelper.invokeMethodAsync("OnScreenSizeChanged", isLargeScreen);
      }
    });
  },
};

function _isScrollable(node) {
  if (!node) return false;
  const overflowY = globalThis.getComputedStyle(node).overflowY;
  return (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay")
    && node.scrollHeight > node.clientHeight;
}

function _findScrollableContainer(el) {
  let container = el;
  while (container && container !== document.body && !_isScrollable(container)) {
    container = container.parentElement;
  }
  if (!container || container === document.body) {
    container =
      document.getElementById("main-content") ||
      document.querySelector(".main") ||
      document.documentElement;
  }
  return container;
}

function _smoothScrollContainer(container, target) {
  const isRoot = container === document.documentElement || container === document.body;
  try {
    if (isRoot) {
      globalThis.scrollTo({ top: target, behavior: "smooth" });
    } else {
      container.scrollTo({ top: target, behavior: "smooth" });
    }
  } catch {
    if (isRoot) {
      globalThis.scrollTo(0, target);
    } else {
      container.scrollTop = target;
    }
  }
}

function _computeScrollTarget(el, container) {
  const isRoot = container === document.documentElement || container === document.body;
  const rectEl = el.getBoundingClientRect();
  const containerTop = isRoot ? 0 : container.getBoundingClientRect().top;
  const currentScroll = isRoot
    ? (globalThis.pageYOffset || document.documentElement.scrollTop || 0)
    : (container.scrollTop || 0);
  return Math.max(0, Math.round(currentScroll + rectEl.top - containerTop));
}

function _computeOffsetFallback(el, container) {
  let offset = 0;
  let node = el;
  while (node && node !== container) {
    offset += node.offsetTop || 0;
    node = node.offsetParent;
  }
  return Math.max(0, offset);
}

globalThis.blazorLayout = {
  scrollToId: async function (id) {
    try {
      await new Promise((r) => setTimeout(r, 500)); // Allow layout to stabilize

      const el = document.getElementById(id);
      if (!el) return;

      const container = _findScrollableContainer(el);

      try {
        const target = _computeScrollTarget(el, container);
        _smoothScrollContainer(container, target);
      } catch {
        try {
          _smoothScrollContainer(container, _computeOffsetFallback(el, container));
        } catch {
          /* ignore */
        }
      }
    } catch (e) {
      console.error("scrollToId error", e);
    }
  },
};
