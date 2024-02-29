import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

// absolute paths begin with / and render directly after domain name
// relatives path begin without / and render after the parent's path

const router = createBrowserRouter([
  {
    path: "/", // empty path as default
    element: <RootLayout />, // import custom root component, declare it as a new route and set existing routes as its children
    errorElement: <ErrorPage />, // errorElement loads a custom component when user specifies incorrect URL
    children: [
      {
        index: true, // alternative is to set index: true to ensure this page loads when no paths specified, indexing this as the root page
        element: <Homepage />, // element set to the imported component
      },
      { path: "/products", element: <Products /> },
      // adding a :colon signals react-router that this is a dynamic path. Can be named anything. Dynamically renders based on dynamic content
      { path: "/products/:customPath", element: <ProductDetails /> },
    ],
  },
]);

// alternative syntax for handling the router

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<Homepage />} />
//       <Route path="/products" element={<Products />} />
//     </Route>
//   )
// );

function App() {
  // return only RouterProvider which has a router prop, set to the created BrowserRouter
  return <RouterProvider router={router} />;
}

export default App;
