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
          
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-muted)', margin: '0 0 30px 0', lineHeight: '1.3' }}>
            Front-End Specialist. <br />
            Aspiring <span className="highlight">Full-Stack Developer</span>.
          </h2>
          
          <p style={{ marginBottom: '30px' }}>
            I build accessible, user-centric web and mobile interfaces using modern tools like React. 
            Right now, I'm leveling up my back-end architecture skills with Python to deliver robust applications.
          </p>
          
          {/* NEW: Button Container */}
          <div className="hero-buttons">
            <a href="#projects" className="cta-btn">View My Work</a>
            <a href="#contact" className="cta-btn cta-btn-outline">Contact Me</a>
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