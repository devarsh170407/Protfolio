"use client";

import { User, Terminal, BookOpen, Award } from "lucide-react";
import Image from "next/image";

export default function About() {
  const bioRegistry = [
    { label: "LOCATION", value: "Rajkot, Gujarat, India" },
    { label: "COORDINATES", value: "22.3039° N · 70.8022° E" },
    { label: "EMAIL", value: "devarshbhatt1747@gmail.com" },
    { label: "PHONE", value: "+91 9426511372" },
  ];

  const education = [
    {
      period: "2024 - PRESENT",
      institution: "MARWADI UNIVERSITY",
      degree: "B.Tech in Information and Communications Technology",
      details: "Current CGPA: 8.39. Specializing in embedded systems, microcontrollers, and artificial intelligence integration.",
    },
    {
      period: "COMPLETED",
      institution: "HIGHER SECONDARY (CLASS 12) — SCIENCE STREAM",
      degree: "Science Stream (HSC)",
      details: "Focused on physics, mathematics, and computer science fundamentals.",
    },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-neon-cyan/15 bg-[#030712] overflow-hidden grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-share-tech-mono text-xs tracking-[0.3em] uppercase text-neon-cyan mb-2">
            —— 01 ABOUT
          </div>
          <h2 className="font-unbounded text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white">
            THE OPERATOR BEHIND THE MACHINES
          </h2>
          <p className="font-share-tech-mono text-xs text-gray-400 mt-2 max-w-2xl leading-relaxed">
            Engineer-in-training combining embedded systems, AI and a deep curiosity for autonomous behaviour.
          </p>
        </div>
               {/* Widescreen Bio Card (12 Columns) */}
        <div className="relative border border-neon-cyan/20 bg-[#050B14] p-8 mb-8 transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)]">
          {/* L-brackets */}
          <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

          <div className="flex items-center gap-2 font-share-tech-mono text-xs text-neon-cyan font-bold mb-4 uppercase">
            <span>[ ] ./bio --verbose</span>
          </div>

          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed mb-6">
            Aspiring technology enthusiast and problem solver with a strong interest in AI, IoT, Robotics, and Embedded Systems. Passionate about developing innovative hardware and software solutions using MATLAB, Raspberry Pi, ESP32, and AI-driven automation. Seeking opportunities to apply technical skills in real-world projects, research, and hackathons.
          </p>

          {/* Bio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-share-tech-mono text-[11px] border-t border-neon-cyan/10 pt-5">
            {bioRegistry.map((item, idx) => {
              const isEmail = item.label === "EMAIL";
              const isPhone = item.label === "PHONE";
              return (
                <div key={idx} className="flex flex-col">
                  <span className="text-gray-500 font-bold uppercase">{item.label}</span>
                  {isEmail ? (
                    <a
                      href="mailto:devarshbhatt1747@gmail.com"
                      className="text-white hover:text-neon-cyan mt-1 text-xs font-bold transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : isPhone ? (
                    <a
                      href="tel:+919426511372"
                      className="text-white hover:text-neon-cyan mt-1 text-xs font-bold transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white font-bold mt-1 text-xs">{item.value}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid for Education & Research */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left: Education Card */}
          <div className="relative border border-neon-cyan/15 bg-[#050B14]/40 p-8 transition-all duration-300 hover:border-neon-cyan/40">
            {/* L-brackets */}
            <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF]/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF]/40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF]/40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF]/40 pointer-events-none" />

            <div className="flex items-center gap-2 font-share-tech-mono text-xs text-neon-cyan font-bold mb-6 uppercase">
              <span>[ ] ./education</span>
            </div>

            <div className="relative border-l border-neon-cyan/20 ml-2 space-y-8 py-1">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-6">
                  {/* Glowing Bullet */}
                  <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#050B14] border border-neon-cyan flex items-center justify-center">
                    <div className="h-1 w-1 rounded-full bg-neon-cyan animate-pulse" />
                  </div>
                  
                  <div className="text-[10px] font-share-tech-mono text-neon-cyan font-bold">
                    {item.period}
                  </div>
                  <h4 className="font-unbounded font-bold text-white text-[13px] mt-1.5 uppercase">
                    {item.institution}
                  </h4>
                  <span className="text-[11px] text-gray-400 font-medium block mt-0.5 uppercase">
                    {item.degree}
                  </span>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed mt-2">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Featured Research Card */}
          <div className="relative border border-neon-cyan/20 bg-[#050B14] p-8 transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)]">
            {/* L-brackets */}
            <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

            <div className="flex items-center gap-2 font-share-tech-mono text-xs text-neon-cyan font-bold mb-6 uppercase">
              <span>[ Featured Research ]</span>
            </div>

             <div className="font-share-tech-mono bg-[#030712] p-5 border border-neon-cyan/15 mb-6 relative">
              <span className="absolute top-4 right-4 bg-[#00E5FF]/10 text-[#00E5FF] px-1.5 py-0.5 border border-[#00E5FF]/20 rounded font-bold text-[8px] tracking-normal">
                SCOPUS INDEXED
              </span>
              <span className="text-[9px] text-neon-cyan font-bold tracking-wider block uppercase mb-1.5">
                IEEE RESEARCH PUBLICATION
              </span>
              <h4 className="text-white text-sm font-bold uppercase leading-snug pr-24">
                AI-Driven Solar Panel Placement Optimization
              </h4>
              <span className="text-[9px] text-gray-500 block mt-1.5">
                PUBLISHED // IEEE ICRCICN 2025
              </span>
            </div>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <span className="text-neon-cyan font-share-tech-mono select-none">&gt;&gt;</span>
                <p>Integrates NASA POWER and OpenStreetMap APIs to automate geographical feasibility & cloud check.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-neon-cyan font-share-tech-mono select-none">&gt;&gt;</span>
                <p>Generates 3D Digital Elevation Models (DEM) for obstacle shadow & real-time shading simulation.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-neon-cyan font-share-tech-mono select-none">&gt;&gt;</span>
                <p>Implements Genetic Algorithm (GA) dynamic tilt optimization to boost solar outputs by 20-25%.</p>
              </div>
            </div>

            {/* View Paper Button */}
            <div className="mt-5">
              <a
                href="https://ieeexplore.ieee.org/document/11364963"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-share-tech-mono font-bold text-[#FF5C00] hover:text-white border border-[#FF5C00]/40 hover:border-[#FF5C00] px-4 py-2 bg-[#030712] hover:bg-[#FF5C00]/5 hover:shadow-[0_0_15px_rgba(255,92,0,0.3)] transition-all uppercase tracking-wider"
              >
                <span>&gt;&gt; VIEW PAPER ON IEEE XPLORE</span>
              </a>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-neon-cyan/10">
              {["MATLAB", "IEEE", "GENETIC ALG", "SHADING"].map((tag, idx) => (
                <span
                  key={idx}
                  className="font-share-tech-mono text-[9px] px-3 py-1 border border-neon-cyan/20 bg-[#030712] text-neon-cyan font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
