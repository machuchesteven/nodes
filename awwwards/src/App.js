import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChatbotPage from "./pages/ChatbotPage";
import HospitalPage from "./pages/HospitalPage";
import ProfilePage from "./pages/ProfilePage";
import ModalsPage from "./pages/ModalsPage";
import HotelPage from "./pages/HotelPage";
import LoginsPage from "./pages/LoginsPage";
import RegisterPage from "./pages/RegisterPage";
import PortfolioPage from "./pages/PortfolioPage";
import NewsPage from "./pages/NewsPage";
import AnimationsPage from "./pages/AnimationsPage";
import BookingPage from "./pages/BookingPage";
import BettingPage from "./pages/BettingPage";
import SchoolPage from "./pages/SchoolPage";
import BlogPage from "./pages/BlogPage";
import Homepage from "./pages/Homepage";
import DashboardsPage from "./pages/DashboardsPage";
import ProductPage from "./pages/ProductPage";
import Dashboard from "./pages/Dashboard";
import HorizontalScrollPage from "./pages/HorizontalScrollPage";
import HerosPage from "./pages/HerosPage";
import Web3Page from "./pages/Web3Page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/animations" element={<AnimationsPage />} />
        <Route path="/bet" element={<BettingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboards" element={<DashboardsPage />} />
        {/* <Route path="/ecommerce" element={<eCommercePage />} /> 
        <Route path="/elearn" element={<eLearnPage />} /> */}
        <Route path="/heros" element={<HerosPage />} />
        <Route path="/horizontal-scroll" element={<HorizontalScrollPage />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/logins" element={<LoginsPage />} />
        <Route path="/modals" element={<ModalsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/school" element={<SchoolPage />} />
        <Route path="/web3" element={<Web3Page />} />
      </Routes>
    </Router>
  );
};

export default App;
