import GetLocale from './get-locale';

const RouteLocale = {
  i18nRoute(to) {
    return {
      ...to,
      params: {
        lang: GetLocale.currentLocale,
        ...to.params,
      },
    };
  },
};

export default RouteLocale;