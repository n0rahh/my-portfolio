<template>
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
</template>

<script>
export default {
  data() {
    return {
      currentLang: 'EN',
      open: false,
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
