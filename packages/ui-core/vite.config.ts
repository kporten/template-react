import path from 'node:path';

import reactPlugin from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import dtsPlugin from 'vite-plugin-dts';
import { defineConfig, type UserConfig } from 'vitest/config';

import { peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig((env) => {
  return {
    plugins: [
      reactPlugin(),
      dtsPlugin({
        include: ['src', 'presets'],
        exclude: ['**/*.stories.*', '**/*.test.*', '**/test/**'],
        insertTypesEntry: true,
      }),
      visualizer(),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    ...(env.command === 'build' && {
      define: {
        'process.env.NODE_ENV': "'production'",
      },
    }),
    build: {
      target: 'esnext',
      minify: false,
      lib: {
        entry: {
          'ui-core': './src/index.ts',
        },
        formats: ['es'],
      },
      rollupOptions: {
        external: Object.keys(peerDependencies),
      },
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
  } satisfies UserConfig;
});
