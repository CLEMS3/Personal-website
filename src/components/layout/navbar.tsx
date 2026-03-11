"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Shield, Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border/50 shadow-md" : "bg-transparent py-2"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo section */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Shield className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
          <span className="font-mono font-bold text-xl tracking-tighter neon-text group-hover:neon-text-accent transition-all">
            clement<span className="text-muted-foreground opacity-50">.chapard</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors hover:glow"
            >
              <span className="text-primary/50 mr-1 font-mono text-xs">{"//"}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Language */}
        <div className="hidden md:flex items-center space-x-2">
          <Button 
            variant="ghost" 
            className="font-mono px-3 text-slate-300 hover:text-primary transition-colors"
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
          >
            {language === 'en' ? 'FR' : 'EN'}
          </Button>
          <Button variant="outline" className="font-mono">
            <Terminal className="w-4 h-4 mr-2" />
            {t.nav.connect}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 w-full border-t border-white/10 p-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 p-2 rounded-md hover:bg-primary/20 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="neon" className="w-full font-mono mt-4">
              <Terminal className="w-4 h-4 mr-2" />
              {t.nav.connect}
            </Button>
            <Button 
              variant="ghost" 
              className="w-full font-mono mt-2 border border-slate-700 hover:bg-slate-800"
              onClick={() => {
                setLanguage(language === 'en' ? 'fr' : 'en');
                setMobileMenuOpen(false);
              }}
            >
              Switch Language: {language === 'en' ? 'Français' : 'English'}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
