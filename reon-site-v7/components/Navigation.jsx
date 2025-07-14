"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
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
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            Lin Myat Phyo
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg border border-border hover:bg-secondary/50 transition-colors flex items-center justify-center"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 rounded-lg border border-border hover:bg-secondary/50 transition-colors flex items-center justify-center"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
            >
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}