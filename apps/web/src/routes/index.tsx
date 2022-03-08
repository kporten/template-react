import { Route, Routes } from 'react-router-dom';

import { NotFound } from '@/features/error';
import Index from '@/features/index';
import Frame from '@/layout/Frame/Frame';

export default () => (
  <Routes>
    <Route path="/" element={<Frame />}>
      <Route index element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
