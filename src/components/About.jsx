import React from 'react';
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaUser, FaCode } from 'react-icons/fa';
import { SiFlutter, SiDart, SiMysql } from 'react-icons/si';

const About = () => {
  const techStack = [
    { name: "React", icon: <FaReact /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container about-content">
        
        <div className="about-text-section">
          <h2>
            <FaUser style={{ marginRight: '10px', color: 'var(--primary)' }} />
            About Me
          </h2>
          <p>
            I'm a graduating Computer Science student at Holy Angel University, dedicated to developing responsive mobile apps and scalable web applications. 
            I believe that great software is both beautifully accessible to users and structurally sound under the hood. Combining a love for algorithmic problem-solving with 
            certified training in effective leadership, my goal is to turn innovative ideas into reality while continuously expanding my technical toolkit.
          </p>
        </div>

        <div className="tech-stack-section">
          <h3 style={{ marginBottom: '40px' }}>
            <FaCode style={{ marginRight: '10px', color: 'var(--primary)' }} />
            My Tech Stack
          </h3>
          <div className="tech-icons-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item" title={tech.name}>
                <div className="tech-icon">{tech.icon}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;