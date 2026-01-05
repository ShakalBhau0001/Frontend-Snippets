# 🎯 Button Hover

A clean and modern **HTML + CSS** project showcasing **four unique hover button animations** on a single page.
Each button demonstrates a different hover interaction technique using pure CSS — no JavaScript required.

This project is ideal for learning **CSS transitions, transforms, pseudo-elements, and hover effects**.

---

## 📁 Project Structure

```bash
Button-Hover/
│
├── index.html        # Main HTML file containing all buttons
├── style.css         # Combined and scoped CSS for all hover effects
└── README.md         # Project documentation
```

---

## ✨ Features

- Four distinct hover button animations
- Fully responsive layout
- Pure HTML & CSS (no JavaScript)
- Clean, scoped CSS to avoid conflicts
- Beginner-friendly and easy to customize
- Smooth transitions and modern UI effects
- Works across all modern browsers

---

## 🧠 How It Works

Each button is wrapped inside a uniquely scoped container:

- `.btn-1`
- `.btn-2`
- `.btn-3`
- `.btn-4`

This prevents CSS selector conflicts and allows all hover animations to coexist on the same page without breaking.

### Core Concept (Scoped CSS)

```css
.btn-1 a::before {
  content: "DOWNLOAD";
  transform: translateY(-100%);
}

.btn-1 a:hover::before {
  transform: translateY(0);
}
```

Each button uses a different combination of:
- `::before` / `::after`
- `transform`
- `transition`
- `perspective`
- `mix-blend-mode`

---

## 🎨 Button Effects Overview

| Button | Effect Type |
|------|-------------|
| Button 1 | Slide-down overlay text |
| Button 2 | 3D flip animation |
| Button 3 | Perspective layered hover |
| Button 4 | Expanding ripple + lift |

---

## 🌐 Browser Support

| Browser     | Supported Version | Status |
|------------|------------------|--------|
| **Chrome** | 114+              | ✅ Yes |
| **Edge**   | 114+              | ✅ Yes |
| **Safari** | 17+               | ✅ Yes |
| **Firefox**| 125+              | ✅ Yes |

---

## 🚀 Getting Started

1. Download or clone the project.
2. Open `index.html` in any modern browser.
3. Scroll through the page.
4. Hover over each button to see the animations ✨

---

## 📌 Use Cases

- UI animation demos
- CSS hover effect practice
- Frontend portfolio components
- Learning CSS transitions & transforms
- Button animation inspiration

---

## 👩‍💻 Author

Made with ❤️ by **ShakalBhau0001**

---
