import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    entry: ['./src/server.ts'],
    external: ['.prisma/client'],
    treeshake: true,
    dts: true,
  };
});
