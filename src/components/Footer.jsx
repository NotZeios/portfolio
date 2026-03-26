import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const SOCIALS = {
    email: "meltristanb@gmail.com",
    discord: "notzeios",
    github: "https://github.com/NotZeios",
    linkedin: "https://www.linkedin.com/in/mel-tristan-baquiano/"
  };

  const [copyStatus, setCopyStatus] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus(type);
      setTimeout(() => setCopyStatus(null), 2000);
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          
          <button className="social-btn" onClick={() => handleCopy(SOCIALS.email, 'email')} aria-label="Copy Email">
            <FaEnvelope />
            {copyStatus === 'email' && <span className="tooltip">Copied!</span>}
          </button>

          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub Profile">
            <FaGithub />
          </a>

          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>

          <button className="social-btn" onClick={() => handleCopy(SOCIALS.discord, 'discord')} aria-label="Copy Discord Username">
            <FaDiscord />
            {copyStatus === 'discord' && <span className="tooltip">Copied!</span>}
          </button>

        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} MTLB. Built with React. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;