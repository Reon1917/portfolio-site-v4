"use client";

import { useState, useEffect, useRef } from "react";
import { Code, Database, Cloud, Wrench, GraduationCap, Award } from "lucide-react";
import personalInfo from "@/app/personal-info/myinfo.json";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-5 w-5" />,
      skills: personalInfo.skills.frontend,
      color: "#4f46e5"
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-5 w-5" />,
      skills: [...personalInfo.skills.backend, ...personalInfo.skills.databases],
      color: "#10b981"
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="h-5 w-5" />,
      skills: [...personalInfo.skills.cloudPlatforms, ...personalInfo.skills.tools],
      color: "#f59e0b"
    },
    {
      title: "Core Languages",
      icon: <Wrench className="h-5 w-5" />,
      skills: personalInfo.skills.programmingLanguages,
      color: "#ec4899"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-spacing" ref={sectionRef}>
      <div className="container-spacing">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4 text-[var(--text-primary)]">
            Technical Expertise
          </h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            Comprehensive skill set in modern web development technologies, from frontend frameworks to cloud deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="paper-card p-6"
              style={{
                animation: isVisible ? `fadeIn 0.6s ease-out ${index * 0.1}s forwards` : "none",
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-[var(--paper-border)] transition-colors"
                  >
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[var(--text-primary)]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Methodologies */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Relevant Coursework */}
          <div 
            className="paper-card p-8"
            style={{
              animation: isVisible ? "fadeIn 0.6s ease-out 0.5s forwards" : "none",
              opacity: isVisible ? 1 : 0
            }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-[var(--accent)]20">
                <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Academic Foundation
              </h3>
            </div>

            <div className="space-y-3">
              {personalInfo.relevantCourses.map((course, index) => (
                <div
                  key={course}
                  className="flex items-center space-x-2 p-3 rounded-lg border border-[var(--paper-border)] hover:border-[var(--accent)] hover:bg-[var(--accent)]10 transition-colors"
                >
                  <div className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0" />
                  <span className="text-sm text-[var(--text-primary)]">{course}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--paper-border)]">
              <h4 className="font-medium text-[var(--text-primary)] mb-3">Development Methodologies</h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.skills.methodologies.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-[var(--paper-border)] text-[var(--text-primary)] rounded-full text-xs font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
