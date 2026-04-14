import React from 'react';
import { FaUsers } from 'react-icons/fa';

const Involvement = () => {
  const involvement = [
    {
      title: "Chief Financial Officer (CFO)",
      organization: "Google Developer Student Clubs (GDSC) - Holy Angel University",
      date: "July 2023 - July 2024",
      description: [
        "Served as the Chief Financial Officer for GDSC: HAU, managed budget allocation, financial records, and resource planning to support organizational operations and events."
      ]
    }
  ];

  return (
    <section id="involvement" className="section-padding">
      <div className="container reveal">
        <div className="experience-group">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
            <FaUsers style={{ marginRight: '10px', color: 'var(--primary)' }} /> 
            Involvement
          </h2>
          <div className="timeline">
            {involvement.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content card">
                  <h3>{item.title}</h3>
                  <h4 className="highlight">{item.organization}</h4>
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

export default Involvement;