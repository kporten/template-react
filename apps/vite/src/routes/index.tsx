import { Route, Routes } from 'react-router-dom';

import { NotFound } from '@/features/error';
import Landing from '@/features/landing';
import Frame from '@/layout/Frame/Frame';

export default () => (
  <Routes>
    <Route path="/" element={<Frame />}>
      <Route index element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
