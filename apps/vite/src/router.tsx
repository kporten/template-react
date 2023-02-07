import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Frame from '@/layouts/frame';
import Error from '@/routes/error';
import Index from '@/routes/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Frame>
        <Outlet />
      </Frame>
    ),
    errorElement: (
      <Frame>
        <Error />
      </Frame>
    ),
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
