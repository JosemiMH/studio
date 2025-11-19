import 'server-only';
import { headers } from 'next/headers';
import { translations, AllTranslations } from './translations';
import { Language } from './data';

export const getServerLanguage = (): Language => {
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language');

  if (acceptLanguage) {
    const browserLanguage = acceptLanguage.split(',')[0].split('-')[0];
    if (browserLanguage === 'es') {
      return 'es';
    }
  }

  return 'en';
};

export const getTranslations = (): AllTranslations['es'] => {
  const lang = getServerLanguage();
  return translations[lang] || translations['es'];
};
