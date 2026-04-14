import React from 'react';
import { FaAward, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "Python Developer Certification",
      issuer: "freeCodeCamp",
      date: "Issued Mar 2026",
      link: "https://www.freecodecamp.org/certification/zeios/python-v9"
    },
    {
      title: "Responsive Web Design Developer Certification",
      issuer: "freeCodeCamp",
      date: "Issued Mar 2026",
      link: "https://www.freecodecamp.org/certification/zeios/responsive-web-design-v9"
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      date: "Issued May 2025",
      link: "https://www.credly.com/badges/8782e555-8ffa-45c6-ba98-9ec33aecadfb/public_url"
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "Issued April 2025",
      link: "https://www.credly.com/badges/9e88c6c5-753b-472a-bb6f-662954062e9f/public_url"
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "Issued Jan 2025",
      link: "https://www.credly.com/badges/f1367b18-a11a-4821-988f-0dd6fa45d7ce/public_url"
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      date: "Issued Oct 2024",
      link: "https://www.credly.com/badges/c421e11c-bb65-44f9-91bd-4371b7e78ecc/public_url"
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "Issued Sep 2024",
      link: "https://drive.google.com/file/d/1hcnXry_yHsUAEYSZwlBLG9sy7nF06Un9/view?usp=sharing"
    },
    {
      title: "CCNAv7 : Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "Issued May 2024",
      link: "https://drive.google.com/file/d/1Xyj0h8uuDnOKMgcFpKkp40d__WpjXZWl/view?usp=sharing"
    },
    {
      title: "CompTIA IT Fundamentals+",
      issuer: "CompTIA",
      date: "Issued May 2023",
      link: "https://www.credly.com/badges/8dbceb30-65eb-4b07-86b3-df5998f86601/public_url"
    },
  ];

  return (
    <section id="certifications" className="section-padding" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container reveal">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          <FaCertificate style={{ marginRight: '10px', color: 'var(--primary)' }} />
          Certifications
        </h2>
        
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon">
                <FaAward />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link" aria-label="Verify Certificate">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;