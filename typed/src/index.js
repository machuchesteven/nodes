import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import TypingPage from "./pages/TypingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <TypingPage />
  </React.StrictMode>
);
