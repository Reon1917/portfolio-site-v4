"use client";

import myInfo from "@/data/myinfo.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        {/* Name - Hero Typography: 64px-96px, weight 600, letter-spacing -0.02em */}
        <h1 className="text-6xl md:text-8xl font-semibold mb-8 text-foreground tracking-tight leading-none" style={{ letterSpacing: '-0.02em' }}>
          {myInfo.personalInfo.name}
        </h1>
        
        {/* Title - H2: 32px-40px, weight 600, letter-spacing -0.01em */}
        <h2 className="text-3xl md:text-4xl text-primary mb-8 font-semibold leading-tight" style={{ letterSpacing: '-0.01em' }}>
          {myInfo.personalInfo.title}
        </h2>
        
        {/* Location - Body: 17px-19px, weight 400, line-height 1.5 */}
        <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
          {myInfo.personalInfo.currentLocation} • {myInfo.personalInfo.experience}
        </p>
        
        {/* Description - Body: 17px-19px, weight 400, line-height 1.5 */}
        <p className="text-lg text-foreground/80 mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
          {myInfo.personalInfo.careerObjective}
        </p>
        
        {/* CTA Buttons - Padding: 16px 32px, Radius: 8px-12px */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-[0.98] active:scale-[0.98]">
            View My Work
          </button>
          <button className="border border-border px-8 py-4 rounded-xl font-medium hover:bg-secondary/50 transition-all duration-300 transform hover:scale-[0.98] active:scale-[0.98]">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}