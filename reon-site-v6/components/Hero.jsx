"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ 
              fontFamily: 'var(--font-playfair)',
              color: 'var(--text-primary)'
            }}
          >
            Hi, I'm{' '}
            <span 
              className="block mt-2"
              style={{ color: 'var(--interactive-primary)' }}
            >
              {data.personalInfo.name}
            </span>
          </h1>

          {/* Subtitle */}
          <div 
            className={`text-xl sm:text-2xl lg:text-3xl mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              fontFamily: 'var(--font-inter)',
              color: 'var(--text-secondary)'
            }}
          >
            <p className="mb-2">{data.personalInfo.occupation}</p>
            <p className="text-lg">
              From {data.personalInfo.origin}, currently in {data.personalInfo.currentLocation}
            </p>
          </div>

          {/* Description */}
          <div 
            className={`max-w-3xl mx-auto text-lg sm:text-xl mb-12 leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              color: 'var(--text-accent)',
              fontFamily: 'var(--font-inter)'
            }}
          >
            <p>{data.about}</p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              onClick={() => scrollToNext()}
              className="px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
              View My Work
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)',
                backgroundColor: 'transparent'
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className={`flex justify-center space-x-6 mb-16 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {data.contacts.github && (
              <a
                href={data.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{ 
                  backgroundColor: 'var(--bg-accent)',
                  color: 'var(--text-primary)'
                }}
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            {data.contacts.linkedin && (
              <a
                href={data.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{ 
                  backgroundColor: 'var(--bg-accent)',
                  color: 'var(--text-primary)'
                }}
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-accent)',
                color: 'var(--text-primary)'
              }}
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={scrollToNext}
            className="animate-bounce"
            style={{ color: 'var(--text-accent)' }}
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
