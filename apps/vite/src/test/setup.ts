import { cleanup } from '@testing-library/react';
import type { Window } from 'happy-dom';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

import { server } from './trpc/server';

vi.stubEnv('VITE_TRPC_URL', 'http://trpc');

// https://github.com/capricorn86/happy-dom/tree/master/packages/happy-dom#additional-features
// eslint-disable-next-line @typescript-eslint/naming-convention
type WindowWithHappyDOM = typeof window & { happyDOM: Window['happyDOM'] };
(window as WindowWithHappyDOM).happyDOM.setURL('http://localhost');

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
