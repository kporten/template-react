import path from 'path';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// TODO Uncomment the following line for the library mode
// import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '~components': path.resolve('./src/components'),
      '~messages': path.resolve('./src/messages'),
      '~pages': path.resolve('./src/pages'),
      '~providers': path.resolve('./src/providers'),
      '~store': path.resolve('./src/store'),
      '~utils': path.resolve('./src/utils'),
      '~Test': path.resolve('./src/Test.tsx'),
    },
  },
  // TODO Uncomment the build block for the library mode
  // build: {
  //   lib: {
  //     entry: 'src/App.tsx',
  //     formats: ['umd', 'es'],
  //     name: 'template-react',
  //   },
  //   rollupOptions: {
  //     external: Object.keys(peerDependencies),
  //   },
  // },
});
