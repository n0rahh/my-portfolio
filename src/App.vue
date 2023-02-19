<template>
  <v-app theme="dark">
    <v-main>
      <toolbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import SetLocale from '@/locales/helpers/set-locale';

export default {
  components: {
    Toolbar,
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
