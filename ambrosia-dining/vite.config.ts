import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL: base './' ensures assets load correctly on GitHub Pages (relative paths)
  base: './', 
  define: {
    // Injecting the key directly for GitHub Pages since it doesn't support server-side .env vars at runtime easily
    'process.env.API_KEY': JSON.stringify("AlzaSyCk3C2jSFw4dvlnTeEr25MvhSiGB6tqjyA") 
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});