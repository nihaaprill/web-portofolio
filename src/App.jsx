import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  // Jalankan AOS saat halaman pertama kali dimuat
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (1 detik)
      once: false,    // Set 'false' agar animasi berjalan tiap kali di-scroll naik/turun
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Nama Kamu. Cosmic Portfolio.</p>
      </footer>
    </div>
  );
}

export default App;