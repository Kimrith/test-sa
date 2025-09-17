import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Component/home";
import Product from "./Component/product";
import About from "./Component/about";
import Login from "./Component/login";
import Service from "./Component/service";
import Contact from "./Component/contact";

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Navigate to="/product" replace />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Service />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <h2>This Page is not found!</h2>,
    },
  ]);

  return <RouterProvider router={route} />;
}
