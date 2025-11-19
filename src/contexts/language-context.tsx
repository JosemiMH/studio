
"use client";

import React, { createContext, useState, useContext, useEffect, startTransition } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie, getCookie } from 'cookies-next';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es'); 
  const router = useRouter();

  useEffect(() => {
    const storedLanguage = getCookie('language') as Language;
    if (storedLanguage && ['en', 'es'].includes(storedLanguage)) {
      setLanguageState(storedLanguage);
    } else {
      // Only access navigator on the client side
      if (typeof window !== 'undefined') {
        const browserLanguage = navigator.language.split('-')[0];
        const lang = browserLanguage === 'es' ? 'es' : 'en';
        setLanguageState(lang);
        setCookie('language', lang, { path: '/' });
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setCookie('language', lang, { path: '/' });
    startTransition(() => {
        router.refresh();
    });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
