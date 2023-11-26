import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}
