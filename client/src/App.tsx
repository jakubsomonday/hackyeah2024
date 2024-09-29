import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContentSection from './ContentSection.tsx';
import HeroSection from './HeroSection.tsx';
import Login from './Login.tsx';
import Navbar from './Navbar.tsx';
import Portal, { Project } from './Portal.tsx';

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
  const response = await fetch('/jakubso?company_name=PZU%20Group');

  const data = await response.json();
  return data;
}

const fetchPossibleProjects = async () => {
  const response = await fetch('/jakubso');

  const data = await response.json();
  return data;
}

const App = () => {

  const [isUserLeggedIn, setIsUserLeggedIn] = useState<boolean>(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [possibleProjects, setPossibleProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchCompanyProjects().then((data) => {
      setProjects(data);
    });
    fetchPossibleProjects().then((data) => {
      setPossibleProjects(data.filter((project: Project) => !project.companies.includes('PZU Group')).slice(0, 3));
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
        <Route path="/portal" element={isUserLeggedIn ? <Portal projects={projects} similarProjects={possibleProjects}/> : <Login loginUser={() => setIsUserLeggedIn(true)} />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
