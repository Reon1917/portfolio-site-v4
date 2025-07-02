"use client"

import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
              About Me
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ backgroundColor: 'var(--interactive-primary)' }}
            ></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main About Text */}
            <div 
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <p 
                className="text-lg leading-relaxed mb-8"
                style={{ 
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-inter)'
                }}
              >
                {data.about}
              </p>

              {/* Education Card */}
              <Card 
                className="p-6 mb-8 shadow-md transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="p-3 rounded-full"
                    style={{ backgroundColor: 'var(--interactive-primary)' }}
                  >
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-semibold mb-2"
                      style={{ 
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-playfair)'
                      }}
                    >
                      Education
                    </h3>
                    <p 
                      className="mb-2"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {data.personalInfo.education}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" style={{ color: 'var(--text-accent)' }} />
                        <span style={{ color: 'var(--text-accent)' }}>
                          {data.personalInfo.currentLocation}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" style={{ color: 'var(--text-accent)' }} />
                        <span style={{ color: 'var(--text-accent)' }}>
                          Current
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Relevant Courses */}
              <div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ 
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-playfair)'
                  }}
                >
                  Relevant Courses
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.relevantCourses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: 'var(--bg-accent)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - More About Me */}
            <div 
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ 
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-playfair)'
                }}
              >
                More About Me
              </h3>

              <div className="space-y-6">
                {data.moreAboutMe.map((item, index) => (
                  <Card 
                    key={index}
                    className="p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <h4 
                      className="font-semibold mb-2"
                      style={{ 
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-inter)'
                      }}
                    >
                      {item.question}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {item.answer}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div 
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--bg-accent)' }}
                >
                  <div 
                    className="text-2xl font-bold"
                    style={{ 
                      color: 'var(--interactive-primary)',
                      fontFamily: 'var(--font-playfair)'
                    }}
                  >
                    2022
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Started Programming
                  </div>
                </div>
                <div 
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: 'var(--bg-accent)' }}
                >
                  <div 
                    className="text-2xl font-bold"
                    style={{ 
                      color: 'var(--interactive-primary)',
                      fontFamily: 'var(--font-playfair)'
                    }}
                  >
                    {data.projects.length}+
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Projects Built
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
