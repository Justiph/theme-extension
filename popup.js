document.getElementById("applyTheme").addEventListener("click", async () => {
  let theme = document.getElementById("themeSelect").value;

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let url = new URL(tab.url).hostname;

  // Save choice for this domain
  chrome.storage.local.set({ [url]: theme });

  // Inject content.js and send theme
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  }, () => {
    chrome.tabs.sendMessage(tab.id, { theme });
  });
});
