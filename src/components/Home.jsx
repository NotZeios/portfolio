import React from 'react';

const Home = () => {
  const resumeLink = "https://drive.google.com/file/d/1AlZEs70RRqmgNucvn4e0NilTg6a-Qf3B/view?usp=sharing";

  return (
    <section id="home" className="hero">
      <div className="hero-container reveal">
        
        <div className="hero-text">
          <div className="status-badge">
            <span className="status-dot"></span>
            Open for opportunities
          </div>
          
          <h3 style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem' }}>
            Hello, my name is
          </h3>
          
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', margin: '10px 0', color: 'var(--text-main)' }}>
            Mel Tristan Baquiano.
          </h1>
          
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-muted)', margin: '0 0 30px 0', lineHeight: '1.3' }}>
            Front-End Developer. <br />
            Aspiring <span className="highlight">Full-Stack Developer</span>.
          </h2>
          
          <p style={{ marginBottom: '30px' }}>
            Computer Science graduate with a foundation in system administration and network operations, currently specializing in 
            front-end development while bridging the gap to full-stack architecture.
          </p>
          
          <div className="hero-buttons">
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn"
            >
              View Resume
            </a>
          </div>
        </div>
        
        <div className="hero-avatar">
          <img 
            src="/profile.png" 
            alt="Mel Tristan Baquiano" 
            className="avatar-img" 
          />
        </div>
        
      </div>
    </section>
  );
};

export default Home;