"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Laptop, Monitor, Github } from "lucide-react";

export function Skills({ data }) {
  // Define skill categories
  const skillCategories = [
    { title: "Frontend", skills: data.skills.frontend, delay: 0.1 },
    { title: "Backend", skills: data.skills.backend, delay: 0.2 },
    { title: "Programming Languages", skills: data.skills.programming_languages, delay: 0.3 },
    { title: "Tools", skills: data.skills.tools, delay: 0.4 },
  ];

  // Dev environment icons mapping
  const devIcons = {
    "Windows": <Monitor className="h-5 w-5 mr-1" />,
    "Cursor": <Laptop className="h-5 w-5 mr-1" />,
    "GitHub": <Github className="h-5 w-5 mr-1" />
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Technical Skills Card */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>
                  Technologies I work with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillCategories.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <h3 className="font-medium">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {skill}
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
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Development Environment</CardTitle>
                <CardDescription>
                  Tools I use daily
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(data.dev_environment).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      {devIcons[value]}
                      <span className="ml-2">{value}</span>
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
            <Card>
              <CardHeader>
                <CardTitle>University Courses</CardTitle>
                <CardDescription>
                  Relevant coursework from {data.education.university}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.education.courses.map((course) => (
                    <div
                      key={course}
                      className="p-3 bg-secondary/30 rounded-lg text-sm"
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