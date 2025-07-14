import myInfo from "@/data/myinfo.json";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative web solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              {myInfo.about}
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Career Objective</h3>
              <p className="text-foreground/80 leading-relaxed">
                {myInfo.personalInfo.careerObjective}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Strengths</h3>
              <div className="space-y-3">
                {myInfo.softSkills.map((skill, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium text-foreground">{skill.skill}</h4>
                    <p className="text-sm text-foreground/70">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-secondary/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">2026</div>
                <p className="text-sm text-muted-foreground">Expected Graduation</p>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-sm text-muted-foreground">Major Projects</p>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>

            {/* Professional Qualities */}
            <div className="p-6 bg-secondary/20 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Professional Qualities</h3>
              <div className="space-y-2">
                {myInfo.professionalQualities.map((quality, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-sm text-foreground">{quality.quality}</h4>
                      <p className="text-xs text-foreground/70">{quality.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}