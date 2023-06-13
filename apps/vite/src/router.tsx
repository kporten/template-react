import { SignIn, SignUp } from '@clerk/clerk-react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import ProtectedRoute from '@/components/protected-route';
import Frame from '@/layouts/frame';
import ErrorPage from '@/pages/error';
import IndexPage from '@/pages/index';
import ProfilePage from '@/pages/profile';

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
        <ErrorPage />
      </Frame>
    ),
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'sign-in/*',
        element: <SignIn routing="path" path="/sign-in" />,
      },
      {
        path: 'sign-up/*',
        element: <SignUp routing="path" path="/sign-up" />,
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
