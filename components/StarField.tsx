'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  phase: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    };

    const generateStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      starsRef.current = Array.from({ length: Math.min(count, 180) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.008 + 0.003,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;

      for (const star of starsRef.current) {
        const twinkle = star.opacity + Math.sin(t * star.speed * 100 + star.phase) * 0.25;
        const alpha = Math.max(0.05, Math.min(0.85, twinkle));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        const isBlue = Math.random() > 0.85;
        if (isBlue && star.radius > 0.9) {
          ctx.fillStyle = `rgba(147, 197, 253, ${alpha * 0.9})`;
        } else {
          ctx.fillStyle = `rgba(232, 234, 242, ${alpha})`;
        }
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="star-canvas"
      aria-hidden="true"
    />
  );
}
