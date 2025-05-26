"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { CustomAurora } from "@/components/ui/custom-aurora";
import { useEffect, useState } from "react";

export function Hero({ data }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Ensure DOM is fully loaded before enabling interactions
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (elementId) => {
    if (!isReady) return;
    
    try {
      const targetElement = document.getElementById(elementId);
      if (!targetElement) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
      }
      
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } catch (error) {
      console.error("Scroll error:", error);
    }
  };

  return (
    <CustomAurora className="min-h-screen">
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        {/* Content container with higher z-index */}
        <div className="relative z-20 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary">{data.name}</span>
          </motion.h1>
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {data.role} from {data.origin}, based in {data.location}
          </motion.h2>
          
          <motion.p 
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-12 text-muted-foreground leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about crafting robust web applications with modern technologies.
            Currently pursuing {data.education.degree} with a focus on {data.education.concentration} at {data.education.university}.
            I specialize in building scalable solutions that deliver exceptional user experiences.
          </motion.p>
          
          {/* Button container with explicit positioning */}
          <motion.div 
            className="relative z-30 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-base hover-lift hover-glow motion-safe cursor-pointer"
              onClick={() => scrollToSection('contact')}
              type="button"
              disabled={!isReady}
            >
              Get in Touch
            </button>
            
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-base hover-lift motion-safe cursor-pointer"
              onClick={() => scrollToSection('skills')}
              type="button"
              disabled={!isReady}
            >
              View My Skills
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </CustomAurora>
  );
}