import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query'; // required to use tanstack query

import Events from './components/Events/Events.jsx';
import EventDetails from './components/Events/EventDetails.jsx';
import NewEvent from './components/Events/NewEvent.jsx';
import EditEvent, { action as editEventAction, loader as editEventsLoader} from './components/Events/EditEvent.jsx';
import { queryClient } from './util/http.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/events' />,
  },
  {
    path: '/events',
    element: <Events />,

    children: [
      {
        path: '/events/new',
        element: <NewEvent />,
      },
    ],
  },
  {
    path: '/events/:id',
    element: <EventDetails />,
    children: [
      {
        path: '/events/:id/edit',
        element: <EditEvent />,
        loader: editEventsLoader, // totally optional. Router approach to loading data. Can just use Query instead
        action: editEventAction,
      },
    ],
  },
]);

function App() {
  return (
    // query client provider wraps app, including router
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
