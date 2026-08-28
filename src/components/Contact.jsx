import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mengarahkan pengiriman pesan langsung via Email Client (Gmail/Outlook)
    const subject = encodeURIComponent(`Portofolio Inquiry dari ${formData.name}`);
    const body = encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`);
    
    window.location.href = `mailto:nihaaapril@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title" data-aos="fade-right">
        <span>//</span> Get In Touch
      </h2>

      <div className="contact-container">
        {/* Kolom Kiri: Informasi Kontak */}
        <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
          <h3>Let's Connect & Collaborate</h3>
          <p>
            Saya terbuka untuk peluang magang, kolaborasi proyek web development, data engineering, maupun sekadar berdiskusi mengenai teknologi.
          </p>

          <div className="info-items">
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:nihaaapril@gmail.com">nihaaapril@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Bandung Barat, Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Deretan Tombol Media Sosial */}
          <div className="social-links">
            <a href="https://linkedin.com/in/niha-april" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/nihaaprill" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/aprilmiani_/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Form Kirim Pesan via Email */}
        <div className="contact-form-wrapper" data-aos="fade-left" data-aos-delay="200">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Masukkan nama kamu"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="nama@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                required
                placeholder="Tuliskan pesan"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              <FontAwesomeIcon icon={faPaperPlane} /> Send Message via Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}