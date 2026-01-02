# 💡 Frontend-Snippets

A collection of **small, creative, and interactive frontend projects** made using **HTML5**, **CSS3**, and **JavaScript**.  
Each snippet is lightweight, responsive, and focused on a single concept or UI element — perfect for learning and reusing in web apps!

---

## 📁 Folder Structure
```
Frontend-Snippets/
│
├── Daily-Reward-Popover/                 # 🎁 Daily reward popover UI (HTML-only project)
│   ├── index.html                        # Main HTML file containing the popover structure and button
│   ├── style.css                         # Styling for button, layout, and popover animation
│   └── README.md                         # Documentation explaining features & usage
│
├── Live-Color-Preview/                   # 🎨 Real-time color preview project
│   ├── index.html                        # Contains color input and structure for live preview
│   ├── style.css                         # CSS for centering layout and styling color picker
│   └── README.md                         # Documentation file with instructions & support info
│
├── Simple-Image-Preview/                 # 🖼️ Instant image preview project
│   ├── index.html                        # Main HTML structure with file input and preview box
│   ├── style.css                         # Styling for preview layout and responsiveness
│   ├── script.js                         # JS logic for displaying uploaded image instantly
│   └── README.md                         # Documentation describing usage and functionality
│
├── Progress-Bar/                         # 📊 CSS-based interactive progress bar
│   ├── index.html                        # Progress bar structure with radio inputs
│   ├── style.css                         # Progress bar styling and transition effects
│   └── README.md                         # Documentation explaining CSS logic and usage
│
└── README.md                             # 🧾 Main repository documentation

```

---

## 🧩 Projects Included

### 🎁 1. Daily Reward Popover
A clean and minimal **Daily Reward Popover UI** built using **HTML5 and CSS3**.  
It demonstrates how to use the **HTML Popover API** to show/hide a reward message — *without JavaScript!* ⚡

#### ✨ Features
- No JavaScript needed — powered by native HTML attributes  
- Modern button UI with smooth shadows  
- Fully responsive layout  
- Simulates daily reward claim (like in mobile games)

#### 🧱 Tech Stack
- **HTML5**
- **CSS3 (Flexbox & Shadow Effects)**
- **HTML Popover API**

#### 💻 How to Run
1. Open the folder `Daily-Reward-Popover/`
2. Launch `index.html` in your browser  
3. Click the **🎁 Claim Daily Reward** button to see the popover

---

### 🎨 2. Live Color Preview
A simple **HTML + JavaScript** snippet that allows users to preview colors live by changing the page’s background color in real time.

#### ✨ Features
- Real-time color preview  
- Lightweight and responsive  
- Uses only one HTML input element and a tiny JS line  
- Works smoothly on all browsers

#### 🧠 How It Works
The background color updates instantly when the color input value changes:
```html
<input type="color" oninput="preview.style.backgroundColor = this.value">
```

#### 🧱 Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

#### 💻 How to Run
1. Open the folder `Live-Color-Preview/`
2. Run `index.html` in any browser  
3. Pick a color and see it change live 🎨

---

### 🖼️ 3. Simple Image Preview
A clean and elegant **Image Preview App** that shows an image instantly when selected — before uploading it.

#### ✨ Features
- Upload and instantly preview any image file  
- Supports `.jpg`, `.png`, `.gif`, etc.  
- Responsive and lightweight design  
- Works offline in any browser  

#### 🧠 How It Works
- JavaScript listens for the file input change  
- Uses `URL.createObjectURL()` to generate a temporary preview  
- Displays image in the preview container instantly

#### 🧱 Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

#### 💻 How to Run
1. Open the folder `Simple-Image-Preview/`
2. Launch `index.html` in your browser  
3. Select any image — preview appears instantly ⚡

---

#### 📊 4. Progress Bar

A clean and interactive **CSS-based Progress Bar** that visually updates based on user selection.
This snippet demonstrates how to control UI state using **HTML radio inputs** and **pure CSS selectors**, without relying on JavaScript.

#### ✨ Features
- Interactive progress selection (5%, 25%, 50%, 75%, 100%)
- Smooth width and color transition animations
- No JavaScript required (CSS-only logic)
- Lightweight and easy to understand
- Ideal for learning CSS state handling

#### 🧠 How It Works
- Each progress option is represented by a radio button
- When a radio input is checked, CSS `:checked` state is triggered

#### 🧱 Tech Stack
- **HTML5**
- **CSS3 (Transitions & Selectors)**

#### 💻 How to Run
1. Open the folder `Progress-Bar/`
2. Launch `index.html` in your browser  
3. Click on any percentage label
4. Watch the progress bar update instantly 📊

---

## ⚙️ Requirements
No setup needed — everything runs in-browser.

- Recommended Browsers: **Chrome**, **Edge**, **Firefox**, or **Safari**
- Internet not required (fully offline)

---

## 🌟 Future Enhancements
- Add dark/light mode for all snippets  
- Include more HTML API demos (Popover, Dialog, etc.)  
- Add animation-based mini-snippets (like confetti, buttons, loaders)  
- Combine all snippets into one interactive dashboard  

---

## 🧑‍💻 Author
**Developed by:** **[Shakal Bhau ❤️]**  
**GitHub:** [**ShakalBhau0001**](https://github.com/ShakalBhau0001)

---
