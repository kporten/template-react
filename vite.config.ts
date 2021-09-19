import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// TODO Uncomment the following line for the library mode
// import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [reactRefresh()],
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
