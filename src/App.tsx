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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "products/:id",
        element: <SingleProduct />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "products/:id",
        element: <SingleProduct />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "orders",
        element: <Orders />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
