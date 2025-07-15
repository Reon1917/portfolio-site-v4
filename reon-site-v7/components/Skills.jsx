"use client";

import myInfo from "@/data/myinfo.json";
import { useResponsiveSpacing, useDeviceType } from "@/lib/hooks";

export default function Skills() {
  const spacing = useResponsiveSpacing();
  const deviceType = useDeviceType();
  
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: myInfo.skills.programmingLanguages,
    },
    {
      title: "Frontend Development",
      skills: myInfo.skills.frontend,
    },
    {
      title: "Backend Development",
      skills: myInfo.skills.backend,
    },
    {
      title: "Databases",
      skills: myInfo.skills.databases,
    },
    {
      title: "Cloud Platforms",
      skills: myInfo.skills.cloudPlatforms,
    },
    {
      title: "Tools & Technologies",
      skills: myInfo.skills.tools,
    },
  ];

  return (
    <section id="skills" className={`${spacing.section} ${spacing.container} bg-background`}>
      <div className={`${deviceType === 'desktop' ? 'max-w-7xl' : 'max-w-6xl'} mx-auto`}>
        <div className={`text-center ${deviceType === 'mobile' ? 'mb-8' : deviceType === 'tablet' ? 'mb-12' : 'mb-16'}`}>
          <h2 className={`${deviceType === 'mobile' ? 'text-3xl' : deviceType === 'tablet' ? 'text-4xl' : deviceType === 'laptop' ? 'text-4xl' : 'text-5xl'} font-semibold ${deviceType === 'mobile' ? 'mb-3' : 'mb-4'} text-foreground tracking-tight`}>
            Technical Skills
          </h2>
          <p className={`${deviceType === 'mobile' ? 'text-base' : deviceType === 'tablet' ? 'text-lg' : 'text-xl'} text-muted-foreground ${deviceType === 'desktop' ? 'max-w-3xl' : 'max-w-2xl'} mx-auto`}>
            Modern technologies and tools I use to build exceptional web experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 ${deviceType === 'tablet' ? 'md:grid-cols-2' : 'md:grid-cols-2'} ${deviceType === 'laptop' || deviceType === 'desktop' ? 'lg:grid-cols-3' : ''} ${deviceType === 'mobile' ? 'gap-4' : deviceType === 'tablet' ? 'gap-6' : 'gap-8'} ${deviceType === 'mobile' ? 'mb-12' : deviceType === 'tablet' ? 'mb-16' : 'mb-20'}`}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative ${deviceType === 'mobile' ? 'rounded-lg p-4' : 'rounded-xl p-6'} border-2 border-border/60 hover:border-primary/60 transition-all duration-300 bg-secondary/5 hover:bg-secondary/10 shadow-sm hover:shadow-md`}
            >
              <div>
                <div className={`${deviceType === 'mobile' ? 'mb-4' : 'mb-6'}`}>
                  <h3 className={`${deviceType === 'mobile' ? 'text-base' : 'text-lg'} font-semibold text-foreground mb-1`}>
                    {category.title}
                  </h3>
                  <p className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} text-muted-foreground`}>
                    {category.skills.length} technologies
                  </p>
                </div>
                
                <div className={`grid grid-cols-2 ${deviceType === 'mobile' ? 'gap-1.5' : 'gap-2'}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${deviceType === 'mobile' ? 'px-2 py-1.5 text-xs' : 'px-3 py-2 text-sm'} bg-background border border-border/30 text-foreground/90 rounded-md font-medium hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Courses */}
        <div className="text-center">
          <h3 className={`${deviceType === 'mobile' ? 'text-xl' : 'text-2xl'} font-semibold ${deviceType === 'mobile' ? 'mb-4' : 'mb-6'} text-foreground`}>Relevant Coursework</h3>
          <div className={`${deviceType === 'desktop' ? 'max-w-5xl' : 'max-w-4xl'} mx-auto`}>
            <div className={`grid grid-cols-1 ${deviceType === 'mobile' ? 'gap-2' : deviceType === 'tablet' ? 'sm:grid-cols-2 gap-2.5' : 'sm:grid-cols-2 lg:grid-cols-3 gap-3'}`}>
              {myInfo.relevantCourses.map((course, index) => (
                <div
                  key={index}
                  className={`${deviceType === 'mobile' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-background border border-border/30 text-foreground/90 rounded-md font-medium hover:border-primary/30 hover:bg-primary/5 transition-all duration-200`}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}