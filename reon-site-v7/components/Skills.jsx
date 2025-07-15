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
      icon: "💻",
      color: "from-blue-500/20 to-blue-600/10",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      hoverColor: "hover:border-blue-400/50",
    },
    {
      title: "Frontend Development",
      skills: myInfo.skills.frontend,
      icon: "🎨",
      color: "from-green-500/20 to-emerald-600/10",
      textColor: "text-green-400",
      borderColor: "border-green-500/30",
      hoverColor: "hover:border-green-400/50",
    },
    {
      title: "Backend Development",
      skills: myInfo.skills.backend,
      icon: "⚙️",
      color: "from-purple-500/20 to-violet-600/10",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      hoverColor: "hover:border-purple-400/50",
    },
    {
      title: "Databases",
      skills: myInfo.skills.databases,
      icon: "🗄️",
      color: "from-orange-500/20 to-amber-600/10",
      textColor: "text-orange-400",
      borderColor: "border-orange-500/30",
      hoverColor: "hover:border-orange-400/50",
    },
    {
      title: "Cloud Platforms",
      skills: myInfo.skills.cloudPlatforms,
      icon: "☁️",
      color: "from-cyan-500/20 to-sky-600/10",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      hoverColor: "hover:border-cyan-400/50",
    },
    {
      title: "Tools & Technologies",
      skills: myInfo.skills.tools,
      icon: "🔧",
      color: "from-yellow-500/20 to-amber-600/10",
      textColor: "text-yellow-400",
      borderColor: "border-yellow-500/30",
      hoverColor: "hover:border-yellow-400/50",
    },
  ];

  return (
    <section id="skills" className={`${spacing.section} ${spacing.container} bg-secondary/10`}>
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
              className={`group relative glassmorphism ${deviceType === 'mobile' ? 'rounded-xl p-4' : 'rounded-2xl p-6'} border ${category.borderColor} ${category.hoverColor} transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${deviceType === 'mobile' ? 'rounded-xl' : 'rounded-2xl'}`}></div>
              
              <div className="relative z-10">
                <div className={`flex items-center ${deviceType === 'mobile' ? 'space-x-3 mb-4' : 'space-x-4 mb-6'}`}>
                  <div className={`${deviceType === 'mobile' ? 'w-10 h-10 text-lg' : 'w-12 h-12 text-xl'} rounded-xl bg-gradient-to-br ${category.color} border ${category.borderColor} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`${deviceType === 'mobile' ? 'text-base' : 'text-lg'} font-semibold text-foreground group-hover:${category.textColor} transition-colors duration-300`}>
                      {category.title}
                    </h3>
                    <p className={`${deviceType === 'mobile' ? 'text-xs' : 'text-xs'} text-muted-foreground`}>
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>
                
                <div className={`grid grid-cols-2 ${deviceType === 'mobile' ? 'gap-1.5' : 'gap-2'}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`group/skill relative ${deviceType === 'mobile' ? 'px-2 py-1.5 text-xs' : 'px-3 py-2 text-sm'} bg-secondary/30 text-foreground/80 rounded-lg font-medium border border-border/30 hover:bg-secondary/50 transition-all duration-300 cursor-default overflow-hidden`}
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`}></div>
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
                  className={`${deviceType === 'mobile' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-secondary/30 text-foreground/80 rounded-lg font-medium border border-border/30`}
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