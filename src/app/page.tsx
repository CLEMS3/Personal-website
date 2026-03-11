import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 font-sans">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-6 border-t border-border/50 bg-[#02050a] text-center text-slate-500 text-sm font-mono">
        <p>Copyright © {new Date().getFullYear()} Clement. All systems operational.</p>
      </footer>
    </div>
  );
}
