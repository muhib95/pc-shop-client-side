import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import LayOut from "../Page/LayOut/LayOut";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
