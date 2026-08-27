import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Ketua Biro Sosial dan Politik",
      company: "Himpunan Mahasiswa Ilmu Komputer - UPI",
      period: "2026 - Sekarang",
      description: "Memimpin pelaksanaan program kerja di bidang sosial dan kebijakan kemahasiswaan serta mengoordinasikan anggota biro dalam perencanaan kegiatan.",
      skills: ["Leadership", "Management", "Communication", "Teamwork"]
    },
    {
      id: 2,
      role: "Sekretaris Divisi Advokasi, Sosial, dan Politik",
      company: "Himpunan Mahasiswa Ilmu Komputer - UPI",
      period: "2025",
      description: "Mengelola administrasi, dokumentasi, penyusunan proposal, serta laporan kegiatan dan berkoordinasi dengan pihak fakultas.",
      skills: ["Administration", "Documentation", "Adaptability", "Coordination"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title" data-aos="fade-right">
        <span>//</span> Experience
      </h2>
      
      <div className="timeline">
        {experiences.map((item) => (
          <div 
            key={item.id} 
            className="timeline-item"
            data-aos="fade-up"
            data-aos-delay={item.id * 100}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="period">{item.period}</span>
              <h3>{item.role}</h3>
              <h4 className="company">{item.company}</h4>
              <p>{item.description}</p>
              <div className="tech-stack">
                {item.skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}