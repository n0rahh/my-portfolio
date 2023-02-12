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
          <div class="options-lang ml-4 d-flex align-center">
            <v-menu 
              v-model="open"
              offset-y
            >
              <template v-slot:activator="{ props }">
                <div
                  v-bind="props"
                  class="lang-btn"
                >
                {{ currentLang }} {{ open ? '▴' : '▾' }}
                </div>
              </template>
              <v-list class="pa-0 mt-2">
                <v-list-item
                  v-for="(lang, i) in langs"
                  :key="`l${i}`"
                  @click="changeLang(lang)"
                >
                  {{ lang }}
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-container>
  </v-app-bar>
</template>

<script>
import ThemeToggle from './toolbar/ThemeToggle.vue';

export default {
  name: 'Toolbar',
  components: {
    ThemeToggle,
  },
  data() {
    return {
      currentLang: 'EN',
      open: false,
      navigationList: [
        this.$t('TOOLBAR.NAVIGATION.MAIN_PAGE'),
        this.$t('TOOLBAR.NAVIGATION.PROJECT'),
        this.$t('TOOLBAR.NAVIGATION.SKILLS'),
        this.$t('TOOLBAR.NAVIGATION.ABOUT'),
        this.$t('TOOLBAR.NAVIGATION.CONTACT'),
      ],
      langs: [
        this.$t('TOOLBAR.LANG.LONG_LANGS.ENG'),
        this.$t('TOOLBAR.LANG.LONG_LANGS.POL'),
        this.$t('TOOLBAR.LANG.LONG_LANGS.UKR'),
      ],
    };
  },
  methods: {
    changeLang(lang) {
      switch(lang) {
      case 'English':
        this.currentLang = this.$t('TOOLBAR.LANG.SHORT_LANGS.ENG');
        break;
      case 'Polski':
        this.currentLang = this.$t('TOOLBAR.LANG.SHORT_LANGS.POL');
        break;
      case 'Українська':
        this.currentLang = this.$t('TOOLBAR.LANG.SHORT_LANGS.UKR');
        break;
      default:
        this.currentLang = this.$t('TOOLBAR.LANG.SHORT_LANGS.ENG');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-btn {
  cursor: pointer;
}
</style>
