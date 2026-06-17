"use client";

import { useState } from "react";
import { Calendar, Terminal } from "lucide-react";

interface Milestone {
  id: number;
  event: string;
  project: string;
  role: string;
  date: string;
  tech: string[];
  logs: string[];
}

export default function Timeline() {
  const [selectedId, setSelectedId] = useState(1);

  const milestones: Milestone[] = [
    {
      id: 1,
      event: "IEEE ICRCICN 2025 Conference",
      project: "AI-Driven Solar Panel Placement Optimization",
      role: "Lead Author & Presenter",
      date: "DEC 2025",
      tech: ["MATLAB", "Genetic Algorithm", "NASA POWER API", "OpenStreetMap"],
      logs: [
        "SYS_INIT: OpenStreetMap & Open-Elevation API data streams initialized.",
        "PROCESSING: Shading obstacle shadow simulation mapped over 3D Digital Elevation Models.",
        "OPTIMIZATION: Genetic Algorithm tilt angles dynamic optimization executed.",
        "DIAGNOSTIC: Dynamic rotation system achieved a 20-25% solar energy boost.",
        "SUCCESS: Peer-reviewed paper successfully published and added to IEEE Xplore database."
      ]
    },
    {
      id: 2,
      event: "IEEE Sampark Datathon",
      project: "Plant Pathology Classifier",
      role: "Deep Learning Model Developer",
      date: "SEP 2024",
      tech: ["Python", "PyTorch", "ResNet50", "Albumentations"],
      logs: [
        "SYS_INIT: Image dataset normalized and loaders initialized.",
        "BALANCING: Weighted Random Sampler active for class imbalance.",
        "TRAINING: Completed 40 epochs; learning rate decay initialized.",
        "DIAGNOSTIC: Validation accuracy stabilized at 92.4%.",
        "SUCCESS: 1st Place overall out of 80 competing teams."
      ]
    },
    {
      id: 3,
      event: "Hackduino Hackathon",
      project: "SO100 Robotic Arm Interface",
      role: "ESP32 Firmware Engineer",
      date: "JUN 2024",
      tech: ["ESP32", "C++", "FreeRTOS", "WebSockets", "Inverse Kinematics"],
      logs: [
        "SYS_INIT: FreeRTOS dual-core task loops spawned.",
        "NETWORK: WebSocket server listening on port 81 (JSON packets).",
        "COMPUTATION: Joint-angle trigonometric matrix solved.",
        "TELEMETRY: Real-time telemetry feedback calibrated via serial.",
        "SUCCESS: Pick-and-place loop executed under 2.5s."
      ]
    },
    {
      id: 4,
      event: "Byte Hunt IoT Trail",
      project: "Rural Farming Soil Mesh",
      role: "IoT Network Architect",
      date: "NOV 2023",
      tech: ["ESP32", "LoRa Peer-to-Peer", "NPK Sensors", "InfluxDB"],
      logs: [
        "SYS_INIT: LoRa RFM95 module bound on 868MHz frequency.",
        "POWER: Deep sleep current optimized to 15uA nominal.",
        "SENSOR: Soil NPK readings normalized via calibration math.",
        "GATEWAY: Node-Red flow mapping JSON telemetry to InfluxDB.",
        "SUCCESS: Deployed mesh networks across 3 test farm grids."
      ]
    },
    {
      id: 5,
      event: "IEEE MYOSA Seminar",
      project: "Cyber-Physical Systems Keynote",
      role: "Research Presenter",
      date: "MAR 2024",
      tech: ["Embedded C", "Stabilization Loops", "Telemetry"],
      logs: [
        "SYS_INIT: Telemetry display modules initialized.",
        "PRESENTATION: Showcased MPU6050 complementary filter math.",
        "EXHIBIT: Live demonstration of self-balancing telemetry curves.",
        "SUCCESS: Selected as highly evaluated participant presentation."
      ]
    }
  ];

  const active = milestones.find((m) => m.id === selectedId) || milestones[0];

  return (
    <section id="timeline" className="relative py-24 border-t border-neon-cyan/10 bg-[#050b14]/50 overflow-hidden">
      
      {/* Decorative timeline wire frame */}
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-5 font-mono text-[10px] text-neon-cyan select-none">
        <span>MISSION_TIMELINE_LOGS: LOADED</span>
        <br />
        <span>SECTOR: 0x48DF</span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-neon-cyan tracking-widest uppercase mb-1">
            <Calendar className="h-3.5 w-3.5 text-neon-cyan" />
            <span>MISSION DEPLOYMENT LOGS</span>
          </div>
          <h2 className="font-mono text-3xl font-bold uppercase tracking-wider text-white">
            HACKATHON TIMELINE
          </h2>
          <div className="h-0.5 w-20 bg-neon-cyan mt-2" />
        </div>

        {/* Timeline Grid Splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left side: Interactive Timeline list */}
          <div className="lg:col-span-5 relative border-l border-neon-cyan/25 ml-4 space-y-6 py-2">
            {milestones.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className="relative pl-6 cursor-pointer group"
                >
                  {/* Glowing Node Dot */}
                  <div
                    className={`absolute -left-[5px] top-1.5 h-2 w-2 rounded-full border transition-all duration-300 ${
                      isSelected
                        ? "bg-neon-cyan border-white scale-125 shadow-[0_0_10px_rgba(0,229,255,1)]"
                        : "bg-[#050b14] border-neon-cyan/50 group-hover:border-neon-cyan"
                    }`}
                  />
                  
                  {/* Info Row */}
                  <div className="space-y-1 font-mono">
                    <span
                      className={`text-[10px] font-bold transition-colors ${
                        isSelected ? "text-neon-cyan text-glow" : "text-gray-500"
                      }`}
                    >
                      {item.date}
                    </span>
                    <h4
                      className={`text-xs font-bold uppercase transition-colors leading-tight ${
                        isSelected ? "text-white" : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {item.event}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side: Telemetry Output Console */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card border-neon-cyan/35 rounded-md overflow-hidden scanlines">
              
              {/* Console Header */}
              <div className="flex items-center justify-between bg-[#0a192f] border-b border-neon-cyan/35 px-4 py-2 font-mono text-[10px] text-neon-cyan font-bold">
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 animate-pulse" />
                  <span>DIAGNOSTIC_CONSOLE: {active.date}</span>
                </div>
                <span>SYS_LEVEL: NOMINAL</span>
              </div>

              {/* Console Details body */}
              <div className="p-6 space-y-5 bg-[#050b14]/90 font-mono text-xs">
                
                {/* Meta details */}
                <div className="space-y-2 border-b border-neon-cyan/15 pb-4">
                  <div>
                    <span className="text-gray-500">{"// DEPLOYED EVENT:"}</span>
                    <span className="text-white ml-2 font-bold uppercase">{active.event}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">{"// PROJECT PROTOCOL:"}</span>
                    <span className="text-neon-cyan ml-2 font-bold uppercase">{active.project}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">{"// COMMAND ROLE:"}</span>
                    <span className="text-white ml-2 font-sans">{active.role}</span>
                  </div>
                </div>

                {/* Tech stacks */}
                <div className="space-y-2">
                  <span className="text-gray-500 block">{"// TELEMETRY INTEGRATIONS:"}</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {active.tech.map((tag, idx) => (
                      <span
                        key={idx}
                        className="border border-neon-cyan/15 bg-[#0a192f]/50 px-2 py-0.5 text-[9px] text-gray-400 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Simulated Diagnostic logs */}
                <div className="space-y-1.5 pt-3 border-t border-neon-cyan/15">
                  <span className="text-gray-500 block">{"// DYNAMIC TELEMETRY LOGS:"}</span>
                  <div className="bg-black/40 border border-neon-cyan/10 p-3.5 rounded text-[10px] text-green-400 space-y-1">
                    {active.logs.map((log, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-neon-cyan mr-2 select-none">&gt;&gt;</span>
                        <span>{log}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-1 animate-pulse">
                      <span className="text-neon-cyan">&gt;&gt;</span>
                      <span className="h-3 w-1.5 bg-green-400" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
