import path from 'node:path';

import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteWebfontDownload as webfontPlugin } from 'vite-plugin-webfont-dl';

// ? https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin(),
    webfontPlugin([
      'https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap',
    ]),
  ],
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  // ? https://vitest.dev/config/
  test: {
    coverage: {
      branches: 90,
      lines: 90,
      include: ['src/!(test)/**'],
    },
    environment: 'jsdom',
  },
});
