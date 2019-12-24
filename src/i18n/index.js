import i18n from 'i18next';
import en from './locales/en';
import ru from './locales/ru';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { SUPPORTED_LOCALES } from './constants';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    whitelist: SUPPORTED_LOCALES,
    nonExplicitWhitelist: true,
    debug: true,
    resources: {
      en: { translation: en },
      ru : { translation: ru }
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    }
  });

export const getLocale = () => {
  const locale = i18n.language.split('-')[0].split('_')[0];
  return SUPPORTED_LOCALES.includes(locale) ? locale : 'en';
};

if(i18n.language.includes('-')) {
  i18n.changeLanguage(getLocale());
}

export default i18n;
