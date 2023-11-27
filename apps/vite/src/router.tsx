import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import ProtectedRoute from '@/components/protected-route';
import Frame from '@/layouts/frame';
import ErrorPage from '@/pages/error-page';
import IndexPage from '@/pages/index-page';
import ProfilePage from '@/pages/profile-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Frame>
          <Outlet />
        </Frame>
      }
      errorElement={
        <Frame>
          <ErrorPage />
        </Frame>
      }
    >
      <Route index element={<IndexPage />} />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
    </Route>,
  ),
);

export default function Router() {
  return (
    // eslint-disable-next-line @typescript-eslint/naming-convention
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
