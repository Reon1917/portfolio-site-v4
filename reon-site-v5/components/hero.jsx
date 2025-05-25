"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { CustomAurora } from "@/components/ui/custom-aurora";

export function Hero({ data }) {
  return (
    <CustomAurora className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 relative">
        {/* Subtle light mode accent */}
        <div className="absolute inset-0 opacity-5 dark:opacity-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
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
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" className="hover-lift hover-glow motion-safe" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="hover-lift motion-safe" asChild>
              <a href="#skills">
                View My Skills
                <ArrowDownIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </CustomAurora>
  );
} 