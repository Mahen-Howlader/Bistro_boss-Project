import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

import { HelmetProvider } from "react-helmet-async";
import Authprovider from "./Providers/Authprovider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Authprovider>
          <RouterProvider router={router} />
        </Authprovider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
