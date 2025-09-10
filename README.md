# 🌗 Theme Switcher Pro

A simple Chrome extension to switch between multiple themes (Dark, Light, Sepia, High Contrast) on **any website**.  
Built with [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/) and pure CSS injection.

---

## ✨ Features
- 🔄 Switch between **Dark, Light, Sepia, High Contrast** themes.
- 💾 Remembers your choice per domain (stored locally).
- 🎨 Non-intrusive CSS: keeps images, videos, and logos untouched.
- ⚡ Lightweight, no external libraries.

---

## 📂 Project Structure
```
theme-switcher-pro/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── icon.png
├── themes/
|  ├── dark.css
|  ├── light.css
|  ├── sepia.css
└─ └── contrast.css
```
---

## 🚀 Installation (Developer Mode)

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/theme-switcher-pro.git
2. Open Chrome and go to chrome://extensions/.

3. Enable Developer mode (top-right toggle).

4. Click Load unpacked and select the project folder.

5. The extension should now appear in your toolbar.
