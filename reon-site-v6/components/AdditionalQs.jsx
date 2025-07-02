"use client";

import { useState } from "react";
import { ChevronDown, Target, Lightbulb, Users, Zap } from "lucide-react";
import personalInfo from "@/app/personal-info/myinfo.json";

export default function ProfessionalQualities() {
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getQualityIcon = (index) => {
    const icons = [<Target className="h-4 w-4" />, <Lightbulb className="h-4 w-4" />, <Users className="h-4 w-4" />, <Zap className="h-4 w-4" />];
    return icons[index] || <Target className="h-4 w-4" />;
  };

  const getQualityColor = (index) => {
    const colors = ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6"];
    return colors[index] || "#6b7280";
  };

  return (
    <section id="about" className="section-spacing bg-[var(--paper-texture)]">
      <div className="container-spacing">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4 text-[var(--text-primary)]">
            Professional Qualities
          </h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            Core strengths and professional attributes that drive my development approach and team collaboration.
          </p>
        </div>

        {/* Professional Qualities */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {personalInfo.professionalQualities.map((quality, index) => {
            const isOpen = openItems.has(index + 1);
            const qualityColor = getQualityColor(index);
            
            return (
              <div key={index} className="paper-card overflow-hidden">
                {/* Quality Header */}
                <button
                  onClick={() => toggleItem(index + 1)}
                  className="w-full p-6 text-left focus-ring focus:outline-none hover:bg-[var(--paper-border)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      {/* Quality Icon */}
                      <div 
                        className="p-2 rounded-lg flex-shrink-0"
                        style={{ 
                          backgroundColor: `${qualityColor}20`,
                          color: qualityColor 
                        }}
                      >
                        {getQualityIcon(index)}
                      </div>

                      {/* Quality Title */}
                      <h3 className="text-lg font-medium text-[var(--text-primary)]">
                        {quality.quality}
                      </h3>
                    </div>

                    {/* Chevron */}
                    <ChevronDown 
                      className={`h-5 w-5 text-[var(--text-secondary)] transition-transform flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Quality Description */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                        {quality.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Development Experience", value: "2+ Years" },
            { label: "Programming Languages", value: "4+" },
            { label: "Frameworks Mastered", value: "6+" },
            { label: "Projects Completed", value: "10+" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center paper-card p-6">
              <div className="text-2xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="paper-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
              Ready to Collaborate
            </h3>
            <p className="text-body text-[var(--text-secondary)] mb-6">
              I'm actively seeking opportunities to contribute to innovative projects and join dynamic development teams. 
              Let's discuss how my skills can add value to your organization.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--accent-light)] focus-ring transition-all duration-200 transform hover:scale-105 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
