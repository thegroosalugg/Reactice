import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from './pages/Home';
// import PostPage, { loader as postLoader } from './pages/Post';
import RootLayout from './pages/Root';
import { lazy, Suspense } from 'react'; // lazy loading - loading components only when they're needed

// this imports both, the component and the loader
// lazy is a react hook which wraps an arrow function, which executes the import function with the path to our component.
// the return from the arrow function is a promise and not JSX code, so it must be wrapped with lazy
const BlogPage = lazy(() => import('./pages/Blog'));
const PostPage = lazy(() => import('./pages/Post'));

const fallback = <p>Loading...</p>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            // lazy loading must be wrapped in suspense with fallback as data loading could be delayed
            element: (
              <Suspense fallback={fallback}>
                <BlogPage />
              </Suspense>
            ),
            // lazy loaders are converted to arrow function, which then imports the loader from the path
            loader: () =>
              // this carries a promise so .then or await/async is used to execute an arrow function which then executes the imported function
              import('./pages/Blog').then((importedFile) =>
                importedFile.loader()
              ), // loader is name of the imported function
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={fallback}>
                <PostPage />
              </Suspense>
            ),      // params required for this loader function. Added as a parameter up front and forwarded to loader function
                    // can also pass a 'meta' object without curlies {} which includes params as a key
            loader: ({ params }) => import('./pages/Post').then((importedFile) => importedFile.loader({ params })),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
