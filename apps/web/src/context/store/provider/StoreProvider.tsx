import { Provider } from 'jotai';

type StoreProviderProps = {
  children: React.ReactNode;
  values?: React.ComponentPropsWithoutRef<typeof Provider>['initialValues'];
};

export default function StoreProvider({
  values,
  children,
}: StoreProviderProps) {
  return <Provider initialValues={values}>{children}</Provider>;
}
