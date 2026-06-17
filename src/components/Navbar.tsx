"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// Nav items array

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href.replace("#", ""));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neon-cyan/15 bg-[#030712]/85 backdrop-blur-md">
      <div className="w-full px-6 md:px-12">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo & Lab Title */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              data-testid="logo-home-link"
              className="border border-neon-cyan w-9 h-9 flex items-center justify-center font-unbounded text-lg font-black text-white bg-transparent"
            >
              D
            </a>
            <div className="flex flex-col tracking-wider leading-none">
              <span className="text-white text-xs font-black font-unbounded tracking-widest">DEVARSH BHATT</span>
              <span className="text-neon-cyan font-share-tech-mono text-[9px] mt-0.5 tracking-[0.2em] font-semibold">SYS // ONLINE</span>
            </div>
          </div>

          {/* Desktop Navigation & CV Button (Right Aligned) */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-share-tech-mono text-[11px] font-semibold tracking-[0.25em]">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      data-testid={`nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
                      className={`relative px-1 py-2 transition-all duration-300 ${
                        isActive
                          ? "text-neon-cyan text-glow font-bold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {item.name.toUpperCase()}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="https://drive.google.com/file/d/1SQEgT-pljZfSjG7SKEbTOss0NmSzjhjC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-link-cv"
              className="w-[36px] h-[36px] border border-[#FF5C00]/45 text-[#FF5C00] hover:border-[#FF5C00] hover:bg-[#FF5C00]/10 hover:shadow-[0_0_10px_rgba(255,92,0,0.2)] flex items-center justify-center transition-all duration-300 font-share-tech-mono text-[10px] font-bold"
              title="Download CV"
            >
              CV
            </a>
          </div>

          {/* Mobile Menu Toggle (Only visible on mobile) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-toggle"
              className="w-[36px] h-[36px] border border-neon-cyan/35 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 flex items-center justify-center transition-all duration-300 rounded-sm"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-neon-cyan/20 bg-[#050b14]/95 backdrop-blur-lg scanlines">
          <div className="space-y-1 px-4 py-4 font-share-tech-mono text-xs tracking-[0.15em]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(" ", "-")}`}
                  className={`block rounded-sm border px-4 py-2.5 transition-all duration-300 ${
                    isActive
                      ? "border-neon-cyan/35 bg-neon-cyan/5 text-neon-cyan"
                      : "border-transparent text-gray-400 hover:bg-neon-cyan/5 hover:text-white"
                  }`}
                >
                  <span className="mr-2 text-neon-cyan/55">{"//"}</span>
                  {item.name.toUpperCase()}
                </a>
              );
            })}
            <a
              href="https://drive.google.com/file/d/1SQEgT-pljZfSjG7SKEbTOss0NmSzjhjC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-sm border border-[#FF5C00]/30 bg-[#FF5C00]/5 text-[#FF5C00] px-4 py-2.5 transition-all duration-300 hover:bg-[#FF5C00]/10 mt-2 text-center font-bold"
            >
              <span className="mr-2 text-[#FF5C00]/55">{"//"}</span>
              DOWNLOAD CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
