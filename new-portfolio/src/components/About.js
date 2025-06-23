// src/components/About.js
import { portfolioData } from '@/data/portfolioData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code2, TerminalSquare, Brain } from 'lucide-react'; // Icons

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 tracking-tight">
    {children}
  </h2>
);

const SkillCategory = ({ title, skills, icon }) => (
  <div>
    <h4 className="text-lg font-semibold mb-3 flex items-center">
      {icon && React.cloneElement(icon, { className: "mr-2 h-5 w-5 text-primary" })}
      {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background"> {/* Changed background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Bio and Education Card */}
          <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-primary" />
                My Journey
              </CardTitle>
              <CardDescription>A brief overview of my background and passion.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                {portfolioData.bio}
              </p>
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-foreground">
                  <GraduationCap className="mr-3 h-5 w-5 text-primary" />
                  Education
                </h3>
                <p>
                  I am currently pursuing a {portfolioData.education.degree} in {portfolioData.education.concentration}
                  at the <span className="font-medium text-foreground">{portfolioData.education.university}</span>.
                </p>
                {portfolioData.education.courses && portfolioData.education.courses.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-foreground mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.education.courses.map(course => (
                        <Badge key={course} variant="outline" className="font-normal">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Code2 className="mr-3 h-6 w-6 text-primary" />
                Technical Skills
              </CardTitle>
              <CardDescription>My proficiency in various technologies.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SkillCategory title="Frontend" skills={portfolioData.skills.frontend} icon={<Brain />} />
              <SkillCategory title="Backend" skills={portfolioData.skills.backend} icon={<TerminalSquare />} />
              <SkillCategory title="Programming Languages" skills={portfolioData.skills.programming_languages} icon={<Code2 />} />
              {portfolioData.skills.tools && portfolioData.skills.tools.length > 0 && (
                 <SkillCategory title="Tools & Platforms" skills={portfolioData.skills.tools} icon={<Briefcase />} />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
