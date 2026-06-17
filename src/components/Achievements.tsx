"use client";

import { Award, ShieldAlert, Cpu, Trophy, Star } from "lucide-react";

interface Badge {
  id: number;
  rank: string;
  title: string;
  host: string;
  year: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  desc: string;
}

export default function Achievements() {
  const badges: Badge[] = [
    {
      id: 1,
      rank: "2ND PLACE",
      title: "IEEE MATLAB Innovation Challenge",
      host: "IEEE / MathWorks",
      year: "2025",
      icon: Cpu,
      color: "border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(0,229,255,0.2)]",
      desc: "Awarded for modeling a predictive solar tracking control loop utilizing neural networks in Simulink.",
    },
    {
      id: 2,
      rank: "1ST PLACE",
      title: "IEEE Sampark Datathon",
      host: "IEEE Section",
      year: "2024",
      icon: Trophy,
      color: "border-green-400 text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.2)]",
      desc: "Won first place by training a deep convolutional network to classify plant conditions with high accuracy.",
    },
    {
      id: 3,
      rank: "2ND PLACE",
      title: "Hackduino Hackathon",
      host: "Arduino Dev Community",
      year: "2024",
      icon: Award,
      color: "border-yellow-400 text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]",
      desc: "Developed a functional pick-and-place coordinate arm controlled remotely via low-latency serial mesh.",
    },
    {
      id: 4,
      rank: "2ND PLACE",
      title: "Byte Hunt IoT Trail",
      host: "Tech Fest Club",
      year: "2023",
      icon: Star,
      color: "border-purple-400 text-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.2)]",
      desc: "Engineered solar-powered moisture tracker nodes broadcasting to a local gateway mesh.",
    },
    {
      id: 5,
      rank: "SELECTED IN TOP 15",
      title: "IEEE MYOSA",
      host: "IEEE Council",
      year: "2024",
      icon: ShieldAlert,
      color: "border-blue-400 text-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.2)]",
      desc: "Selected to present projects and collaborate on micro-controller standards at the regional seminar.",
    },
    {
      id: 6,
      rank: "2ND PLACE",
      title: "555 IC Timer Event",
      host: "Tech Fest Event",
      year: "2024",
      icon: Cpu,
      color: "border-yellow-400 text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]",
      desc: "Designed and calibrated a high-precision astable multivibrator circuit using a 555 IC timer under strict time limits.",
    },
  ];

  return (
    <section id="achievements" className="relative py-24 border-t border-neon-cyan/10 bg-[#050b14] overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-neon-cyan tracking-widest uppercase mb-1">
            <Trophy className="h-3.5 w-3.5 text-neon-cyan" />
            <span>HONORARY CITATIONS</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-wider text-white">
            ACHIEVEMENTS SYSTEM
          </h2>
          <div className="h-0.5 w-20 bg-neon-cyan mt-2" />
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className="glass-card p-6 rounded-md border border-neon-cyan/15 flex flex-col justify-between group cursor-crosshair relative overflow-hidden"
              >
                {/* Visual Scanner overlay on hover */}
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 w-full opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none" />
                
                <div className="space-y-4">
                  {/* Badge Icon Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border bg-[#050b14] transition-all duration-300 group-hover:scale-110 ${badge.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[9px] text-gray-500 font-bold">
                      VERIFICATION: SUCCESS
                    </span>
                  </div>

                  {/* Title Info */}
                  <div className="space-y-1 font-mono">
                    <span className="text-[10px] text-neon-cyan font-bold tracking-widest block">
                      {badge.rank}
                    </span>
                    <h3 className="text-sm font-bold text-white uppercase leading-snug group-hover:text-neon-cyan transition-colors">
                      {badge.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[9px] text-gray-500 pt-0.5">
                      <span>{badge.host.toUpperCase()}</span>
                      <span>{"//"}</span>
                      <span>{badge.year}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-400 font-sans leading-relaxed pt-2 border-t border-neon-cyan/5">
                    {badge.desc}
                  </p>
                </div>

                {/* Cyber indicators */}
                <div className="mt-4 pt-3 border-t border-neon-cyan/5 flex justify-between items-center font-mono text-[8px] text-gray-600">
                  <span>LOG_ID: B-{badge.id}98</span>
                  <span className="text-neon-cyan/50">{"// SECURE RECORD"}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
