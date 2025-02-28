"use client";

import { useState, useEffect } from "react";
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaJava, 
  FaPython, 
  FaAws,
  FaDocker
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
      { name: "NextJS", icon: SiNextdotjs },
      { name: "ReactJS", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
    ],
  },
];

const SkillItem = ({ name, icon: Icon }) => {
  return (
    <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1.5 m-1.5 text-sm">
      <Icon className="text-blue-600 dark:text-blue-400 mr-2" />
      <span className="text-gray-900 dark:text-white">{name}</span>
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
    <section id="skills" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-5xl mx-auto px-4">
        <div className={`text-center mb-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={category.category}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap -m-1.5">
                {category.skills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
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
