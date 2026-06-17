import type { Metadata } from "next";
import { Unbounded, Share_Tech_Mono, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import BackgroundVfx from "@/components/BackgroundVfx";
import FloatingContact from "@/components/FloatingContact";
import FloatingRobot from "@/components/FloatingRobot";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devarsh Bhatt",
  description:
    "Futuristic portfolio website for Devarsh Bhatt - AI Engineer, Robotics Developer, and IoT Innovator. Specializing in autonomous systems, control loops, and edge computing.",
  keywords: [
    "Devarsh Bhatt",
    "Robotics Lab",
    "AI Engineer",
    "IoT Innovator",
    "Embedded Systems",
    "MATLAB",
    "ROS2",
    "ESP32",
    "Self-Balancing Robot",
  ],
  authors: [{ name: "Devarsh Bhatt" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${shareTechMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full flex flex-col relative bg-[#050b14] overflow-x-hidden" suppressHydrationWarning={true}>
        {/* Anti-tamper browser console & context shield */}
        <Script id="security-shield">
          {`
            // Disable right-click context menu
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
            });

            // Disable standard inspector keyboard shortcuts
            document.addEventListener('keydown', function(e) {
              // F12 key
              if (e.keyCode === 123) {
                e.preventDefault();
                return false;
              }
              // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Selector)
              if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
                e.preventDefault();
                return false;
              }
              // Ctrl+U (View Source)
              if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
              }
            });
          `}
        </Script>

        {/* Animated neural particles & traces background */}
        <BackgroundVfx />

        {/* Interactive Mouse halo cursor */}
        <CustomCursor />

        {/* Application Page Flow */}
        <div className="relative z-10 flex flex-col flex-grow w-full">
          {children}
        </div>

        {/* Floating Quick Contacts */}
        <FloatingContact />

        {/* Floating Robot Helper */}
        <FloatingRobot />
      </body>
    </html>
  );
}
