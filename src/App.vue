<template>
  <v-app
    theme="dark"
    class="app"
  >
    <toolbar />
    <social v-if="$vuetify.display.lgAndUp" />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import Social from './components/Social.vue';
import SetLocale from '@/locales/helpers/set-locale';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    Social,
    Footer,
  },
  created() {
    const currentLocale = localStorage.getItem('locale');
    if(currentLocale) {
      SetLocale.htmlDocAndLocalStorageLocale = currentLocale;
    }
  },
};
</script>

<style lang="scss">
@import '@/styles/global';

.app {
  background-color: $primary;
}
</style>
