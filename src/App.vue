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

export default {
  components: {
    Toolbar,
  },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
