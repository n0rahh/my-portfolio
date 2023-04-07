<template>
  <v-app-bar>
    <v-container class="d-flex">
      <v-img
        src="../assets/temp-logo.svg"
        max-height="30"
        max-width="60"
      />
      <v-spacer />
      <div class="buttons">
        <v-btn 
          v-for="(item, i) in navigationList" 
          :key="i"
          :to="routeParam(item.name)"
          :active="false"
          variant="plain"
        >
          {{ item.title }}
        </v-btn>
      </div>
      <v-spacer />
      <div class="options d-flex">
        <theme-toggle />
        <lang-switch />
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import ThemeToggle from './toolbar/ThemeToggle.vue';
import LangSwitch from './toolbar/LangSwitch.vue';
import RouteLocale from '@/locales/helpers/route-locale';

export default {
  name: 'Toolbar',
  components: {
    ThemeToggle,
    LangSwitch,
  },
  computed: {
    navigationList() {
      return [
        {
          title: this.$t('TOOLBAR.NAVIGATION.MAIN_PAGE'),
          name: 'Home',
        },
        {
          title: this.$t('TOOLBAR.NAVIGATION.PROJECT'),
          name: 'Projects',
        },
        {
          title: this.$t('TOOLBAR.NAVIGATION.SKILLS'),
          name: 'Skills',
        },
        {
          title: this.$t('TOOLBAR.NAVIGATION.CONTACT'),
          name: 'Contact',
        },
        {
          title: this.$t('TOOLBAR.NAVIGATION.ABOUT'),
          name: 'About',
        },
      ];
    },
  },
  methods: {
    routeParam(routeName) {
      return RouteLocale.i18nRoute({
        name: routeName,
      });
    },
  },
};
</script>
