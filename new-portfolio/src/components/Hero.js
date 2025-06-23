// src/components/Hero.js
"use client"; // AuroraBackground might need this for client-side effects

import { portfolioData } from '@/data/portfolioData';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from 'lucide-react';
import { AuroraBackground } from 'aceternity-ui'; // Assuming this is the correct import path
import { motion } from 'framer-motion'; // For animations

export function Hero() {
  return (
    <AuroraBackground>
      <motion.section
        id="hero"
        className="relative z-10 min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8 pt-24 md:pt-16" // Adjust pt for navbar height
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I&apos;m <span className="text-primary">{portfolioData.name}</span>.
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I&apos;m a <span className="font-semibold text-foreground">{portfolioData.role}</span> passionate about building modern and scalable web applications.
            Currently based in {portfolioData.location}, specializing in the MERN stack and Next.js.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a href="#contact">
                Get In Touch
                <Mail className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </Button>
          </motion.div>
          <motion.p
            className="mt-12 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Scroll down to learn more about my skills and projects.
          </motion.p>
        </div>
      </motion.section>
    </AuroraBackground>
  );
}
