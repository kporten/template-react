import { Provider } from 'jotai';
import React from 'react';

type StoreProps = {
  values?: React.ComponentPropsWithoutRef<typeof Provider>['initialValues'];
};

const Store: React.FC<StoreProps> = ({ values, children }) => (
  <Provider initialValues={values}>{children}</Provider>
);

export default Store;
