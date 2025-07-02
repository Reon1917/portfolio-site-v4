"use client";

import { Heart, Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "#",
      hoverColor: "hover:text-gray-800"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />,
      href: "#",
      hoverColor: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "#",
      hoverColor: "hover:text-pink-600"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:lin@example.com",
      hoverColor: "hover:text-green-600"
    }
  ];

  const relevantCourses = [
    "Object-oriented Programming",
    "Web Application Development", 
    "Backend Application Development",
    "Data Structures and Algorithms",
    "Digital Marketing"
  ];

  return (
    <footer className="border-t border-[var(--paper-border)] bg-[var(--paper-bg)]">
      {/* Main Footer Content */}
      <div className="container-spacing py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
              Lin Myat Phyo
            </h3>
            <p className="text-body text-[var(--text-secondary)] mb-6 max-w-md">
              Web Developer passionate about creating beautiful, functional, and 
              user-centric digital experiences. Always learning and pushing boundaries.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg text-[var(--text-secondary)] ${social.hoverColor} transition-colors focus-ring`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">
              Navigation
            </h4>
            <nav className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors focus-ring rounded px-1 py-0.5 text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Education & Courses */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">
              Relevant Courses
            </h4>
            <div className="space-y-2">
              {relevantCourses.map((course) => (
                <div
                  key={course}
                  className="text-sm text-[var(--text-secondary)] leading-relaxed"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Badge */}
        <div className="mt-12 pt-8 border-t border-[var(--paper-border)]">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-[var(--text-secondary)]">Built with</span>
              {["Next.js", "Tailwind CSS", "Lucide Icons"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[var(--paper-border)] text-[var(--text-secondary)] rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors focus-ring rounded-lg group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--paper-border)] bg-[var(--paper-border)]">
        <div className="container-spacing py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
              <span>© {currentYear} Lin Myat Phyo.</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-1 text-sm text-[var(--text-secondary)]">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>in Bangkok</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
