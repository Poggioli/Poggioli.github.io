import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavProvider from "./components/navbar/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </React.StrictMode>,
);
