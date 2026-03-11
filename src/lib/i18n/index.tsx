"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './en';
import { fr } from './fr';

export type Language = 'en' | 'fr';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguage(saved);
    } else {
      const browserLang = navigator.language;
      if (browserLang.startsWith('fr')) {
        setLanguage('fr');
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = language === 'en' ? en : fr;

  // Render children immediately, but translation defaults to EN until hydration to avoid layout shift issues, or just use the default.
  // Actually, to avoid hydration errors in App Router with different textual content, we need to return null or loading until mounted 
  // if you want perfect server-side rendering. However, because we only wrap the app, we can just return children and accept a brief flash.
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return a default mock to prevent Next.js SSR build errors when used outside of provider temporarily
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: en
    };
  }
  return context;
}
