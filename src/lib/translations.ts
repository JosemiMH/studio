
import { data } from '@/lib/data';
import type { Language } from '@/lib/data';

const es = {
 
};

const en = {

};

export const translations = { es, en };

export type AllTranslations = typeof translations;

type NestedKey<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${'' extends NestedKey<T[K]> ? '' : '.'}${NestedKey<T[K]>}`;
    }[keyof T]
  : '';
  
export type TranslationKeys = NestedKey<typeof es>;
