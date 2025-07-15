"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useResponsiveSpacing, useDeviceType } from "@/lib/hooks";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const spacing = useResponsiveSpacing();
  const deviceType = useDeviceType();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Simplified nav - only essential items for top bar

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/40" : "bg-transparent"
    } ${spacing.notchPadding}`} style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none' }}>
      <div className={`${deviceType === 'desktop' ? 'max-w-7xl' : 'max-w-6xl'} mx-auto ${spacing.container.replace('max-w-6xl mx-auto', '').replace('max-w-7xl mx-auto', '')}`}>
        <div className={`flex items-center justify-between ${deviceType === 'mobile' ? 'h-12' : deviceType === 'tablet' ? 'h-13' : 'h-14'}`}>
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className={`${deviceType === 'mobile' ? 'text-base' : 'text-lg'} font-semibold text-foreground hover:text-primary transition-colors`}
          >
            {deviceType === 'mobile' ? 'LMP' : 'Lin Myat Phyo'}
          </button>

          {/* Minimal Navigation - Only Theme Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`${deviceType === 'laptop' ? 'w-8 h-8' : 'w-9 h-9'} rounded-lg border border-border hover:bg-secondary/50 transition-colors flex items-center justify-center`}
            >
              {mounted ? (theme === "dark" ? "☀️" : "🌙") : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}