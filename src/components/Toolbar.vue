<template>
  <v-app-bar
    flat
    class="toolbar"
  >
    <v-container
      v-if="routeName === 'Home'"
      class="d-flex justify-space-between"
      :class="{
        'px-6': $vuetify.display.lgAndDown && $vuetify.display.smAndUp,
      }"
    >
      <a
        href="/"
        class="logo"
      >
        <div class="logo_rectangle" />
      </a>
      <div
        v-if="$vuetify.display.mdAndUp"
        class="buttons"
      >
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
        <v-btn
          variant="text"
          color="white"
          class="p2"
          @click="openCV"
        >
          CV
        </v-btn>
      </div>
      <div class="options d-flex">
        <lang-switch />
      </div>
    </v-container>
    <v-container v-else>
      <v-btn
        variant="plain"
        color="white"
        class="p2 d-flex align-center"
        :to="routeParam('Home')"
        max-width="100"
      >
        <v-icon
          size="x-large"
          icon="mdi-arrow-left-thick"
          class="mr-4"
        />
        <span>{{ $t('TOOLBAR.NAVIGATION.BACK') }}</span>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import LangSwitch from './toolbar/LangSwitch.vue';
import RouteLocale from '@/locales/helpers/route-locale';

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
    routeName() {
      return this.$route.name;
    },
  },
  methods: {
    routeParam(routeName) {
      return RouteLocale.i18nRoute({
        name: routeName,
      });
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    openCV() {
      window.open('Vlad_Herasymovych_CV.pdf', '_blank');
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
  cursor: pointer;
  width: 43px;
  &_rectangle {
    position: absolute;
    height: 26px;
    width: 43px;
    top: 50%;
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
