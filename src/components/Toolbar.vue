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
          >
           {{ item }}
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

export default {
  name: 'Toolbar',
  components: {
    ThemeToggle,
    LangSwitch,
  },
  data() {
    return {
      navigationList: [
        this.$t('TOOLBAR.NAVIGATION.MAIN_PAGE'),
        this.$t('TOOLBAR.NAVIGATION.PROJECT'),
        this.$t('TOOLBAR.NAVIGATION.SKILLS'),
        this.$t('TOOLBAR.NAVIGATION.ABOUT'),
        this.$t('TOOLBAR.NAVIGATION.CONTACT'),
      ],
    };
  },
};
</script>
