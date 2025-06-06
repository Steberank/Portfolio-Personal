import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // IMPORTANTE

import translationES from './es.json';
import translationEN from './en.json';

i18n
  .use(LanguageDetector) // Agrega el detector
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    fallbackLng: 'es', // Idioma por defecto si no detecta o no está soportado
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
