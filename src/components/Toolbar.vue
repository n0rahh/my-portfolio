<template>
  <v-app-bar>
    <v-container class="d-flex">
      <div class="logo">
        <div class="logo_rectangle" />
        <span class="logo_text h4 w-900 ml-6">VHS</span>
      </div>
      
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

<style lang="scss">
@import '@/styles/colors.scss';

.logo {
  position: relative;
  &_rectangle {
    position: absolute;
    height: 21px;
    width: 35px;
    top: 50%;
    left: -20px;
    background-color: $white;
    transform: translateY(-50%);
    &:before {
      content: ">";
      display: block;
      position: absolute;
      color: $black;
      top: -50%;
      left: 10%;
      font-weight: 900;
      font-size: 27px;
    }
    &:after {
      content: "_";
      display: block;
      position: absolute;
      color: $black;
      top: -80%;
      right: 10%;
      font-weight: 900;
      font-size: 27px;
      animation: fade 2s infinite;
    }
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  20% {
     opacity: 0;
  }

  40% {
    opacity: 0;
  }

  60% {
    opacity: 1;
  }

  100% {
     opacity: 1;
  }
}
</style>
