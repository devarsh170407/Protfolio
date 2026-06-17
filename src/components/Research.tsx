"use client";

import { useState } from "react";
import { BookOpen, FileText, Download, Copy, Check, ExternalLink, Cpu } from "lucide-react";

export default function Research() {
  const [copied, setCopied] = useState(false);

  const citation = `D. Bhatt, P. K. Sharma, and C. Parmar, "AI-Driven Solar Panel Placement Optimization," 2025 Seventh International Conference on Research in Computational Intelligence and Communication Networks (ICRCICN), Kalyani, India, 2025, pp. 1-6. DOI: 10.1109/ICRCICN68210.2025.11364963`;

  const copyCitation = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="research" className="relative py-24 border-t border-neon-cyan/10 bg-[#050b14]/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-neon-cyan tracking-widest uppercase mb-1">
            <BookOpen className="h-3.5 w-3.5 text-neon-cyan animate-pulse" />
            <span>ACADEMIC ARCHIVE REGISTRY</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-wider text-white">
            RESEARCH PUBLICATIONS
          </h2>
          <div className="h-0.5 w-20 bg-neon-cyan mt-2" />
        </div>

        {/* Console layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: The Publication Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 rounded-md border border-neon-cyan/25 relative overflow-hidden scanlines">
              
              {/* Publication Header */}
              <div className="flex items-center justify-between border-b border-neon-cyan/15 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-neon-cyan" />
                  <span className="font-mono text-[10px] text-neon-cyan font-bold tracking-wider">
                    IEEE JOURNAL LOG // REQ_ID_489
                  </span>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              </div>

              {/* Title & Author Info */}
              <div className="space-y-3 font-mono">
                <h3 className="text-lg font-bold text-white uppercase leading-snug">
                  AI-Driven Solar Panel Placement Optimization
                </h3>
                <div className="text-[10px] text-gray-400 flex flex-wrap gap-x-4 gap-y-1 items-center">
                  <span>AUTHORS: Devarsh Bhatt, Praveen Kumar Sharma, Chandrasinh Parmar</span>
                  <span>|</span>
                  <span>STATUS: PUBLISHED</span>
                  <span>|</span>
                  <span>VENUE: IEEE ICRCICN 2025</span>
                  <span>|</span>
                  <span className="bg-[#00E5FF]/10 text-[#00E5FF] px-1.5 py-0.5 border border-[#00E5FF]/20 rounded font-bold text-[8px] tracking-normal">SCOPUS INDEXED</span>
                </div>
              </div>

              {/* Research Summary / Abstract */}
              <div className="mt-5 space-y-3 font-sans text-xs text-gray-300 leading-relaxed">
                <div className="font-mono text-[10px] text-neon-cyan/75 font-semibold">{"// ABSTRACT SUMMARY:"}</div>
                <p>
                  This paper presents an AI-based system developed in MATLAB to improve the placement and efficiency of solar panels. The proposed method combines solar radiation data from the NASA POWER API, location data from OpenStreetMap, and machine learning algorithms to identify the best locations for installing solar panels.
                </p>
                <p>
                  A Genetic Algorithm is used to find the most efficient tilt angle for maximum sunlight capture, while shading analysis ensures that panels are placed in areas with minimal shadow. Results show that the optimized approach significantly increases solar energy generation (by 20–25%) and improves panel orientation compared to traditional fixed-angle systems.
                </p>
              </div>

              {/* Citation Copier */}
              <div className="mt-6 bg-[#050b14]/80 p-3 border border-neon-cyan/10 rounded font-mono text-[10px] text-gray-400 relative">
                <span className="block text-neon-cyan font-bold uppercase mb-1">{"// STUDY CITATION (IEEE):"}</span>
                <p className="pr-10 leading-normal select-all">{citation}</p>
                
                <button
                  onClick={copyCitation}
                  className="absolute top-2 right-2 p-1.5 rounded border border-neon-cyan/20 bg-[#0a192f] text-neon-cyan hover:bg-neon-cyan/15 hover:border-neon-cyan/60 transition-colors"
                  aria-label="Copy Citation"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>

              {/* Publication Links / Downloads */}
              <div className="grid grid-cols-2 gap-3 mt-6 font-mono text-[10px] font-bold">
                <a
                  href="/papers/solar-optimization.pdf"
                  download="Devarsh_Bhatt_AI_Driven_Solar_Panel_Placement_Optimization.pdf"
                  className="flex items-center justify-center gap-1.5 bg-neon-cyan text-black py-2.5 hover:bg-neon-cyan/85 transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  DOWNLOAD STUDY PDF
                </a>
                
                <a
                  href="https://ieeexplore.ieee.org/document/11364963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  VIEW ON IEEE XPLORE
                </a>
              </div>

            </div>
          </div>

          {/* Right Panel: Comparative Telemetry Data (Graph visualization) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-md border border-neon-cyan/25 space-y-4">
              
              <div className="flex items-center gap-2 border-b border-neon-cyan/15 pb-3 font-mono text-[10px]">
                <Cpu className="h-4 w-4 text-neon-cyan" />
                <span className="text-neon-cyan font-bold">RESEARCH EFFICIENCY PLOT</span>
              </div>

              {/* Custom SVG Data Graph */}
              <div className="relative border border-neon-cyan/15 bg-black/40 rounded p-4 flex flex-col justify-between h-56 font-mono text-[9px] text-gray-500">
                <div className="flex justify-between border-b border-neon-cyan/10 pb-1">
                  <span>Y: POWER OUTPUT (WATTS)</span>
                  <span>X: TIME OF DAY (08:00 - 18:00)</span>
                </div>
                
                {/* SVG Graph drawing lines */}
                <svg className="w-full h-32 text-neon-cyan mt-2" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(0,229,255,0.05)" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(0,229,255,0.05)" strokeWidth="0.5" />
                  <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(0,229,255,0.05)" strokeWidth="0.5" />
                  
                  {/* Curve 1: Static Solar panel (Bottom curve) */}
                  <path
                    d="M 10,95 Q 60,60 100,50 Q 140,60 190,95"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                  
                  {/* Curve 2: Dual Axis Tracker (Middle Curve) */}
                  <path
                    d="M 10,90 Q 60,40 100,30 Q 140,40 190,90"
                    fill="none"
                    stroke="#00ffff"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  
                  {/* Curve 3: ANN Solar Optimizer (Top Curve - highest peak and fast recovery) */}
                  <path
                    d="M 10,80 Q 40,25 100,12 Q 160,25 190,80"
                    fill="none"
                    stroke="#00ff66"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_4px_rgba(0,255,102,0.4)]"
                  />

                  {/* Highlights */}
                  <circle cx="100" cy="12" r="3" fill="#00ff66" />
                </svg>

                {/* Graph Legend */}
                <div className="grid grid-cols-3 gap-1.5 border-t border-neon-cyan/10 pt-2 text-[8px]">
                  <div className="flex items-center gap-1 col-span-2">
                    <span className="h-1.5 w-3 bg-[#00ff66]" />
                    <span className="text-white">GA DYNAMIC OPTIMIZED (+20-25%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-3 bg-[#4b5563]" style={{ borderStyle: "dashed" }} />
                    <span>FIXED TILT</span>
                  </div>
                </div>

              </div>

              {/* Telemetry diagnostics note */}
              <div className="font-mono text-[10px] leading-relaxed text-gray-400 bg-[#0a192f]/20 p-3.5 border border-neon-cyan/10 rounded-sm">
                <span className="text-neon-cyan font-bold block">{"// SYSTEM NOTE ON MATLAB SIMULATION:"}</span>
                <p className="mt-1">
                  The simulation retrieves global data using OSM Nominatim and Open-Elevation APIs. Optimal rotation angles are computed via Genetic Algorithm (GA) loops, achieving a 25% improvement in efficiency compared to fixed panels.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
