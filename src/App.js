import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

import AdminSection from './components/AdminSection';
import StudentSection from './components/StudentSection';
import AdminDashboard from './components/AdminDashboard';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectUpload from './components/ProjectUpload';
import HomePage from './components/HomePage'; 
function App() {
  return (
    <Router>
      <div className="flex">
        <Navigation />
        <div className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/admin/*" element={<AdminSection />} />
            <Route path="/student" element={<StudentSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/upload" element={<ProjectUpload />} />
            <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;