"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, MessageCircle, Coffee, Gamepad2, Dumbbell, BookOpen } from "lucide-react";

export default function AdditionalQs() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const questionsData = [
    {
      id: 1,
      question: "What other hobbies do you have?",
      answer: "Gaming, gym, sometimes read novels",
      icon: <Gamepad2 className="h-5 w-5" />,
      category: "Personal"
    },
    {
      id: 2,
      question: "What peripherals do I use?",
      answer: "NUBWO X804 Keyboard, Attack Shark X3 Mouse, KZ Castor Earphone, FIFINE K669 MIC, UGreen Web Cam, AOC 24G4 180hz Monitor",
      icon: <Coffee className="h-5 w-5" />,
      category: "Setup"
    },
    {
      id: 3,
      question: "What's my first programming language?",
      answer: "Java and Python, but I learned way more with Python",
      icon: <BookOpen className="h-5 w-5" />,
      category: "Programming"
    },
    {
      id: 4,
      question: "When did I start learning programming seriously?",
      answer: "2022 when I started attending AU",
      icon: <MessageCircle className="h-5 w-5" />,
      category: "Education"
    }
  ];

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category) => {
    switch (category) {
      case "Personal":
        return { bg: "#10b98120", text: "#10b981" };
      case "Setup":
        return { bg: "#f59e0b20", text: "#f59e0b" };
      case "Programming":
        return { bg: "#8b5cf620", text: "#8b5cf6" };
      case "Education":
        return { bg: "#ef444420", text: "#ef4444" };
      default:
        return { bg: "var(--paper-border)", text: "var(--text-secondary)" };
    }
  };

  return (
    <section id="about" className="section-spacing" ref={sectionRef}>
      <div className="container-spacing">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4 text-[var(--text-primary)]">
            Get to Know Me Better
          </h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            Some frequently asked questions that give you a deeper insight into 
            who I am beyond just the technical skills.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {questionsData.map((item, index) => {
              const isOpen = openQuestion === item.id;
              const categoryColors = getCategoryColor(item.category);
              
              return (
                <div
                  key={item.id}
                  className="paper-card overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: isVisible ? "fadeInScale 0.6s ease-out forwards" : "none",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.9)"
                  }}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleQuestion(item.id)}
                    className="w-full p-6 text-left focus-ring transition-colors hover:bg-[var(--paper-border)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="p-2 rounded-lg"
                          style={{ 
                            backgroundColor: categoryColors.bg, 
                            color: categoryColors.text 
                          }}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span 
                              className="px-2 py-1 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: categoryColors.bg,
                                color: categoryColors.text
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
                      <ChevronDown 
                        className={`h-5 w-5 text-[var(--text-secondary)] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-14">
                        <div 
                          className="p-4 rounded-lg border-l-4"
                          style={{ 
                            backgroundColor: categoryColors.bg,
                            borderLeftColor: categoryColors.text
                          }}
                        >
                          <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Context Card */}
          <div 
            className="mt-12 paper-card p-8 text-center"
            style={{
              animationDelay: "600ms",
              animation: isVisible ? "fadeInScale 0.6s ease-out forwards" : "none",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.9)"
            }}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">
                Let's Connect!
              </h3>
              <p className="text-body text-[var(--text-secondary)] mb-6">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just chat about technology and development. Feel free to reach out!
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--accent)] mb-1">2022</div>
                  <div className="text-sm text-[var(--text-secondary)]">Started Programming</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--accent)] mb-1">Junior</div>
                  <div className="text-sm text-[var(--text-secondary)]">University Year</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--accent)] mb-1">Myanmar</div>
                  <div className="text-sm text-[var(--text-secondary)]">Origin</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--accent)] mb-1">Bangkok</div>
                  <div className="text-sm text-[var(--text-secondary)]">Current Location</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
