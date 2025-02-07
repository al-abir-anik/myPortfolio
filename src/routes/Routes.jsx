import { createBrowserRouter } from "react-router-dom";
import Root from "./../layouts/Root";
import ErrorRoute from "./ErrorRoute";
import Home from "../pages/Home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorRoute></ErrorRoute>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Routes;
