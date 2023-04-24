import { cleanup } from '@testing-library/react';
import type { Window } from 'happy-dom';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

import { server } from './trpc/server';

vi.stubEnv('VITE_TRPC_URL', 'http://localhost');

// eslint-disable-next-line @typescript-eslint/naming-convention
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
  server.resetHandlers();
  cleanup();
});
