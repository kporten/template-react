import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// ? Uncomment the following line for the library mode
// import { peerDependencies } from './package.json';

// ? https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // ? Uncomment the build block for the library mode
  // build: {
  //   lib: {
  //     entry: './src/components/App.tsx',
  //     formats: ['cjs', 'es'],
  //   },
  //   rollupOptions: {
  //     external: Object.keys(peerDependencies),
  //   },
  // },
});
