import path from 'node:path';

import reactPlugin from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin({ plugins: [['@swc-jotai/debug-label', {}]] }),
    visualizer(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  build: {
    target: 'esnext',
  },
  // https://vitest.dev/config/
  test: {
    coverage: {
      provider: 'v8',
      branches: 90,
      lines: 90,
      exclude: ['**/__mocks__/**', '**/test/**'],
      reporter: ['text', 'html'],
    },
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    typecheck: {
      include: ['**/*.{ts,tsx}'],
    },
  },
});
