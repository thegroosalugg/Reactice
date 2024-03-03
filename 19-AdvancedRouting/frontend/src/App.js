import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root";
import ErrorPage from "./components/Error";
import HomePage from "./pages/Main";
import EventInfoPage, { deleteEvent, loadEvent } from "./pages/EventInfo";
import EventsList, { fetchBackend } from "./components/EventsList";
import EventLayout from "./pages/eventsRoot";
import EditEventPage from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import { updateEvent } from "./components/EventForm";

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
              { index: true, element: <EventInfoPage />, action: deleteEvent }, // programatically triggers via useSubmit. Sends HTTP delete request to backend
              { path: "edit", element: <EditEventPage />, action: updateEvent },
            ],
          }, // when using context, you can update the context once data loaded, but refreshing the eventID page does not trigger the parent to fetch the data again, so the context is empty and leads to error
          { path: "new", element: <NewEventPage />, action: updateEvent }, // executes action function when form data submitted
        ],
      },
    ],
  },
]);

export default function App() { return <RouterProvider router={router} /> };
