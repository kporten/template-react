import { createStore, Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

const store = createStore();

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}

export function HydrateAtoms({
  initialValues,
  children,
}: {
  initialValues: Parameters<typeof useHydrateAtoms>[0];
  children: React.ReactElement;
}) {
  useHydrateAtoms(initialValues);

  return children;
}
