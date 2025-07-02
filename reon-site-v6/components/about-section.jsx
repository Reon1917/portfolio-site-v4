"use client";

import { useInView } from "react-intersection-observer";
import { MapPin, GraduationCap, Code, Heart } from "lucide-react";

const SkillBadge = ({ skill, index }) => {
  return (
    <span 
      className="inline-block bg-[var(--background-secondary)] border border-[var(--border)] text-[var(--text-primary)] px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[var(--background-accent)] hover:shadow-sm"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {skill}
    </span>
  );
};

const SkillCategory = ({ title, skills, icon: Icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref}
      className={`${inView ? "fade-in-up" : "opacity-0"}`}
    >
      <div className="flex items-center space-x-2 mb-3">
        <Icon className="h-5 w-5 text-[var(--interactive-primary)]" />
        <h3 className="text-lg font-semibold text-[var(--text-primary)] font-[family-name:'Playfair_Display']">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

const AboutSection = ({ personalInfo, skills, about, relevantCourses }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: skills.programmingLanguages,
      icon: Code,
    },
    {
      title: "Web Technologies",
      skills: [...skills.markupLanguages, ...skills.cssFrameworks, ...skills.javascriptFrameworks, ...skills.webFrameworks],
      icon: Code,
    },
    {
      title: "Databases & Cloud",
      skills: [...skills.databases, ...skills.cloudPlatforms],
      icon: Code,
    },
    {
      title: "Tools & Others",
      skills: [...skills.versionControl, ...skills.developmentTools],
      icon: Code,
    },
  ];

  return (
    <section id="about" className="section-padding paper-texture bg-[var(--background-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 ${inView ? "fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:'Playfair_Display'] text-[var(--text-primary)] mb-4">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className={`space-y-6 ${inView ? "slide-in-left" : "opacity-0"}`}>
            <div className="bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg p-6 paper-texture">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[var(--interactive-primary)]" />
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Currently in</p>
                    <p className="text-lg font-medium text-[var(--text-primary)]">
                      {personalInfo.currentLocation}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-[var(--interactive-primary)]" />
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Education</p>
                    <p className="text-lg font-medium text-[var(--text-primary)]">
                      {personalInfo.education}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-[var(--interactive-primary)]" />
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Originally from</p>
                    <p className="text-lg font-medium text-[var(--text-primary)]">
                      {personalInfo.origin}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg p-6 paper-texture">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] font-[family-name:'Playfair_Display'] mb-4">
                My Story
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {about}
              </p>
            </div>

            <div className="bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg p-6 paper-texture">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] font-[family-name:'Playfair_Display'] mb-4">
                Relevant Courses
              </h3>
              <div className="space-y-2">
                {relevantCourses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[var(--interactive-primary)] rounded-full"></div>
                    <span className="text-[var(--text-secondary)]">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className={`space-y-8 ${inView ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <div className="bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg p-6 paper-texture">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] font-[family-name:'Playfair_Display'] mb-6">
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {skillCategories.map((category, index) => (
                  <SkillCategory 
                    key={index} 
                    title={category.title} 
                    skills={category.skills} 
                    icon={category.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
