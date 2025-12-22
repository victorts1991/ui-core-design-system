import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

/**
 * Vitest Configuration
 * Sets up the testing environment using jsdom to simulate a browser.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // We'll create this file next to handle global test imports
    setupFiles: './src/test/setup.ts',
  },
});