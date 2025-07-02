"use client";

import Link from "next/link";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = ({ personalInfo, contacts }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: contacts.github || "#",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: contacts.linkedin || "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:linmyatphyo.dev@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[var(--background-primary)] border-t border-[var(--border)] paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-[family-name:'Playfair_Display'] text-[var(--text-primary)]">
              {personalInfo.name}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {personalInfo.occupation} passionate about creating user-centric web experiences 
              that are both functional and aesthetically pleasing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-[var(--background-secondary)] border border-[var(--border)] rounded-md hover:bg-[var(--background-accent)] transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[var(--text-primary)] font-[family-name:'Playfair_Display']">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[var(--text-primary)] font-[family-name:'Playfair_Display']">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <p className="text-[var(--text-secondary)]">
                📍 {personalInfo.currentLocation}
              </p>
              <p className="text-[var(--text-secondary)]">
                🎓 {personalInfo.education}
              </p>
              <a 
                href="mailto:linmyatphyo.dev@gmail.com"
                className="block text-[var(--text-secondary)] hover:text-[var(--interactive-primary)] transition-colors duration-200"
              >
                ✉️ linmyatphyo.dev@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <div className="text-[var(--text-secondary)] text-sm">
              <span>Designed with the PaperPortfolio system</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
