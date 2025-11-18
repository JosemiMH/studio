
"use client";

import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { translations, TranslationKeys, AllTranslations } from '@/lib/translations';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKeys) => string;
  translations: AllTranslations['en' | 'es'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && ['en', 'es'].includes(storedLanguage)) {
      setLanguageState(storedLanguage);
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      setLanguageState(browserLanguage === 'es' ? 'es' : 'en');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };
  
  const t = useMemo(() => (key: TranslationKeys) => {
    const keys = key.split('.') as (keyof AllTranslations['es'])[];
    let result: any = translations[language];
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Return key if not found
      }
    }
    return result as string;
  }, [language]);

  const currentTranslations = useMemo(() => translations[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
