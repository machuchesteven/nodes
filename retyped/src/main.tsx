import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Pages
import Homepage from "./pages/Homepage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import LawFirmPage from "./pages/LawFirmPage.tsx";
import LawyerPage from "./pages/LawyerPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/app" element={<App />} />
        <Route path="profile" element={<ProfilePage />} />

        <Route path="/law" element={<LawFirmPage />} />
        <Route path="/lawyer" element={<LawyerPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
