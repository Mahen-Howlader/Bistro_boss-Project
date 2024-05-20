import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

import { HelmetProvider } from "react-helmet-async";
import Authprovider from "./Providers/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authprovider>
      <RouterProvider router={router} />
      </Authprovider>
    </HelmetProvider>
  </React.StrictMode>
);
