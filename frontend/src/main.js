import { createApp } from 'vue';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import { reveal } from './directives/reveal';

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.directive('reveal', reveal);

app.mount('#app');
