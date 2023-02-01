import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./report";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import "./index.css";

import Garden from "./routes/Garden";
import Settings from "./routes/Settings";
import Account from "./routes/Settings/Subpages/Account";
import Notifications from "./routes/Settings/Subpages/Notifications";
import Privacy from "./routes/Settings/Subpages/Privacy";
import SignIn from "./routes/Sign/SignIn.js";
import SignUp from "./routes/Sign/SignUp.js";
import CognitoSignUp from "./routes/Sign/CognitoSignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CognitoSignUp />,
  },
  {
    path: "/garden",
    exact: true,
    element: <Garden />,
  },
  {
    path: "/view/:subjectID",
    element: <Garden />,
  },
  {
    path: "/settings",
    element: <Account />,
  },
  {
    path: "/settings/account",
    element: <Account />,
  },
  {
    path: "/settings/notifications",
    element: <Notifications />,
  },
  {
    path: "/settings/privacy",
    element: <Privacy />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
