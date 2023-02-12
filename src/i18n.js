import { createI18n } from 'vue-i18n';
import pl from './locales/pl.json';
import en from './locales/en.json';
import ua from './locales/ua.json';

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { pl, en, ua },
});
