<template>
  <v-app-bar
    flat
    class="toolbar"
  >
    <v-container class="d-flex">
      <div class="logo">
        <div class="logo_rectangle" />
      </div>
      
      <v-spacer />
      <div class="buttons">
        <v-btn 
          v-for="(item, i) in navigationList" 
          :key="i"
          variant="text"
          color="white"
          class="p2"
          @click="scrollToSection(item.id)"
        >
          {{ item.title }}
        </v-btn>
      </div>
      <v-spacer />
      <div class="options d-flex">
        <lang-switch />
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import LangSwitch from './toolbar/LangSwitch.vue';
// import RouteLocale from '@/locales/helpers/route-locale';

export default {
  name: 'Toolbar',
  components: {
    LangSwitch,
  },
  computed: {
    navigationList() {
      return [
        {
          title: this.$t('TOOLBAR.NAVIGATION.MAIN_PAGE'),
          name: 'Home',
          id: 'banner',
        },
        {
          title: this.$t('TOOLBAR.NAVIGATION.ABOUT'),
          name: 'About',
          id: 'about',
        },
        {
          title: this.$t('TOOLBAR.NAVIGATION.PROJECT'),
          name: 'Projects',
          id: 'projects',
        },
        {
          title: this.$t('TOOLBAR.NAVIGATION.SKILLS'),
          name: 'Skills',
          id: 'skills',
        },
        {
          title: this.$t('TOOLBAR.NAVIGATION.CONTACT'),
          name: 'Contact',
          id: 'contact',
        },
      ];
    },
  },
  methods: {
    // routeParam(routeName) {
    //   return RouteLocale.i18nRoute({
    //     name: routeName,
    //   });
    // },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/colors.scss';

.toolbar {
  background-color: $primary !important;
  opacity: 0.9;
}

.logo {
  position: relative;
  &_rectangle {
    position: absolute;
    height: 26px;
    width: 43px;
    top: 50%;
    left: -20px;
    background-color: $white;
    transform: translateY(-50%);
    border-radius: 3px;
    &:before {
      content: ">";
      display: block;
      position: absolute;
      color: $black;
      top: -50%;
      transform: translateY(10%);
      left: 15%;
      font-weight: 700;
      font-size: 27px;
    }
    &:after {
      content: "_";
      display: block;
      position: absolute;
      color: $black;
      bottom: -5%;
      right: 10%;
      font-weight: 700;
      font-size: 30px;
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
