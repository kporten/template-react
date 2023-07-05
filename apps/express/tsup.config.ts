import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    entry: ['./src/server.ts'],
    external: ['prisma-client'],
    dts: true,
    format: 'esm',
    target: 'node18',
  };
});
