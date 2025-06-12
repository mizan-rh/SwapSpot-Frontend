import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Form from "@/pages/Form";
import HowItWorks from "@/pages/HowItWorks";
import Login from "@/pages/Login";
import Pricing from "@/pages/Pricing";
import Security from "@/pages/Security";
import Signup from "@/pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AdminRoute from "./AdminRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/security",
        element: <Security />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/admin",
        element: <AdminRoute />, // This will check if the user is an admin
        children: [
          { path: "", element: <AdminDashboard /> }, // Admin Dashboard
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
