import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:keyword", element: <Videos /> },
      { path: "videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
