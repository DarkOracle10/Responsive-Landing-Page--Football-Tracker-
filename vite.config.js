import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path
  base: '/',
  
  // Development server configuration
  server: {
    port: 5173,
    open: true,
    cors: true,
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
  },
  
  // Build configuration
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate sourcemaps for debugging
    sourcemap: true,
    
    // Minification
    minify: 'terser',
    
    // Terser options
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    // Rollup options
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
    
    // CSS code splitting
    cssCodeSplit: false,
    
    // Asset handling
    assetsInlineLimit: 4096,
  },
  
  // CSS configuration
  css: {
    postcss: {
      plugins: [
        // Autoprefixer will be loaded from postcss.config.js
      ],
    },
  },
  
  // Optimization
  optimizeDeps: {
    include: [],
  },
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify('2.0.0'),
  },
});
