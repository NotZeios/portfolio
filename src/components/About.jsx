import React from 'react';
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaUser, FaCode } from 'react-icons/fa';
import { SiFlutter, SiDart, SiMysql, SiSupabase } from 'react-icons/si';

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
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container about-content reveal">
        
        <div className="about-text-section">
          <h2>
            <FaUser style={{ marginRight: '10px', color: 'var(--primary)' }} />
            About Me
          </h2>
          <p>
            With a foundation in system administration, IT support, and network operations, I approach development with a focus on reliability. 
            My experience as a Junior NOC Engineer intern taught me how to build things that last. I now apply that mindset to creating reliable, accessible 
            applications while expanding my toolkit toward full-stack architecture.
          </p>
        </div>

        <div className="tech-stack-section">
          <h2 style={{ marginBottom: '40px' }}>
            <FaCode style={{ marginRight: '10px', color: 'var(--primary)' }} />
            Tech Stack
          </h2>
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