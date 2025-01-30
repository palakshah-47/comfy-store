import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  Cart,
  SingleProduct,
  About,
  Register,
  Login,
  Checkout,
  Orders
} from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productLoader } from "./pages/Products";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader
        },
        {
          path: "products",
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: productLoader
        },
        {
          path: "cart",
          element: <Cart />,
          errorElement: <ErrorElement />
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />
        },
        {
          path: "about",
          element: <About />,
          errorElement: <ErrorElement />
        },
        {
          path: "checkout",
          element: <Checkout />,
          errorElement: <ErrorElement />
        },
        {
          path: "orders",
          element: <Orders />,
          errorElement: <ErrorElement />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />
    }
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true
    }
  }
);

function App() {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true
      }}
      router={router}
    ></RouterProvider>
  );
}
export default App;
