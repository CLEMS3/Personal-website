"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern pt-16">
      {/* Background radial gradient overlay for focus */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]"></div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex mt-12 items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary shadow-[0_0_15px_var(--color-primary-glow)] backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse mr-2 shadow-[0_0_10px_var(--color-accent-glow)]"></span>
          <span>{t.hero.status}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter">
            <span className="block text-slate-300">{t.hero.title1}</span>
            <span className="block">
              <span className="text-slate-300 mr-3 md:mr-4">{t.hero.title2}</span>
              <span className="neon-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {t.hero.title3}
              </span>
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 font-mono mt-6">
            {t.hero.subtitle}
          </p>
          <p className="mx-auto max-w-2xl text-base text-slate-500 mt-2">
            {t.hero.description}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a href="#contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full font-mono text-base px-8 py-6 rounded-none border border-primary relative overflow-hidden group">
              <span className="absolute w-full h-full bg-primary/20 top-0 left-[-100%] group-hover:left-[100%] transition-all duration-700"></span>
              <Terminal className="w-5 h-5 mr-2" />
              {t.hero.initiateContact}
            </Button>
          </a>
          <a href="#projects" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full font-mono text-base px-8 py-6 rounded-none backdrop-blur-md bg-secondary/30">
              <Code className="w-5 h-5 mr-2" />
              {t.hero.viewOps}
            </Button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
