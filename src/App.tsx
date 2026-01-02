import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';
import AboutPage from './pages/AboutPage';
import PortfolioExport from './pages/PortfolioExport';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio-pdf" element={<PortfolioExport />} />
      </Routes>
    </Router>
  );
};

export default App;
