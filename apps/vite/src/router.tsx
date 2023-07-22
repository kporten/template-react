import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

import ProtectedRoute from '@/components/protected-route';
import Frame from '@/layouts/frame';
import ErrorPage from '@/pages/error';
import IndexPage from '@/pages/index';
import ProfilePage from '@/pages/profile';

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
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
