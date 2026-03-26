import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';

const Projects = () => {
  const projectData = [
    {
      title: "Pyalung Tamu",
      desc: "A mobile Flutter application that features minigames to raise awareness of the Kapampangan language and culture.",
      tags: ["Flutter", "Supabase", "Netlify"],
      repoLink: "https://github.com/luizaki/pyalung-tamu",
      demoLink: "https://pyalung-tamu.netlify.app/"
    },
    {
      title: "Member Management System",
      desc: "A web-based application featuring a user-friendly dashboard for efficiently managing records through full CRUD (Create, Read, Update, Delete) operations.",
      tags: ["JavaScript", "CSS", "Vite", "React"],
      repoLink: "https://github.com/luizaki/apsi-badge-exam",
      demoLink: "https://luizaki.github.io/apsi-badge-exam/" 
    },
    {
      title: "Chicken Banana Game",
      desc: "An interactive React-based game inspired by Minesweeper. Features custom game logic, state management, and sound effects.",
      tags: ["Vite", "React", "CSS"],
      repoLink: "https://github.com/NotZeios/chicken-banana-game",
      demoLink: "https://chicken-banana-game.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          <FaLaptopCode style={{ marginRight: '10px', color: 'var(--primary)' }} />
          Featured Projects
        </h2>
        
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>

              <div className="card-footer">
                <div className="tags">
                  {project.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>

                <div className="project-links">
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                      <FaGithub style={{ marginRight: '5px' }} /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                      <FaExternalLinkAlt style={{ marginRight: '5px' }} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;