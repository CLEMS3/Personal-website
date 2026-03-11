"use client";

import { motion } from "framer-motion";
import { Terminal, Factory, Crosshair, Cpu, Code } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4">
            <span className="text-primary mr-2">{"//"}</span>
            {t.about.title}.<span className="text-foreground">{t.about.subtitle}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 text-sm font-mono text-slate-400">
                <Factory className="w-5 h-5 text-accent" />
                <span>{t.about.stat1}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-mono text-slate-400">
                <Crosshair className="w-5 h-5 text-accent" />
                <span>{t.about.stat2}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-mono text-slate-400">
                <Cpu className="w-5 h-5 text-primary" />
                <span>{t.about.stat3}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-mono text-slate-400">
                <Code className="w-5 h-5 text-primary" />
                <span>{t.about.stat4}</span>
              </div>
            </div>
          </motion.div>

          {/* Terminal Window Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-xl overflow-hidden border border-slate-800 bg-[#0a0a0a] shadow-2xl relative group"
          >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-slate-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-xs font-mono text-slate-500 flex items-center">
                <Terminal className="w-3 h-3 mr-2" /> root@clement:~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm space-y-4">
              <div>
                <span className="text-primary">root@clement:~#</span> <span className="text-foreground">whoami</span>
              </div>
              <div className="text-slate-300">
                clement_chapard
              </div>

              <div>
                <span className="text-primary">root@clement:~#</span> <span className="text-foreground">{t.about.profile}</span>
              </div>
              <div className="text-slate-300 pl-4 border-l-2 border-slate-800 space-y-1 font-mono text-xs">
                <p>{t.about.education}</p>
                <p>{t.about.academic}</p>
                <p>{t.about.languages}</p>
                <p>{t.about.core}</p>
              </div>

              <div className="animate-pulse pt-2">
                <span className="text-primary">root@clement:~#</span>
                <span className="inline-block w-2 h-4 bg-slate-400 ml-2 align-middle"></span>
                <span className="text-slate-500 text-xs ml-2">{t.about.awaiting}</span>
              </div>
            </div>

            {/* Matrix Rain Decoration (Subtle) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] animate-matrix-rain mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
