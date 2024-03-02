import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root";
import ErrorPage from "./components/Error";
import HomePage from "./pages/Main";
import EventItem, { loadEvent } from "./components/EventItem";
import EventsList, { fetchBackend } from "./components/EventsList";
import EventLayout from "./pages/eventsRoot";
import EventForm from "./components/EventForm";

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
          { index: true, element: <EventsList />, loader: fetchBackend  }, // loader takes a function and returns data, can be called from parent & children
          { path: ":eventIdFromRouter", element: <EventItem />, loader: loadEvent },
          { path: ":eventIdFromRouter/edit", element: <EventForm /> },
          // loading data twice in each sibling, as non parent/child relationship. Only in this app to test features, in real setting would not fetch in each component
          // when using context, you can update the context once data loaded, but refreshing the eventID page does not trigger the parent to fetch the data again, so the context is empty and leads to error
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
