"use client";

import { Sparkles, Globe, Eye, Zap, Layers } from "lucide-react";

interface ConceptCard {
  id: number;
  title: string;
  stage: string;
  feasibility: number;
  impact: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  schematic: string;
}

export default function InnovationZone() {
  const concepts: ConceptCard[] = [
    {
      id: 1,
      title: "Artificial Skin for Robots",
      stage: "MODELING",
      feasibility: 65,
      impact: "HIGH",
      desc: "Flexible arrays of pressure/temperature sensors providing tactical feedback grids for manipulator arms.",
      icon: Layers,
      color: "border-neon-cyan/20 text-neon-cyan hover:border-neon-cyan/70",
      schematic: "M 10,50 L 190,50 M 10,30 L 190,30 M 10,70 L 190,70 M 50,10 L 50,90 M 100,10 L 100,90 M 150,10 L 150,90"
    },
    {
      id: 2,
      title: "Smart Agriculture AI Core",
      stage: "ALGORITHM DESIGN",
      feasibility: 85,
      impact: "CRITICAL",
      desc: "Edge AI processors interpreting real-time soil chemistry and moisture arrays to schedule precise irrigation micro-doses.",
      icon: Sparkles,
      color: "border-green-500/20 text-green-400 hover:border-green-500/70",
      schematic: "M 50,50 C 50,20 150,20 150,50 C 150,80 50,80 50,50 Z M 100,10 L 100,90 M 20,50 L 180,50"
    },
    {
      id: 3,
      title: "Underwater Communication",
      stage: "THEORETICAL",
      feasibility: 40,
      impact: "HIGH",
      desc: "Acoustic signal transceivers employing Orthogonal Frequency Division Multiplexing (OFDM) for high-speed sub-sea links.",
      icon: Globe,
      color: "border-blue-500/20 text-blue-400 hover:border-blue-500/70",
      schematic: "M 10,90 Q 50,10 100,90 T 190,90 M 10,70 Q 50,30 100,70 T 190,70"
    },
    {
      id: 4,
      title: "Autonomous Traffic Police Robot",
      stage: "SYSTEM PROTOTYPING",
      feasibility: 75,
      impact: "HIGH",
      desc: "A mobile sensory base utilizing LiDAR mapping, license plate scanners, and direction warning beacons.",
      icon: Eye,
      color: "border-yellow-500/20 text-yellow-400 hover:border-yellow-500/70",
      schematic: "M 30,80 L 170,80 L 150,20 L 50,20 Z M 100,20 L 100,80 M 50,50 L 150,50"
    },
    {
      id: 5,
      title: "Drone Intelligence Platform",
      stage: "FLIGHT SIMULATION",
      feasibility: 80,
      impact: "CRITICAL",
      desc: "Swarms of edge-computed flight controllers coordinating collision-free operations without central GPS links.",
      icon: Zap,
      color: "border-purple-500/20 text-purple-400 hover:border-purple-500/70",
      schematic: "M 20,20 L 180,180 M 180,20 L 20,180 M 100,100 C 70,100 70,70 100,70 C 130,70 130,100 100,100 Z"
    }
  ];

  return (
    <section id="innovation" className="relative py-24 border-t border-neon-cyan/10 bg-[#050b14] overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-neon-cyan tracking-widest uppercase mb-1">
            <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
            <span>R&D CONCEPT PATHWAYS</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-wider text-white">
            FUTURE INNOVATION LAB
          </h2>
          <div className="h-0.5 w-20 bg-neon-cyan mt-2" />
        </div>

        {/* Concept Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept) => {
            const Icon = concept.icon;
            return (
              <div
                key={concept.id}
                className={`glass-card p-6 rounded-md border flex flex-col justify-between group cursor-crosshair animate-float transition-all duration-300 ${concept.color}`}
                style={{
                  animationDelay: `${concept.id * 0.8}s`,
                }}
              >
                
                <div className="space-y-4">
                  {/* Schematic box drawing */}
                  <div className="h-28 bg-[#050b14]/90 border border-neon-cyan/10 rounded flex items-center justify-center relative overflow-hidden">
                    <svg className="w-full h-full opacity-20 text-neon-cyan" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="100" stroke="rgba(0,229,255,0.05)" strokeWidth="0.5" />
                      {/* Grid cross lines */}
                      <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(0,229,255,0.1)" strokeWidth="0.5" />
                      <line x1="100" y1="0" x2="100" y2="100" stroke="rgba(0,229,255,0.1)" strokeWidth="0.5" />
                      <circle cx="100" cy="50" r="10" stroke="rgba(0,229,255,0.15)" strokeWidth="0.5" />
                      <circle cx="100" cy="50" r="30" stroke="rgba(0,229,255,0.1)" strokeWidth="0.5" />
                      
                      {/* Schematic path */}
                      <path d={concept.schematic} stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    
                    <span className="absolute bottom-2 left-2 font-mono text-[7px] text-gray-500 uppercase tracking-widest">
                      SCHEMATIC_V0.1.{concept.id}
                    </span>
                  </div>

                  {/* Title & Stage */}
                  <div className="space-y-1 font-mono">
                    <div className="flex justify-between items-center text-[8px] text-gray-500">
                      <span>STAGE: {concept.stage}</span>
                      <span className="text-neon-cyan/70">REF: C_0{concept.id}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon className="h-4 w-4 shrink-0 text-neon-cyan/80 group-hover:text-neon-cyan transition-colors" />
                      <h3 className="text-sm font-bold text-white uppercase leading-snug group-hover:text-neon-cyan transition-colors">
                        {concept.title}
                      </h3>
                    </div>
                  </div>

                  {/* Desc */}
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {concept.desc}
                  </p>
                </div>

                {/* Feasibility/Telemetry gauges */}
                <div className="mt-6 pt-3 border-t border-neon-cyan/5 space-y-2 font-mono text-[9px]">
                  <div className="flex justify-between text-gray-500">
                    <span>FEASIBILITY INDEX:</span>
                    <span className="text-white font-bold">{concept.feasibility}%</span>
                  </div>
                  <div className="h-1 bg-[#0a192f] border border-neon-cyan/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-neon-cyan transition-all duration-500 rounded-full"
                      style={{ width: `${concept.feasibility}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-gray-500">
                    <span>IMPACT LOG:</span>
                    <span className="text-neon-cyan font-bold">{concept.impact}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
