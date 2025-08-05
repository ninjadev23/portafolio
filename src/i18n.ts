import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from "../public/locales/es.json"
import en from "../public/locales/en.json"
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    lng: 'es', // idioma por defecto
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
  });

export default i18n;