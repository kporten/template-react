import path from 'node:path';

import reactPlugin from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin(), visualizer()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  // https://vitest.dev/config/
  test: {
    coverage: {
      provider: 'c8',
      branches: 90,
      lines: 90,
      exclude: ['src/test/**'],
    },
    environment: 'happy-dom',
    mockReset: true,
    setupFiles: ['./src/test/setup.ts'],
  },
});
