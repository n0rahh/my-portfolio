<template>
  <v-app theme="dark">
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
  components: {
    Toolbar,
    Social,
  },
  name: 'App',
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

</style>
