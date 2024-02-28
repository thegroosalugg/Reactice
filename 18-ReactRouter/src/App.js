import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/", // homepage path is empty. Specific pages come after /
    element: <Homepage />, // element set to the imported component
  },
  { path: "/products", element: <Products /> },
]);

function App() {
  // return only RouterProvider which has a router prop, set to the created BrowserRouter
  return <RouterProvider router={router} />;
}

export default App;
