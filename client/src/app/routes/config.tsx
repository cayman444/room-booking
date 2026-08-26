import { createBrowserRouter, Navigate } from 'react-router-dom'

import { MyBookingsPage, NotFoundPage, RoomDetailPage, RoomsPage } from '@/pages'
import { ROUTES_PATHS } from '@/shared/config/routes'

import { RootLayout } from '../layouts'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/rooms" replace />,
      },
      {
        path: ROUTES_PATHS.ROOMS,
        element: <RoomsPage />,
      },
      {
        path: ROUTES_PATHS.ROOMS_DETAILS,
        element: <RoomDetailPage />,
      },
      {
        path: ROUTES_PATHS.BOOKINGS,
        element: <MyBookingsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
