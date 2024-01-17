import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import TypingPage from "./pages/TypingPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TypingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
