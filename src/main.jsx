import React from "react";
import ReactDom from "react-dom/client";
import { App } from "./app";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./index.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
