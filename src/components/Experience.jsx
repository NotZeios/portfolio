import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const workExperience = [
    {
      title: "Junior NOC Engineer - Intern",
      company: "Clark Outsourcing",
      date: "December 2025 - March 2026",
      description: [
        "Resolved hardware and software issues for on-site and remote staff using AnyDesk and TeamViewer to minimize operational downtime.",
        "Monitored server stability and managed security protocols via PuTTY to remediate IP bans and configure firewall whitelists.",
        "Performed routine hardware maintenance and network tasks."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="experience-group">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
            <FaBriefcase style={{ marginRight: '10px', color: 'var(--primary)' }} /> 
            Work Experience
          </h2>
          <div className="timeline">
            {workExperience.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content card">
                  <h3>{item.title}</h3>
                  <h4 className="highlight">{item.company}</h4>
                  <span className="timeline-date">{item.date}</span>
                  <ul>
                    {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;