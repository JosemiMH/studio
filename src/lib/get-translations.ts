import 'server-only';
import { cookies } from 'next/headers';
import { translations, AllTranslations } from './translations';
import { Language } from './data';

export const getTranslations = (): AllTranslations['es'] => {
  const langCookie = cookies().get('language');
  const lang: Language = langCookie?.value === 'en' ? 'en' : 'es';
  // Fallback to Spanish if translations for the selected language are not available
  return translations[lang] || translations['es'];
};
