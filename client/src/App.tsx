import React, { useEffect, useState } from 'react';
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

const fetchCompanyProjects = async () => {
  const response = await fetch('http://localhost:8080/jakubso?company_name=PZU%20Group');

  const data = await response.json();
  return data;
}

const App = () => {

  const [isUserLeggedIn, setIsUserLeggedIn] = useState<boolean>(true);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetchCompanyProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  console.log(projects);
  
  

  return (
    <Router>
      <Navbar logout={() => setIsUserLeggedIn(false)}/>
      <Routes>
        <Route path="/" element={<MainSections />} />
        <Route path="/view" element={<MainSections />} />
        <Route path="/support" element={<ContentSection />} />
        <Route path="/portal" element={isUserLeggedIn ? <Portal projects={projects}/> : <Login loginUser={() => setIsUserLeggedIn(true)} />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
