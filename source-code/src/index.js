import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// routing
import {BrowserRouter} from "react-router-dom";

// bootstrap styling
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
