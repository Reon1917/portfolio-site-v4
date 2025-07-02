"use client";

import { useState } from "react";
import { ChevronDown, User, Monitor, Code, GraduationCap } from "lucide-react";

export default function AdditionalQs() {
  const [openItems, setOpenItems] = useState(new Set());

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

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Personal":
        return <User className="h-4 w-4" />;
      case "Setup":
        return <Monitor className="h-4 w-4" />;
      case "Programming":
        return <Code className="h-4 w-4" />;
      case "Education":
        return <GraduationCap className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Personal":
        return "#10b981";
      case "Setup":
        return "#3b82f6";
      case "Programming":
        return "#f59e0b";
      case "Education":
        return "#8b5cf6";
      default:
        return "#6b7280";
    }
  };

  // Data from myinfo.json
  const faqData = [
    {
      id: 1,
      category: "Personal",
      question: "What other hobbies do you have?",
      answer: "Gaming, gym, sometimes read novels"
    },
    {
      id: 2,
      category: "Setup", 
      question: "What peripherals do I use?",
      answer: "NUBWO X804 Keyboard, Attack Shark X3 Mouse, KZ Castor Earphone, FIFINE K669 MIC, UGreen Web Cam, AOC 24G4 180hz Monitor"
    },
    {
      id: 3,
      category: "Programming",
      question: "What's my first programming language?",
      answer: "Java and Python, but I learned way more with Python"
    },
    {
      id: 4,
      category: "Education",
      question: "When did I start learning programming seriously?",
      answer: "2022 when I started attending AU"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-[var(--paper-texture)]">
      <div className="container-spacing">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4 text-[var(--text-primary)]">
            Additional Questions
          </h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            Get to know me better through these frequently asked questions about my journey, interests, and approach to development.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.has(item.id);
            const categoryColor = getCategoryColor(item.category);
            
            return (
              <div key={item.id} className="paper-card overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left focus-ring focus:outline-none hover:bg-[var(--paper-border)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      {/* Category Icon */}
                      <div 
                        className="p-2 rounded-lg flex-shrink-0 mt-0.5"
                        style={{ 
                          backgroundColor: `${categoryColor}20`,
                          color: categoryColor 
                        }}
                      >
                        {getCategoryIcon(item.category)}
                      </div>

                      {/* Question Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span 
                            className="text-xs font-medium px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${categoryColor}20`,
                              color: categoryColor
                            }}
                          >
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-[var(--text-primary)]">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    {/* Chevron */}
                    <ChevronDown 
                      className={`h-5 w-5 text-[var(--text-secondary)] transition-transform flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Coding", value: "2+" },
            { label: "Projects Built", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Coffee Cups", value: "∞" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="paper-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
              Let's Connect
            </h3>
            <p className="text-body text-[var(--text-secondary)] mb-6">
              Have more questions or want to discuss a potential collaboration? 
              I'd love to hear from you.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
