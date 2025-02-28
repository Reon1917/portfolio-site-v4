"use client";

import { useState, useEffect } from "react";

const projectsData = [
  {
    title: "Project 1",
    description: "A brief description of your first project. Explain what technologies you used and what problems you solved.",
    image: "/project1.jpg",
    tags: ["Next.js", "React", "Tailwind CSS"],
    repoLink: "https://github.com/yourusername/project1",
    demoLink: "https://project1-demo.com"
  },
  {
    title: "Project 2",
    description: "A brief description of your second project. Highlight your role and the impact of this project.",
    image: "/project2.jpg",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    repoLink: "https://github.com/yourusername/project2",
    demoLink: "https://project2-demo.com"
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex space-x-4">
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
              aria-label={`View ${project.title} repository`}
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && window.open(project.repoLink, "_blank")}
            >
              Repository
            </a>
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              aria-label={`View ${project.title} live demo`}
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && window.open(project.demoLink, "_blank")}
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-950">
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one demonstrates different skills and approaches to problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.title}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
