"use client"

import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  GitBranch, 
  Settings,
  Monitor,
  Server
} from 'lucide-react';

const Skills = ({ skills }) => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: skills.programmingLanguages,
      color: 'var(--interactive-primary)'
    },
    {
      title: 'Frontend Technologies',
      icon: Palette,
      skills: [...skills.markupLanguages, ...skills.cssFrameworks, ...skills.javascriptFrameworks],
      color: '#10B981'
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      skills: [...skills.webFrameworks, ...skills.databases],
      color: '#8B5CF6'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [...skills.cloudPlatforms, ...skills.versionControl],
      color: '#F59E0B'
    },
    {
      title: 'Development Tools',
      icon: Settings,
      skills: skills.developmentTools,
      color: '#EF4444'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32">
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
              Skills & Technologies
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full mb-6"
              style={{ backgroundColor: 'var(--interactive-primary)' }}
            ></div>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              A comprehensive overview of my technical skills and the technologies I work with.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 shadow-lg transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div 
                      className="p-3 rounded-full mr-4"
                      style={{ backgroundColor: category.color }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 
                      className="text-lg font-semibold"
                      style={{ 
                        fontFamily: 'var(--font-playfair)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                        style={{
                          backgroundColor: 'var(--bg-accent)',
                          color: 'var(--text-primary)',
                          border: `1px solid ${category.color}20`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills Highlight */}
          <div className="mt-16 text-center">
            <Card 
              className="p-8 max-w-4xl mx-auto"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)'
              }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--interactive-primary)' }}
                  >
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <h4 
                    className="text-lg font-semibold mb-2"
                    style={{ 
                      fontFamily: 'var(--font-playfair)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Frontend Development
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Creating responsive, user-friendly interfaces with modern frameworks and best practices.
                  </p>
                </div>

                <div className="text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#10B981' }}
                  >
                    <Server className="h-8 w-8 text-white" />
                  </div>
                  <h4 
                    className="text-lg font-semibold mb-2"
                    style={{ 
                      fontFamily: 'var(--font-playfair)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Backend Development
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Building robust APIs and server-side applications with scalable architectures.
                  </p>
                </div>

                <div className="text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#8B5CF6' }}
                  >
                    <GitBranch className="h-8 w-8 text-white" />
                  </div>
                  <h4 
                    className="text-lg font-semibold mb-2"
                    style={{ 
                      fontFamily: 'var(--font-playfair)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Version Control
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Collaborative development using Git and modern workflow practices.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
