import React from "react";
import "./App.scss";
import ContentSection from "./ContentSection.tsx";
import HeroSection from "./HeroSection.tsx";
import Navbar from "./Navbar.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portal from "./Portal.tsx";


const MainSections = () => {
    return (
    <div>
      <HeroSection />
      <ContentSection />
    </div>
  );
}

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define Routes for different components */}
        <Route path="/" element={<MainSections />} />
        <Route path="/view" element={<MainSections />} />
        <Route path="/support" element={<ContentSection />} />
        <Route path="/portal" element={<Portal />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
  // return (
  //   <div>
  //     <Navbar />
  //     <HeroSection />
  //     <ContentSection />
  //     <NGOTable />
  //   </div>
  // );
};

export default App;
