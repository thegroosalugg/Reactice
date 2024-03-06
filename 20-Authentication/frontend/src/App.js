import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage, { action as authAction } from './pages/Authentication';
import { action as logout } from './pages/Logout';
import { checkAuthLoader, loadToken } from './util/getAuthToken';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root', // loader accessible in every route
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: loadToken, // will always update if token is deleted or new token is obtained
    children: [
      { index: true, element: <HomePage />, },
      { path: 'auth', action: authAction, element: <AuthenticationPage />, },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                loader: checkAuthLoader, // protects the route with redirect
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            loader: checkAuthLoader, // protects the route with redirect
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      { path: 'logout', action: logout, },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
