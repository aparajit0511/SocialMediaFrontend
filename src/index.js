import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddPost from "./components/AddPost";
import { SocialMediaContext } from "./ContextAPI/SocialMediaContext";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/addNewPost", element: <AddPost /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SocialMediaContext>
      <RouterProvider router={router} />
    </SocialMediaContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
