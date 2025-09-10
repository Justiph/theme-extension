chrome.runtime.onMessage.addListener((message) => {
  const theme = message.theme;
  if (!theme) return;

  // Remove old theme <link>
  document.querySelectorAll("link[data-theme]").forEach(el => el.remove());

  if (theme !== "default") {
    const cssPath = `themes/${theme}.css`;
    const cssURL = chrome.runtime.getURL(cssPath);
    console.log("Injecting theme:", theme, "from", cssURL);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssURL;
    link.setAttribute("data-theme", theme);
    document.head.appendChild(link);
  } else {
    console.log("Theme reset to default");
  }
});

// Auto-apply stored theme
(async function () {
  const url = new URL(window.location.href).hostname;
  chrome.storage.local.get([url], (result) => {
    const theme = result[url] || "default";
    if (theme !== "default") {
      const cssPath = `themes/${theme}.css`;
      const cssURL = chrome.runtime.getURL(cssPath);
      console.log("Auto-applying saved theme:", theme, "from", cssURL);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssURL;
      link.setAttribute("data-theme", theme);
      document.head.appendChild(link);
    }
  });
})();
