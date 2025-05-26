"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export function Navbar({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Create smooth opacity transition for aurora effect
  const auroraOpacity = useTransform(scrollY, [0, 100], [0.3, 0]);
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 0.95]);

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
      className="fixed top-0 w-full z-50 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Aurora background effect that fades on scroll */}
      <motion.div
        className="absolute inset-0 overflow-hidden opacity-0 dark:opacity-100"
        style={{
          opacity: auroraOpacity,
          background: "linear-gradient(90deg, var(--aurora-blue-500), var(--aurora-indigo-300), var(--aurora-violet-200))",
          filter: "blur(40px)",
        }}
      />
      
      {/* Main navbar background */}
      <motion.div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50" 
            : "bg-transparent"
        }`}
        style={{
          background: scrolled 
            ? "rgba(var(--background-rgb, 255, 255, 255), 0.95)" 
            : "transparent"
        }}
      />
      
      {/* Subtle aurora gradient line */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
          scrolled ? "opacity-50" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg, transparent, var(--aurora-blue-400), var(--aurora-indigo-300), var(--aurora-violet-200), transparent)"
        }}
      />

      <nav className="relative container mx-auto max-w-6xl flex justify-between items-center p-4">
        {/* Logo with aurora accent */}
        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="font-bold text-lg relative z-10">
            {data.name.split(" ").map(name => name[0]).join("")}
          </div>
          {/* Aurora glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
            <div 
              className="w-full h-full rounded-lg blur-md"
              style={{
                background: "linear-gradient(45deg, var(--aurora-blue-400), var(--aurora-indigo-300))"
              }}
            />
          </div>
        </motion.div>
        
        <div className="flex items-center gap-6">
          {/* Navigation links with enhanced hover effects */}
          <div className="hidden md:flex gap-2">
            {[
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              >
                <Button 
                  variant="ghost" 
                  className="relative hover-lift motion-safe group px-4 py-2 rounded-lg overflow-hidden" 
                  asChild
                >
                  <a href={item.href}>
                    {/* Aurora hover background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                      <div 
                        className="w-full h-full"
                        style={{
                          background: "linear-gradient(45deg, var(--aurora-blue-400), var(--aurora-indigo-300), var(--aurora-violet-200))"
                        }}
                      />
                    </div>
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-20"
            >
              {mobileMenuOpen ? (
                <Cross1Icon className="h-5 w-5" />
              ) : (
                <HamburgerMenuIcon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Enhanced theme toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="hidden md:block"
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`md:hidden fixed inset-x-0 top-16 z-40 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="mobile-nav-menu mx-4 rounded-xl p-6 shadow-xl">
          <div className="flex flex-col space-y-4">
            {[
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: mobileMenuOpen ? 1 : 0,
                  x: mobileMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left p-3 hover-lift"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              </motion.div>
            ))}
            
            <div className="pt-4 border-t border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
} 