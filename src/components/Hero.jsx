import React, { useState, useEffect } from 'react';
import './Hero.css';

// 1. Impor foto dari folder assets (sesuaikan ekstensi file jika .png)
import profileImg from '../assets/profile.jpg'; 

export default function Hero() {
  const words = ["IT Enthusiast", "Web & Database Developer", "Supply Chain Platform Enthusiast"];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const updateSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="about" className="hero">
      <div className="hero-container">
        {/* Kolom Kiri: Teks Nama & Deskripsi */}
        <div className="hero-content" data-aos="fade-right">
          <p className="subtitle">&gt; Hello World, I'm</p>
          <h1 className="title">Niha April Miani</h1>
          <h2 className="typing-text">
            <span>{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="description">
            Mahasiswa Ilmu Komputer Universitas Pendidikan Indonesia dengan fokus pada pengembangan teknologi dan sistem informasi.
          </p>
          
          {/* Tombol View Projects, Contact Me, & Download CV */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            <a 
              href="/CV_Niha_Aprilmiani.pdf" 
              download="CV_Niha_Aprilmiani.pdf" 
              className="btn btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Foto Profil Transparan Berbingkai Glow */}
        <div className="hero-image-wrapper" data-aos="fade-left">
          <div className="image-glow-circle"></div>
          <div className="image-frame">
            <img src={profileImg} alt="Niha April Miani" className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}