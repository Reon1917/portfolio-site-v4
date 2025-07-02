"use client";

import { useInView } from "react-intersection-observer";
import { ArrowDown, Download, MapPin, GraduationCap } from "lucide-react";
import Link from "next/link";

const HeroSection = ({ personalInfo, about }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="home" className="min-h-screen paper-texture bg-[var(--background-primary)] pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div 
            ref={ref}
            className={`space-y-6 ${inView ? "fade-in-up" : "opacity-0"}`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  {personalInfo.currentLocation} • {personalInfo.occupation}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:'Playfair_Display'] text-[var(--text-primary)] leading-tight">
                Hello, I'm{" "}
                <span className="text-[var(--interactive-primary)]">
                  {personalInfo.name}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
                {about}
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-6 ${inView ? "fade-in" : "opacity-0"}`}
              style={{ animationDelay: "400ms" }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center bg-[var(--interactive-primary)] hover:bg-[var(--interactive-hover)] text-white px-8 py-3 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View My Work
              </Link>
              
              <button className="inline-flex items-center justify-center bg-transparent border border-[var(--border)] hover:bg-[var(--background-accent)] text-[var(--text-primary)] px-8 py-3 rounded-md font-medium transition-all duration-200">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </button>
            </div>

            {/* Quick Stats */}
            <div 
              className={`grid grid-cols-2 gap-6 pt-8 ${inView ? "slide-in-left" : "opacity-0"}`}
              style={{ animationDelay: "600ms" }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[var(--interactive-primary)] font-[family-name:'Playfair_Display']">
                  3+
                </div>
                <div className="text-sm text-[var(--text-secondary)]">Years Coding</div>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[var(--interactive-primary)] font-[family-name:'Playfair_Display']">
                  15+
                </div>
                <div className="text-sm text-[var(--text-secondary)]">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image/Visual */}
          <div 
            className={`relative ${inView ? "fade-in" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative mx-auto lg:mx-0 w-80 h-80 md:w-96 md:h-96">
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--interactive-primary)] to-[var(--interactive-hover)] rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-6xl md:text-7xl font-bold font-[family-name:'Playfair_Display']">
                  {personalInfo.name.split(' ').map(name => name[0]).join('')}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg p-3 shadow-lg paper-texture">
                <GraduationCap className="h-6 w-6 text-[var(--interactive-primary)]" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg p-3 shadow-lg paper-texture">
                <span className="text-sm font-semibold text-[var(--text-primary)]">{'<dev/>'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${inView ? "fade-in" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center space-y-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
