"use client";

import { useState, useEffect, useRef } from "react";
import { Code, Database, Cloud, GitBranch, Wrench } from "lucide-react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", level: "Advanced", width: 90 },
        { name: "TypeScript", level: "Advanced", width: 85 },
        { name: "Python", level: "Proficient", width: 80 },
        { name: "Java", level: "Intermediate", width: 75 }
      ],
      color: "var(--accent)"
    },
    {
      title: "Web Technologies",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "React", level: "Advanced", width: 90 },
        { name: "Next.js", level: "Advanced", width: 85 },
        { name: "HTML/CSS", level: "Expert", width: 95 },
        { name: "Tailwind CSS", level: "Advanced", width: 90 }
      ],
      color: "#10b981"
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "PostgreSQL", level: "Proficient", width: 80 },
        { name: "MongoDB", level: "Intermediate", width: 75 },
        { name: "Supabase", level: "Advanced", width: 85 },
        { name: "Oracle SQL", level: "Intermediate", width: 70 }
      ],
      color: "#f59e0b"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: "AWS", level: "Intermediate", width: 75 },
        { name: "Vercel", level: "Advanced", width: 90 },
        { name: "Docker", level: "Intermediate", width: 70 },
        { name: "Netlify", level: "Advanced", width: 85 }
      ],
      color: "#8b5cf6"
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git/GitHub", level: "Advanced", width: 85 },
        { name: "VS Code", level: "Expert", width: 95 },
        { name: "Postman", level: "Proficient", width: 80 },
        { name: "Jest", level: "Intermediate", width: 75 }
      ],
      color: "#ef4444"
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

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "#10b981"; // Green
      case "Advanced":
        return "#3b82f6"; // Blue
      case "Proficient":
        return "#f59e0b"; // Orange
      case "Intermediate":
        return "#8b5cf6"; // Purple
      default:
        return "#6b7280"; // Gray
    }
  };

  const SkillBar = ({ skill, color, delay }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
        <span 
          className="text-xs font-medium px-2 py-1 rounded-full"
          style={{
            backgroundColor: `${getLevelColor(skill.level)}20`,
            color: getLevelColor(skill.level)
          }}
        >
          {skill.level}
        </span>
      </div>
      <div className="w-full bg-[var(--paper-border)] rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            backgroundColor: color,
            width: isVisible ? `${skill.width}%` : "0%",
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-spacing" ref={sectionRef}>
      <div className="container-spacing">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4 text-[var(--text-primary)]">
            Technical Skills
          </h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use 
            to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="paper-card p-6 transform hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${categoryIndex * 100}ms`,
                animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)"
              }}
            >
              {/* Category Header */}
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

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    delay={categoryIndex * 100 + skillIndex * 50}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Legend */}
        <div className="mt-12 flex justify-center">
          <div className="paper-card p-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 text-center">
              Skill Levels
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { level: "Expert", description: "Extensive experience", color: "#10b981" },
                { level: "Advanced", description: "Strong proficiency", color: "#3b82f6" },
                { level: "Proficient", description: "Comfortable using", color: "#f59e0b" },
                { level: "Intermediate", description: "Basic to moderate", color: "#8b5cf6" }
              ].map((item) => (
                <div key={item.level} className="text-center">
                  <div 
                    className="w-4 h-4 rounded-full mx-auto mb-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="text-sm font-medium text-[var(--text-primary)]">
                    {item.level}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="paper-card p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">
              Continuous Learning
            </h3>
            <p className="text-body text-[var(--text-secondary)] mb-4">
              Currently exploring emerging technologies and staying up-to-date with the latest 
              developments in web development, cloud computing, and software engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["AI/ML Integration", "Microservices", "PWAs", "Web3", "Serverless"].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 bg-[var(--accent)]20 text-[var(--accent)] rounded-full text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
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
