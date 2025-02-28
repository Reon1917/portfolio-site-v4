import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
