"use client";

import React, { createContext, useContext } from 'react';
import { AllTranslations } from '@/lib/translations';

type Translations = AllTranslations['es'];

const TranslationsContext = createContext<Translations | undefined>(undefined);

export const TranslationsProvider: React.FC<{ children: React.ReactNode, translations: Translations }> = ({ children, translations }) => {
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
};

export const useTranslations = () => {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }
  return context;
};
