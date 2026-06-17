"use client";

import { useRef, useState } from "react";
import { Play, Tv, Volume2, VolumeX } from "lucide-react";

interface VideoFeed {
  id: number;
  title: string;
  category: "Robotics" | "AI" | "IoT" | "Embedded Systems" | "Research";
  videoUrl: string;
  posterUrl: string;
  metrics: string;
}

export default function VideoShowcase() {
  const [activeFeed, setActiveFeed] = useState<VideoFeed | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const feeds: VideoFeed[] = [
    {
      id: 1,
      title: "TurtleBot SLAM Autonomous Mapping Run",
      category: "Robotics",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-robot-device-operating-41584-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop",
      metrics: "LIDAR SCAN: ACTIVE // AMCL LOCK: 98%"
    },
    {
      id: 2,
      title: "SO100 Pick & Place Sequence",
      category: "Robotics",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-mechanical-arm-of-a-robot-in-a-lab-41587-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
      metrics: "IK_SOLVER: OK // JOINT_TEMP: 38.2C"
    },
    {
      id: 3,
      title: "Self-Balancing Robot PID Tuning Run",
      category: "Robotics",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-adjusting-the-cables-of-a-device-41588-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=600&auto=format&fit=crop",
      metrics: "PID_LOOP: RUNNING // ANGLE_ERROR: 0.12DEG"
    },
    {
      id: 4,
      title: "Solar Panel Angle Adjuster Test",
      category: "Research",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-microchip-extreme-close-up-39947-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
      metrics: "MPPT: EXT_COND // IRRADIANCE: 850W/m2"
    },
    {
      id: 5,
      title: "Gramin Sanjivani LoRa Mesh Packet Transfer",
      category: "IoT",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-working-on-a-motherboard-41589-large.mp4",
      posterUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop",
      metrics: "LORA_FREQ: 868MHz // RSSI: -92dBm"
    }
  ];

  const handleMouseEnter = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="videos" className="relative py-24 border-t border-neon-cyan/10 bg-[#050b14] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-neon-cyan tracking-widest uppercase mb-1">
            <Tv className="h-3.5 w-3.5 text-neon-cyan animate-pulse" />
            <span>LAB DIAGNOSTIC TELECASTS</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-wider text-white">
            PROJECT TESTING CENTER
          </h2>
          <div className="h-0.5 w-20 bg-neon-cyan mt-2" />
        </div>

        {/* Video Channel Scroll Grid */}
        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x scrollbar-thin">
          {feeds.map((feed) => (
            <div
              key={feed.id}
              className="flex-shrink-0 w-80 snap-start bg-[#0a192f]/40 border border-neon-cyan/15 rounded-md overflow-hidden group hover:border-neon-cyan/50 transition-all cursor-pointer"
              onMouseEnter={() => handleMouseEnter(feed.id)}
              onMouseLeave={() => handleMouseLeave(feed.id)}
              onClick={() => setActiveFeed(feed)}
            >
              
              {/* Autoplay Container */}
              <div className="h-44 w-full relative bg-black/60 overflow-hidden border-b border-neon-cyan/15">
                <video
                  ref={(el) => {
                    videoRefs.current[feed.id] = el;
                  }}
                  src={feed.videoUrl}
                  poster={feed.posterUrl}
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Visual grid scans */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent h-full w-full opacity-30 pointer-events-none" />
                <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#0a192f]/85 border border-neon-cyan/35 rounded font-mono text-[8px] text-neon-cyan uppercase">
                  {feed.category}
                </div>
                
                {/* Live watermark */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1 px-1.5 py-0.5 bg-red-600 border border-red-500 rounded font-mono text-[8px] text-white uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                  <span>FEED_0{feed.id}</span>
                </div>
              </div>

              {/* Feed Meta */}
              <div className="p-4 space-y-2.5 font-mono text-xs">
                <h3 className="font-bold text-white leading-tight uppercase group-hover:text-neon-cyan transition-colors line-clamp-1">
                  {feed.title}
                </h3>
                <div className="bg-[#050b14]/70 p-2 border border-neon-cyan/10 rounded-sm text-[9px] text-gray-400">
                  <span className="text-neon-cyan font-bold block">{"// DIAGNOSTICS:"}</span>
                  <span className="block mt-0.5 uppercase tracking-wide">{feed.metrics}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full Screen Playback HUD Modal */}
      {activeFeed && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 font-mono">
          <div className="w-full max-w-4xl glass-card border-neon-cyan/30 rounded-md overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-[#0a192f] border-b border-neon-cyan/35 px-4 py-3 text-xs">
              <span className="text-neon-cyan font-bold flex items-center gap-2">
                <Play className="h-4 w-4 animate-pulse fill-neon-cyan text-neon-cyan" />
                STREAM CHANNEL: FEED_0{activeFeed.id} {"//"} {activeFeed.title.toUpperCase()}
              </span>
              <button
                onClick={() => setActiveFeed(null)}
                className="text-gray-400 hover:text-neon-cyan px-2 py-1 transition-all"
              >
                DISCONNECT FEED
              </button>
            </div>

            {/* Video container */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src={activeFeed.videoUrl}
                autoPlay
                controls
                muted={isMuted}
                playsInline
                loop
                className="w-full h-full object-contain"
              />
              
              {/* Custom Overlay indicators */}
              <div className="absolute top-4 left-4 pointer-events-none p-2 border border-neon-cyan/30 bg-[#0a192f]/70 text-[9px] text-neon-cyan rounded space-y-1">
                <div>FEED STAT: SYSTEM OPERATIONAL</div>
                <div>FRAME RATE: 60 FPS</div>
                <div>SYNC: NOMINAL</div>
              </div>

              {/* Mute toggle button */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 border border-neon-cyan/35 text-neon-cyan hover:bg-neon-cyan/15 transition-all"
                aria-label="Toggle Mute"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
