import 'server-only';
import { translations, AllTranslations } from './translations';
import { Language } from './data';

export const getTranslations = (): AllTranslations['es'] => {
  // The language is now managed on the client side, so we default to Spanish on the server.
  const lang: Language = 'es';
  return translations[lang];
};
