"use client";

import { useState, useEffect } from "react";
import { ArrowDown, MapPin, GraduationCap } from "lucide-react";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Web Developer",
    "Problem Solver", 
    "Digital Creator",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToNext = () => {
    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center paper-texture">
      <div className="container-spacing">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-display mb-6 text-[var(--text-primary)]">
              Hi, I'm{" "}
              <span className="text-[var(--accent)] relative">
                Lin Myat Phyo
              </span>
            </h1>
            
            <div className="text-subheading mb-6 text-[var(--text-secondary)] min-h-[2em] flex items-center justify-center">
              <span>
                {currentText}
                <span className="inline-block w-0.5 h-6 bg-[var(--accent)] ml-1 animate-pulse" />
              </span>
            </div>

            <p className="text-body max-w-2xl mx-auto text-[var(--text-secondary)] mb-8">
              With a deep love for computers and web design, I'm constantly seeking to learn 
              new concepts and push the boundaries of what's possible in digital creation. 
              My goal is to craft user-centric web experiences that are both functional 
              and aesthetically pleasing.
            </p>

            {/* Location & Education Cards */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="paper-card px-4 py-3 flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--text-secondary)]">
                  Bangkok, Thailand
                </span>
              </div>
              
              <div className="paper-card px-4 py-3 flex items-center space-x-2">
                <GraduationCap className="h-4 w-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--text-secondary)]">
                  Assumption University
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToNext}
              className="group inline-flex items-center space-x-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--accent-light)] focus-ring transition-all duration-200 transform hover:scale-105"
            >
              <span className="font-medium">Explore My Work</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-px h-12 bg-gradient-to-b from-transparent to-[var(--text-secondary)]" />
              <div className="w-2 h-2 rounded-full bg-[var(--text-secondary)] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
