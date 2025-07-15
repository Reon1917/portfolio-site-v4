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

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

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

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${deviceType === 'laptop' ? 'space-x-6' : 'space-x-8'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${deviceType === 'laptop' ? 'text-sm' : 'text-sm'} font-medium text-foreground/80 hover:text-primary transition-colors`}
                style={{ fontSize: deviceType === 'laptop' ? '14px' : '15px', fontWeight: 500 }}
              >
                {item.name}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`${deviceType === 'laptop' ? 'w-8 h-8' : 'w-9 h-9'} rounded-lg border border-border hover:bg-secondary/50 transition-colors flex items-center justify-center`}
            >
              {mounted ? (theme === "dark" ? "☀️" : "🌙") : "🌙"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${deviceType === 'mobile' ? 'w-8 h-8' : 'w-9 h-9'} rounded-lg border border-border hover:bg-secondary/50 transition-colors flex items-center justify-center`}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40">
          <div className={`${spacing.container.replace('max-w-6xl mx-auto', '').replace('max-w-7xl mx-auto', '')} pt-2 pb-3 space-y-1`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 ${deviceType === 'mobile' ? 'text-sm' : 'text-base'} font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`block w-full text-left px-3 py-2 ${deviceType === 'mobile' ? 'text-sm' : 'text-base'} font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors`}
            >
              {mounted ? (theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode") : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}