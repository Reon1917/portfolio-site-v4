"use client"

import data from './personal-info/myinfo.json';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Light background with paper texture */}
        <section 
          id="home" 
          className="paper-texture section-light min-h-screen"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          <Hero data={data} />
        </section>
        
        {/* About Section - Dark background */}
        <section 
          id="about" 
          className="section-dark"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          <About data={data} />
        </section>
        
        {/* Projects Section - Light background with paper texture */}
        <section 
          id="projects" 
          className="paper-texture section-light"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          <Projects projects={data.projects} />
        </section>
        
        {/* Skills Section - Dark background */}
        <section 
          id="skills" 
          className="section-dark"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          <Skills skills={data.skills} />
        </section>
        
        {/* Contact Section - Light background with paper texture */}
        <section 
          id="contact" 
          className="paper-texture section-light"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          <Contact contacts={data.contacts} />
        </section>
      </main>
    </div>
  );
}
