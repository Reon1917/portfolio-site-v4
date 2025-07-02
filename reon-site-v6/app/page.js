import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import SoftSkills from "@/components/AdditionalQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Soft Skills Section */}
      <SoftSkills />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
