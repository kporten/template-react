import { createStore, Provider } from 'jotai';

export const store = createStore();

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
