import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
// reportWebVitals();
