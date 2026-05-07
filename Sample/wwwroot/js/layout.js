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

globalThis.blazorLayout = {
  scrollToId: async function (id) {
    try {
      await new Promise((r) => setTimeout(r, 500)); // Allow layout to stabilize

      const el = document.getElementById(id);
      if (!el) return;

      // Find nearest scrollable ancestor (including the element itself)
      function isScrollable(node) {
        if (!node) return false;
        const style = globalThis.getComputedStyle(node);
        const overflowY = style.overflowY;
        const canScroll =
          overflowY === "auto" ||
          overflowY === "scroll" ||
          overflowY === "overlay";
        return canScroll && node.scrollHeight > node.clientHeight;
      }

      let container = el;
      while (
        container &&
        container !== document.body &&
        !isScrollable(container)
      ) {
        container = container.parentElement;
      }

      // If no specific container found, fall back to main content or document
      if (!container || container === document.body) {
        container =
          document.getElementById("main-content") ||
          document.querySelector(".main") ||
          document.documentElement;
      }

      // Compute offset of element relative to container by walking offsetParent
      function computeOffsetWithinAncestor(element, anc) {
        let offset = 0;
        let elc = element;
        while (elc && elc !== anc) {
          offset += elc.offsetTop || 0;
          elc = elc.offsetParent;
        }
        return offset;
      }

      try {
        const rectEl = el.getBoundingClientRect();
        let containerRect;
        let currentScroll = 0;

        if (
          container === document.documentElement ||
          container === document.body
        ) {
          containerRect = { top: 0 };
          currentScroll =
            globalThis.pageYOffset || document.documentElement.scrollTop || 0;
        } else {
          containerRect = container.getBoundingClientRect();
          currentScroll = container.scrollTop || 0;
        }

        const desiredTopInContainer = rectEl.top - containerRect.top;
        const target = Math.max(
          0,
          Math.round(currentScroll + desiredTopInContainer),
        );

        // Prefer smooth scrollTo when available, fall back to directly setting scrollTop
        if (
          container === document.documentElement ||
          container === document.body
        ) {
          try {
            globalThis.scrollTo({ top: target, behavior: "smooth" });
          } catch {
            globalThis.scrollTo(0, target);
          }
        } else {
          try {
            container.scrollTo({ top: target, behavior: "smooth" });
          } catch {
            container.scrollTop = target;
          }
        }
      } catch {
        // Fallback: use previous offsetParent-based calculation if bounding rect approach fails
        try {
          const offsetWithin = computeOffsetWithinAncestor(el, container);
          const fallbackTarget = Math.max(0, offsetWithin);
          if (
            container === document.documentElement ||
            container === document.body
          ) {
            globalThis.scrollTo({ top: fallbackTarget, behavior: "smooth" });
          } else {
            container.scrollTop = fallbackTarget;
          }
        } catch {
          /* ignore */
        }
      }
    } catch (e) {
      console.error("scrollToId error", e);
    }
  },
};
