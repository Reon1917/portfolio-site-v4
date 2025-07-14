import myInfo from "@/data/myinfo.json";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          {/* H1: 48px-56px, weight 600, letter-spacing -0.01em */}
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-foreground tracking-tight leading-tight" style={{ letterSpacing: '-0.01em' }}>
            About Me
          </h2>
          {/* Body: 17px-19px, weight 400, line-height 1.5 */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-normal leading-relaxed">
            Passionate about creating innovative web solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-10">
            {/* Body: 17px-19px, weight 400, line-height 1.5 */}
            <p className="text-lg font-normal leading-relaxed text-foreground/90">
              {myInfo.about}
            </p>
            
            <div>
              {/* H3: 24px-28px, weight 600, letter-spacing -0.01em */}
              <h3 className="text-2xl font-semibold mb-4 text-foreground leading-tight" style={{ letterSpacing: '-0.01em' }}>
                Career Objective
              </h3>
              <p className="text-foreground/80 font-normal leading-relaxed">
                {myInfo.personalInfo.careerObjective}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground leading-tight" style={{ letterSpacing: '-0.01em' }}>
                Key Strengths
              </h3>
              <div className="space-y-4">
                {myInfo.softSkills.map((skill, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <h4 className="font-medium text-foreground mb-1">{skill.skill}</h4>
                    <p className="text-sm text-foreground/70 font-normal leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-secondary/15 rounded-2xl border border-border/20">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <p className="text-sm text-muted-foreground font-normal">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-secondary/15 rounded-2xl border border-border/20">
                <div className="text-3xl font-bold text-primary mb-2">2026</div>
                <p className="text-sm text-muted-foreground font-normal">Expected Graduation</p>
              </div>
              <div className="text-center p-6 bg-secondary/15 rounded-2xl border border-border/20">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-sm text-muted-foreground font-normal">Major Projects</p>
              </div>
              <div className="text-center p-6 bg-secondary/15 rounded-2xl border border-border/20">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground font-normal">Technologies</p>
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