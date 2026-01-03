## 📂 Dropdown Menu

A modern **HTML + CSS + JavaScript** dropdown menu that provides a smooth,
animated, and interactive user experience with **dynamic icons and hover effects**.

This snippet focuses on **UI polish, CSS variables, and clean DOM logic** rather than frameworks.

---

## 📁 Project Structure

```bash
Dropdown-Menu/
│
├── index.html        # Main HTML structure for dropdown and button
├── style.css         # Styling, animations, transitions, and layout
├── script.js         # Dropdown logic and dynamic interactions
└── README.md         # Documentation
```

---

## ✨ Features

- Smooth dropdown open / close animation
- Rotating arrow indicator
- Dynamic SVG icon switching on selection
- Floating icon that follows cursor on hover
- CSS variables controlled via JavaScript
- Responsive and lightweight
- No external libraries or frameworks

---

## 🧠 How It Works

1. Clicking the main button toggles the dropdown using JavaScript.
2. Dropdown height, opacity, and arrow rotation are controlled via CSS custom properties.
3. List items are rendered dynamically from JavaScript.
4. On hover:
    - Background highlight animates smoothly.
    - A floating icon follows the cursor.

5. On click:
    - Selected platform name and icon replace the main button content.
    - Dropdown closes automatically.

Core idea:
**JavaScript updates CSS variables → CSS handles animation**.

---

## 🌐 Browser Support

| Browser     | Supported Version | Status |
| ----------- | ----------------- | ------ |
| **Chrome**  | 114+              | ✅ Yes  |
| **Edge**    | 114+              | ✅ Yes  |
| **Safari**  | 16+               | ✅ Yes  |
| **Firefox** | 120+              | ✅ Yes  |

---


## 🚀 Getting Started

1. Clone or download the project.
2. Open `index.html` in any modern browser.
3. Click the dropdown button.
4. Hover over items to see the floating icon.
5. Click an item to select it.

No setup required. Works fully offline.

---

## ⚠️ Notes

- SVG icons are embedded directly for better performance.
- Dropdown height is calculated dynamically based on item count.
- Cursor styling is intentionally customized for visual effect.
- Accessibility roles (ARIA) are not included by default.

---

## 👩‍💻 Author

Made with ❤️ by **ShakalBhau0001**

---



