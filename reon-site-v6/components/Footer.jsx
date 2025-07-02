"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--paper-border)] bg-[var(--paper-bg)]">
      <div className="container-spacing py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-[var(--text-secondary)]">
            © 2024 Lin Myat Phyo. Built with Next.js & Tailwind CSS.
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6">
            <a 
              href="#home" 
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Home
            </a>
            <a 
              href="#skills" 
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[var(--paper-border)] hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
