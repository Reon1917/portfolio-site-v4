"use client";

import { useState, useEffect } from "react";
import myInfo from "@/data/myinfo.json";
import { useResponsiveSpacing, useDeviceType } from "@/lib/hooks";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("Full-Stack Web Developer");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const spacing = useResponsiveSpacing();
  const deviceType = useDeviceType();
  
  const specializations = [
    "Full-Stack Web Developer",
    "React.js Specialist", 
    "Next.js Expert",
    "Backend Developer",
    "Frontend Developer"
  ];

  useEffect(() => {
    const currentSpecialization = specializations[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentSpecialization) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % specializations.length);
      } else {
        setDisplayedText(prev => 
          isDeleting 
            ? currentSpecialization.substring(0, prev.length - 1)
            : currentSpecialization.substring(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, specializations]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center ${spacing.container} ${spacing.notchPadding} bg-background overflow-hidden`}>
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full text-center">
        {/* Greeting */}
        <p className={`${deviceType === 'mobile' ? 'text-base' : deviceType === 'tablet' ? 'text-lg' : 'text-xl'} text-muted-foreground ${deviceType === 'mobile' ? 'mb-3' : 'mb-4'} font-normal`}>
          👋 Hello, I'm
        </p>

        {/* Name - Hero Typography */}
        <h1 className={`${deviceType === 'mobile' ? 'text-4xl' : deviceType === 'tablet' ? 'text-5xl' : deviceType === 'laptop' ? 'text-6xl' : 'text-7xl'} font-semibold ${deviceType === 'mobile' ? 'mb-4' : deviceType === 'tablet' ? 'mb-6' : 'mb-8'} text-foreground tracking-tight leading-none`} style={{ letterSpacing: '-0.02em' }}>
          {myInfo.personalInfo.name}
        </h1>
        
        {/* Typing Animation Title */}
        <div className={`${deviceType === 'mobile' ? 'mb-4' : deviceType === 'tablet' ? 'mb-6' : 'mb-8'}`}>
          <h2 className={`${deviceType === 'mobile' ? 'text-xl min-h-[2rem]' : deviceType === 'tablet' ? 'text-2xl min-h-[2.5rem]' : deviceType === 'laptop' ? 'text-3xl min-h-[3rem]' : 'text-4xl min-h-[3.5rem]'} text-primary font-semibold leading-tight flex items-center justify-center`} style={{ letterSpacing: '-0.01em' }}>
            {displayedText}
            <span className="ml-1 animate-pulse">|</span>
          </h2>
        </div>
        
        {/* Location */}
        <p className={`${deviceType === 'mobile' ? 'text-base mb-4' : deviceType === 'tablet' ? 'text-lg mb-6' : 'text-lg mb-8'} text-muted-foreground font-normal leading-relaxed`}>
          📍 {myInfo.personalInfo.currentLocation} • ⚡ {myInfo.personalInfo.experience}
        </p>
        
        {/* Tech Stack Tags */}
        <div className={`${deviceType === 'mobile' ? 'mb-4' : deviceType === 'tablet' ? 'mb-6' : 'mb-8'}`}>
          <div className={`flex flex-wrap justify-center ${deviceType === 'mobile' ? 'gap-2' : 'gap-3'} ${deviceType === 'desktop' ? 'max-w-3xl' : 'max-w-2xl'} mx-auto`}>
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech, index) => (
              <span 
                key={tech}
                className={`${deviceType === 'mobile' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'} bg-primary/10 text-primary rounded-full font-medium border border-primary/20 hover:bg-primary/20 transition-colors`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Description */}
        <p className={`${deviceType === 'mobile' ? 'text-base mb-8' : deviceType === 'tablet' ? 'text-lg mb-12' : 'text-lg mb-16'} text-foreground/80 ${deviceType === 'desktop' ? 'max-w-4xl' : 'max-w-3xl'} mx-auto font-normal leading-relaxed`}>
          {myInfo.personalInfo.careerObjective}
        </p>
        
        {/* CTA Buttons */}
        <div className={`flex ${deviceType === 'mobile' ? 'flex-col gap-4' : 'flex-col sm:flex-row gap-6'} justify-center ${deviceType === 'mobile' ? 'mb-8' : 'mb-12'}`}>
          <button 
            onClick={() => scrollToSection("projects")}
            className={`bg-primary text-primary-foreground ${deviceType === 'mobile' ? 'px-6 py-3 text-sm' : 'px-8 py-4'} rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-[0.98] shadow-lg`}
          >
            🚀 View My Work
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className={`border border-border ${deviceType === 'mobile' ? 'px-6 py-3 text-sm' : 'px-8 py-4'} rounded-xl font-medium hover:bg-secondary/50 transition-all duration-300 transform hover:scale-[0.98]`}
          >
            💬 Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={`flex flex-col items-center ${deviceType === 'mobile' ? 'mt-4' : ''}`}>
          <p className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} text-muted-foreground mb-2`}>Scroll to explore</p>
          <div className={`${deviceType === 'mobile' ? 'w-5 h-8' : 'w-6 h-10'} border-2 border-muted-foreground rounded-full flex justify-center`}>
            <div className={`w-1 ${deviceType === 'mobile' ? 'h-2 mt-1.5' : 'h-3 mt-2'} bg-muted-foreground rounded-full`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}