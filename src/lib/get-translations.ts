import 'server-only';
import { cookies } from 'next/headers';
import { translations, AllTranslations } from './translations';
import { Language } from './data';

export const getTranslations = async (): Promise<AllTranslations['es']> => {
  const langCookie = cookies().get('language');
  const lang: Language = langCookie?.value === 'en' ? 'en' : 'es';
  return translations[lang];
};
