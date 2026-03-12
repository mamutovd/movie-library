// Entry point – mounts the React app into the DOM
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter provides routing context to the entire app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
