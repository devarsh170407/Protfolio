"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingRobot() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  const messages = [
    "HELLO OPERATOR!",
    "SYSTEMS: STABLE [OK]",
    "SCANNING TELEMETRY...",
    "DRAG ME ANYWHERE!",
    "ROBOTICS LAB ONLINE",
  ];

  // Rotate messages every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block fixed bottom-24 left-8 z-40 pointer-events-none select-none">
      <motion.div
        drag
        dragMomentum={true}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        className="pointer-events-auto cursor-grab relative"
        onMouseEnter={() => setShowBubble(true)}
        onMouseLeave={() => setShowBubble(false)}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Animated Message Bubble */}
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: -45 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute left-1/2 -translate-x-1/2 bg-[#050b14]/95 border border-[#00E5FF]/40 text-[#00E5FF] font-share-tech-mono text-[9px] px-2.5 py-1 rounded shadow-[0_0_15px_rgba(0,229,255,0.2)] whitespace-nowrap uppercase tracking-wider"
              style={{ top: 0 }}
            >
              {messages[msgIndex]}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Small Cybernetic Floating Helper Robot SVG */}
        <svg
          width="60"
          height="70"
          viewBox="0 0 60 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_12px_rgba(0,229,255,0.45)]"
        >
          {/* Antenna */}
          <line x1="30" y1="18" x2="30" y2="8" stroke="#00E5FF" strokeWidth="2" />
          <motion.circle
            cx="30"
            cy="6"
            r="3"
            fill="#FF5C00"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Head */}
          <rect
            x="15"
            y="15"
            width="30"
            height="22"
            rx="6"
            fill="#0A192F"
            stroke="#00E5FF"
            strokeWidth="2"
          />

          {/* Visor / Eyes */}
          <rect x="20" y="21" width="20" height="8" rx="2" fill="#050b14" stroke="#00E5FF" strokeWidth="1" />
          
          {/* Glowing Visor Light */}
          <motion.rect
            x="22"
            y="23"
            width="16"
            height="4"
            rx="1"
            fill="#00E5FF"
            animate={{
              opacity: [0.6, 1, 0.6],
              fill: ["#00E5FF", "#00ffcc", "#00E5FF"],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Neck */}
          <rect x="26" y="37" width="8" height="4" fill="#0A192F" stroke="#00E5FF" strokeWidth="1.5" />

          {/* Torso / Body */}
          <rect
            x="12"
            y="41"
            width="36"
            height="20"
            rx="5"
            fill="#0A192F"
            stroke="#00E5FF"
            strokeWidth="2"
          />

          {/* Glowing Torso Core */}
          <motion.circle
            cx="30"
            cy="51"
            r="4"
            fill="#00E5FF"
            animate={{
              r: [3, 5, 3],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Arms */}
          {/* Left Arm */}
          <path d="M12 45 H7 V53 H9" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
          {/* Right Arm */}
          <path d="M48 45 H53 V53 H51" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />

          {/* Floating Thruster Trail (Propulsion) */}
          <motion.path
            d="M26 62 L30 70 L34 62 Z"
            fill="#FF5C00"
            animate={{
              scaleY: [0.8, 1.3, 0.8],
              opacity: [0.7, 1, 0.7],
            }}
            style={{ transformOrigin: "top center" }}
            transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M28 62 L30 67 L32 62 Z"
            fill="#FFFF00"
            animate={{
              scaleY: [0.6, 1.2, 0.6],
            }}
            style={{ transformOrigin: "top center" }}
            transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
