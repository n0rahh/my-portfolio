import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store/index';
import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.use(store);
app.use(vuetify);
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine);
  },
});

app.mount('#app');
