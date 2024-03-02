import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root";
import ErrorPage from "./components/Error";
import HomePage from "./pages/Main";
import EventItem, { loadEvent } from "./components/EventItem";
import EventsList, { fetchBackend } from "./components/EventsList";
import EventLayout from "./pages/eventsRoot";
import EditEventPage from "./pages/EditEvent";
import NewEventPage, { sendData } from "./pages/NewEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // as parent page, will be loaded as primary component to handle any types of error
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events", // path is relative to parent
        element: <EventLayout />,
        children: [
          { index: true, element: <EventsList />, loader: fetchBackend }, // loader takes a function and returns data, can be called from parent & children
          {
            path: ":eventIdFromRouter",
            id: "event-info", // required for children to useRouteLoaderData and access this loader
            loader: loadEvent, // this doesn't work. Returns undefined when disabling below loaders and trying to access this LoaderData
            children: [
              { index: true, element: <EventItem /> },
              { path: "edit", element: <EditEventPage /> },
            ],
          }, // when using context, you can update the context once data loaded, but refreshing the eventID page does not trigger the parent to fetch the data again, so the context is empty and leads to error
          { path: "new", element: <NewEventPage />, action: sendData }, // executes action function when form data submitted
        ],
      },
    ],
  },
]);

export default function App() { return <RouterProvider router={router} /> };
