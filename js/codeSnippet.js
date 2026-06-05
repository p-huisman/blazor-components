globalThis.codeSnippet = {
  copyToClipboard: async function (text) {
    if (!text) return false;
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand("copy"); // NOSONAR - deprecated but still widely supported fallback
      } catch {}
      ta.remove();
      return false;
    }
  },
  highlightAll: function () {
    if (globalThis.Prism && Prism.highlightAll) Prism.highlightAll();
  },
};
