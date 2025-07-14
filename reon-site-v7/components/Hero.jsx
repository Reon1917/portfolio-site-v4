"use client";

import myInfo from "@/data/myinfo.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-semibold mb-6 text-foreground tracking-tight">
          {myInfo.personalInfo.name}
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-primary mb-8 font-medium">
          {myInfo.personalInfo.title}
        </h2>
        
        {/* Location */}
        <p className="text-lg text-muted-foreground mb-8">
          {myInfo.personalInfo.currentLocation} • {myInfo.personalInfo.experience}
        </p>
        
        {/* Description */}
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          {myInfo.personalInfo.careerObjective}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors">
            View My Work
          </button>
          <button className="border border-border px-8 py-4 rounded-xl font-medium hover:bg-secondary/50 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}