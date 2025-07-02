import dynamic from "next/dynamic";
import personalData from "./personal-info/myinfo.json";

// Dynamic imports for better performance and lazy loading
const HeroSection = dynamic(() => import("@/components/hero-section"), {
  loading: () => <div className="min-h-screen bg-[var(--background-primary)] animate-pulse" />,
});

const AboutSection = dynamic(() => import("@/components/about-section"), {
  loading: () => <div className="min-h-screen bg-[var(--background-secondary)] animate-pulse" />,
});

const ProjectsSection = dynamic(() => import("@/components/projects-section"), {
  loading: () => <div className="min-h-screen bg-[var(--background-primary)] animate-pulse" />,
});

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => <div className="min-h-screen bg-[var(--background-secondary)] animate-pulse" />,
});

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-64 bg-[var(--background-primary)] animate-pulse" />,
});

export default function Home() {
  const {
    personalInfo,
    about,
    skills,
    projects,
    relevantCourses,
    moreAboutMe,
    contacts,
  } = personalData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        personalInfo={personalInfo}
        about={about}
      />

      {/* About Section */}
      <AboutSection
        personalInfo={personalInfo}
        skills={skills}
        about={about}
        relevantCourses={relevantCourses}
      />

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Contact Section */}
      <ContactSection
        contacts={contacts}
        moreAboutMe={moreAboutMe}
      />

      {/* Footer */}
      <Footer
        personalInfo={personalInfo}
        contacts={contacts}
      />
    </div>
  );
}
