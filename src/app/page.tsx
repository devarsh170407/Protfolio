"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectLab from "@/components/ProjectLab";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
// import LiveFeed from "@/components/LiveFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-white flex flex-col">
      {/* Sticky Telemetry HUD Navigation */}
      <Navbar />

      {/* Main Command Dashboard Cockpit */}
      <main className="flex-grow">
        {/* Fullscreen Hero Telemetry */}
        <Hero />

        {/* Biometric About Dossier */}
        <About />

        {/* Project R&D Registry */}
        <ProjectLab />

        {/* Skills Processing Telemetry */}
        <Skills />

        {/* Career & Citations Log */}
        <Experience />

        {/* GitHub Public Repos logs - Disabled by operator request */}
        {/* <LiveFeed /> */}

        {/* Mission Control Transmission Portal */}
        <Contact />
      </main>

      {/* Circuit Trace Footer */}
      <Footer />
    </div>
  );
}
