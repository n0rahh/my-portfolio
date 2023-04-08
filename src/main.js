import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import router from './router/index';
import store from './store/index';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
