"use client";

import { useState, useEffect } from "react";
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaJava, 
  FaPython, 
  FaAws, 
  FaDatabase 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiSupabase, 
  SiMysql, 
  SiPostgresql 
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "NextJS", icon: SiNextdotjs, level: 90 },
      { name: "ReactJS", icon: FaReact, level: 95 },
      { name: "JavaScript", icon: FaJs, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 85 },
      { name: "Java", icon: FaJava, level: 80 },
      { name: "Python", icon: FaPython, level: 75 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "Supabase", icon: SiSupabase, level: 80 },
      { name: "MySQL", icon: SiMysql, level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS", icon: FaAws, level: 75 },
    ],
  },
];

const SkillCard = ({ name, icon: Icon, level }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <Icon className="text-5xl text-blue-600 dark:text-blue-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
          <div 
            className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: isHovered ? `${level}%` : "0%" }}
          ></div>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {isHovered ? `${level}%` : "Hover to see proficiency"}
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed expertise in various technologies throughout my academic and professional journey.
            Here's a showcase of my technical proficiency.
          </p>
        </div>

        <div className="space-y-12">
          {skillsData.map((category, index) => (
            <div 
              key={category.category}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="heading-md text-gray-800 dark:text-gray-200 mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
