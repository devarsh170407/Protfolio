"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Play, X, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  num: string;
  categoryLabel: string;
  title: string;
  category: "Robotics" | "AI" | "Embedded" | "Web" | "Electronics" | "Software";
  desc: string;
  status: "Completed" | "Ongoing" | "Live";
  isIeee?: boolean;
  tags: string[];
  link?: string;
  videoUrl?: string;
  gallery?: string[];
}

export default function ProjectLab() {
  const [activeTab, setActiveTab] = useState<string>("ALL");
  
  const [selectedMedia, setSelectedMedia] = useState<{
    type: "video" | "gallery";
    url?: string;
    urls?: string[];
    activeIndex?: number;
    title: string;
  } | null>(null);

  const handlePrevImage = () => {
    setSelectedMedia((prev) => {
      if (!prev || prev.type !== "gallery" || !prev.urls || prev.activeIndex === undefined) return prev;
      const len = prev.urls.length;
      const nextIdx = (prev.activeIndex - 1 + len) % len;
      return { ...prev, activeIndex: nextIdx };
    });
  };

  const handleNextImage = () => {
    setSelectedMedia((prev) => {
      if (!prev || prev.type !== "gallery" || !prev.urls || prev.activeIndex === undefined) return prev;
      const len = prev.urls.length;
      const nextIdx = (prev.activeIndex + 1) % len;
      return { ...prev, activeIndex: nextIdx };
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMedia(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia]);

  const projects: Project[] = [
    {
      id: "1",
      num: "01",
      categoryLabel: "ROBOTICS",
      title: "Self-Balancing Robot",
      category: "Robotics",
      desc: "Autonomous self-balancing robot using PID control algorithms and embedded sensors with real-time stabilization.",
      status: "Completed",
      tags: ["Arduino", "MPU6050", "PID", "C++"],
      gallery: [
        "https://drive.google.com/file/d/1LMeU4RUQL2aDhwS59NDaGpKnxrSFErAv/view?usp=sharing",
        "https://drive.google.com/file/d/1E2Nac0HsWbAMYIDQKlkBaPhpb0zaRGTQ/view?usp=sharing"
      ]
    },
    {
      id: "2",
      num: "02",
      categoryLabel: "ROBOTICS",
      title: "SO100 Robotic Arm",
      category: "Robotics",
      desc: "Designed and controlled a robotic arm for object movement and automation tasks with actuator control & motion optimization.",
      status: "Completed",
      tags: ["Servo Control", "Python", "Kinematics"],
      gallery: [
        "https://drive.google.com/file/d/1a73cB6a8QpX1SRo09zh-jBC0sQLvyp0B/view?usp=sharing",
        "https://drive.google.com/file/d/13Yj96vKCab7pnWz--Tgm086NZQMUDUa4/view?usp=sharing",
        "https://drive.google.com/file/d/1GQ0EDaZzoubOZLwbL37VOXB_UDMVPq0Q/view?usp=drive_link",
        "https://drive.google.com/file/d/1nnTHzWEe9lEdr6mDKHI2MOQKquRUYve8/view?usp=sharing",
        "https://drive.google.com/file/d/1XLNqe3rQCzQLyDJOr4Bip_aQLudPfg2o/view?usp=sharing"
      ]
    },
    {
      id: "3",
      num: "03",
      categoryLabel: "ROBOTICS",
      title: "TurtleBot Autonomous Bot",
      category: "Robotics",
      desc: "Autonomous mobile robot for intelligent navigation — LiDAR integration, obstacle mapping, and SLAM.",
      status: "Ongoing",
      tags: ["ROS", "LiDAR", "Python", "SLAM"],
      gallery: [
        "https://drive.google.com/file/d/1qyT5WeD3mYxG4VMQzJs5_MnSCi5EBzZM/view?usp=sharing",
        "https://drive.google.com/file/d/1lXSFQ8RuZAtmMaQjyhPDBDIPkApBJZz3/view?usp=sharing",
        "https://drive.google.com/file/d/1PwEaNibXTqWO8bL-4qtuAvAGIOdtEaPb/view?usp=sharing"
      ]
    },
    {
      id: "4",
      num: "04",
      categoryLabel: "AI__MATLAB",
      title: "AI-Driven Solar Panel Placement Optimization",
      category: "AI",
      desc: "AI optimization for solar panel placement & tilt angle. Integrated NASA POWER API, shading analysis and terrain optimization.",
      status: "Completed",
      isIeee: true,
      tags: ["MATLAB", "Genetic Alg", "NASA POWER API"]
    },
    {
      id: "5",
      num: "05",
      categoryLabel: "EMBEDDED",
      title: "Line Following Robot",
      category: "Embedded",
      desc: "Autonomous line-following robot using IR sensors and embedded control systems.",
      status: "Completed",
      tags: ["Arduino", "IR Sensors", "C"],
      gallery: [
        "https://drive.google.com/file/d/1xmlUxylybDHLpVppKMWmZvezlSaJPjty/view?usp=sharing"
      ]
    },
    {
      id: "6",
      num: "06",
      categoryLabel: "EMBEDDED",
      title: "Obstacle Avoidance Robot",
      category: "Embedded",
      desc: "Robot capable of detecting and avoiding obstacles autonomously using ultrasonic sensors.",
      status: "Completed",
      tags: ["Arduino", "Ultrasonic", "C"]
    },
    {
      id: "7",
      num: "07",
      categoryLabel: "ELECTRONICS",
      title: "Dual Output Power Supply",
      category: "Electronics",
      desc: "Custom designed dual output power supply circuit utilizing linear regulators for analog experiments.",
      status: "Completed",
      tags: ["LM317", "LM337", "PCB"]
    },
    {
      id: "8",
      num: "08",
      categoryLabel: "LOGIC",
      title: "Fastest Finger First (ICs)",
      category: "Electronics",
      desc: "Digital logic circuit built using discrete ICs for reaction-time quiz signaling.",
      status: "Completed",
      tags: ["Logic Gates", "ICs"],
      gallery: [
        "https://drive.google.com/file/d/1u8Lh_R4oMa8m6uYlCS9SbPGUb9OEqw-L/view?usp=sharing",
        "https://drive.google.com/file/d/1e1V4ktSCTXTugYpxeyeJt4ks9WuGIRGY/view?usp=drive_link",
        "https://drive.google.com/file/d/1RGQLADJHYa-hLRE6dUdny-ogZIVaBPe2/view?usp=drive_link"
      ]
    },
    {
      id: "9",
      num: "09",
      categoryLabel: "WEB",
      title: "Rudraksha Design Studio",
      category: "Web",
      desc: "Modern digital portfolio and catalog showcase built for Rudraksha Design Studio.",
      status: "Live",
      tags: ["HTML", "CSS", "JS"],
      link: "https://www.rudrakshadesignstudio.com/"
    },
    {
      id: "10",
      num: "10",
      categoryLabel: "SOFTWARE",
      title: "Gramin Sanjivani App",
      category: "Software",
      desc: "Comprehensive smart agriculture assistance application targeting rural communities.",
      status: "Live",
      tags: ["Web App", "UX", "Vercel"],
      link: "https://gram-sanjivani.vercel.app/"
    },
    {
      id: "11",
      num: "11",
      categoryLabel: "EMBEDDED",
      title: "Gesture-Controlled Attendance System",
      category: "Embedded",
      desc: "Raspberry Pi based automatic student attendance system utilizing computer vision and dynamic hand gesture recognition.",
      status: "Completed",
      tags: ["Raspberry Pi", "OpenCV", "Python", "Computer Vision"]
    }
  ];

  const categories = ["ALL", "ROBOTICS", "AI", "EMBEDDED", "ELECTRONICS", "WEB", "SOFTWARE"];

  const filteredProjects = activeTab === "ALL" 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === activeTab || p.categoryLabel.toUpperCase() === activeTab);

  return (
    <section id="projects" className="relative py-24 border-t border-neon-cyan/15 bg-[#030712] overflow-hidden grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-share-tech-mono text-xs tracking-[0.3em] uppercase text-neon-cyan mb-2">
            —— 02 PROJECTS
          </div>
          <h2 className="font-unbounded text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white">
            FIELD DEPLOYMENTS
          </h2>
          <p className="font-share-tech-mono text-xs text-gray-400 mt-2 max-w-2xl leading-relaxed">
            A curated stack of robotics, embedded, AI and software builds – from prototypes to live systems.
          </p>
        </div>

        {/* Terminal Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 font-share-tech-mono text-xs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 border transition-all duration-200 cursor-pointer ${
                activeTab === cat 
                  ? "bg-neon-cyan/15 border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(0,229,255,0.2)]" 
                  : "border-neon-cyan/25 bg-[#050B14] text-gray-400 hover:border-neon-cyan/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="relative border border-neon-cyan/20 bg-[#050B14] p-6 transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] flex flex-col justify-between group min-h-[260px]"
            >
              {/* L-brackets */}
              <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

              <div>
                {/* Header Metadata */}
                <div className="flex justify-between items-center font-share-tech-mono text-[11px] sm:text-xs text-[#00E5FF]/70 mb-4 select-none">
                  <span>// {project.num}_{project.categoryLabel}</span>
                  <div className="flex items-center gap-1.5">
                    {project.status === "Completed" && (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                        <span className="text-[#00E5FF]">COMPLETED</span>
                      </>
                    )}
                    {project.status === "Ongoing" && (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
                        <span className="text-[#FF5C00]">ONGOING</span>
                      </>
                    )}
                    {project.status === "Live" && (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400">LIVE</span>
                      </>
                    )}
                    {project.isIeee && (
                      <span className="ml-1 px-1.5 py-0.5 border border-neon-cyan/30 text-[#00E5FF] font-bold rounded-sm text-[9px] sm:text-[10px]">
                        IEEE
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-unbounded font-black text-base sm:text-lg text-white uppercase tracking-tight group-hover:text-neon-cyan transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-[13px] sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Tags & Action Row */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="font-share-tech-mono text-[10px] sm:text-xs px-2 py-0.5 border border-neon-cyan/20 bg-[#030712] text-gray-400 uppercase font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center flex-wrap font-share-tech-mono text-xs sm:text-sm">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neon-cyan hover:underline hover:text-white transition-colors"
                    >
                      <span>VISIT SITE</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}

                  {project.videoUrl && (
                    <button
                      onClick={() => setSelectedMedia({ type: "video", url: project.videoUrl || "", title: project.title })}
                      className="inline-flex items-center gap-1.5 text-[#FF5C00] hover:underline hover:text-white transition-colors cursor-pointer"
                    >
                      <span>WATCH DEMO</span>
                      <Play className="h-3.5 w-3.5 fill-[#FF5C00]/20" />
                    </button>
                  )}

                  {project.gallery && project.gallery.length > 0 && (
                    <button
                      onClick={() => setSelectedMedia({
                        type: "gallery",
                        urls: project.gallery || [],
                        activeIndex: 0,
                        title: project.title
                      })}
                      className="inline-flex items-center gap-1.5 text-neon-cyan hover:underline hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{project.category === "Robotics" || project.category === "Embedded" ? "WATCH DEMOS" : "VIEW GALLERY"}</span>
                      {project.category === "Robotics" || project.category === "Embedded" ? (
                        <Play className="h-3.5 w-3.5 text-neon-cyan fill-neon-cyan/20" />
                      ) : (
                        <ImageIcon className="h-3.5 w-3.5 text-neon-cyan" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer: END_OF_TRANSMISSION */}
        <div className="flex justify-center items-center mt-16 font-share-tech-mono text-[10px] text-[#00E5FF]/40 tracking-[0.3em] uppercase select-none">
          —— END_OF_TRANSMISSION ——
        </div>

      </div>

      {/* Media Modal Overlay */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div 
            className="relative w-full max-w-3xl border border-neon-cyan/40 bg-[#050B14] shadow-[0_0_50px_rgba(0,229,255,0.25)] scanlines"
            onClick={(e) => e.stopPropagation()}
          >
            {/* L-brackets */}
            <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

            {/* Title Bar */}
            <div className="flex items-center justify-between border-b border-neon-cyan/20 bg-[#0a192f] px-4 py-3 font-mono text-xs text-neon-cyan">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${selectedMedia.type === "gallery" ? "bg-neon-cyan animate-pulse" : "bg-red-500 animate-ping"}`} />
                <span className="font-bold">
                  {selectedMedia.title.toUpperCase().includes("ROBOT") || selectedMedia.title.toUpperCase().includes("FIRST") ? "SYSTEM PLAYBACK" : "IMAGE VIEWER"} // SOURCE: {selectedMedia.title.toUpperCase()}
                </span>
              </div>
              <button 
                onClick={() => setSelectedMedia(null)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Viewport"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Main Media Viewport */}
            <div className="relative p-2 bg-black flex items-center justify-center min-h-[300px]">
              
              {/* Prev Button Overlay */}
              {selectedMedia.type === "gallery" && selectedMedia.urls && selectedMedia.urls.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                  className="absolute left-4 z-10 p-2 rounded-full border border-neon-cyan/35 bg-[#050B14]/85 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all cursor-pointer shadow-[0_0_10px_rgba(0,229,255,0.2)]"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {/* Viewport Frame */}
              <div className="w-full relative aspect-video">
                {selectedMedia.type === "gallery" && selectedMedia.urls && selectedMedia.activeIndex !== undefined ? (
                  <iframe
                    src={selectedMedia.urls[selectedMedia.activeIndex].split("/view")[0] + "/preview"}
                    title={`${selectedMedia.title} - Image ${selectedMedia.activeIndex + 1}`}
                    allow="autoplay"
                    className="w-full h-full border border-neon-cyan/15 bg-black"
                  />
                ) : selectedMedia.url ? (
                  selectedMedia.url.includes("youtube.com") || selectedMedia.url.includes("youtu.be") || selectedMedia.url.includes("drive.google.com") ? (
                    <iframe
                      src={selectedMedia.url.includes("drive.google.com") ? selectedMedia.url.split("/view")[0] + "/preview" : selectedMedia.url.replace("watch?v=", "embed/")}
                      title={selectedMedia.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border border-neon-cyan/15"
                    />
                  ) : (
                    <video 
                      src={selectedMedia.url} 
                      controls 
                      autoPlay 
                      loop
                      className="w-full h-full border border-neon-cyan/15 object-cover"
                    />
                  )
                ) : null}
              </div>

              {/* Next Button Overlay */}
              {selectedMedia.type === "gallery" && selectedMedia.urls && selectedMedia.urls.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                  className="absolute right-4 z-10 p-2 rounded-full border border-neon-cyan/35 bg-[#050B14]/85 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all cursor-pointer shadow-[0_0_10px_rgba(0,229,255,0.2)]"
                  aria-label="Next Image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Gallery Navigation Controls Bottom Bar */}
            {selectedMedia.type === "gallery" && selectedMedia.urls && selectedMedia.activeIndex !== undefined && (
              <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-[#0a192f]/50 border-t border-neon-cyan/20 font-mono text-[10px] text-neon-cyan gap-2 select-none">
                <span>SYSTEM STATUS: ONLINE // CACHED VIEWPORT</span>
                
                {/* Dots indicator */}
                <div className="flex gap-1.5 items-center">
                  {selectedMedia.urls.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedMedia({ ...selectedMedia, activeIndex: idx })}
                      className={`h-2 w-2 rounded-full border transition-all cursor-pointer ${
                        selectedMedia.activeIndex === idx 
                          ? "bg-neon-cyan border-neon-cyan shadow-[0_0_8px_rgba(0,229,255,0.6)]" 
                          : "border-neon-cyan/40 bg-transparent hover:border-neon-cyan"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold uppercase tracking-wider">
                    {selectedMedia.title.toUpperCase().includes("ROBOT") || selectedMedia.title.toUpperCase().includes("FIRST") ? "DEMO" : "IMAGE"} {selectedMedia.activeIndex + 1} OF {selectedMedia.urls.length}
                  </span>
                  <span className="hidden md:inline text-gray-500">|</span>
                  <span className="hidden md:inline text-gray-400">ARROW KEYS OR CLICK FLOATING CHEVRONS</span>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
