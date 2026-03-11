"use client";

"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setStatusMessage(t.contact.sending);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.error("Web3Forms Access Key is not configured.");
      setStatusMessage("Configuration Error. Please contact the administrator.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form.current);
    formData.append("access_key", accessKey);
    // Optional parameter to avoid Web3Forms sending auto-reply emails if you don't want them:
    // formData.append("from_name", "Clement.Chapard Transmission System");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage(t.contact.success);
        form.current?.reset();
        setTimeout(() => setStatusMessage(null), 3000);
      } else {
        console.error("Transmission failed...", data);
        setStatusMessage("Transmission Failed. Retrying...");
      }
    } catch (error) {
      console.error("Transmission failed...", error);
      setStatusMessage("Transmission Failed. Retrying...");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050a14] border-t border-border/50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light opacity-[0.05] pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-card/30 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative">

          <div className="grid md:grid-cols-2 gap-12">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold font-mono tracking-tighter mb-4">
                <span className="text-primary mr-2">{"//"}</span>
                {t.contact.title}.<span className="text-foreground">{t.contact.subtitle}</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-md">
                {t.contact.description}
              </p>

              <div className="space-y-4">

                <a href="https://github.com/CLEMS3" className="flex items-center space-x-4 text-slate-300 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm">github.com/CLEMS3</span>
                </a>
                <a href="https://www.linkedin.com/in/clement-chapard/" className="flex items-center space-x-4 text-slate-300 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm">linkedin.com/in/clement-chapard/</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.identity}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t.contact.namePlaceholder}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 font-mono transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.address}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 font-mono transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-slate-500">{t.contact.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 font-mono transition-all resize-none"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-mono mt-2"
                  size="lg"
                >
                  <Send className={`w-4 h-4 mr-2 ${isSubmitting ? 'animate-bounce' : ''}`} />
                  {isSubmitting ? t.contact.sending : t.contact.transmit}
                </Button>

                {statusMessage && (
                  <div className={`mt-4 p-3 border rounded-md font-mono text-sm text-center ${statusMessage === t.contact.success ? 'border-accent text-accent bg-accent/10' : 'border-primary text-primary bg-primary/10'}`}>
                    {statusMessage}
                  </div>
                )}
              </form>
            </motion.div>

          </div>

          {/* Status Indicator */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase">{t.contact.listening}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
