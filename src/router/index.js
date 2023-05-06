import { createRouter, createWebHistory, RouterView } from 'vue-router';
import GetLocale from '@/locales/helpers/get-locale';

import Home from '../views/Home.vue';
import Project from '../views/Project.vue';
import i18n from '@/i18n';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:lang',
      component: RouterView,
      children: [
        { 
          path: '',
          name: 'Home',
          component: Home,
        },
        { 
          path: 'project',
          name: 'Project',
          component: Project,
        },
      ],
    },
  ],
});

router.beforeEach((to, _from, next) => {
  const paramLocale = to.params.lang;

  if(!GetLocale.isLocaleSupported(paramLocale)) {
    return next(GetLocale.guessDefaultLocale());
  }

  i18n.global.locale.value = paramLocale;
  next();
});
export default router;