import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FormPage from "./pages/FormPage/index.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FormPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root")

// Checa se a root element existe e é um HTMLElement 
if (!(rootElement instanceof HTMLElement)) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
