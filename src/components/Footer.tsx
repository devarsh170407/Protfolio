"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-cyan/15 bg-[#030712] py-5 overflow-hidden grid-bg">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Copyright & Stack Info */}
          <div className="font-share-tech-mono text-center text-xs">
            <span className="text-white font-bold">
              © 2026 DEVARSH BHATT // PORTFOLIO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
