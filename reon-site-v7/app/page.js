import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import DockNavigation from "@/components/DockNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 px-4 pb-24 text-center text-sm text-muted-foreground border-t border-border/40">
        <p>
          © 2024 Lin Myat Phyo. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
      
      {/* Dock Navigation */}
      <DockNavigation />
    </div>
  );
}
