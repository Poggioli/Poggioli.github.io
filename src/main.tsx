import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import NavProvider from "./components/navbar/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <NavProvider>
        <App />
      </NavProvider>
    </HashRouter>
  </React.StrictMode>,
);
