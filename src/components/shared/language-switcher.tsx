
"use client";

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const SpainFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-5 h-auto">
      <rect width="5" height="3" fill="#C60B1E"/>
      <rect width="5" height="2" y="0.5" fill="#FFC400"/>
      <rect width="5" height="1" y="1" fill="#C60B1E"/>
    </svg>
  );

  const UKFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-auto">
      <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
      <path d="M0 0v30h60V0z" fill="#00247d"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" clipPath="url(#a)"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#cf142b" strokeWidth="4" clipPath="url(#a)"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" clipPath="url(#a)"/>
      <path d="M30 0v30M0 15h60" stroke="#cf142b" strokeWidth="6" clipPath="url(#a)"/>
    </svg>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {language === 'es' ? <SpainFlag /> : <UKFlag />}
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('es')} className="flex items-center gap-2 cursor-pointer">
          <SpainFlag />
          <span>Español</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('en')} className="flex items-center gap-2 cursor-pointer">
          <UKFlag />
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
