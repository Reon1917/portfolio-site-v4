"use client";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    name: "Helio Ring",
    description: "Premium ecommerce website for smart health tracking rings. Frontend-only demonstration with sophisticated monochromatic design and gold accents.",
    githubUrl: "https://github.com/Reon1917/ecommerence-mockup",
    demoUrl: "https://helioring.vercel.app/",
    image: "/project-img/helio-ring.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    type: "Frontend Portfolio",
    features: ["Shopping Cart", "Product Catalog", "Responsive Design", "Animation System"]
  },
  {
    id: 2,
    name: "Catalyst",
    description: "Enterprise-grade dashboard application showcasing advanced UI/UX patterns. Frontend-focused with complex data visualization and modern design system.",
    githubUrl: "https://github.com/Reon1917/catalyst",
    demoUrl: "https://catalyst-reon-demo.vercel.app/",
    image: "/project-img/catalyst.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    type: "Frontend Portfolio",
    features: ["Data Visualization", "Dark Mode", "Component Library", "Enterprise UX"]
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my frontend development skills through modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} Preview`}
          fill
          className="object-cover object-top transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="text-xs bg-white/90 text-black px-2 py-1 rounded-full font-medium">
            {project.type}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <CardTitle className="text-xl font-bold mb-2">
            {project.name}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </div>

        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <FiGithub className="w-4 h-4 mr-2" />
            View Code
          </Button>
          <Button
            size="sm"
            className="flex-1"
            onClick={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
          >
            <FiExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Premium card component with borderless feel
export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full mx-auto rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-card-foreground mb-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};

 