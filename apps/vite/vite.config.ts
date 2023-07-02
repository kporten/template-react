import path from 'node:path';

import reactPlugin from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig((env) => {
  return {
    plugins: [reactPlugin(), visualizer()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    ...(env.mode === 'development' && {
      define: {
        // https://github.com/jotaijs/jotai-devtools/issues/82
        'process.platform': `'${process.platform}'`,
      },
    }),
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
  };
});
