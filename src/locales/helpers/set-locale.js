import i18n from '@/i18n';
import GetLocale from './get-locale';

const SetLocale = {
  set currentLocale(locale) {
    i18n.global.locale.value = locale;
  },
    
  set htmlDocAndLocalStorageLocale(locale) {
    document.querySelector('html').setAttribute('lang', locale);
    localStorage.setItem('locale', locale);
  },

  async switchLanguage(locale) {
    await GetLocale.loadLocaleMessages(locale);
    this.currentLocale = locale;
    this.htmlDocAndLocalStorageLocale = locale;
  },
};

export default SetLocale;