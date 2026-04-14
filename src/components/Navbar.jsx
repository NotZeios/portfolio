import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const resumeLink = "https://drive.google.com/file/d/1y7vrsQq92TBwrL4qVK_dUVq4-EoJIamI/view?usp=sharing";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <a href="#home" className="logo" aria-label="Go to Home">MTLB</a>
      
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <div className={`nav-actions ${isOpen ? 'active' : ''}`}>
        <div className="nav-links">
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#experience" onClick={toggleMenu}>Experience</a>
          <a href="#involvement" onClick={toggleMenu}>Involvement</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#certifications" onClick={toggleMenu}>Certifications</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>

        <a 
          href={resumeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-btn"
          onClick={toggleMenu}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;