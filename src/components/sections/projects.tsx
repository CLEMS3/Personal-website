"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TerminalSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Projects() {
  const { t } = useLanguage();
  
  // Link definitions map to translation list order
  const links = [
    { github: "#", demo: "#" },
    { github: "#", demo: "#" },
    { github: "#", demo: "#" },
    { github: "#", demo: "#" }
  ];
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4">
            <span className="text-primary mr-2">{"//"}</span>
            {t.projects.title}.<span className="text-foreground">{t.projects.subtitle}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            {t.projects.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.projects.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:border-accent/50 bg-gradient-to-b from-card/80 to-card/40 relative overflow-hidden">
                {/* Decorative circuit line */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CardHeader>
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <TerminalSquare className="w-5 h-5" />
                  </div>
                  <CardTitle className="font-mono text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400 font-sans mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary/60 text-slate-300 border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex space-x-4 border-t border-border/50 pt-4 mt-auto">
                  <a href={links[index].github} className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-primary hover:text-primary-foreground h-8 px-3 text-xs text-primary group border border-primary/20">
                    <Github className="w-4 h-4 mr-2" /> {t.projects.code}
                  </a>
                  <a href={links[index].demo} className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs text-accent group border border-accent/20">
                    <ExternalLink className="w-4 h-4 mr-2" /> {t.projects.view}
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
