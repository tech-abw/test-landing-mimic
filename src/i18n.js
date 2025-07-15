import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(initReactI18next)
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      }
    },
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['path', 'navigator'],
      load: 'languageOnly', // This will strip the region code (e.g., en-US -> en)
    },
    react: {
      useSuspense: true, // Asegura que las traducciones se carguen antes de renderizar
    },
  });

export default i18n;
