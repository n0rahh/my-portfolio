import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Portfolio | Vlad Herasymovych' },
    },
    {
      path: '/project/:id',
      name: 'Project',
      // Lazy-loaded: keeps the landing page bundle smaller.
      component: () => import('../views/Project.vue'),
      meta: { title: 'Project | Vlad Herasymovych' },
    },
    {
      path: '/policy',
      name: 'Policy',
      component: () => import('../views/Policy.vue'),
      meta: { title: 'Privacy Policy | Vlad Herasymovych' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
});

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title;
});

export default router;
