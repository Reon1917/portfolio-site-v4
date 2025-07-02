"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Folder, Calendar, Tag, CheckCircle } from "lucide-react";
import personalInfo from "@/app/personal-info/myinfo.json";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);

  const projects = personalInfo.projects;

  const categories = ["All", ...new Set(projects.map(project => project.type))];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.type === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Live":
      case "Completed":
        return { bg: "#10b98120", text: "#10b981", border: "#10b981" };
      case "In Development":
        return { bg: "#f59e0b20", text: "#f59e0b", border: "#f59e0b" };
      case "Planning":
        return { bg: "#8b5cf620", text: "#8b5cf6", border: "#8b5cf6" };
      default:
        return { bg: "var(--paper-border)", text: "var(--text-secondary)", border: "var(--paper-border)" };
    }
  };

  const ProjectCard = ({ project, index }) => {
    const statusColors = getStatusColor(project.status);
    
    return (
      <div
        className="paper-card p-6 group hover:scale-105 transition-all duration-300"
        style={{
          animationDelay: `${index * 150}ms`,
          animation: isVisible ? "slideInUp 0.6s ease-out forwards" : "none",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)"
        }}
      >
        {/* Project Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Folder className="h-5 w-5 text-[var(--accent)]" />
              <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {project.name}
              </h3>
            </div>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: statusColors.bg,
                color: statusColors.text,
                borderColor: statusColors.border
              }}
            >
              {project.status}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="h-3 w-3 text-[var(--text-secondary)]" />
            <span className="text-sm text-[var(--text-secondary)] font-medium">{project.type}</span>
          </div>
          
          <p className="text-body text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center">
            <CheckCircle className="h-4 w-4 mr-2 text-[var(--accent)]" />
            Key Accomplishments
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.highlights.map((highlight, highlightIndex) => (
              <div key={highlightIndex} className="flex items-center text-sm text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mr-2 flex-shrink-0" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[var(--accent)]10 text-[var(--accent)] border border-[var(--accent)]20 rounded-full text-xs font-medium hover:bg-[var(--accent)]20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-light)] focus-ring transition-colors">
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm font-medium">
              {project.status === "Live" ? "View Live" : "View Details"}
            </span>
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-[var(--paper-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] rounded-lg focus-ring transition-colors">
            <Github className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section-spacing" ref={sectionRef}>
      <div className="container-spacing">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4 text-[var(--text-primary)]">
            Featured Projects
          </h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            A showcase of my development work, demonstrating technical skills, problem-solving abilities, and commitment to quality code.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                  selectedCategory === category
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--paper-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent)]20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Additional Project Note */}
        <div className="mt-16 text-center">
          <div className="paper-card p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              More Projects Coming Soon
            </h3>
            <p className="text-body text-[var(--text-secondary)] mb-4">
              I'm continuously working on new projects to expand my portfolio. 
              Check my GitHub for the latest updates and contributions.
            </p>
            <button className="inline-flex items-center space-x-2 text-[var(--accent)] hover:text-[var(--accent-light)] font-medium transition-colors">
              <Github className="h-4 w-4" />
              <span>View GitHub Profile</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
