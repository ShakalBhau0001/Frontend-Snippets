# 📊 Progress Bar

A simple and interactive **HTML + CSS (with optional JavaScript)** based
progress bar that visually updates based on user selection.

This project demonstrates how a progress bar can be controlled using
radio buttons and smooth CSS transitions.

---

## 📁 Project Structure

Progress-Bar/
│
├── index.html       # Main HTML structure
├── style.css        # Styling and progress animations
└── README.md        # Project documentation

---

## 💡 Features

- Interactive progress control using radio buttons.
- Smooth width and color transitions.
- Clean and minimal UI design.
- No external libraries required.
- Lightweight and beginner-friendly.
- Works on all modern browsers.

---

## 🧠 How It Works

1. The progress percentage is selected using radio buttons.
2. Each radio button represents a fixed progress value.
3. CSS `:checked` selectors detect the active option.
4. The progress bar width and color update accordingly using sibling selectors.

### Core Concept (CSS Logic)

```css
#fifty:checked ~ .progress > .progress-bar {
  width: 50%;
  background-color: #f2b01e;
}
```

> No JavaScript logic is required for the basic version — the interaction is handled entirely using CSS selectors.


---

## 🎨 Visual Behavior

- **Low progress** → red/orange shades
- **Medium progress** → yellow shades
- **Full progress** → green shade
- **Smooth animation** when switching between values

---

## 🌐 Browser Support

| Browser     | Supported Version | Status |
| ----------- | ----------------- | ------ |
| **Chrome**  | 114+              | ✅ Yes  |
| **Edge**    | 114+              | ✅ Yes  |
| **Safari**  | 17+               | ✅ Yes  |
| **Firefox** | 125+              | ✅ Yes  |

---

## 🚀 Getting Started

1. Download or clone the project.
2. Open `index.html` in any modern browser.
3. Click on a percentage option.
4. Watch the progress bar update instantly 📊

---

## 📌 Use Cases

- UI component demos
- CSS learning projects
- Dashboard mockups
- Progress visualization concepts

---

## 👩‍💻 Author

Made with ❤️ by **ShakalBhau0001**

---
