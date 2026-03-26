import React from 'react';

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        <div className="hero-text">
          <h3 style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem' }}>
            Hello, my name is
          </h3>
          
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', margin: '10px 0', color: 'var(--text-main)' }}>
            Mel Tristan Baquiano.
          </h1>
          
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.2' }}>
            Aspiring <span className="highlight">Software Engineer</span>.
          </h2>
          
          <p>
            I build accessible, pixel-perfect, and high-performance web and mobile applications.
            Currently focused on back-end development and AI integration.
          </p>
          
          <a href="#projects" className="cta-btn">View My Work</a>
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