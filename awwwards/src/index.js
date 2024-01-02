import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";
import HorizontalScrollPage from "./pages/HorizontalScrollPage.1";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <App /> */}
      {/* <Dashboard /> */}
      <HorizontalScrollPage />
    </ChakraProvider>
  </React.StrictMode>
);

// reportWebVitals();
