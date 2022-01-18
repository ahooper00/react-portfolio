import React from 'react';
import Header from './components/Header';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import Navigation from './components/Navigation';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="nav-container">
        <Navigation />
      </div>
      <div className="project-container">
        <Router>
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;