import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

import { server } from './trpc/server';

vi.stubEnv('VITE_TRPC_URL', 'http://localhost');

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});
