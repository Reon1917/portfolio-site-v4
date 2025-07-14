"use client";

import { useState, useEffect } from "react";
import myInfo from "@/data/myinfo.json";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("Full-Stack Web Developer");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
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
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-background overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-lg text-muted-foreground mb-4 font-normal">
          👋 Hello, I'm
        </p>

        {/* Name - Hero Typography */}
        <h1 className="text-6xl md:text-8xl font-semibold mb-8 text-foreground tracking-tight leading-none" style={{ letterSpacing: '-0.02em' }}>
          {myInfo.personalInfo.name}
        </h1>
        
        {/* Typing Animation Title */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl text-primary font-semibold leading-tight min-h-[3rem] flex items-center justify-center" style={{ letterSpacing: '-0.01em' }}>
            {displayedText}
            <span className="ml-1 animate-pulse">|</span>
          </h2>
        </div>
        
        {/* Location */}
        <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
          📍 {myInfo.personalInfo.currentLocation} • ⚡ {myInfo.personalInfo.experience}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech, index) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-lg text-foreground/80 mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
          {myInfo.personalInfo.careerObjective}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button 
            onClick={() => scrollToSection("projects")}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-[0.98] shadow-lg"
          >
            🚀 View My Work
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="border border-border px-8 py-4 rounded-xl font-medium hover:bg-secondary/50 transition-all duration-300 transform hover:scale-[0.98]"
          >
            💬 Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}