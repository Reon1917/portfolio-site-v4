"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiMongodb, SiSupabase, SiAmazonaws, 
  SiPostgresql, SiPython, SiJava, SiGit
} from "react-icons/si";
import { 
  FaDocker, FaJsSquare, FaDatabase
} from "react-icons/fa";
import { 
  TbBrandVscode, TbBrandWindows 
} from "react-icons/tb";
import { 
  BsGithub, BsFiletypeSql 
} from "react-icons/bs";
import { FaAws, FaJava } from "react-icons/fa";

export function Skills({ data }) {
  // Define skill categories
  const skillCategories = [
    { title: "Frontend", skills: data.skills.frontend, delay: 0.1 },
    { title: "Backend", skills: data.skills.backend, delay: 0.2 },
    { title: "Programming Languages", skills: data.skills.programming_languages, delay: 0.3 },
    { title: "Tools", skills: data.skills.tools, delay: 0.4 },
  ];

  // Icon mapping for all skills
  const skillIcons = {
    // Frontend
    "NextJS": <SiNextdotjs className="h-4 w-4" />,
    "React": <SiReact className="h-4 w-4" />,
    "TailwindCSS": <SiTailwindcss className="h-4 w-4" />,
    "TypeScript": <SiTypescript className="h-4 w-4" />,
    
    // Backend
    "MongoDB": <SiMongodb className="h-4 w-4" />,
    "Supabase": <SiSupabase className="h-4 w-4" />,
    "Neon": <FaDatabase className="h-4 w-4" />,
    "AWS": <FaAws className="h-4 w-4" />,
    "SQL": <BsFiletypeSql className="h-4 w-4" />,
    "PostgreSQL": <SiPostgresql className="h-4 w-4" />,
    
    // Programming Languages
    "Python": <SiPython className="h-4 w-4" />,
    "Java": <FaJava className="h-4 w-4" />, 
    "JavaScript": <FaJsSquare className="h-4 w-4" />,
    
    // Tools
    "Docker": <FaDocker className="h-4 w-4" />,
    "Git": <SiGit className="h-4 w-4" />,
  };

  // Dev environment icons
  const envIcons = {
    "Windows": <TbBrandWindows className="h-5 w-5" />,
    "Cursor IDE": <TbBrandVscode className="h-5 w-5" />,
    "GitHub": <BsGithub className="h-5 w-5" />
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 apple-accent pb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Experience
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Technical Skills Card */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full apple-card apple-accent-shadow">
              <CardHeader className="border-b border-border/10">
                <CardTitle className="text-foreground">Technical Skills</CardTitle>
                <CardDescription>
                  Technologies I work with
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {skillCategories.map((category) => (
                    <div key={category.title} className="space-y-3">
                      <h3 className="font-medium text-foreground/90">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill}
                            className="skill-tag apple-hover flex items-center gap-1.5"
                          >
                            <span className="text-primary">
                              {skillIcons[skill] || <FaDatabase className="h-4 w-4" />}
                            </span>
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Development Environment Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full apple-card apple-accent-shadow">
              <CardHeader className="border-b border-border/10">
                <CardTitle className="text-foreground">Development Environment</CardTitle>
                <CardDescription>
                  Tools I use daily
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {Object.entries(data.dev_environment).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-3 p-2 rounded-md hover:bg-primary/5 transition-colors apple-hover">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md text-primary">
                        {envIcons[value] || <TbBrandVscode className="h-5 w-5" />}
                      </div>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* University Courses Card */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="apple-card apple-accent-shadow">
              <CardHeader className="border-b border-border/10">
                <CardTitle className="text-foreground">University Courses</CardTitle>
                <CardDescription>
                  Relevant coursework from {data.education.university}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.education.courses.map((course) => (
                    <div
                      key={course}
                      className="p-3 bg-secondary/50 rounded-lg text-sm font-medium border border-border/10 hover:bg-accent/5 hover:text-accent hover:border-accent/20 transition-colors apple-hover"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}