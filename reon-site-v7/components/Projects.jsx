"use client";

import myInfo from "@/data/myinfo.json";
import { useResponsiveSpacing, useDeviceType } from "@/lib/hooks";

export default function Projects() {
  const spacing = useResponsiveSpacing();
  const deviceType = useDeviceType();
  
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "live":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "in development":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "✅";
      case "live":
        return "🚀";
      case "in development":
        return "🔨";
      default:
        return "⏳";
    }
  };

  return (
    <section id="projects" className={`${spacing.section} ${spacing.container} bg-background`}>
      <div className={`${deviceType === 'desktop' ? 'max-w-7xl' : 'max-w-6xl'} mx-auto`}>
        <div className={`text-center ${deviceType === 'mobile' ? 'mb-8' : deviceType === 'tablet' ? 'mb-12' : 'mb-16'}`}>
          <h2 className={`${deviceType === 'mobile' ? 'text-3xl' : deviceType === 'tablet' ? 'text-4xl' : deviceType === 'laptop' ? 'text-4xl' : 'text-5xl'} font-semibold ${deviceType === 'mobile' ? 'mb-3' : 'mb-4'} text-foreground tracking-tight`}>
            Featured Projects
          </h2>
          <p className={`${deviceType === 'mobile' ? 'text-base' : deviceType === 'tablet' ? 'text-lg' : 'text-xl'} text-muted-foreground ${deviceType === 'desktop' ? 'max-w-3xl' : 'max-w-2xl'} mx-auto`}>
            Showcasing my expertise in full-stack development and modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 ${deviceType === 'tablet' ? 'md:grid-cols-2' : 'md:grid-cols-2'} ${deviceType === 'laptop' || deviceType === 'desktop' ? 'lg:grid-cols-3' : ''} ${deviceType === 'mobile' ? 'gap-4' : deviceType === 'tablet' ? 'gap-6' : 'gap-8'}`}>
          {myInfo.projects.map((project, index) => (
            <div
              key={index}
              className={`group relative glassmorphism ${deviceType === 'mobile' ? 'rounded-xl p-4' : 'rounded-2xl p-6'} border border-border/30 hover:border-primary/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden`}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${deviceType === 'mobile' ? 'rounded-xl' : 'rounded-2xl'}`}></div>
              
              {/* Glowing Border Effect */}
              <div className={`absolute inset-0 ${deviceType === 'mobile' ? 'rounded-xl' : 'rounded-2xl'} bg-gradient-to-r from-primary to-blue-500 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className={`h-full w-full ${deviceType === 'mobile' ? 'rounded-xl' : 'rounded-2xl'} bg-background/95`}></div>
              </div>
              
              <div className="relative z-10">
                {/* Project Header */}
                <div className={`flex items-start justify-between ${deviceType === 'mobile' ? 'mb-4' : 'mb-6'}`}>
                  <div>
                    <h3 className={`${deviceType === 'mobile' ? 'text-lg' : 'text-xl'} font-semibold text-foreground ${deviceType === 'mobile' ? 'mb-2' : 'mb-3'} group-hover:text-primary transition-colors duration-300`}>
                      {project.name}
                    </h3>
                    <span className={`${deviceType === 'mobile' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs'} bg-secondary/30 text-foreground/70 rounded-full font-medium border border-border/30`}>
                      {project.type}
                    </span>
                  </div>
                  <div className={`${deviceType === 'mobile' ? 'px-2 py-0.5' : 'px-3 py-1'} rounded-full text-xs font-medium border ${getStatusColor(project.status)} flex items-center space-x-1`}>
                    <span>{getStatusIcon(project.status)}</span>
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Project Description */}
                <p className={`text-foreground/80 ${deviceType === 'mobile' ? 'text-xs mb-4' : 'text-sm mb-6'} leading-relaxed`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className={`${deviceType === 'mobile' ? 'mb-4' : 'mb-6'}`}>
                  <h4 className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} font-medium text-foreground/90 ${deviceType === 'mobile' ? 'mb-2' : 'mb-3'}`}>Tech Stack</h4>
                  <div className={`flex flex-wrap ${deviceType === 'mobile' ? 'gap-1.5' : 'gap-2'}`}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${deviceType === 'mobile' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs'} bg-primary/10 text-primary rounded-full font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className={`${deviceType === 'mobile' ? 'mb-6' : 'mb-8'}`}>
                  <h4 className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} font-medium text-foreground/90 ${deviceType === 'mobile' ? 'mb-2' : 'mb-3'}`}>✨ Key Features</h4>
                  <div className={`${deviceType === 'mobile' ? 'space-y-1.5' : 'space-y-2'}`}>
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className={`flex items-center ${deviceType === 'mobile' ? 'space-x-2' : 'space-x-3'}`}>
                        <div className={`${deviceType === 'mobile' ? 'w-1 h-1' : 'w-1.5 h-1.5'} bg-primary rounded-full flex-shrink-0`}></div>
                        <span className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} text-foreground/80`}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className={`flex ${deviceType === 'mobile' ? 'gap-2' : 'gap-3'} mt-auto`}>
                  <button className={`flex-1 group/btn relative ${deviceType === 'mobile' ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'} bg-primary/10 text-primary rounded-xl font-medium hover:bg-primary/20 transition-all duration-300 border border-primary/20 overflow-hidden`}>
                    <span className="relative z-10 flex items-center justify-center space-x-1">
                      <span>👁️</span>
                      <span>View Details</span>
                    </span>
                    <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  {project.status === "Live" && (
                    <button className={`flex-1 group/btn relative ${deviceType === 'mobile' ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'} bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden`}>
                      <span className="relative z-10 flex items-center justify-center space-x-1">
                        <span>🚀</span>
                        <span>Live Demo</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center ${deviceType === 'mobile' ? 'mt-8' : deviceType === 'tablet' ? 'mt-12' : 'mt-16'}`}>
          <p className={`${deviceType === 'mobile' ? 'text-base mb-4' : 'text-lg mb-6'} text-muted-foreground`}>
            Interested in seeing more of my work?
          </p>
          <button className={`${deviceType === 'mobile' ? 'px-6 py-2.5 text-sm' : 'px-8 py-3'} bg-secondary text-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors border border-border`}>
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}