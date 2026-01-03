/**
 * Football Training Tracker - Main JavaScript
 * @author [Your Name]
 * @version 2.0.0
 * @description Complete interactive functionality for the Football Tracker landing page
 */

// =============================================================================
// Constants & Configuration
// =============================================================================
const STORAGE_KEYS = {
  THEME: 'football-tracker-theme',
  WORKOUTS: 'football-tracker-workouts',
};

const WORKOUT_TYPES = {
  cardio: { label: 'Cardio / Running', icon: '🏃' },
  strength: { label: 'Strength Training', icon: '💪' },
  skills: { label: 'Ball Skills', icon: '⚽' },
  match: { label: 'Match / Scrimmage', icon: '🏟️' },
  recovery: { label: 'Recovery', icon: '🧘' },
};

// =============================================================================
// Utility Functions
// =============================================================================

/**
 * Safely get element by ID with error handling
 * @param {string} id - Element ID
 * @returns {HTMLElement|null}
 */
const getElement = (id) => document.getElementById(id);

/**
 * Format date to readable string
 * @param {Date|string} date - Date to format
 * @returns {string}
 */
const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Generate unique ID
 * @returns {string}
 */
const generateId = () => `workout_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

/**
 * Debounce function for performance
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function}
 */
const debounce = (func, wait = 100) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// =============================================================================
// Toast Notification System
// =============================================================================
const Toast = {
  container: null,
  
  init() {
    this.container = getElement('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      this.container.className = 'toast-container';
      this.container.setAttribute('role', 'alert');
      this.container.setAttribute('aria-live', 'polite');
      document.body.appendChild(this.container);
    }
  },
  
  /**
   * Show a toast notification
   * @param {string} message - Message to display
   * @param {string} type - Toast type: 'success' | 'error' | 'warning'
   * @param {number} duration - Duration in ms
   */
  show(message, type = 'success', duration = 4000) {
    if (!this.container) this.init();
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon" aria-hidden="true">${type === 'success' ? '✅' : type === 'error' ? '❌' : '⚠️'}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close" aria-label="Dismiss notification">&times;</button>
    `;
    
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => this.dismiss(toast));
    
    this.container.appendChild(toast);
    
    // Auto dismiss
    setTimeout(() => this.dismiss(toast), duration);
  },
  
  dismiss(toast) {
    toast.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => toast.remove(), 300);
  },
};

// =============================================================================
// Theme Management (Dark Mode)
// =============================================================================
const ThemeManager = {
  init() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    this.setTheme(theme);
    this.setupToggle();
    this.setupSystemThemeListener();
  },
  
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    
    // Update meta theme color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#111827' : '#00a86b');
    }
  },
  
  toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
    Toast.show(`${newTheme === 'dark' ? '🌙 Dark' : '☀️ Light'} mode activated`, 'success', 2000);
  },
  
  setupToggle() {
    const toggle = getElement('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => this.toggle());
    }
  },
  
  setupSystemThemeListener() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEYS.THEME)) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  },
};

// =============================================================================
// Navigation Management
// =============================================================================
const Navigation = {
  hamburger: null,
  navLinks: null,
  header: null,
  
  init() {
    this.hamburger = getElement('hamburger');
    this.navLinks = getElement('nav-links');
    this.header = document.querySelector('.header');
    
    if (this.hamburger && this.navLinks) {
      this.setupMobileMenu();
      this.setupSmoothScroll();
      this.setupScrollEffects();
      this.setupActiveLinks();
    }
  },
  
  setupMobileMenu() {
    this.hamburger.addEventListener('click', () => {
      const isExpanded = this.hamburger.getAttribute('aria-expanded') === 'true';
      this.hamburger.setAttribute('aria-expanded', !isExpanded);
      this.navLinks.classList.toggle('active');
    });
    
    // Close menu on link click
    this.navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          this.hamburger.setAttribute('aria-expanded', 'false');
          this.navLinks.classList.remove('active');
        }
      });
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.hamburger.contains(e.target) && !this.navLinks.contains(e.target)) {
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.navLinks.classList.remove('active');
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.navLinks.classList.remove('active');
      }
    });
  },
  
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  },
  
  setupScrollEffects() {
    const onScroll = debounce(() => {
      if (window.scrollY > 50) {
        this.header?.classList.add('scrolled');
      } else {
        this.header?.classList.remove('scrolled');
      }
    }, 10);
    
    window.addEventListener('scroll', onScroll, { passive: true });
  },
  
  setupActiveLinks() {
    const sections = document.querySelectorAll('section[id]');
    
    const onScroll = debounce(() => {
      const scrollPos = window.scrollY + 100;
      
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height) {
          this.navLinks.querySelectorAll('a').forEach((link) => {
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === `#${id}`) {
              link.setAttribute('aria-current', 'page');
            }
          });
        }
      });
    }, 50);
    
    window.addEventListener('scroll', onScroll, { passive: true });
  },
};

// =============================================================================
// Scroll Animations (Intersection Observer)
// =============================================================================
const ScrollAnimations = {
  init() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, options);
    
    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });
  },
};

// =============================================================================
// Stats Counter Animation
// =============================================================================
const StatsCounter = {
  init() {
    const stats = document.querySelectorAll('.stat-number[data-count]');
    if (!stats.length) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    stats.forEach((stat) => observer.observe(stat));
  },
  
  animateCounter(element) {
    const target = parseInt(element.dataset.count, 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      // Format number with suffix
      let display = Math.floor(current);
      if (target >= 10000) {
        display = Math.floor(current / 1000) + 'K+';
      } else if (target === 98) {
        display = Math.floor(current) + '%';
      } else {
        display = Math.floor(current).toLocaleString() + '+';
      }
      
      element.textContent = display;
    }, 16);
  },
};

// =============================================================================
// Workout Logger (LocalStorage)
// =============================================================================
const WorkoutLogger = {
  workouts: [],
  
  init() {
    this.loadWorkouts();
    this.setupForm();
    this.setupExport();
    this.renderWorkouts();
  },
  
  loadWorkouts() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WORKOUTS);
      this.workouts = saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading workouts:', e);
      this.workouts = [];
    }
  },
  
  saveWorkouts() {
    try {
      localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(this.workouts));
    } catch (e) {
      console.error('Error saving workouts:', e);
      Toast.show('Failed to save workout. Storage may be full.', 'error');
    }
  },
  
  setupForm() {
    const form = getElement('workout-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const workout = {
        id: generateId(),
        type: formData.get('type'),
        duration: parseInt(formData.get('duration'), 10),
        intensity: parseInt(formData.get('intensity'), 10),
        notes: formData.get('notes')?.trim() || '',
        date: new Date().toISOString(),
      };
      
      // Validation
      if (!workout.type) {
        Toast.show('Please select a workout type', 'error');
        return;
      }
      
      if (!workout.duration || workout.duration < 1) {
        Toast.show('Please enter a valid duration', 'error');
        return;
      }
      
      if (!workout.intensity || workout.intensity < 1 || workout.intensity > 10) {
        Toast.show('Intensity must be between 1 and 10', 'error');
        return;
      }
      
      // Add workout
      this.workouts.unshift(workout);
      this.saveWorkouts();
      this.renderWorkouts();
      form.reset();
      
      Toast.show('Workout logged successfully! 💪', 'success');
    });
  },
  
  deleteWorkout(id) {
    this.workouts = this.workouts.filter((w) => w.id !== id);
    this.saveWorkouts();
    this.renderWorkouts();
    Toast.show('Workout deleted', 'success', 2000);
  },
  
  renderWorkouts() {
    const list = getElement('workout-list');
    if (!list) return;
    
    if (this.workouts.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon" aria-hidden="true">🏃</div>
          <p>No workouts yet. Log your first one!</p>
        </div>
      `;
      return;
    }
    
    list.innerHTML = this.workouts
      .slice(0, 10) // Show last 10
      .map((workout) => {
        const type = WORKOUT_TYPES[workout.type] || { label: workout.type, icon: '🏋️' };
        return `
          <div class="workout-item" data-id="${workout.id}">
            <div class="workout-item-header">
              <span class="workout-type">${type.icon} ${type.label}</span>
              <span class="workout-date">${formatDate(workout.date)}</span>
            </div>
            <div class="workout-stats">
              <span>⏱️ ${workout.duration} min</span>
              <span>🔥 Intensity: ${workout.intensity}/10</span>
              ${workout.notes ? `<span>📝 ${workout.notes.substring(0, 30)}${workout.notes.length > 30 ? '...' : ''}</span>` : ''}
            </div>
            <button 
              class="workout-delete" 
              onclick="WorkoutLogger.deleteWorkout('${workout.id}')"
              aria-label="Delete workout from ${formatDate(workout.date)}"
            >
              🗑️ Delete
            </button>
          </div>
        `;
      })
      .join('');
  },
  
  setupExport() {
    const exportBtn = getElement('export-btn');
    if (!exportBtn) return;
    
    exportBtn.addEventListener('click', () => {
      if (this.workouts.length === 0) {
        Toast.show('No workouts to export', 'warning');
        return;
      }
      
      // Create CSV content
      const headers = ['Date', 'Type', 'Duration (min)', 'Intensity', 'Notes'];
      const rows = this.workouts.map((w) => [
        new Date(w.date).toISOString(),
        WORKOUT_TYPES[w.type]?.label || w.type,
        w.duration,
        w.intensity,
        `"${(w.notes || '').replace(/"/g, '""')}"`,
      ]);
      
      const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
      
      // Download
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `football-tracker-workouts-${new Date().toISOString().split('T')[0]}.csv`;
      link.click();
      URL.revokeObjectURL(url);
      
      Toast.show('Workouts exported successfully! 📥', 'success');
    });
  },
};

// Make WorkoutLogger globally accessible for onclick handlers
window.WorkoutLogger = WorkoutLogger;

// =============================================================================
// Contact Form
// =============================================================================
const ContactForm = {
  init() {
    const form = getElement('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = {
        name: formData.get('name')?.trim(),
        email: formData.get('email')?.trim(),
        message: formData.get('message')?.trim(),
      };
      
      // Validation
      if (!data.name || data.name.length < 2) {
        Toast.show('Please enter your name', 'error');
        return;
      }
      
      if (!data.email || !this.isValidEmail(data.email)) {
        Toast.show('Please enter a valid email address', 'error');
        return;
      }
      
      if (!data.message || data.message.length < 10) {
        Toast.show('Please enter a message (at least 10 characters)', 'error');
        return;
      }
      
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="loading"></span> Sending...';
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      Toast.show('Message sent successfully! We\'ll get back to you soon. 📧', 'success');
      form.reset();
      
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    });
  },
  
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
};

// =============================================================================
// Dynamic Year in Footer
// =============================================================================
const updateFooterYear = () => {
  const yearEl = getElement('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

// =============================================================================
// Keyboard Navigation Improvements
// =============================================================================
const KeyboardNav = {
  init() {
    // Add visible focus indicator when using keyboard
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });
    
    document.body.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });
  },
};

// =============================================================================
// Performance: Lazy Load Images (if any added later)
// =============================================================================
const LazyLoader = {
  init() {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      document.querySelectorAll('img[data-src]').forEach((img) => {
        img.src = img.dataset.src;
      });
    } else {
      // Fallback for older browsers
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach((img) => {
        observer.observe(img);
      });
    }
  },
};

// =============================================================================
// Initialize Everything
// =============================================================================
const App = {
  init() {
    // Core functionality
    Toast.init();
    ThemeManager.init();
    Navigation.init();
    
    // Animations
    ScrollAnimations.init();
    StatsCounter.init();
    
    // Interactive features
    WorkoutLogger.init();
    ContactForm.init();
    
    // Utilities
    updateFooterYear();
    KeyboardNav.init();
    LazyLoader.init();
    
    console.log('🎉 Football Tracker initialized successfully!');
  },
};

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
