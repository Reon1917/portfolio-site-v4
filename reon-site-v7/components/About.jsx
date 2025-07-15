"use client";

import myInfo from "@/data/myinfo.json";
import { useResponsiveSpacing, useDeviceType } from "@/lib/hooks";

export default function About() {
  const spacing = useResponsiveSpacing();
  const deviceType = useDeviceType();
  
  return (
    <section id="about" className={`${spacing.section} ${spacing.container} bg-background`}>
      <div className={`${deviceType === 'desktop' ? 'max-w-6xl' : 'max-w-5xl'} mx-auto`}>
        <div className={`text-center ${deviceType === 'mobile' ? 'mb-8' : deviceType === 'tablet' ? 'mb-12' : deviceType === 'laptop' ? 'mb-16' : 'mb-20'}`}>
          {/* H1: 48px-56px, weight 600, letter-spacing -0.01em */}
          <h2 className={`${deviceType === 'mobile' ? 'text-3xl' : deviceType === 'tablet' ? 'text-4xl' : deviceType === 'laptop' ? 'text-5xl' : 'text-6xl'} font-semibold ${deviceType === 'mobile' ? 'mb-3' : deviceType === 'tablet' ? 'mb-4' : 'mb-6'} text-foreground tracking-tight leading-tight`} style={{ letterSpacing: '-0.01em' }}>
            About Me
          </h2>
          {/* Body: 17px-19px, weight 400, line-height 1.5 */}
          <p className={`${deviceType === 'mobile' ? 'text-base' : 'text-lg'} text-muted-foreground ${deviceType === 'desktop' ? 'max-w-4xl' : 'max-w-3xl'} mx-auto font-normal leading-relaxed`}>
            Passionate about creating innovative web solutions
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 ${deviceType === 'mobile' ? 'gap-8' : deviceType === 'tablet' ? 'gap-12' : deviceType === 'laptop' ? 'gap-16' : 'gap-20'} items-center`}>
          {/* Left Column - Main Content */}
          <div className={`${deviceType === 'mobile' ? 'space-y-6' : deviceType === 'tablet' ? 'space-y-8' : 'space-y-10'}`}>
            {/* Body: 17px-19px, weight 400, line-height 1.5 */}
            <p className={`${deviceType === 'mobile' ? 'text-base' : 'text-lg'} font-normal leading-relaxed text-foreground/90`}>
              {myInfo.about}
            </p>
            
            <div>
              {/* H3: 24px-28px, weight 600, letter-spacing -0.01em */}
              <h3 className={`${deviceType === 'mobile' ? 'text-xl' : 'text-2xl'} font-semibold ${deviceType === 'mobile' ? 'mb-3' : 'mb-4'} text-foreground leading-tight`} style={{ letterSpacing: '-0.01em' }}>
                Career Objective
              </h3>
              <p className={`${deviceType === 'mobile' ? 'text-sm' : 'text-base'} text-foreground/80 font-normal leading-relaxed`}>
                {myInfo.personalInfo.careerObjective}
              </p>
            </div>

            <div>
              <h3 className={`${deviceType === 'mobile' ? 'text-xl' : 'text-2xl'} font-semibold ${deviceType === 'mobile' ? 'mb-4' : 'mb-6'} text-foreground leading-tight`} style={{ letterSpacing: '-0.01em' }}>
                Key Strengths
              </h3>
              <div className={`${deviceType === 'mobile' ? 'space-y-3' : 'space-y-4'}`}>
                {myInfo.softSkills.map((skill, index) => (
                  <div key={index} className={`border-l-4 border-primary ${deviceType === 'mobile' ? 'pl-4' : 'pl-6'}`}>
                    <h4 className={`font-medium text-foreground ${deviceType === 'mobile' ? 'mb-0.5 text-sm' : 'mb-1'}`}>{skill.skill}</h4>
                    <p className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} text-foreground/70 font-normal leading-relaxed`}>{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className={`${deviceType === 'mobile' ? 'space-y-6' : 'space-y-8'}`}>
            {/* Stats */}
            <div className={`grid grid-cols-2 ${deviceType === 'mobile' ? 'gap-3' : deviceType === 'tablet' ? 'gap-4' : 'gap-6'}`}>
              <div className={`text-center ${deviceType === 'mobile' ? 'p-3' : deviceType === 'tablet' ? 'p-4' : 'p-6'} bg-secondary/15 rounded-2xl border border-border/20`}>
                <div className={`${deviceType === 'mobile' ? 'text-xl' : deviceType === 'tablet' ? 'text-2xl' : 'text-3xl'} font-bold text-primary ${deviceType === 'mobile' ? 'mb-1' : 'mb-2'}`}>2+</div>
                <p className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} text-muted-foreground font-normal`}>Years Experience</p>
              </div>
              <div className={`text-center ${deviceType === 'mobile' ? 'p-3' : deviceType === 'tablet' ? 'p-4' : 'p-6'} bg-secondary/15 rounded-2xl border border-border/20`}>
                <div className={`${deviceType === 'mobile' ? 'text-xl' : deviceType === 'tablet' ? 'text-2xl' : 'text-3xl'} font-bold text-primary ${deviceType === 'mobile' ? 'mb-1' : 'mb-2'}`}>2026</div>
                <p className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} text-muted-foreground font-normal`}>Expected Graduation</p>
              </div>
              <div className={`text-center ${deviceType === 'mobile' ? 'p-3' : deviceType === 'tablet' ? 'p-4' : 'p-6'} bg-secondary/15 rounded-2xl border border-border/20`}>
                <div className={`${deviceType === 'mobile' ? 'text-xl' : deviceType === 'tablet' ? 'text-2xl' : 'text-3xl'} font-bold text-primary ${deviceType === 'mobile' ? 'mb-1' : 'mb-2'}`}>3</div>
                <p className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} text-muted-foreground font-normal`}>Major Projects</p>
              </div>
              <div className={`text-center ${deviceType === 'mobile' ? 'p-3' : deviceType === 'tablet' ? 'p-4' : 'p-6'} bg-secondary/15 rounded-2xl border border-border/20`}>
                <div className={`${deviceType === 'mobile' ? 'text-xl' : deviceType === 'tablet' ? 'text-2xl' : 'text-3xl'} font-bold text-primary ${deviceType === 'mobile' ? 'mb-1' : 'mb-2'}`}>10+</div>
                <p className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} text-muted-foreground font-normal`}>Technologies</p>
              </div>
            </div>

            {/* Professional Qualities */}
            <div className={`${deviceType === 'mobile' ? 'p-4' : 'p-6'} bg-secondary/20 rounded-xl`}>
              <h3 className={`${deviceType === 'mobile' ? 'text-base' : 'text-lg'} font-semibold ${deviceType === 'mobile' ? 'mb-3' : 'mb-4'} text-foreground`}>Professional Qualities</h3>
              <div className={`${deviceType === 'mobile' ? 'space-y-1.5' : 'space-y-2'}`}>
                {myInfo.professionalQualities.map((quality, index) => (
                  <div key={index} className={`flex items-start ${deviceType === 'mobile' ? 'space-x-2' : 'space-x-3'}`}>
                    <div className={`${deviceType === 'mobile' ? 'w-1.5 h-1.5 mt-1.5' : 'w-2 h-2 mt-2'} bg-primary rounded-full flex-shrink-0`}></div>
                    <div>
                      <h4 className={`font-medium ${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} text-foreground`}>{quality.quality}</h4>
                      <p className={`${deviceType === 'mobile' ? 'text-xs' : 'text-xs'} text-foreground/70`}>{quality.description}</p>
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