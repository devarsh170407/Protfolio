"use client";

import { Cpu, Code2, Brain, Wrench, Globe } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // 1 to 5
}

interface SkillModule {
  num: string;
  label: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export default function Skills() {
  const modules: SkillModule[] = [
    {
      num: "01",
      label: "MODULE 01",
      name: "HARDWARE PLATFORMS",
      icon: Cpu,
      skills: [
        { name: "Arduino", level: 4 },
        { name: "ESP32", level: 4 },
        { name: "NodeMCU", level: 4 },
        { name: "Raspberry Pi", level: 4 },
        { name: "Jetson Nano", level: 3 },
      ],
    },
    {
      num: "02",
      label: "MODULE 02",
      name: "PROGRAMMING",
      icon: Code2,
      skills: [
        { name: "C", level: 4 },
        { name: "C++", level: 4 },
        { name: "Python", level: 5 },
        { name: "Java", level: 3 },
        { name: "MATLAB", level: 4 },
      ],
    },
    {
      num: "03",
      label: "MODULE 03",
      name: "DOMAINS",
      icon: Brain,
      skills: [
        { name: "AI", level: 4 },
        { name: "IoT", level: 5 },
        { name: "Robotics", level: 4 },
        { name: "Embedded Systems", level: 5 },
        { name: "Automation", level: 4 },
      ],
    },
    {
      num: "04",
      label: "MODULE 04",
      name: "SOFTWARE TOOLS",
      icon: Wrench,
      skills: [
        { name: "MATLAB Simulink", level: 4 },
        { name: "Arduino IDE", level: 5 },
        { name: "Proteus", level: 4 },
      ],
    },
    {
      num: "05",
      label: "MODULE 05",
      name: "WEB TECH",
      icon: Globe,
      skills: [
        { name: "HTML", level: 5 },
        { name: "CSS", level: 4 },
        { name: "JavaScript", level: 4 },
        { name: "PHP", level: 3 },
        { name: "MySQL", level: 4 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-neon-cyan/15 bg-[#030712] overflow-hidden grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-share-tech-mono text-xs tracking-[0.3em] uppercase text-neon-cyan mb-2">
            —— 03 STACK
          </div>
          <h2 className="font-unbounded text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white">
            SYSTEM CAPABILITIES
          </h2>
          <p className="font-share-tech-mono text-xs text-gray-400 mt-2 max-w-2xl leading-relaxed">
            Hardware platforms, programming interfaces, core domains, development tools, and fullstack technologies.
          </p>
        </div>

        {/* 3-Column Grid of 5 Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => {
            const IconComponent = mod.icon;
            return (
              <div
                key={idx}
                className="relative border border-neon-cyan/20 bg-[#050B14] p-6 transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)]"
              >
                {/* L-brackets */}
                <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center gap-4 border-b border-neon-cyan/15 pb-4 mb-4">
                  {/* 36px cyan-bordered icon */}
                  <div className="w-[36px] h-[36px] border border-neon-cyan/45 flex items-center justify-center bg-[#030712] shrink-0">
                    <IconComponent className="h-5 w-5 text-neon-cyan" />
                  </div>
                  <div className="font-share-tech-mono">
                    <span className="text-[9px] text-neon-cyan font-bold tracking-widest block">{mod.label}</span>
                    <span className="text-xs text-white font-bold tracking-wide">{mod.name}</span>
                  </div>
                </div>

                {/* Per-item Rows */}
                <div className="space-y-3 font-share-tech-mono text-xs">
                  {mod.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="py-0.5 border-b border-neon-cyan/5 last:border-0"
                    >
                      <span className="text-gray-400">
                        [{String(sIdx + 1).padStart(2, "0")}] {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
