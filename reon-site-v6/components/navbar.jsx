"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold font-[family-name:'Playfair_Display']">
                Lin Myat Phyo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 paper-texture backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold font-[family-name:'Playfair_Display'] text-[var(--text-primary)] hover:text-[var(--interactive-primary)] transition-colors duration-200"
            >
              Lin Myat Phyo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium transition-colors duration-200 hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md bg-[var(--background-secondary)] hover:bg-[var(--background-accent)] transition-colors duration-200 border border-[var(--border)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-[var(--text-primary)]" />
              ) : (
                <Moon className="h-5 w-5 text-[var(--text-primary)]" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md bg-[var(--background-secondary)] hover:bg-[var(--background-accent)] transition-colors duration-200 border border-[var(--border)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-[var(--text-primary)]" />
              ) : (
                <Moon className="h-5 w-5 text-[var(--text-primary)]" />
              )}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md bg-[var(--background-secondary)] hover:bg-[var(--background-accent)] transition-colors duration-200 border border-[var(--border)]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[var(--text-primary)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--text-primary)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--background-secondary)] border-t border-[var(--border)] mt-2 rounded-md">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium transition-colors duration-200 hover:bg-[var(--background-accent)] rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
