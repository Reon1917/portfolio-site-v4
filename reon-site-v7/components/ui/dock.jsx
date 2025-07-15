"use client";

import { useState, useEffect } from "react";
import { useDeviceType } from "@/lib/hooks";

export default function Dock({ items = [], onItemClick, activeItem }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const deviceType = useDeviceType();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  const getItemScale = (index) => {
    if (hoveredIndex === null) return 1;
    
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.4; // Hovered item
    if (distance === 1) return 1.2; // Adjacent items
    if (distance === 2) return 1.1; // Next adjacent
    return 1; // Default
  };

  const getDockPositioning = () => {
    if (deviceType === 'mobile') {
      return "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40";
    }
    return "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40";
  };

  const getDockPadding = () => {
    if (deviceType === 'mobile') {
      return "px-3 py-2";
    }
    return "px-4 py-3";
  };

  const getItemSize = () => {
    if (deviceType === 'mobile') {
      return "px-3 py-2 min-w-[60px]";
    }
    return "px-4 py-3 min-w-[80px]";
  };

  return (
    <div className={`${getDockPositioning()}`}>
      <div 
        className={`
          glassmorphism-dock rounded-2xl ${getDockPadding()}
          shadow-2xl border border-white/20
          backdrop-blur-xl bg-background/60
        `}
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className={`flex items-center ${deviceType === 'mobile' ? 'gap-2' : 'gap-3'}`}>
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onItemClick?.(item)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                ${getItemSize()}
                flex items-center justify-center
                rounded-lg transition-all duration-300 ease-out
                hover:bg-primary/10 active:scale-95
                ${activeItem === item.id ? 'bg-primary/15 shadow-md' : ''}
                relative group
              `}
              style={{
                transform: `scale(${getItemScale(index)})`,
                transformOrigin: 'bottom center',
              }}
              aria-label={item.label}
            >
              {/* Text Icon */}
              <span className={`
                text-foreground/80 group-hover:text-primary transition-colors duration-200
                ${deviceType === 'mobile' ? 'text-xs' : 'text-sm'}
                ${activeItem === item.id ? 'text-primary font-medium' : 'font-normal'}
                font-mono tracking-wide
              `}>
                {item.icon}
              </span>
              
              {/* Tooltip */}
              {deviceType !== 'mobile' && (
                <div className="
                  absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                  px-2 py-1 bg-background/90 text-foreground text-xs rounded-md
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  pointer-events-none whitespace-nowrap
                  shadow-lg border border-border/50
                ">
                  {item.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                    <div className="border-4 border-transparent border-t-background/90"></div>
                  </div>
                </div>
              )}
              
              {/* Active indicator */}
              {activeItem === item.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hook for managing dock items and active state
export function useDockNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return { activeSection, scrollToSection };
}