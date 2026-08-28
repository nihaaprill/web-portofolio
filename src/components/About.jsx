import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const skills = [
    { name: "Frontend Development", items: ["Vue.js", "JavaScript", "HTML", "CSS"] },
    { name: "Backend & Cloud", items: ["Node.js", "Fastify", "REST API", "Docker", "Azure"] },
    { name: "Database & Data", items: ["MySQL", "MariaDB", "PostgreSQL", "Prisma ORM", "ETL / DW"] },
    { name: "Analytics & Tools", items: ["Python", "R", "Naive Bayes", "Git / GitHub", "Figma"] }
  ];

  return (
    <section id="about-details" className="about-section">
      <h2 className="section-title" data-aos="fade-right">
        <span>//</span> About Me
      </h2>

      <div className="about-container">
        {/* Cerita Ringkas & Fokus */}
        <div className="about-text" data-aos="fade-up">
          <p className="highlight-text">
            Halo! Saya <strong>Niha April Miani</strong>, mahasiswa S1 Ilmu Komputer di Universitas Pendidikan Indonesia yang memiliki ketertarikan mendalam pada Software Engineering, Data Engineering, dan Business Information Systems.
          </p>
          <p>
            Berawal dari eksplorasi pengembangan aplikasi web, saya terus berkembang mempelajari bagaimana arsitektur data dirancang, dikelola, hingga diintegrasikan ke dalam ekosistem digital skala besar.
          </p>
          <p>
            Saya terbiasa bekerja secara kolaboratif melalui proyek akademik maupun pengalaman kepemimpinan organisasi, serta selalu beradaptasi cepat dengan teknologi baru.
          </p>

          {/* Grid Mini Stat / Values */}
          <div className="about-stats">
            <div className="stat-card">
              <FontAwesomeIcon icon={faCode} className="stat-icon" />
              <h4>Web Dev</h4>
              <p>Full-Stack & REST API</p>
            </div>
            <div className="stat-card">
              <FontAwesomeIcon icon={faDatabase} className="stat-icon" />
              <h4>Data Eng</h4>
              <p>ETL & Data Warehouse</p>
            </div>
            <div className="stat-card">
              <FontAwesomeIcon icon={faServer} className="stat-icon" />
              <h4>DevOps</h4>
              <p>Docker & Azure Cloud</p>
            </div>
            <div className="stat-card">
              <FontAwesomeIcon icon={faChartLine} className="stat-icon" />
              <h4>Analytics</h4>
              <p>Machine Learning</p>
            </div>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="skills-wrapper" data-aos="fade-left">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h4>{skillGroup.name}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((item, idx) => (
                    <span key={idx} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}