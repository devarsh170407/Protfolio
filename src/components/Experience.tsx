"use client";

import { Trophy, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "RESEARCH INTERN",
      organization: "NIT WARANGAL",
      period: "MAY 2026 - PRESENT",
      type: "Research Internship, India",
      bullets: [],
    },
    {
      role: "ADVANCE DRONE TECHNOLOGY INTERN",
      organization: "INDIAN SPACE LAB",
      period: "2025 (1 MONTH ONLINE)",
      type: "Internship, India",
      bullets: [],
    },
    {
      role: "CHAIR OF OUTREACH",
      organization: "IEEE COMSOC, MARWADI UNIVERSITY",
      period: "2026 - PRESENT",
      type: "Leadership, Marwadi University",
      bullets: [],
    },
    {
      role: "EVENT MANAGER",
      organization: "CLOUD COMPUTING & DEVOPS CLUB",
      period: "2026 - PRESENT",
      type: "Club Coordinator",
      bullets: [],
    },
  ];

  const achievements = [
    { rank: "2nd Place", title: "IEEE MATLAB Innovation Challenge" },
    { rank: "1st Place", title: "IEEE Sampark Datathon" },
    { rank: "2nd Place", title: "Official Hackduino Hackathon" },
    { rank: "2nd Place", title: "Byte Hunt IoT Trail" },
    { rank: "Selected in Top 15", title: "IEEE MYOSA Event" },
    { rank: "2nd Place", title: "555 IC Timer Event" },
  ];

  return (
    <section id="experience" className="relative py-24 border-t border-neon-cyan/15 bg-[#030712] overflow-hidden grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-share-tech-mono text-xs tracking-[0.3em] uppercase text-neon-cyan mb-2">
            —— 04 LOG
          </div>
          <h2 className="font-unbounded text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white">
            EXPERIENCE & ACHIEVEMENTS
          </h2>
          <p className="font-share-tech-mono text-xs text-gray-400 mt-2 max-w-2xl leading-relaxed">
            Timeline of professional internships, leadership roles, and hackathon accomplishments.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline (7 cols) */}
          <div className="lg:col-span-7 relative pl-4 border-l border-neon-cyan/20 space-y-8 py-1">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group pl-6">
                
                {/* Glowing Dot on timeline */}
                <div className="absolute -left-[21px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#030712] border border-[#00E5FF] flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                </div>

                {/* Event HudCard */}
                <div className="relative border border-neon-cyan/20 bg-[#050B14] p-6 transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)]">
                  {/* L-brackets */}
                  <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
                  <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

                  {/* Header metadata */}
                  <div className="flex flex-wrap justify-between items-center font-share-tech-mono text-[9px] text-neon-cyan font-bold uppercase mb-3 border-b border-neon-cyan/10 pb-2">
                    <span>{exp.organization}</span>
                    <span className="text-[#FF5C00]">{exp.period}</span>
                  </div>

                  <h3 className="font-unbounded font-black text-xs text-white uppercase tracking-tight mb-0.5">
                    {exp.role}
                  </h3>
                  <span className="font-share-tech-mono text-[10px] text-gray-500 uppercase block mb-4">
                    {exp.type}
                  </span>

                  <ul className="space-y-2 text-xs text-gray-300 font-sans leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-neon-cyan font-share-tech-mono select-none">&gt;&gt;</span>
                        <p>{bullet}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Achievements (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-share-tech-mono text-[10px] text-neon-cyan font-bold uppercase tracking-wider mb-2 pl-2">
              // REGISTERED_ACHIEVEMENTS
            </div>
            
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="relative border border-neon-cyan/20 bg-[#050B14] p-5 transition-all duration-300 hover:border-[#FF5C00]/60 hover:shadow-[0_0_25px_rgba(255,92,0,0.18)]"
              >
                {/* L-brackets */}
                <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

                <div className="flex flex-col">
                  {/* Big Orange-Glowing Rank */}
                  <span 
                    className="font-unbounded font-black text-lg text-[#FF5C00] uppercase tracking-tighter"
                    style={{ textShadow: "0 0 10px rgba(255, 92, 0, 0.4)" }}
                  >
                    {ach.rank}
                  </span>
                  {/* Subtitle */}
                  <span className="font-share-tech-mono text-xs text-white uppercase mt-1">
                    {ach.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
