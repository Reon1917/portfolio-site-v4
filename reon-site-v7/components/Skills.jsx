import myInfo from "@/data/myinfo.json";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: myInfo.skills.programmingLanguages,
      icon: "💻",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      title: "Frontend",
      skills: myInfo.skills.frontend,
      icon: "🎨",
      color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
      title: "Backend",
      skills: myInfo.skills.backend,
      icon: "⚙️",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      title: "Databases",
      skills: myInfo.skills.databases,
      icon: "🗄️",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
    {
      title: "Cloud Platforms",
      skills: myInfo.skills.cloudPlatforms,
      icon: "☁️",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    },
    {
      title: "Tools",
      skills: myInfo.skills.tools,
      icon: "🔧",
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern technologies and tools I use to build exceptional web experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:bg-background/80 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center text-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary/50 text-foreground/80 rounded-lg text-sm font-medium border border-border/50 hover:bg-secondary/70 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Courses */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Relevant Coursework</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {myInfo.relevantCourses.map((course, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-secondary/30 text-foreground/80 rounded-lg text-sm font-medium border border-border/30"
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