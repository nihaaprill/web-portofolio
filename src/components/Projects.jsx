import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

// Import foto (mlImg sudah dihapus karena tidak dipakai lagi)
import meongImg from '../assets/meong.jpg';
import dealanImg from '../assets/dealan.jpg';
import iotImg from '../assets/iot.jpg';
import kebabImg from '../assets/kebab.jpg';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Meong.ID Platform",
      category: "Full-Stack Web Development",
      description: "Platform ekosistem pecinta kucing terfragmentasi yang menyediakan fitur adopsi terpusat, lapor kucing hilang berbasis geolokalasi, peta direktori RS/shelter, serta forum komunitas.",
      image: meongImg,
      techStack: ["Vue.js", "Fastify", "Prisma ORM", "MySQL", "UI/UX"],
      githubUrl: "https://github.com/nihaaprill/tubes_web_keren.git",
      demoUrl: "https://tubes-web-keren.vercel.app/"
    },
    {
      id: 2,
      title: "Dealan Data Warehouse & ETL",
      category: "Data Engineering",
      description: "Perancangan arsitektur Data Warehouse Star Schema (1 Tabel Fakta & 8 Dimensi) serta alur ETL bertingkat untuk sistem analisis operasional dan finansial aplikasi transportasi Dealan.",
      image: dealanImg,
      techStack: ["SQL", "Star Schema", "ETL", "Data Warehouse"],
      githubUrl: "https://github.com/nihaaprill/Dealan.git",
      demoUrl: "https://dealan-app.vercel.app/"
    },
    {
      id: 3,
      title: "Smart Secure Desk (IoT)",
      category: "Internet of Things",
      description: "Sistem keamanan meja otomatis menggunakan metode sliding window untuk deteksi pencurian (ESP32 & Ball Switch) dipadu Smart Lighting (LDR PWM) dengan monitoring real-time via MQTT & Streamlit.",
      image: iotImg,
      techStack: ["ESP32", "MQTT Mosquitto", "Flask Gateway", "Streamlit", "IoT"],
      githubUrl: "https://github.com/nihaaprill/TubesIoT.git",
      demoUrl: null
    },
    {
      id: 4,
      title: "Grand Kebab Hejo Digital Catalog",
      category: "Software Engineering",
      description: "Pengembangan website company profile dan katalog digital interaktif UMKM F&B lengkap dengan fitur simulasi keuntungan franchise, pencarian lokasi cabang, dan integrasi WhatsApp CS.",
      image: kebabImg,
      techStack: ["Vue.js", "Node.js", "PostgreSQL", "Prisma ORM", "REST API"],
      githubUrl: "https://github.com/nihaaprill/Kebab-Hejo.git",
      demoUrl: "https://frontend-phi-blond-37.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title" data-aos="fade-right">
        <span>//</span> Featured Projects
      </h2>
      
      {/* Grid Kartu Proyek */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            data-aos="zoom-in-up"
            data-aos-delay={(project.id % 3) * 100}
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              <div className="card-overlay">
              </div>
            </div>

            <div className="card-content">
              <span className="tech-tag">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <div className="card-links" onClick={(e) => e.stopPropagation()}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">
                  <FontAwesomeIcon icon={faGithub} /> Repository
                </a>
                
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-icon outline">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* POP-UP / MODAL SAAT KARTU DIKLIK */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="modal-body">
              <div className="modal-image-container">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-details">
                <span className="tech-tag">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>

                <h4>Tech Stack:</h4>
                <div className="tech-stack modal-tech">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="card-links modal-links">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-icon">
                    <FontAwesomeIcon icon={faGithub} /> Repository
                  </a>
                  
                  {selectedProject.demoUrl && (
                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-icon outline">
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}