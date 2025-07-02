"use client";

import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        inView ? "fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="paper-texture bg-[var(--background-secondary)] border border-[var(--border)] p-6 h-full">
        {/* Project Image Placeholder */}
        <div className="w-full h-48 bg-[var(--background-accent)] rounded-md mb-4 flex items-center justify-center overflow-hidden">
          <div className="text-[var(--text-accent)] text-4xl font-bold opacity-20">
            {project.name.substring(0, 2).toUpperCase()}
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-[family-name:'Playfair_Display'] text-[var(--text-primary)]">
              {project.name}
            </h3>
            <span className="text-xs bg-[var(--interactive-primary)] text-white px-2 py-1 rounded-full">
              {project.type}
            </span>
          </div>
          
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button className="flex items-center space-x-2 bg-[var(--interactive-primary)] hover:bg-[var(--interactive-hover)] text-white px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium">
              <Github className="h-4 w-4" />
              <span>Code</span>
            </button>
            <button className="flex items-center space-x-2 bg-transparent border border-[var(--border)] hover:bg-[var(--background-accent)] text-[var(--text-primary)] px-4 py-2 rounded-md transition-colors duration-200 text-sm font-medium">
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ projects }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="section-padding paper-texture bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 ${inView ? "fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:'Playfair_Display'] text-[var(--text-primary)] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, 
            from full-stack applications to innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
