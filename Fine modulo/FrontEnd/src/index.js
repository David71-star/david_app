import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./COMPONENTS/CONTEXT/ThemeContext";
import { SelectedProvider } from "./COMPONENTS/CONTEXT/selectedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SelectedProvider>
        <App />
      </SelectedProvider>
    </ThemeProvider>
  </React.StrictMode>
);
