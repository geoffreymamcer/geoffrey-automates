'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

export default function MotionBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes simulating GoHighLevel automation nodes and data pulses
    const particleCount = Math.min(Math.floor(width / 30), 45);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }

    const darkColors = [
      'rgba(255, 255, 255, ', // pure white
      'rgba(228, 228, 231, ', // zinc 200 / silver
      'rgba(161, 161, 170, ', // zinc 400
      'rgba(113, 113, 122, ', // zinc 500
    ];

    const lightColors = [
      'rgba(24, 24, 27, ', // zinc 900
      'rgba(39, 39, 42, ', // zinc 800
      'rgba(82, 82, 91, ', // zinc 600
      'rgba(113, 113, 122, ', // zinc 500
    ];

    const particles: Particle[] = [];
    const colors = theme === 'dark' ? darkColors : lightColors;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }

    // Interactive mouse position
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with lines (like workflow nodes)
      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (theme === 'dark' ? 0.12 : 0.07);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(255, 255, 255, ${alpha})` 
              : `rgba(0, 0, 0, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Bounce on edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction: subtle gentle push
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120 && mDist > 0) {
          const force = (120 - mDist) / 120;
          p.x += (mdx / mDist) * force * 1.5;
          p.y += (mdy / mDist) * force * 1.5;
        }

        const currentRadius = p.radius + Math.sin(p.pulse) * 0.8;
        const baseAlpha = theme === 'dark' ? 0.45 : 0.35;
        const pulseAlpha = baseAlpha + Math.sin(p.pulse) * 0.15;

        // Draw glowing outer halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${pulseAlpha * 0.25})`;
        ctx.fill();

        // Draw particle center
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${pulseAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      id="motion-canvas"
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: theme === 'dark' ? 0.85 : 0.55 }}
    />
  );
}
