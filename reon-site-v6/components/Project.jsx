"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Folder, Calendar, Tag } from "lucide-react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: "Collavo",
      description: "Student-focused task management and collaboration web application",
      type: "Senior Project 1",
      category: "Web App",
      technologies: ["React", "Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      features: [
        "Real-time collaboration",
        "Task management system", 
        "Student-focused design",
        "Responsive interface"
      ],
      status: "In Development",
      image: "/api/placeholder/400/300",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "Modern, responsive portfolio built with Next.js and Tailwind CSS",
      type: "Personal Project",
      category: "Web App",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      features: [
        "Dark/Light mode",
        "Responsive design",
        "Performance optimized",
        "SEO friendly"
      ],
      status: "Completed",
      image: "/api/placeholder/400/300",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      name: "E-Commerce API",
      description: "RESTful API for e-commerce platform with authentication and payment integration",
      type: "Backend Project",
      category: "API",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Stripe"],
      features: [
        "User authentication",
        "Payment processing",
        "Order management",
        "Admin dashboard"
      ],
      status: "Planning",
      image: "/api/placeholder/400/300",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const categories = ["All", "Web App", "API", "Mobile"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
        {/* Project Image Placeholder */}
        <div className="w-full h-48 bg-gradient-to-br from-[var(--accent)]20 to-[var(--accent)]10 rounded-lg mb-6 flex items-center justify-center">
          <Folder className="h-12 w-12 text-[var(--accent)]" />
        </div>

        {/* Project Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {project.name}
            </h3>
            <span
              className="px-2 py-1 rounded-full text-xs font-medium border"
              style={{
                backgroundColor: statusColors.bg,
                color: statusColors.text,
                borderColor: statusColors.border
              }}
            >
              {project.status}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 mb-3">
            <Tag className="h-3 w-3 text-[var(--text-secondary)]" />
            <span className="text-sm text-[var(--text-secondary)]">{project.type}</span>
          </div>
          
          <p className="text-body text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-[var(--paper-border)] text-[var(--text-secondary)] rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">Key Features</h4>
          <ul className="space-y-1">
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="text-sm text-[var(--text-secondary)] flex items-center">
                <span className="w-1 h-1 bg-[var(--accent)] rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-light)] focus-ring transition-colors">
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm font-medium">Live Demo</span>
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
            A showcase of my recent work and personal projects that demonstrate 
            my skills in web development, problem-solving, and creative design.
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
                    : "bg-[var(--paper-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="paper-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">
              Want to see more?
            </h3>
            <p className="text-body text-[var(--text-secondary)] mb-6">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-light)] focus-ring transition-colors">
              <Github className="h-4 w-4" />
              <span className="font-medium">View GitHub</span>
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
