import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import Pages
import Homepage from "./pages/Homepage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/app" element={<App />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
