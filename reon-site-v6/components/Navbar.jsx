"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 z-50 w-full paper-card border-0 border-b">
        <div className="container-spacing">
          <div className="flex h-16 items-center justify-between">
            <div className="text-lg font-semibold">Lin Myat Phyo</div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded bg-gray-200 animate-pulse" />
              <div className="w-8 h-8 rounded bg-gray-200 animate-pulse md:hidden" />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 z-50 w-full paper-card border-0 border-b backdrop-blur-sm bg-opacity-95">
      <div className="container-spacing">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#home")}
            className="text-lg font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] focus-ring rounded-md px-2 py-1 transition-colors"
          >
            Lin Myat Phyo
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus-ring rounded-md transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="touch-target p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus-ring rounded-md transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="touch-target p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus-ring rounded-md transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-80 opacity-100 border-t border-[var(--paper-border)]"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--paper-border)] focus-ring rounded-md transition-colors mobile-touch"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
