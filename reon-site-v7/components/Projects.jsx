import myInfo from "@/data/myinfo.json";

export default function Projects() {
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
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in full-stack development and modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myInfo.projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary/20 backdrop-blur-sm rounded-xl p-6 border border-border hover:bg-secondary/30 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.name}</h3>
                  <span className="px-3 py-1 bg-secondary/50 text-foreground/70 rounded-lg text-xs font-medium">
                    {project.type}
                  </span>
                </div>
                <div className={`px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)} {project.status}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground/90 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground/90 mb-2">Key Features</h4>
                <div className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span className="text-xs text-foreground/70">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors border border-primary/20">
                  View Details
                </button>
                {project.status === "Live" && (
                  <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <button className="px-8 py-3 bg-secondary text-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors border border-border">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}