import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MainDataContext from "./components/MainDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainDataContext>
      <App />
    </MainDataContext>
  </React.StrictMode>
);

reportWebVitals();
