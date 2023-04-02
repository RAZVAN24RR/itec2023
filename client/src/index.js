import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import AuthProvider from "./pages/contexts/ContextProvider";
import reportWebVitals from "./reportWebVitals";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PresPage from "./pages/PresentationPage/PresPage";
import Userprofile from "./pages/Userprofile/userprofile";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Home from "./pages/homepage/Home";
import NewEmployeesPage from "./pages/NewEmployeesPage/NewEmployeesPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PresPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/userprofile",
    element: <Userprofile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/newemployeespage",
    element: <NewEmployeesPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App>
        <RouterProvider router={router} />
      </App>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
