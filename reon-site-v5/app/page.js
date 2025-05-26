import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import developerData from "@/data/data.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar data={developerData} />
      <main className="flex-1 pt-20">
        <Hero data={developerData} />
        <Skills data={developerData} />
        <Projects />
        <Contact />
      </main>
      <Footer data={developerData} />
    </div>
  );
}
