"use client";

import { Mail, Phone, MapPin, Globe } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 border-t border-neon-cyan/15 bg-[#030712] overflow-hidden grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="font-share-tech-mono text-xs tracking-[0.3em] uppercase text-neon-cyan mb-2">
            —— 06 UPLINK
          </div>
          <h2 className="font-unbounded text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white">
            INITIATE CONTACT
          </h2>
          <p className="font-share-tech-mono text-xs text-gray-400 mt-2 max-w-2xl mx-auto leading-relaxed">
            Establish a secure link or send inquiries directly to the operator command center.
          </p>
        </div>

        {/* Centered Columns */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Registry Card */}
          <div className="relative border border-neon-cyan/20 bg-[#050B14] p-6 transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] flex flex-col justify-between md:col-span-7 lg:col-span-8">
            <div>
              {/* L-brackets */}
              <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

              <div className="font-share-tech-mono text-[10px] text-neon-cyan font-bold uppercase mb-4 border-b border-neon-cyan/10 pb-2">
                <span>[ ] CONTACT_REGISTRY</span>
              </div>

              {/* Contact Info Items */}
              <div className="space-y-4 font-share-tech-mono text-xs">
                <a
                  href="mailto:devarshbhatt1747@gmail.com"
                  className="flex items-center gap-3 group/mail hover:text-neon-cyan transition-colors"
                >
                  <Mail className="h-4 w-4 text-neon-cyan shrink-0 group-hover/mail:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="text-[8px] text-gray-500 uppercase">EMAIL</span>
                    <span className="text-white font-bold group-hover/mail:text-neon-cyan transition-colors">devarshbhatt1747@gmail.com</span>
                  </div>
                </a>
                <a
                  href="tel:+919426511372"
                  className="flex items-center gap-3 group/phone hover:text-neon-cyan transition-colors"
                >
                  <Phone className="h-4 w-4 text-neon-cyan shrink-0 group-hover/phone:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="text-[8px] text-gray-500 uppercase">PHONE</span>
                    <span className="text-white font-bold group-hover/phone:text-neon-cyan transition-colors">+91 9426511372</span>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-neon-cyan shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[8px] text-gray-500 uppercase">LOCATION</span>
                    <span className="text-white font-bold">Rajkot, Gujarat, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-neon-cyan shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[8px] text-gray-500 uppercase">COORDINATES</span>
                    <span className="text-white font-bold">22.3039° N · 70.8022° E</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-neon-cyan/10 font-share-tech-mono text-xs">
              <a
                href="https://github.com/devarsh170407/devarsh170407"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-github-btn"
                className="flex items-center justify-center gap-2 border border-neon-cyan/25 py-2.5 hover:bg-neon-cyan hover:text-black transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GITHUB</span>
              </a>
              <a
                href="https://www.linkedin.com/in/devarsh-bhatt-dj170407/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin-btn"
                className="flex items-center justify-center gap-2 border border-neon-cyan/25 py-2.5 hover:bg-neon-cyan hover:text-black transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* System Status Card */}
          <div className="relative border border-neon-cyan/20 bg-[#050B14] p-6 transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] flex flex-col justify-between md:col-span-5 lg:col-span-4">
            <div>
              {/* L-brackets */}
              <div className="absolute top-0 left-0 w-[14px] h-[14px] border-t border-l border-[#00E5FF] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[14px] h-[14px] border-t border-r border-[#00E5FF] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[14px] h-[14px] border-b border-l border-[#00E5FF] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[14px] h-[14px] border-b border-r border-[#00E5FF] pointer-events-none" />

              <div className="font-share-tech-mono text-[10px] text-neon-cyan font-bold uppercase mb-4 border-b border-neon-cyan/10 pb-2">
                <span>[ ] SYSTEM_STATUS</span>
              </div>

              <div className="space-y-3 font-share-tech-mono text-xs">
                <div className="flex justify-between border-b border-neon-cyan/5 pb-1">
                  <span className="text-gray-500 font-bold">// AVAILABILITY:</span>
                  <span className="text-green-400 font-bold flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    OPEN
                  </span>
                </div>
                <div className="flex justify-between border-b border-neon-cyan/5 pb-1">
                  <span className="text-gray-500 font-bold">// RESPONSE_TIME:</span>
                  <span className="text-white font-bold">~24H</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-bold">// TIMEZONE:</span>
                  <span className="text-white font-bold">IST UTC+5:30</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
