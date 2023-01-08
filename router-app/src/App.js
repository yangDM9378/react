import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';
import Videos from './pages/Videos';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      { index: true, element: <Home/>},
      { path: '/videos', element: <Videos />},
      { path: '/videos/:videoId', element: <VideoDetail />}

    ]
  },

])

export default function App() {
  return <RouterProvider router={router} />;
}
