import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import i18n from './i18n';
import router from './router/index';
import store from './store/index';

loadFonts();

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
