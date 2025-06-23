// src/components/Projects.js
import { portfolioData } from '@/data/portfolioData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 tracking-tight">
    {children}
  </h2>
);

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/50"> {/* Light background for section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map(project => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              {project.image && (
                <div className="relative w-full h-56 sm:h-64">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill // Changed from layout="fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover" // Changed from objectFit="cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">{project.name}</CardTitle>
                {project.type && <Badge variant="outline" className="w-fit mt-1">{project.type}</Badge>}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4">
                {project.githubUrl && (
                  <Button asChild variant="outline" className="w-full sm:w-auto group">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> View Code
                    </Link>
                  </Button>
                )}
                {project.demoUrl && (
                  <Button asChild className="w-full sm:w-auto group">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
