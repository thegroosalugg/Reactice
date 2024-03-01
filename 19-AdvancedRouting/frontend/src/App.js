import { createBrowserRouter, RouterProvider, json } from "react-router-dom";
import RootLayout from "./pages/root";
import ErrorPage from "./components/Error";
import HomePage from "./pages/Main";
import EventItem from "./components/EventItem";
import EventsList from "./components/EventsList";
import EventLayout from "./pages/eventsRoot";

const fetchBackend = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch data..." }), {
    //   status: 500 }); // response thrown to error component if status detected
    throw json({ title: "Connection error", message: "Could not fetch data..." }, { status: 500 });
    // json is a router hook, allows to throw response without the need to parse on the receiving end
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response; // can just return response directly in loaders
  }
};

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
          {
            index: true,
            element: <EventsList />,
            loader: fetchBackend, // loader takes a function and returns data, can be called from parent & children
          },
          { path: ":eventId", element: <EventItem />, loader: fetchBackend },
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
