"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  targetX?: number;
  targetY?: number;
}

interface CircuitTrace {
  points: { x: number; y: number }[];
  progress: number;
  speed: number;
  width: number;
}

export default function BackgroundVfx() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize particles
    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 20000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      });
    }

    // Initialize circuit traces
    const traces: CircuitTrace[] = [];
    const maxTraces = 8;

    const createTrace = (): CircuitTrace => {
      const startOnEdge = Math.random() > 0.5;
      let startX = 0;
      let startY = 0;

      if (startOnEdge) {
        startX = Math.random() > 0.5 ? 0 : width;
        startY = Math.random() * height;
      } else {
        startX = Math.random() * width;
        startY = Math.random() > 0.5 ? 0 : height;
      }

      const points = [{ x: startX, y: startY }];
      let currentX = startX;
      let currentY = startY;

      // Generate 3 segments
      for (let s = 0; s < 3; s++) {
        const length = Math.random() * 150 + 50;
        const angleChoice = Math.floor(Math.random() * 4); // 0, 45, 90, 135
        let angle = 0;
        if (angleChoice === 0) angle = 0; // horizontal
        else if (angleChoice === 1) angle = Math.PI / 4; // 45 deg
        else if (angleChoice === 2) angle = Math.PI / 2; // 90 deg
        else angle = -Math.PI / 4; // -45 deg

        // Direction adjustment based on origin
        const dirX = currentX > width / 2 ? -1 : 1;
        const dirY = currentY > height / 2 ? -1 : 1;

        currentX += Math.cos(angle) * length * dirX;
        currentY += Math.sin(angle) * length * dirY;

        points.push({ x: currentX, y: currentY });
      }

      return {
        points,
        progress: 0,
        speed: Math.random() * 0.005 + 0.003,
        width: Math.random() * 1 + 0.5,
      };
    };

    // Populate initial traces
    for (let i = 0; i < maxTraces; i++) {
      traces.push(createTrace());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw circuit traces in background
      ctx.strokeStyle = "rgba(0, 229, 255, 0.03)";
      for (let i = 0; i < traces.length; i++) {
        const trace = traces[i];
        ctx.lineWidth = trace.width;
        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let p = 1; p < trace.points.length; p++) {
          ctx.lineTo(trace.points[p].x, trace.points[p].y);
        }
        ctx.stroke();

        // Draw traveling signal pulse along the trace
        trace.progress += trace.speed;
        if (trace.progress >= 1) {
          traces[i] = createTrace(); // Replace trace
          continue;
        }

        // Find current position on multi-segment trace
        const totalSegments = trace.points.length - 1;
        const currentSegmentProgress = trace.progress * totalSegments;
        const segmentIndex = Math.floor(currentSegmentProgress);
        const segmentFrac = currentSegmentProgress - segmentIndex;

        if (segmentIndex < totalSegments) {
          const p1 = trace.points[segmentIndex];
          const p2 = trace.points[segmentIndex + 1];
          const pulseX = p1.x + (p2.x - p1.x) * segmentFrac;
          const pulseY = p1.y + (p2.y - p1.y) * segmentFrac;

          // Draw the glow pulse
          const gradient = ctx.createRadialGradient(
            pulseX,
            pulseY,
            0,
            pulseX,
            pulseY,
            8
          );
          gradient.addColorStop(0, "rgba(0, 229, 255, 0.6)");
          gradient.addColorStop(0.3, "rgba(0, 229, 255, 0.2)");
          gradient.addColorStop(1, "rgba(0, 229, 255, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
          ctx.fill();

          // Small white inner core
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Draw & update particles (neural net)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Normal movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            // Attract particle
            p.x += dx * 0.015;
            p.y += dy * 0.015;
          }
        }

        // Draw particle node
        ctx.fillStyle = "rgba(0, 229, 255, 0.35)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow center for larger nodes
        if (p.radius > 2) {
          ctx.fillStyle = "rgba(0, 229, 255, 0.7)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 3. Connect nodes if they are close
      ctx.lineWidth = 0.5;
      const connectionDist = 120;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.15;
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect nodes to mouse if close
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p1.x;
          const dy = mouseRef.current.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.25;
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 bg-[#050b14] grid-bg"
    />
  );
}
