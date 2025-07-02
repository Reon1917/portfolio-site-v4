"use client"

import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = ({ projects }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                color: 'var(--text-primary)'
              }}
            >
              My Projects
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full mb-6"
              style={{ backgroundColor: 'var(--interactive-primary)' }}
            ></div>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Here are some of the projects I've worked on, showcasing my skills and creativity in web development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group cursor-pointer shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Project Image Placeholder */}
                <div 
                  className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, var(--interactive-primary), var(--interactive-hover))`
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ 
                      fontFamily: 'var(--font-playfair)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {project.name}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 group/btn"
                      style={{
                        backgroundColor: 'var(--interactive-primary)',
                        color: 'white',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--interactive-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'var(--interactive-primary)';
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="p-2"
                      style={{
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)',
                        backgroundColor: 'transparent'
                      }}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p 
              className="text-lg mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Want to see more of my work?
            </p>
            <Button
              className="px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--interactive-primary)',
                color: 'white',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--interactive-hover)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--interactive-primary)';
              }}
            >
              <Github className="h-5 w-5 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
