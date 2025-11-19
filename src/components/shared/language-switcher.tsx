
"use client";

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { useCallback } from 'react';

const SpainFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className={className}>
    <rect width="5" height="3" fill="#C60B1E"/>
    <rect width="5" height="2" y="0.5" fill="#FFC400"/>
    <rect width="5" height="1" y="1" fill="#C60B1E"/>
  </svg>
);

const UKFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={className}>
    <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
    <path d="M0 0v30h60V0z" fill="#00247d"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" clipPath="url(#a)"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#cf142b" strokeWidth="4" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#cf142b" strokeWidth="6" clipPath="url(#a)"/>
  </svg>
);

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleSetLanguage = useCallback((lang: 'es' | 'en') => {
    setLanguage(lang);
  }, [setLanguage]);

  const flagClassName = "w-5 h-auto rounded-sm object-cover";

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={language === 'es' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => handleSetLanguage('es')}
        className="px-2"
        aria-label="Switch to Spanish"
      >
        <SpainFlag className={flagClassName} />
        <span className="ml-2 hidden sm:inline">ES</span>
      </Button>
      <Button
        variant={language === 'en' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => handleSetLanguage('en')}
        className="px-2"
        aria-label="Switch to English"
      >
        <UKFlag className={flagClassName} />
        <span className="ml-2 hidden sm:inline">EN</span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
