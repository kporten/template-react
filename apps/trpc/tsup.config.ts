import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    entry: ['./src/server.ts'],
    treeshake: true,
    dts: true,
  };
});
