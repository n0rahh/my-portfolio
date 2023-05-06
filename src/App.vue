<template>
  <v-app
    theme="dark"
    class="app"
  >
    <toolbar />
    <social />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import Social from './components/Social.vue';
import SetLocale from '@/locales/helpers/set-locale';

export default {
  name: 'App',
  components: {
    Toolbar,
    Social,
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
  background-color: #0a0c24;
}
</style>
