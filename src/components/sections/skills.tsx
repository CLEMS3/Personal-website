"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Cpu, Globe, Shield } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [
  <Globe key="1" className="w-6 h-6 text-blue-400" />,
  <Shield key="2" className="w-6 h-6 text-accent" />,
  <Cpu key="3" className="w-6 h-6 text-purple-400" />,
  <Server key="4" className="w-6 h-6 text-yellow-400" />
];

export function Skills() {
  const { t } = useLanguage();
  
  const skillCategories = t.skills.categories.map((cat, index) => ({
    title: cat.title,
    icon: icons[index],
    skills: cat.items
  }));
  return (
    <section id="skills" className="py-24 relative bg-slate-900/50">
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
            {t.skills.title}.<span className="text-foreground">{t.skills.subtitle}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            {t.skills.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-border">
                    <div className="p-2 glass rounded-lg border border-white/5">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-400 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3 group-hover:bg-primary group-hover:shadow-[0_0_8px_var(--color-primary-glow)] transition-all"></span>
                        <span className="group-hover:text-slate-200 transition-colors font-mono">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
