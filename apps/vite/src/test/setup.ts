import { cleanup } from '@testing-library/react';
import type { Window } from 'happy-dom';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

import { server } from '@/test/server';

vi.mock('@clerk/clerk-react');

vi.stubEnv('VITE_TRPC_URL', 'http://localhost');

(window as typeof window & { happyDOM: Window['happyDOM'] }).happyDOM.setURL(
  'http://localhost',
);

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  vi.restoreAllMocks();
  server.resetHandlers();
  cleanup();
});
