import path from 'node:path';

import pluginReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteWebfontDownload as pluginWebfont } from 'vite-plugin-webfont-dl';

// ? https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginWebfont([
      'https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap',
    ]),
  ],
  resolve: {
    alias: {
      '@/components': path.resolve('src/components'),
      '@/context': path.resolve('src/context'),
      '@/features': path.resolve('src/features'),
      '@/hooks': path.resolve('src/hooks'),
      '@/layout': path.resolve('src/layout'),
      '@/messages': path.resolve('src/messages'),
      '@/routes': path.resolve('src/routes'),
      '@/store': path.resolve('src/store'),
      '@/test': path.resolve('src/test'),
      '@/types': path.resolve('src/types'),
      '@/utils': path.resolve('src/utils'),
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
