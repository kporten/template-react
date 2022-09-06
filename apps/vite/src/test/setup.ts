import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  // https://testing-library.com/docs/react-testing-library/api#cleanup
  cleanup();
});
