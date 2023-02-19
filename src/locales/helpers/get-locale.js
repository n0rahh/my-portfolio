import i18n from '@/i18n';
import { nextTick } from 'vue';
import SetLocale from './set-locale';

const GetLocale = {
  get supportedLocales() {
    return process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',');
  },
  
  get currentLocale() {
    return i18n.global.locale.value;
  },

  async loadLocaleMessages(locale) {
    if(!i18n.global.availableLocales.includes(locale)) {
      const message = await import(`@/locales/${locale}.json`);
      i18n.global.setLocaleMessage(locale, message.default);
    }

    return nextTick();
  },

  isLocaleSupported(locale) {
    return this.supportedLocales.includes(locale);
  },

  getUserLocale() {
    const locale = window.navigator.language || window.navigator.userLanguage || process.env.VUE_APP_I18N_LOCALE;
    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0],
    };
  },

  getPersistedLocale() {
    const persistedLocale = localStorage.getItem('locale');
    if(this.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },

  guessDefaultLocale() {
    const userPersistedLocale = this.getPersistedLocale();

    if(userPersistedLocale) {
      SetLocale.htmlDocAndLocalStorageLocale = userPersistedLocale;
      return userPersistedLocale;
    }

    const userPrefferedLocale = this.getUserLocale();

    if(this.isLocaleSupported(userPrefferedLocale.locale)) {
      SetLocale.htmlDocAndLocalStorageLocale = userPrefferedLocale.locale;
      return userPrefferedLocale.locale;
    }

    if(this.isLocaleSupported(userPrefferedLocale.localeNoRegion)) {
      SetLocale.htmlDocAndLocalStorageLocale = userPrefferedLocale.localeNoRegion;
      return userPrefferedLocale.localeNoRegion;
    }

    return process.env.VUE_APP_I18N_LOCALE;
  },
};

export default GetLocale;