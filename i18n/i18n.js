// i18n.js
import I18n from 'i18n-js';
import en from './locales/en';
import es from './locales/es';


I18n.fallbacks = true;

I18n.translations = {
  en,
  es,
};

export default I18n;