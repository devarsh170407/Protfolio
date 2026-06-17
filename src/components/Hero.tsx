"use client";

import { useState, useEffect } from "react";

const words = [
  "Robotics & AI Engineer",
  "Drone Tech Researcher",
  "Embedded Systems Developer",
  "IoT Systems Innovator",
];

export default function Hero() {
  const stats = [
    { value: "10+", label: "PROJECTS" },
    { value: "5", label: "HACKATHON WINS" },
    { value: "1", label: "IEEE PAPER" },
    { value: "5+", label: "ROBOTICS STACKS" },
  ];

  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(200);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIdx, typingSpeed]);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-between pt-8 pb-12 overflow-hidden grid-bg bg-[#050b14]"
    >
      {/* Background Graphic Asset */}
      <div 
        className="absolute right-0 bottom-[10%] w-[55%] h-[75%] bg-contain bg-no-repeat bg-right-bottom opacity-12 pointer-events-none z-0 select-none"
        style={{ backgroundImage: 'url("/robotic_arm_bg.png")' }}
      />

      {/* Decorative Radar Sweep Grid */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-5">
        <div className="w-full h-full rounded-full border border-neon-cyan relative animate-pulse-slow">
          <div className="absolute inset-0 rounded-full border border-dashed border-neon-cyan/50 scale-75" />
          <div className="absolute inset-0 rounded-full border border-neon-cyan/35 scale-50" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-neon-cyan/40" />
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-neon-cyan/40" />
        </div>
      </div>

      {/* Main HUD container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col justify-between flex-grow">
        
        {/* Top HUD Telemetry Row */}
        <div className="flex justify-between items-start font-share-tech-mono text-[11px] tracking-widest text-[#00E5FF] w-full pt-4 select-none">
          <div className="flex items-center gap-2">
            <span>—— 00 // BOOT_SEQUENCE</span>
          </div>
          <div className="text-left flex flex-col gap-1">
            <span className="text-[#00E5FF]/70">LAT: 22.3039° N</span>
            <span className="text-[#00E5FF]/70">LON: 70.8022° E</span>
            <div className="flex items-center justify-start gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5533] animate-pulse" />
              <span className="text-[#FF5533] font-bold">SIGNAL ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Hero Middle Content */}
        <div className="my-auto max-w-3xl space-y-6 pt-12 pb-16">
          
          {/* Main Large Title */}
          <div className="space-y-1">
            <h1 className="font-unbounded text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-none">
              <span className="block text-white">DEVARSH</span>
              <span className="block text-neon-cyan text-glow mt-1">BHATT_</span>
            </h1>
          </div>

          {/* Subheading with typewriter effect */}
          <div className="flex items-center gap-2 font-share-tech-mono text-lg font-bold sm:text-xl min-h-[32px]">
            <span className="text-[#FF5533] text-glow select-none">↘</span>
            <span className="text-[#00E5FF] tracking-wider">{displayText}</span>
            <span className="h-5 w-2 bg-[#00E5FF] animate-pulse ml-0.5 shrink-0" />
          </div>

          {/* Tagline / Description */}
          <p className="font-share-tech-mono text-sm sm:text-[14px] text-gray-400 max-w-xl leading-relaxed">
            Building autonomous machines that think, balance and explore – from PID controllers to LiDAR-driven navigation, embedded micro-systems to AI-driven optimization.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4 font-unbounded">
            <div className="relative">
              {/* Offset outline box */}
              <div className="absolute top-[4px] left-[4px] w-full h-full border border-[#00E5FF]/40 pointer-events-none" />
              <a
                href="#projects"
                className="relative z-10 flex items-center justify-center bg-[#00E5FF] px-7 py-3.5 text-[10px] font-black uppercase tracking-wider text-black transition-all hover:bg-neon-cyan cursor-pointer"
              >
                VIEW PROJECTS
              </a>
            </div>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-1 border border-[#00E5FF]/45 bg-transparent px-7 py-3.5 text-[10px] font-black uppercase tracking-wider text-[#00E5FF] transition-all hover:bg-neon-cyan/10 hover:border-neon-cyan"
            >
              INITIATE CONTACT <span className="ml-1 text-xs">›</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1SQEgT-pljZfSjG7SKEbTOss0NmSzjhjC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 border border-[#FF5C00]/45 bg-transparent px-7 py-3.5 text-[10px] font-black uppercase tracking-wider text-[#FF5C00] transition-all hover:bg-[#FF5C00]/10 hover:border-[#FF5C00]"
            >
              DOWNLOAD CV <span className="ml-1 text-xs">⤓</span>
            </a>
          </div>

        </div>

        {/* Bottom HUD Statistics & Watermark */}
        <div className="w-full select-none">
          {/* Thin separator line */}
          <div className="h-[1px] w-full bg-[#00E5FF]/10 mb-6" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-2">
            
            {/* Stats list */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-unbounded text-3xl md:text-[38px] font-black text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="font-share-tech-mono text-[9px] text-[#00E5FF] tracking-[0.2em] mt-1 font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>


          </div>
        </div>

      </div>

      {/* Bottom Left Cyber HUD telemetry overlay */}
      <div className="absolute bottom-6 left-6 font-share-tech-mono text-[9px] text-[#00E5FF]/60 select-none hidden md:block">
        <div>NODE_ID: DB-1747</div>
        <div>STATUS: OPERATIONAL</div>
      </div>
    </section>
  );
}
