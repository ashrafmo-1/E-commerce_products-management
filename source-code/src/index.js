import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// routing
import { BrowserRouter } from "react-router-dom";

// bootstrap styling
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";

// redux toolkit
import { Provider } from "react-redux";
import { RTLstore } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={RTLstore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
