import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContentSection from './ContentSection.tsx';
import HeroSection from './HeroSection.tsx';
import Login from './Login.tsx';
import Navbar from './Navbar.tsx';
import Portal from './Portal.tsx';

import './App.scss';

const MainSections = () => {
    return (
    <div>
      <HeroSection />
      <ContentSection />
    </div>
  );
}

const App = () => {

  const [isUserLeggedIn, setIsUserLeggedIn] = useState<boolean>(true)

  return (
    <Router>
      <Navbar logout={() => setIsUserLeggedIn(false)}/>
      <Routes>
        <Route path="/" element={<MainSections />} />
        <Route path="/view" element={<MainSections />} />
        <Route path="/support" element={<ContentSection />} />
        <Route path="/portal" element={isUserLeggedIn ? <Portal /> : <Login loginUser={() => setIsUserLeggedIn(true)} />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
