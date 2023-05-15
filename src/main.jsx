import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddService from "./components/Admin/AddService.jsx";
import Home from "./components/home/Home.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import Login from "./components/pages/Login.jsx";
import Event from "./components/pages/Event.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import Donation from "./components/pages/Donation.jsx";
import Blog from "./components/pages/Blog.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://volunteer-server-ivory.vercel.app/services/"),
      },
      {
        path: "/event",
        element: (
          <PrivateRoute>
            <Event></Event>
          </PrivateRoute>
        ),
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/addService",
    element: <AddService></AddService>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl	 mx-auto">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
);
