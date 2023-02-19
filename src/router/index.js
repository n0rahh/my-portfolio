import { createRouter, createWebHistory, RouterView } from 'vue-router';
import GetLocale from '@/locales/helpers/get-locale';

import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Skills from '../views/Skills.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
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
          path: 'projects',
          name: 'Projects',
          component: Projects,
        },
        { 
          path: 'skills',
          name: 'Skills',
          component: Skills,
        },
        { 
          path: 'about',
          name: 'About',
          component: About,
        },
        { 
          path: 'contact',
          name: 'Contact',
          component: Contact,
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