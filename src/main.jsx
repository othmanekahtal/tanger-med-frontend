import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Views from "./views/views";
import "@/assets/css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
