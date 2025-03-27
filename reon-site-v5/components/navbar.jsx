"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar({ data }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto max-w-6xl flex justify-between items-center p-4">
        <div className="font-bold text-lg">
          {data.name.split(" ").map(name => name[0]).join("")}
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" asChild>
              <a href="#skills">Skills</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>
          
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
} 