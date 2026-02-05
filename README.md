# ⚽ Football Training Tracker

> A Progressive Web App (PWA) for managing football training sessions with offline support, dark mode, and full accessibility compliance.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://darkoracle10.github.io/Responsive-Landing-Page--Football-Tracker-/)
[![Lighthouse](https://img.shields.io/badge/lighthouse-95%2B-brightgreen?style=for-the-badge)](https://github.com/GoogleChrome/lighthouse)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-blue?style=for-the-badge)](https://www.w3.org/WAI/WCAG21/quickref/)

## ✨ Features

### Progressive Web App
- 📱 **Installable** - Add to home screen on mobile/desktop
- 🔌 **Offline Support** - Full functionality without internet
- ⚡ **Fast Loading** - Service worker caching
- 📊 **Local Storage** - Data persists between sessions

### Accessibility & Performance
- ♿ **WCAG 2.1 AA Compliant** - Screen reader optimized
- 🚀 **Lighthouse 95+** - High performance scores
- 🌓 **Dark Mode** - System-aware with manual toggle
- 📱 **Responsive Design** - Works on all screen sizes

### Training Features
- ✅ Log training sessions with date/time
- 📝 Track exercises, sets, and reps
- 💾 Export data to CSV
- 📈 View training history
- 🏃‍♂️ Recovery tracking
- ⚽ Position-specific exercises

## 🎬 Demo

### Screenshots
> 📸 Coming soon - Desktop and mobile screenshots

### Try It Live
**[Open Live Demo →](https://darkoracle10.github.io/Responsive-Landing-Page--Football-Tracker-/)**

Or run locally:
```bash
# Clone repository
git clone https://github.com/DarkOracle10/Responsive-Landing-Page--Football-Tracker-.git
cd Responsive-Landing-Page--Football-Tracker-

# Open in browser
# Option 1: Direct file
open index.html  # macOS
start index.html  # Windows

# Option 2: Local server (recommended for PWA features)
python -m http.server 8000
# Visit: http://localhost:8000
```

## 📲 Installation as PWA

### Desktop (Chrome/Edge)
1. Visit the live demo
2. Click install icon (⊕) in address bar
3. Click "Install"

### Mobile (iOS/Android)
1. Open in Safari/Chrome
2. Tap share button
3. Select "Add to Home Screen"

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties
- **JavaScript ES6+** - Vanilla JS, no frameworks
- **Service Workers** - Offline functionality
- **LocalStorage API** - Data persistence
- **PWA Manifest** - Installation metadata

## 📁 Project Structure

```
.
├── index.html           # Main HTML structure
├── css/
│   ├── style.css       # Main styles
│   └── dark-mode.css   # Dark theme styles
├── js/
│   ├── app.js          # Main application logic
│   ├── storage.js      # LocalStorage handling
│   └── sw.js           # Service worker
├── manifest.json       # PWA manifest
└── icons/              # App icons (various sizes)
```

## 🎯 Features in Detail

### Training Session Logging
- Date picker with default to today
- Exercise type dropdown
- Sets, reps, weight tracking
- Notes field for additional details
- Save to local storage

### Data Export
- Export all sessions to CSV
- Import CSV to restore data
- Formatted date/time in exports

### Dark Mode
- Automatic system preference detection
- Manual toggle available
- Smooth transitions
- Separate stylesheet for maintainability

### Accessibility
- Keyboard navigation support
- ARIA labels on all interactive elements
- High contrast ratios (WCAG AA)
- Screen reader tested
- Focus indicators

## 🧪 Testing

### Lighthouse Audit
```bash
# Run Lighthouse
npx lighthouse http://localhost:8000 --view
```

**Current Scores:**

- 🟢 Performance: 95+
- 🟢 Accessibility: 100
- 🟢 Best Practices: 95+
- 🟢 SEO: 100
- 🟢 PWA: ✓ Installable

### Accessibility Testing
Tested with:

- NVDA (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)
- WAVE browser extension

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions welcome! Areas for improvement:

- [ ] Add charts/visualization for training data
- [ ] Exercise video/gif library
- [ ] Social sharing features
- [ ] Training program templates
- [ ] REST API integration
- [ ] User authentication

## 📄 License

MIT License - See LICENSE file

## 👤 Author

**Amir Aeiny**

- GitHub: @DarkOracle10
- LinkedIn: amir-aeiny-dev
- Email: amir.aeiny10@gmail.com

---

⭐ Star this repo if you find it useful!
