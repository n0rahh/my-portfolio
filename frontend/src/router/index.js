import { createRouter, createWebHistory, RouterView } from 'vue-router';

import Home from '../views/Home.vue';
import Project from '../views/Project.vue';
import Policy from '../views/Policy.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/project/:id',
      name: 'Project',
      component: Project,
    },
    {
      path: '/policy',
      name: 'Policy',
      component: Policy,
    },
  ],
});

export default router;
