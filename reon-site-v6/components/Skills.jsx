"use client";

import { useState, useEffect, useRef } from "react";
import { Code, Database, Cloud, Wrench, GraduationCap } from "lucide-react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS"],
      color: "#4f46e5"
    },
    {
      title: "Backend",
      icon: <Database className="h-5 w-5" />,
      skills: ["Python", "Java", "Node.js", "PostgreSQL", "MongoDB", "Supabase"],
      color: "#10b981"
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["AWS", "Vercel", "Docker", "Git/GitHub", "VS Code", "Postman"],
      color: "#f59e0b"
    }
  ];

  const relevantCourses = [
    "Object-oriented Programming",
    "Web Application Development",
    "Backend Application Development", 
    "Data Structures and Algorithms",
    "Digital Marketing"
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
            Technical Skills
          </h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="paper-card p-6"
              style={{
                animation: isVisible ? `fadeIn 0.6s ease-out ${index * 0.2}s forwards` : "none",
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

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-[var(--paper-border)] text-[var(--text-primary)] rounded-lg text-sm font-medium hover:bg-[var(--accent)]20 hover:text-[var(--accent)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Courses */}
        <div 
          className="paper-card p-8"
          style={{
            animation: isVisible ? "fadeIn 0.6s ease-out 0.6s forwards" : "none",
            opacity: isVisible ? 1 : 0
          }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-lg bg-[var(--accent)]20">
              <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Relevant Coursework
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {relevantCourses.map((course) => (
              <div
                key={course}
                className="flex items-center space-x-2 p-3 rounded-lg border border-[var(--paper-border)] hover:border-[var(--accent)] hover:bg-[var(--accent)]10 transition-colors"
              >
                <div className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0" />
                <span className="text-sm text-[var(--text-primary)]">{course}</span>
              </div>
            ))}
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
