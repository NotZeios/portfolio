import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="logo" aria-label="Go to Home">MTLB</a>
      
      <div className="nav-actions">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#involvement">Involvement</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="/Baquiano_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;