
"use client";

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

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

  const flagClassName = "w-5 h-5 rounded-full object-cover";

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={language === 'es' ? 'secondary' : 'ghost'}
        size="icon"
        onClick={() => setLanguage('es')}
        className={cn('transition-all', language === 'es' ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : '')}
      >
        <SpainFlag className={flagClassName} />
        <span className="sr-only">Español</span>
      </Button>
      <Button
        variant={language === 'en' ? 'secondary' : 'ghost'}
        size="icon"
        onClick={() => setLanguage('en')}
        className={cn('transition-all', language === 'en' ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : '')}
      >
        <UKFlag className={flagClassName} />
        <span className="sr-only">English</span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
