import { Provider, createStore } from 'jotai';
import type { ReactNode } from 'react';

export const store = createStore();

export default function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
