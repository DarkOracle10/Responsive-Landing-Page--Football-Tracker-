# ⚽ Football Training Tracker

A modern, responsive landing page for a football training tracking application. Built with vanilla HTML, CSS, and JavaScript - demonstrating clean code practices, accessibility, and performance optimization.

![Football Tracker Preview](https://via.placeholder.com/1200x630/00a86b/ffffff?text=Football+Training+Tracker)

## 🌐 Live Demo

**[View Live Demo](https://your-username.netlify.app)**

## ✨ Features

### Core Functionality
- 📊 **Interactive Workout Logger** - Log workouts with type, duration, intensity, and notes
- 💾 **LocalStorage Persistence** - Data persists across sessions
- 📥 **CSV Export** - Export your workout history to CSV
- 🌙 **Dark Mode** - System-aware theme with manual toggle
- 📱 **Fully Responsive** - Mobile-first design with 4 breakpoints

### Technical Highlights
- ♿ **WCAG 2.1 AA Accessible** - Proper ARIA labels, keyboard navigation, focus management
- 🚀 **Progressive Web App** - Installable, works offline with service worker
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- ⚡ **Performance Optimized** - Intersection Observer for animations, debounced scroll handlers
- 🎨 **CSS Custom Properties** - Design token system for easy theming

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Markup** | HTML5, Semantic Elements |
| **Styling** | CSS3, Custom Properties, Flexbox, Grid |
| **Scripting** | Vanilla JavaScript (ES6+) |
| **PWA** | Service Worker, Web App Manifest |
| **Hosting** | Netlify |

## 📁 Project Structure

```
football-tracker/
├── index.html          # Main HTML file with semantic structure
├── style.css           # Complete stylesheet with design system
├── script.js           # Interactive functionality
├── manifest.json       # PWA manifest
├── sw.js              # Service worker for offline support
├── package.json        # Project metadata & scripts
├── vite.config.js      # Vite configuration (optional)
├── netlify.toml        # Netlify deployment config
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (for development server)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/football-tracker.git
   cd football-tracker
   ```

2. **Install dependencies** (optional, for dev server)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Without Node.js
Simply open `index.html` in your browser - no build step required!

## 📊 Lighthouse Scores

| Category | Score |
|----------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| PWA | ✅ |

## 🎨 Design System

### Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--primary-color` | `#00a86b` | Main brand color |
| `--secondary-color` | `#003d82` | Accent/gradients |
| `--accent-color` | `#ffd700` | CTAs, highlights |

### Typography
- **Font Family**: Segoe UI, -apple-system, BlinkMacSystemFont, Roboto
- **Scale**: 0.75rem to 3.5rem (responsive)

### Spacing Scale
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
--spacing-3xl: 4rem;
```

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Adding Workout Types
Edit the `WORKOUT_TYPES` object in `script.js`:
```javascript
const WORKOUT_TYPES = {
  your_type: { label: 'Your Label', icon: '🎯' },
};
```

## 📱 PWA Installation

### Desktop (Chrome/Edge)
1. Visit the live demo
2. Click the install icon in the address bar
3. Confirm installation

### Mobile (Android)
1. Visit the live demo in Chrome
2. Tap "Add to Home Screen" prompt
3. Or use browser menu → "Install app"

### iOS
1. Visit in Safari
2. Tap Share button
3. Select "Add to Home Screen"

## 🚢 Deployment

### Netlify (Recommended)

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repo

2. **Configure Build**
   - Build command: `npm run build` (or leave empty)
   - Publish directory: `.` or `dist`

3. **Deploy**
   - Push to main branch triggers auto-deploy

### Manual Deploy
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Other Platforms
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Push to `gh-pages` branch
- **Cloudflare Pages**: Connect repository in dashboard

## 🧪 Testing

### Manual Testing Checklist
- [ ] Responsive design (320px - 1920px)
- [ ] Dark mode toggle
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Screen reader compatibility
- [ ] Form validation
- [ ] Workout CRUD operations
- [ ] CSV export functionality
- [ ] Offline functionality

### Lighthouse Audit
```bash
npm install -g lighthouse
lighthouse https://your-site.netlify.app --view
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@DarkOrace10](https://github.com/DarkOrace10)
- LinkedIn: [Amir Aeiny](https://www.linkedin.com/in/amir-aeiny-dev)

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons: Native emoji (no external dependencies)
- Fonts: System font stack for optimal performance

-----

<p align="center">
  Made with ❤️ for footballers worldwide
</p>

<p align="center">
  <a href="#-football-training-tracker">Back to top ↑</a>
</p>
