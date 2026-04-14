import React, { useState, useEffect } from 'react';
import './App.css';

import { FaSun, FaMoon } from 'react-icons/fa';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Involvement from './components/Involvement'; 
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : '';
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); 
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="floating-theme-wrapper">
        <button 
          onClick={toggleTheme} 
          className={`theme-switch ${theme === 'dark' ? 'switch-dark' : 'switch-light'}`}
          aria-label="Toggle Theme"
        >
          <div className="switch-handle">
            {theme === 'dark' ? (
              <FaMoon className="switch-icon" />
            ) : (
              <FaSun className="switch-icon" />
            )}
          </div>
        </button>
      </div>

      <main>
        <Home />
        <About />
        <Experience />
        <Involvement />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;