"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    // Enable the custom cursor CSS state on body
    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Smooth trailing effect using interpolation
  useEffect(() => {
    let animationId: number;

    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Interpolation factor: 0.15 makes it smooth and slightly lagging
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationId = requestAnimationFrame(updateTrail);
    };

    animationId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationId);
  }, [position]);

  // Listen to mouse hover events on interactive elements
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;



      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive-element") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-100 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-cyan transition-transform duration-200 ease-out md:block"
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0) scale(${isHovered ? 1.8 : 1})`,
          width: "36px",
          height: "36px",
          boxShadow: isHovered
            ? "0 0 15px rgba(0, 229, 255, 0.4), inset 0 0 10px rgba(0, 229, 255, 0.2)"
            : "0 0 5px rgba(0, 229, 255, 0.1)",
          borderColor: isHovered ? "rgba(0, 229, 255, 1)" : "rgba(0, 229, 255, 0.4)",
          backgroundColor: isHovered ? "rgba(0, 229, 255, 0.05)" : "transparent",
        }}
      />
      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-100 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          width: "6px",
          height: "6px",
          boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
        }}
      />
    </>
  );
}
