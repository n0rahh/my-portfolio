import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Skills from '../views/Skills.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      name: 'Home',
      component: Home,
    },
    { 
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    { 
      path: '/skills',
      name: 'Skills',
      component: Skills,
    },
    { 
      path: '/about',
      name: 'About',
      component: About,
    },
    { 
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
export default router;