import React, { useEffect, useRef } from 'react';
import './Background.css';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Menyesuaikan ukuran canvas saat window di-resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Membuat partikel node jaringan
    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
    }));

    // Function untuk menggambar animasi
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Gambar partikel & garis koneksi antar node (Vibes Jaringan CS)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Pergerakan posisi
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce jika menabrak pinggir layar
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Gambar titik node (Warna Cyan / Purple CS)
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#a855f7';
        ctx.fill();

        // Tarik garis jika jarak antar node dekat
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${1 - dist / 130})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="universe-bg">
      <canvas ref={canvasRef} className="network-canvas" />
      <div className="glow-overlay"></div>
    </div>
  );
}